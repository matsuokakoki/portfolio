import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koki Matsuoka | Software Engineer Portfolio",
  description:
    "Koki Matsuoka's bilingual portfolio featuring broad technical interests, infrastructure, AI, software development, and international experience.",
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
