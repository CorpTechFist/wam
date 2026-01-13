// CHANGED: only import faqData to match current data exports.
import { faqData } from "../utils/wamChatbotData";

export const FALLBACK_MESSAGE =
  "Thank you for reaching out to WAM Alliance. I can help with information about our programs, support services, volunteering, or donations.";

const CRISIS_KEYWORDS = ["crisis", "emergency", "danger"];

// CHANGED: local safety notes to keep behavior without missing exports.
const chatbotSafetyNotes = {
  disclaimer:
    "This chatbot provides educational information and community resources only. It does not provide medical, legal, or emergency advice.",
  crisisGuidance:
    "If you are in immediate danger or experiencing a crisis, please contact local emergency services or a trusted professional immediately.",
};

const normalizeInput = (input: string) =>
  input.toLowerCase().trim().replace(/\s+/g, " ");

// CHANGED: normalize once (lowercase + punctuation removal) for matching.
const normalizeText = (text: string) =>
  text.toLowerCase().replace(/[^\w\s]/g, "").trim();

// CHANGED: tokenize normalized text for overlap checks.
const tokenize = (text: string) =>
  normalizeText(text).split(/\s+/).filter(Boolean);

// CHANGED: token overlap + partial token match without double-normalizing input.
const hasKeywordMatch = (input: string, keywords: string[]) => {
  const inputTokens = tokenize(input);

  return keywords.some((keyword) => {
    const keywordTokens = tokenize(keyword);

    return keywordTokens.some((kt) =>
      inputTokens.some((it) => it.includes(kt) || kt.includes(it)),
    );
  });
};

export interface ChatbotResponse {
  text: string;
  includeDisclaimer: boolean;
  includeCrisisGuidance: boolean;
}

export const getChatbotResponse = (message: string): ChatbotResponse => {
  // CHANGED: normalize only for empty/crisis checks; pass raw input to matcher.
  const normalized = normalizeText(message);
  const includeCrisisGuidance = hasKeywordMatch(message, CRISIS_KEYWORDS);

  if (!normalized) {
    return {
      text: FALLBACK_MESSAGE,
      includeDisclaimer: false,
      includeCrisisGuidance,
    };
  }

  const faqMatch = faqData.find((faq) =>
    hasKeywordMatch(message, faq.keywords),
  );

  if (faqMatch) {
    const includeDisclaimer = faqMatch.keywords.some((keyword) =>
      ["medical", "legal"].includes(keyword),
    );
    return {
      text: faqMatch.answer,
      includeDisclaimer,
      includeCrisisGuidance,
    };
  }

  return {
    text: FALLBACK_MESSAGE,
    includeDisclaimer: false,
    includeCrisisGuidance,
  };
};

export const getChatbotSafetyNotes = () => chatbotSafetyNotes;
