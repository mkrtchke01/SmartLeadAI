import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartLead AI — Turn website visitors into qualified leads, 24/7",
  description:
    "SmartLead AI is an AI chatbot for small businesses. Answer customer questions instantly, qualify leads, book appointments, and send every inquiry straight to your inbox, Telegram, or CRM.",
  keywords: [
    "AI chatbot",
    "lead generation",
    "small business",
    "customer support",
    "appointment booking",
    "SaaS",
  ],
  openGraph: {
    title: "SmartLead AI — AI chatbot for small businesses",
    description:
      "Answer customers 24/7, capture more leads, and automate booking with an AI chatbot built for small businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
