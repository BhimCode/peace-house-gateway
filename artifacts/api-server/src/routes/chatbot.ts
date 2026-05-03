import { Router } from "express";

const router = Router();

const businessFacts = [
  "Family Peace House is a peaceful family-run guesthouse in Thamel, Kathmandu.",
  "It offers rooms for solo travelers, couples, families, and shared-bathroom options.",
  "It is located in Thamel, Kathmandu, Nepal.",
  "If pricing is unclear, guests should contact the property for current rates.",
  "The house is known for warm Nepali hospitality, courtyard breakfasts, and a calm atmosphere.",
  "For booking help, guests can call +977 1-4981138.",
];

function hasAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term));
}

function buildReply(message: string): string {
  const text = message.toLowerCase().trim();

  if (hasAny(text, ["price", "rates", "rate", "price list", "cost", "prize", "pricing"])) {
    return "Room prices can change, so the best option is to contact us for current rates. If you want, I can also help with room types and what each one includes.";
  }

  if (hasAny(text, ["room", "rooms", "single", "double", "triple", "family room", "shared bathroom", "private bathroom"])) {
    return "We have rooms for solo travelers, couples, families, and shared-bathroom stays. If you tell me who is traveling, I can point you to the best option.";
  }

  if (hasAny(text, ["check in", "check-in", "check out", "check-out", "arrival", "departure", "early check in", "late check out"])) {
    return "For check-in and check-out details, please contact us for the latest availability and timing. I can still help you with room guidance or booking questions.";
  }

  if (hasAny(text, ["booking", "book", "reserve", "reservation", "availability", "available"])) {
    return "You can ask about availability here, and for final confirmation please contact us directly. I can help you choose the right room first.";
  }

  if (hasAny(text, ["where", "located", "location", "address", "how far", "near", "nearby"])) {
    return "We’re located in Thamel, Kathmandu, Nepal. If you need the exact address or help finding us, please contact us and we’ll guide you.";
  }

  if (hasAny(text, ["who are you", "what are you", "hello", "hi", "hey"])) {
    return "I’m AI Assistant for Family Peace House. I can help with questions about the business, rooms, and current pricing.";
  }

  return "I’m AI Assistant for Family Peace House. I can help with the business, room types, prices, location, check-in details, and availability. If you want current rates, please contact us for the latest price.";
}

router.post("/chatbot", async (req, res) => {
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const latest = messages.length ? String(messages[messages.length - 1]?.content ?? "") : "";
  const context = messages
    .slice(-8)
    .map((entry: unknown) => {
      if (!entry || typeof entry !== "object") return "";
      const item = entry as { role?: unknown; content?: unknown };
      return `${String(item.role ?? "user")}: ${String(item.content ?? "")}`;
    })
    .join("\n");
  const reply = buildReply(`${latest}\n${context}`);

  res.json({
    reply,
    facts: businessFacts,
  });
});

export default router;