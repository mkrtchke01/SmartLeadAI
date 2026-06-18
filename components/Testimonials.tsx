import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const AVATAR: Record<string, string> = {
  blue: "bg-blue-100 text-brand-blue",
  purple: "bg-purple-100 text-brand-purple",
  green: "bg-emerald-100 text-brand-green",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by busy business owners"
          subtitle="See how teams use SmartLead AI to answer faster and book more — in their own words."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card flex h-full flex-col hover:-translate-y-1 hover:shadow-soft">
                <Quote className="h-8 w-8 text-brand-purple/30" />
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full text-sm font-bold",
                      AVATAR[t.accent],
                    )}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
