import {
  MessageSquare,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Bell,
  Plug,
  History,
  Brain,
  Clock,
  AlarmClock,
  Repeat,
  UserX,
  CalendarX,
  Stethoscope,
  Scissors,
  Wrench,
  Home,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_BADGES = [
  "No credit card required",
  "Set up in minutes",
  "Cancel anytime",
];

export type Problem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const PROBLEMS: Problem[] = [
  {
    icon: MessageSquare,
    title: "Missed messages",
    description:
      "Inquiries arrive after hours, on weekends, or while you're with a client — and many never get a reply.",
  },
  {
    icon: AlarmClock,
    title: "Slow replies",
    description:
      "Most people expect an answer within minutes. A delay of a few hours is often enough to lose the sale.",
  },
  {
    icon: Repeat,
    title: "Repetitive questions",
    description:
      "Hours disappear answering the same questions about price, hours, location, and availability.",
  },
  {
    icon: UserX,
    title: "Lost leads",
    description:
      "Visitors land on your site, can't get a quick answer, and quietly move on to a competitor.",
  },
  {
    icon: CalendarX,
    title: "Manual booking",
    description:
      "Back-and-forth emails and phone tag to schedule a single appointment slow everything down.",
  },
  {
    icon: Clock,
    title: "No time to follow up",
    description:
      "Promising leads go cold because there's no time to chase quotes, reminders, and confirmations.",
  },
];

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SOLUTIONS: Solution[] = [
  {
    icon: MessageSquare,
    title: "Instant AI replies",
    description:
      "Every visitor gets an accurate, on-brand answer in seconds — day or night, in any time zone.",
  },
  {
    icon: ClipboardList,
    title: "Lead qualification",
    description:
      "The bot asks the right questions, scores intent, and collects name, contact, and budget automatically.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking",
    description:
      "Customers pick a time and confirm a booking inside the chat — no phone tag, no double bookings.",
  },
  {
    icon: BookOpen,
    title: "FAQ automation",
    description:
      "Hours, pricing, services, and policies are answered instantly so you stop repeating yourself.",
  },
  {
    icon: Plug,
    title: "Connected everywhere",
    description:
      "Send each qualified lead to Telegram, email, your CRM, or a Google Sheet the moment it arrives.",
  },
  {
    icon: Brain,
    title: "Knows your business",
    description:
      "Train it on your services, prices, and policies so answers always sound like they came from you.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "blue" | "purple" | "green";
};

export const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "24/7 AI customer support",
    description:
      "Answer questions around the clock so no customer waits and no inquiry slips through the cracks.",
    accent: "blue",
  },
  {
    icon: ClipboardList,
    title: "Lead capture forms",
    description:
      "Collect names, emails, and phone numbers naturally inside the conversation — not a cold form.",
    accent: "purple",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking",
    description:
      "Let customers book, reschedule, and confirm appointments without ever leaving the chat.",
    accent: "green",
  },
  {
    icon: BookOpen,
    title: "FAQ automation",
    description:
      "Turn your most common questions into instant answers and free up hours every week.",
    accent: "blue",
  },
  {
    icon: Bell,
    title: "Telegram & email alerts",
    description:
      "Get notified the second a qualified lead comes in, wherever you happen to be working.",
    accent: "purple",
  },
  {
    icon: Plug,
    title: "CRM & API integrations",
    description:
      "Push leads to HubSpot, Pipedrive, Google Sheets, or your own systems through a simple API.",
    accent: "green",
  },
  {
    icon: History,
    title: "Conversation history",
    description:
      "Review every chat in one place to understand what customers ask and where they drop off.",
    accent: "blue",
  },
  {
    icon: Brain,
    title: "Custom knowledge base",
    description:
      "Upload your docs and pricing so the bot answers with details that are specific to your business.",
    accent: "purple",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Add your business info",
    description:
      "Drop in your services, pricing, hours, and FAQs. SmartLead AI learns it in minutes — no coding required.",
  },
  {
    number: "02",
    title: "Customize responses",
    description:
      "Set your tone of voice, qualifying questions, and the exact details you want every lead to provide.",
  },
  {
    number: "03",
    title: "Install the widget",
    description:
      "Paste one line of code on your website, or use our plugin. The chat widget is live right away.",
  },
  {
    number: "04",
    title: "Receive qualified leads",
    description:
      "Sit back as conversations turn into booked appointments and leads delivered to your inbox or CRM.",
  },
];

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const USE_CASES: UseCase[] = [
  {
    icon: Stethoscope,
    title: "Clinics & dental",
    description:
      "Answer insurance and treatment questions, then book consultations while your front desk focuses on patients.",
  },
  {
    icon: Scissors,
    title: "Salons & spas",
    description:
      "Share pricing and availability, take bookings, and fill last-minute openings automatically.",
  },
  {
    icon: Wrench,
    title: "Home services",
    description:
      "Qualify jobs, capture the address and scope, and route urgent requests straight to your phone.",
  },
  {
    icon: Home,
    title: "Real estate agents",
    description:
      "Pre-qualify buyers and sellers, share listing details, and schedule viewings around the clock.",
  },
  {
    icon: GraduationCap,
    title: "Coaches & consultants",
    description:
      "Screen prospects, explain your packages, and book discovery calls with the right fit only.",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description:
      "Capture project briefs and budgets up front so your team only talks to leads worth their time.",
  },
];

