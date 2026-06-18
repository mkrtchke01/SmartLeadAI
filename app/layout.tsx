import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
