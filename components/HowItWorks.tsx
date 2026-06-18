import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="How it works"
          title="Live in four simple steps"
          subtitle="No engineers, no long onboarding. Most businesses are capturing leads the same day they sign up."
        />

        <div className="relative mt-16">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-blue/30 via-brand-purple/30 to-brand-green/30 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-lg font-bold text-white shadow-glow">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
