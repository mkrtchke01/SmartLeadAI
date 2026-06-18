import { Check, Sparkles, Star } from "lucide-react";
import ChatWindow from "@/components/ui/ChatWindow";
import { HERO_BADGES, HERO_CHAT } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36">
      {/* Background flourishes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-gradient-soft blur-3xl" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="absolute -left-20 top-56 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-purple" />
            AI chatbot built for small businesses
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turn website visitors into{" "}
            <span className="text-gradient">qualified leads</span>, 24/7
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            SmartLead AI answers customer questions instantly, qualifies every
            visitor, books appointments, and sends new leads straight to your
            inbox, Telegram, or CRM — so you never miss an opportunity again.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#pricing" className="btn-primary w-full sm:w-auto">
              Start Free Trial
            </a>
            <a href="#demo" className="btn-secondary w-full sm:w-auto">
              View Demo
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
            {HERO_BADGES.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-brand-green" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-slate-500">
              Loved by 1,200+ small businesses
            </span>
          </div>
        </div>

        {/* Chat mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-2xl" />
          <div className="animate-float">
            <ChatWindow
              title="Brightsmile Dental"
              subtitle="Online · Replies instantly"
              messages={HERO_CHAT}
              typing
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -left-4 bottom-6 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft sm:block lg:-left-10">
            <p className="text-xs font-medium text-slate-500">New lead captured</p>
            <p className="text-sm font-bold text-slate-900">+1 booking 🎉</p>
          </div>
        </div>
      </div>
    </section>
  );
}
