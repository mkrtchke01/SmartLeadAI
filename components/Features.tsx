import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FEATURES } from "@/lib/data";
import { cn } from "@/lib/utils";

const ACCENT: Record<string, string> = {
  blue: "bg-blue-50 text-brand-blue",
  purple: "bg-purple-50 text-brand-purple",
  green: "bg-emerald-50 text-brand-green",
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to capture more leads"
          subtitle="A complete toolkit that replaces missed calls, slow emails, and manual booking with one always-on assistant."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 60}>
              <div className="card h-full hover:-translate-y-1 hover:shadow-soft">
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-xl",
                    ACCENT[feature.accent],
                  )}
                >
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
