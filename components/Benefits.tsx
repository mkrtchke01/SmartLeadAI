import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { BENEFITS } from "@/lib/data";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="The results"
          title="Real impact you can measure"
          subtitle="When every visitor gets an instant answer, the numbers move in the right direction."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.label} delay={i * 70}>
              <div className="card h-full bg-brand-gradient-soft text-center">
                <p className="text-4xl font-bold text-gradient sm:text-5xl">
                  {benefit.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {benefit.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          * Illustrative figures shown for this portfolio demo.
        </p>
      </div>
    </section>
  );
}
