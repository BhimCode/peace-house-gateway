import { Router } from "express";

const router = Router();

const businessFacts = [
  "Family Peace House is a peaceful family-run guesthouse in Thamel, Kathmandu.",
  "It offers rooms for solo travelers, couples, families, and shared-bathroom options.",
  "If pricing is unclear, guests should contact the property for current rates.",
  "The house is known for warm Nepali hospitality, courtyard breakfasts, and a calm atmosphere.",
  "For booking help, guests can call +977 1-4981138.",
];

function buildReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("price") || text.includes("rate") || text.includes("prize")) {
    return "Room prices can change, so the best option is to contact us for current rates. If you want, I can also help with room types and what each one includes.";
  }

  if (text.includes("room") || text.includes("rooms")) {
    return "We have rooms for solo travelers, couples, families, and shared-bathroom stays. If you tell me who is traveling, I can point you to the best option.";
  }

  if (text.includes("check in") || text.includes("check-in") || text.includes("check out") || text.includes("check-out")) {
    return "For check-in and check-out details, please contact us for the latest availability and timing. I can still help you with room guidance or booking questions.";
  }

  if (text.includes("booking") || text.includes("reserve") || text.includes("reservation")) {
    return "You can ask about availability here, and for final confirmation please contact us directly. I can help you choose the right room first.";
  }

  return "Thanks for asking. I can help with FAQs about the business, rooms, and current pricing. If you’re unsure about rates, please contact us for the latest price.";
}

router.post("/chatbot", async (req, res) => {
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const latest = messages.length ? String(messages[messages.length - 1]?.content ?? "") : "";
  const reply = buildReply(latest);

  res.json({
    reply,
    facts: businessFacts,
  });
});

export default router;