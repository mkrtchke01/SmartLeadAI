import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { USE_CASES } from "@/lib/data";

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Use cases"
          title="Built for the businesses people message first"
          subtitle="If customers ask questions before they buy, SmartLead AI helps you answer faster and win more of them."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase, i) => (
            <Reveal key={useCase.title} delay={(i % 3) * 70}>
              <div className="group card h-full bg-white hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-brand-purple transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <useCase.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {useCase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
