import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Barlow, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-cond",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bryan Chiam — Software Engineer",
  description:
    "Full stack engineer and data builder based in Adelaide, SA. From .NET APIs to Databricks pipelines.",
  openGraph: {
    title: "Bryan Chiam — Software Engineer",
    description: "Full stack engineer and data builder based in Adelaide, SA.",
    url: "https://BCworkin.github.io",
    siteName: "Bryan Chiam",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${barlowCondensed.variable} ${barlow.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
