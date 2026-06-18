import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ChatWindow from "@/components/ui/ChatWindow";
import Reveal from "@/components/ui/Reveal";
import { DEMO_CHAT } from "@/lib/data";

const HIGHLIGHTS = [
  {
    title: "Understands the request",
    description: "It reads intent in plain language — no rigid menus or keywords required.",
  },
  {
    title: "Asks the right questions",
    description: "Qualifying questions surface urgency, scope, and budget automatically.",
  },
  {
    title: "Collects contact details",
    description: "Name, address, and phone are captured naturally inside the conversation.",
  },
  {
    title: "Hands off instantly",
    description: "The complete, qualified lead is sent to your team the moment it's ready.",
  },
];

export default function ChatbotDemo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-3xl" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow="Live demo"
          tone="dark"
          title="See a real conversation, start to finish"
          subtitle="Watch how SmartLead AI turns a simple question into a qualified, ready-to-call lead — without anyone lifting a finger."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex justify-center lg:justify-start">
            <ChatWindow
              title="Reed Home Services"
              subtitle="Online · Replies instantly"
              messages={DEMO_CHAT}
            />
          </Reveal>

          <div className="space-y-5">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-green/20 text-brand-green">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
