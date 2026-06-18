import { Bot } from "lucide-react";
import type { ChatMessage } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  subtitle?: string;
  messages: ChatMessage[];
  /** Show a typing indicator after the last message. */
  typing?: boolean;
  className?: string;
};

export default function ChatWindow({
  title = "SmartLead AI",
  subtitle = "Online · Replies instantly",
  messages,
  typing = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-brand-gradient px-5 py-4 text-white">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur">
          <Bot className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{title}</p>
          <p className="flex items-center gap-1.5 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-brand-green ring-2 ring-white/30" />
            {subtitle}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 bg-slate-50 px-4 py-5">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex",
              msg.from === "user" ? "justify-end" : "justify-start",
            )}
          >
            <p
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
                msg.from === "user"
                  ? "rounded-br-md bg-brand-blue text-white"
                  : "rounded-bl-md border border-slate-100 bg-white text-slate-700",
              )}
            >
              {msg.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <span className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <Dot delay="0s" />
              <Dot delay="0.2s" />
              <Dot delay="0.4s" />
            </span>
          </div>
        )}
      </div>

      {/* Input (visual only) */}
      <div className="flex items-center gap-2 border-t border-slate-100 bg-white px-4 py-3">
        <span className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-400">
          Type your message…
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="h-2 w-2 animate-bounce-dot rounded-full bg-slate-400"
      style={{ animationDelay: delay }}
    />
  );
}
