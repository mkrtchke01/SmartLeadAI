import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/data";

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="The solution"
          title={
            <>
              One AI assistant that{" "}
              <span className="text-gradient">never clocks out</span>
            </>
          }
          subtitle="SmartLead AI handles the conversations that used to slip through the cracks — instantly, accurately, and around the clock."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 60}>
              <div className="group card h-full bg-white hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <solution.icon className="h-6 w-6" />
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-purple" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
