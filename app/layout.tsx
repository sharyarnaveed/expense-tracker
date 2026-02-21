import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyLynx | Smart Expense Tracker Mobile App",
  description:
    "MoneyLynx helps you track expenses, stay on budget, and grow savings with real-time insights.",
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
