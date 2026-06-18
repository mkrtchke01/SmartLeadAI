import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PLANS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          subtitle="Start free, then pick the plan that matches your volume. No setup fees, cancel anytime."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-transparent bg-slate-900 text-white shadow-soft lg:-translate-y-4"
                    : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:shadow-soft",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlighted ? "text-slate-300" : "text-slate-500",
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={cn(
                      "pb-1 text-sm",
                      plan.highlighted ? "text-slate-300" : "text-slate-500",
                    )}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-brand-green" : "text-brand-blue",
                        )}
                      />
                      <span className={plan.highlighted ? "text-slate-200" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 w-full",
                    plan.highlighted
                      ? "btn bg-white text-slate-900 hover:-translate-y-0.5 hover:bg-slate-100"
                      : "btn-primary",
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
