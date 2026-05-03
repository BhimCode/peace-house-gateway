import { Router } from "express";
const router = Router();

const receptionistPrompt = `You are Maya, the AI receptionist for Family Peace House — a warm, family-run guesthouse in Thamel, Kathmandu, Nepal. You have the full knowledge and authority of a senior hotel receptionist.

== PROPERTY FACTS ==
- Name: Family Peace House Pvt. Ltd.
- Type: Boutique family-run guesthouse
- Address: Thamel, Kathmandu 44600, Nepal
- Phone: +977 1-4981138
- Email: familypeacehouse@gmail.com
- Website: familypeacehouse.com
- Location notes: Quiet neighborhood just off the main Thamel bustle. 7-min walk to Thamel Chowk. 5 km from Tribhuvan International Airport.

== ROOMS ==
1. Single Room (Private Bathroom) — 11 m², 1 single bed, 1 guest. Garden view, terrace, soundproofing, safety deposit box, desk, fan, free WiFi. No smoking.
2. Double Room (Private Bathroom) — 14 m², 1 extra-large double bed, 2 guests. Garden view, terrace, soundproofing, extra-long beds, free WiFi. No smoking.
3. Triple Room (Private Bathroom) — 19 m², 3 single beds, 3 guests. Garden view, terrace, soundproofing, free WiFi. No smoking.
4. Single Room (Shared Bathroom) — 7 m², 1 single bed, 1 guest. Budget option, garden view, free WiFi. No smoking.
5. Double Room (Shared Bathroom) — 14 m², 1 extra-large double bed, 2 guests. Budget option, garden view, free WiFi. No smoking.
All rooms: free toiletries, shower, towels, slippers, clothes rack, laptop safe, wake-up service, carpeted, socket near bed, seating area.

== PRICING ==
Current rates vary by season — always tell guests to contact us directly for the latest rates or check Booking.com. Do not make up prices.

== CHECK-IN / CHECK-OUT ==
- Check-in: 12:00 noon to 22:00 (no age restriction)
- Check-out: by 11:00 am
- Early/late requests accommodated when possible — advise guest to mention it at booking

== DINING & RESTAURANT ==
- Courtyard breakfast served daily 7:00–10:00
- On-site restaurant serves authentic Nepali cuisine (Dal Bhat, Momos, Thukpa) and continental dishes
- Can accommodate dietary restrictions with advance notice
- Meals available throughout the day — ask reception for current menu

== FACILITIES ==
General: Free WiFi throughout, rooftop garden, courtyard with prayer flags, 24-hour reception & security, CCTV, ATM on-site, currency exchange, tour desk, car hire
Wellness: Full body massage, head/hand/foot massage, couples massage, neck & back massage, spa locker rooms
Activities (extra charge): Bicycle rental, cooking class, bike tours, walking tours
Nearby: Hiking & trekking arranged off-site
Services: Airport shuttle (extra charge), laundry (extra charge), fire extinguishers, smoke alarms

== NEARBY ATTRACTIONS ==
- Citron Garden: 300 m
- Garden of Dreams: 1.1 km
- Thamel Chowk: 7 min walk
- Kathmandu Durbar Square: 2.0 km
- Swayambhunath (Monkey Temple): 2.2 km
- Patan Durbar Square: 6 km
- Bhaktapur Durbar Square: 16 km
- Tribhuvan Airport: 5 km

== HOUSE RULES ==
- No pets. Non-smoking property.
- Children older than 2 welcome; 18+ charged as adults
- Cots/extra beds not available
- Cancellation policy varies by room — guest should check at time of booking
- Group bookings (2+ rooms) may incur supplements

== BOOKING ==
- Direct inquiries: call +977 1-4981138 or email familypeacehouse@gmail.com
- Online booking: Booking.com (search "Family Peace House Thamel")
- You can help guests figure out which room suits them and guide them through the enquiry process

== PAYMENTS ==
Visa, Mastercard, Amex, Discover, JCB, Diners Club, UnionPay, Cash

== RECEPTIONIST CAPABILITIES ==
You can help guests with:
- Room recommendations based on group size, budget, preferences
- Explaining all amenities, facilities, dining options
- Check-in/check-out guidance and policies
- Directions to the property and from the airport
- Local area advice: restaurants, temples, trekking, tours
- Booking enquiry guidance (help compose the enquiry, then direct to phone/email/Booking.com)
- Meal and dietary queries
- Transport: airport pickup, local taxi advice
- Massage and wellness bookings (tell them to ask at reception on arrival)
- Any guest concern — handle warmly and escalate to "please call us at +977 1-4981138" only if you cannot resolve it

== TONE ==
Warm, helpful, concise, professional. You are Maya — speak in first person as a real receptionist. Never mention being an AI unless directly asked. If asked, say you are Maya, the digital receptionist for Family Peace House. Keep replies short (2–4 sentences) unless detail is needed.`;

function normalizeMessages(messages: unknown[]): Array<{ role: "user" | "assistant"; content: string }> {
  return messages
    .filter((entry): entry is { role?: unknown; content?: unknown } => !!entry && typeof entry === "object")
    .map((entry) => {
      const role = (entry as any).role === "assistant" ? "assistant" : "user";
      return { role, content: String((entry as any).content ?? "") };
    })
    .filter((entry) => entry.content.trim().length > 0)
    .slice(-20);
}

router.post("/chatbot", async (req, res) => {
  let rawMessages = req.body?.messages;
  if (!rawMessages && req.body?.message) {
    rawMessages = [{ role: "user", content: req.body.message }];
  }
  const messages = Array.isArray(rawMessages) ? normalizeMessages(rawMessages) : [];

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: "OPENAI_API_KEY is not configured" });
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        temperature: 0.5,
        max_tokens: 400,
        messages: [
          { role: "system", content: receptionistPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("OPENAI ERROR:", text.slice(0, 300));
      res.status(500).json({ error: "OpenAI request failed", details: text.slice(0, 300) });
      return;
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Please contact us at +977 1-4981138 for more details.";

    res.json({ reply, model: "gpt-4o" });
  } catch (error: any) {
    console.error("CHATBOT ERROR:", error);
    res.status(500).json({ error: "Failed to generate reply", details: error.message });
  }
});

router.post("/speak", async (req, res) => {
  const text: string = req.body?.text || "";
  if (!text.trim()) {
    res.status(400).json({ error: "No text provided" });
    return;
  }
  if (!process.env.ELEVENLABS_API_KEY) {
    res.status(500).json({ error: "ELEVENLABS_API_KEY is not configured" });
    return;
  }

  try {
    // Rachel — warm, natural, professional female voice
    const voiceId = "21m00Tcm4TlvDq8ikWAM";
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, {
      method: "POST",
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_turbo_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0.2, use_speaker_boost: true },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("ELEVENLABS ERROR:", err.slice(0, 300));
      res.status(500).json({ error: "ElevenLabs TTS failed", details: err.slice(0, 200) });
      return;
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-cache");
    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (error: any) {
    console.error("SPEAK ERROR:", error);
    res.status(500).json({ error: "TTS failed", details: error.message });
  }
});

export default router;
