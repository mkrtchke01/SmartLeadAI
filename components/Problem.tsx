import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PROBLEMS } from "@/lib/data";

export default function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="The problem"
          title="Every missed message is a missed customer"
          subtitle="Small businesses lose leads every day — not because their service is poor, but because no one can reply fast enough."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 60}>
              <div className="card h-full hover:-translate-y-1 hover:border-red-100 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-500">
                  <problem.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
