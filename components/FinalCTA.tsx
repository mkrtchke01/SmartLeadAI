"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

type Errors = { name?: string; email?: string };

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Static demo — no backend. Just show a success state.
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 text-center text-white sm:px-12">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-purple/30 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-green" />
            Start your free 14-day trial
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Stop losing leads to slow replies
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Set up SmartLead AI in an afternoon and let it answer, qualify, and
            book while you focus on running your business.
          </p>

          {submitted ? (
            <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur">
              <CheckCircle2 className="h-12 w-12 text-brand-green" />
              <p className="text-lg font-semibold">You&apos;re on the list, {name.split(" ")[0]}!</p>
              <p className="text-sm text-slate-300">
                This is a portfolio demo, so no email is actually sent — but this is
                where your trial would begin.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="mx-auto mt-10 max-w-md space-y-3 text-left"
            >
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  aria-label="Your name"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white/40 focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-300">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  aria-label="Work email"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white/40 focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn w-full bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5"
              >
                Start Free Trial
              </button>
              <p className="text-center text-xs text-slate-400">
                No credit card required · Cancel anytime
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