export type Benefit = {
  value: string;
  label: string;
  description: string;
};

export const BENEFITS: Benefit[] = [
  {
    value: "< 5 sec",
    label: "Average response time",
    description: "Replies land in seconds instead of hours — even outside business hours.",
  },
  {
    value: "+38%",
    label: "More captured leads",
    description: "Businesses capture more inquiries by answering every visitor instantly.",
  },
  {
    value: "12 hrs",
    label: "Saved per week",
    description: "Automating FAQs and booking frees up half a workday, every week.",
  },
  {
    value: "24/7",
    label: "Always available",
    description: "Your business stays open and responsive long after you've gone home.",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    tagline: "For solo owners getting their first leads on autopilot.",
    features: [
      "1 chatbot",
      "Up to 500 conversations / month",
      "FAQ automation",
      "Email notifications",
      "Lead capture forms",
      "Conversation history",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    tagline: "For growing teams that need booking and integrations.",
    features: [
      "3 chatbots",
      "Up to 3,000 conversations / month",
      "Appointment booking",
      "Telegram & email alerts",
      "CRM & Google Sheets sync",
      "Custom knowledge base",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    tagline: "For established businesses scaling across locations.",
    features: [
      "Unlimited chatbots",
      "Unlimited conversations",
      "Full API access",
      "Advanced lead scoring",
      "Team accounts & roles",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: "blue" | "purple" | "green";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We used to lose inquiries every evening. Now SmartLead AI books consultations while the clinic is closed — our calendar is fuller than ever.",
    name: "Dr. Lena Hartwell",
    role: "Owner, Brightsmile Dental",
    initials: "LH",
    accent: "blue",
  },
  {
    quote:
      "It answers the same five questions I used to type out twenty times a day. I finally have time to focus on actual clients instead of my inbox.",
    name: "Marcus Reed",
    role: "Founder, Reed Home Services",
    initials: "MR",
    accent: "green",
  },
  {
    quote:
      "Setup took an afternoon and leads now drop straight into our Telegram. The qualifying questions mean we only call people who are ready to buy.",
    name: "Sofia Alvarez",
    role: "Director, Northside Realty",
    initials: "SA",
    accent: "purple",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    question: "How long does it take to set up?",
    answer:
      "Most businesses are live within an afternoon. You add your business details and FAQs, customize the tone, and paste a single line of code on your website. No developer needed.",
  },
  {
    question: "Which tools does it integrate with?",
    answer:
      "SmartLead AI sends leads to email, Telegram, Google Sheets, and popular CRMs like HubSpot and Pipedrive. The Pro plan also includes a full API for custom integrations.",
  },
  {
    question: "Can I customize how the chatbot responds?",
    answer:
      "Yes. You control the tone of voice, the qualifying questions it asks, the information it collects, and the answers it gives. You can update everything any time from your dashboard.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "No. Everything is managed through a simple dashboard, and installing the widget is a copy-and-paste step. If you can edit your website's text, you can run SmartLead AI.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Plans are billed monthly based on the number of chatbots and conversations you need. You can start with a free trial, upgrade or downgrade any time, and cancel whenever you like.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support and a help center. Growth plans get priority support, and Pro customers are paired with a dedicated success manager for onboarding and optimization.",
  },
];

export type ChatMessage = {
  from: "bot" | "user";
  text: string;
};

export const HERO_CHAT: ChatMessage[] = [
  { from: "bot", text: "Hi! 👋 Welcome to Brightsmile Dental. How can I help today?" },
  { from: "user", text: "Do you do teeth whitening and how much is it?" },
  {
    from: "bot",
    text: "Yes! Professional whitening starts at $199. Would you like to book a consultation?",
  },
  { from: "user", text: "Sure, this week if possible." },
  {
    from: "bot",
    text: "Great — I have Thursday 2:00 PM or Friday 10:30 AM. Which works best?",
  },
];

export const DEMO_CHAT: ChatMessage[] = [
  { from: "bot", text: "Hi there! 👋 Thanks for visiting Reed Home Services. What can I help you with?" },
  { from: "user", text: "I need someone to fix a leaking kitchen sink." },
  {
    from: "bot",
    text: "I can help with that. Is it an active leak right now, or something you'd like scheduled soon?",
  },
  { from: "user", text: "It's leaking now, pretty steady." },
  {
    from: "bot",
    text: "Got it — that's a priority. Our emergency call-out starts at $89 and we can come today. What's your address and ZIP code?",
  },
  { from: "user", text: "142 Oak Street, 90210" },
  {
    from: "bot",
    text: "Perfect. What's the best phone number to confirm the visit?",
  },
  { from: "user", text: "(555) 234-9981" },
  {
    from: "bot",
    text: "Thank you! ✅ A technician will call within 15 minutes. I've sent your request to the team — you're all set!",
  },
];

export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo", href: "#demo" },
  ],
  Company: [
    { label: "Use Cases", href: "#use-cases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
