import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyLynx | Free Expense Tracker & Budget App – Track Spending, Save More",
  description:
    "MoneyLynx is a free expense tracker and budget app for individuals and teams. Auto-categorize spending, set daily budgets, get weekly reports, and reach savings goals faster. Bank-level security. Start your free trial today.",
  keywords: [
    "expense tracker",
    "budget app",
    "personal finance",
    "spending tracker",
    "savings goals",
    "money management",
    "expense tracking app",
    "budget planner",
  ],
  openGraph: {
    title: "MoneyLynx | Free Expense Tracker & Budget App",
    description:
      "Track every dollar, grow every goal. Auto-categorized expenses, daily budget alerts, shared wallets, and weekly insights. Start free.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
