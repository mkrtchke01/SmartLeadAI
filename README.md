# SmartLead AI — Landing Page

A modern, fully responsive SaaS landing page for **SmartLead AI**, a fictional
AI chatbot that helps small businesses answer customers 24/7, qualify leads,
and book appointments automatically.

> Demo project created for portfolio purposes. SmartLead AI is a fictional product.

![Tech](https://img.shields.io/badge/Next.js-14-black) ![Tech](https://img.shields.io/badge/TypeScript-5-blue) ![Tech](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

---

## ✨ Features

- **14 conversion-focused sections** — header, hero, problem, solution, features, live chatbot demo, how it works, use cases, benefits, pricing, testimonials, FAQ, final CTA, footer.
- **Fully responsive** — mobile, tablet, and desktop layouts.
- **Reusable component architecture** — every section is its own component, with shared UI primitives (`Logo`, `SectionHeading`, `Reveal`, `ChatWindow`).
- **Polished UI** — gradients, soft shadows, rounded cards, hover effects, scroll-reveal animations, and a realistic chatbot mockup.
- **No stock photos** — all visuals are built from icons ([lucide-react](https://lucide.dev/)), gradients, and custom UI.
- **Static form with validation** — the trial form validates name and email client-side (no backend required).
- **Accessible & fast** — semantic HTML, `prefers-reduced-motion` support, smooth scrolling, web font via `next/font`.

---

## 🧱 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons

---

## 📁 Project Structure

```
SmartLeadAI/
├── app/
│   ├── globals.css        # Tailwind layers, theme tokens, reveal animation
│   ├── layout.tsx         # Root layout, fonts, metadata
│   └── page.tsx           # Assembles all sections
├── components/
│   ├── ui/
│   │   ├── ChatWindow.tsx     # Reusable chatbot mockup
│   │   ├── Logo.tsx
│   │   ├── Reveal.tsx         # Scroll-into-view animation wrapper
│   │   └── SectionHeading.tsx
│   ├── Header.tsx         # Sticky nav + mobile menu
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Features.tsx
│   ├── ChatbotDemo.tsx
│   ├── HowItWorks.tsx
│   ├── UseCases.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx            # Accordion
│   ├── FinalCTA.tsx       # Validated static form
│   └── Footer.tsx
├── lib/
│   ├── data.ts            # All page content (copy, plans, FAQs, chat scripts)
│   └── utils.ts           # cn() className helper
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

All copy lives in `lib/data.ts`, so the entire site can be re-themed for another
business by editing one file.

---

## 🚀 Getting Started (Run Locally)

**Requirements:** Node.js 18.17+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

---

## ☁️ Deploy to Vercel

This project is zero-config on Vercel.

**Option A — Dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No environment variables are required.

---

## 📝 Notes

- The chatbot conversations are **visual mockups** — there is no live AI backend.
- CTA buttons link to on-page sections or placeholder anchors.
- The trial form is **static** with client-side validation and a success state.
- All numbers and testimonials are **illustrative** and labeled as such.
