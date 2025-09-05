import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexaisolutions.systems"),
  title: {
    default: "APEX AI Solutions — Behavioral Intelligence Lead Gen",
    template: "%s | APEX AI Solutions",
  },
  description:
    "Stop wasting 20+ hours weekly on manual lead research. Book more meetings with AI-driven behavioral intelligence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "APEX AI Solutions — Behavioral Intelligence Lead Gen",
    description:
      "Stop wasting 20+ hours weekly on manual lead research. Book more meetings with AI-driven behavioral intelligence.",
    url: "/",
    siteName: "APEX AI Solutions",
    images: [
      {
        url: "/apex-logo.jpg",
        width: 1200,
        height: 630,
        alt: "APEX AI Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX AI Solutions — Behavioral Intelligence Lead Gen",
    description:
      "Stop wasting 20+ hours weekly on manual lead research. Book more meetings with AI-driven behavioral intelligence.",
    images: ["/apex-logo.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-24 md:pt-28">{children}</div>
      </body>
    </html>
  );
}
