import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HELIOS — Designing the operator console for a fusion reactor",
  description:
    "A 9-month design engagement helping a stealth-stage fusion startup design the control interface their plasma engineers trust under load.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
