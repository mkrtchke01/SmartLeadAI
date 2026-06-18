import { Bot } from "lucide-react";

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="SmartLead AI home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
        <Bot className="h-5 w-5" />
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        SmartLead<span className="text-gradient"> AI</span>
      </span>
    </a>
  );
}
