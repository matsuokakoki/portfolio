import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koki Matsuoka | Software Engineer Portfolio",
  description:
    "Koki Matsuoka's bilingual portfolio featuring backend infrastructure, observability, full-stack development, and applied LLM projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
