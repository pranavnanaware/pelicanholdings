import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelican Holdings",
  description: "We are a global entertainment and technology company",
  openGraph: {
    images: [
      {
        url: "/pellican.png",
        width: 1200,
        height: 630,
        alt: "Pelican Holdings",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>
       
        {children}
      </body>
      <Analytics />
    </html>
  );
}
