import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five Friends. One Himalayan Journey.",
  description: "An interactive, permit-aware Sikkim journey planner for five travellers from Bhubaneswar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
