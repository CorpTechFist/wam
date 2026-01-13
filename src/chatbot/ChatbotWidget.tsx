import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import {
  FALLBACK_MESSAGE,
  getChatbotResponse,
  getChatbotSafetyNotes,
} from "./chatbotEngine";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const createId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export function ChatbotWidget() {
  console.log("ChatbotWidget rendered (Hobby-safe)");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const safetyNotes = useMemo(() => getChatbotSafetyNotes(), []);

  const ensureWelcomeMessage = () => {
    setMessages((current) => {
      if (current.length > 0) {
        return current;
      }
      return [
        {
          id: createId(),
          role: "bot",
          text: FALLBACK_MESSAGE,
        },
      ];
    });
  };

  const toggleOpen = () => {
    setIsOpen((open) => {
      const next = !open;
      if (next) {
        ensureWelcomeMessage();
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      return next;
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (message: Message) => {
    setMessages((current) => [...current, message]);
    setTimeout(scrollToBottom, 0);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }

    addMessage({ id: createId(), role: "user", text: trimmed });
    setInputValue("");

    const response = getChatbotResponse(trimmed);
    const parts = [response.text];

    if (response.includeDisclaimer) {
      parts.push(safetyNotes.disclaimer);
    }

    if (response.includeCrisisGuidance) {
      parts.push(safetyNotes.crisisGuidance);
    }

    addMessage({
      id: createId(),
      role: "bot",
      text: parts.join("\n\n"),
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "64px",
    height: "64px",
    zIndex: 100000,
  };

  const panelStyle: React.CSSProperties = {
    position: "fixed",
    right: "20px",
    bottom: "96px",
    width: "320px",
    height: "512px",
    zIndex: 100000,
  };

  return createPortal(
    <>
      <button
        type="button"
        onClick={toggleOpen}
        className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white shadow-2xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        style={buttonStyle}
      >
        {isOpen ? (
          <span className="text-2xl leading-none">X</span>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className="h-9 w-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.5 18.5l-3.5 2v-4.5A7.5 7.5 0 0112 4.5h4a7.5 7.5 0 010 15h-2.5" />
              <path d="M9.25 10.75c1.1-1.2 3.4-1.2 4.5 0" />
              <path d="M10.1 13.1c.7.8 1.9.8 2.6 0" />
              <path d="M12 17.5c-1.1-1-2.7-.9-3.7.2-.9 1 0 2.6 1.6 2.6 1.1 0 1.9-.7 2.1-1.6.2.9 1 1.6 2.1 1.6 1.6 0 2.5-1.6 1.6-2.6-1-1.1-2.6-1.2-3.7-.2z" />
            </svg>
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[20rem] flex-col overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-2xl md:h-[34rem] md:w-[22rem]"
          role="dialog"
          aria-label="WAM Alliance chat assistant"
          style={panelStyle}
        >
          <div className="flex items-center justify-between border-b border-purple-100 bg-purple-50 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-purple-800">
                WAM Alliance Support
              </p>
              <p className="text-xs text-purple-600">
                Community resources and guidance
              </p>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              className="rounded-full px-2 py-1 text-purple-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Close chat"
            >
              X
            </button>
          </div>

          <div
            className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm"
            role="log"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed ${
                    message.role === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-900"
                  }`}
                >
                  {message.text.split("\n\n").map((paragraph, index) => (
                    <p key={`${message.id}-${index}`} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-purple-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about programs, support, or resources"
                className="flex-1 rounded-full border border-purple-200 px-4 py-2 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                aria-label="Type your message"
              />
              <button
                type="button"
                onClick={handleSend}
                className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
