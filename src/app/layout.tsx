import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundDecor from "@/components/BackgroundDecor";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Full-Stack Development Team | React, Node.js, AI Development",
    template: "%s | Dream Team",
  },
  description:
    "Dedicated team building scalable web applications using React, Node.js, and AI-assisted development.",
  keywords: [
    "full-stack development team",
    "react node developers",
    "dedicated dev team",
    "ai development team",
    "next.js development",
    "react native development",
    "scalable web applications",
    "MVP development",
    "product engineering",
    "AI-assisted development",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Full-Stack Development Team | React, Node.js, AI Development",
    description:
      "Dedicated team building scalable web applications using React, Node.js, and AI-assisted development.",
    images: [
      {
        url: "https://res.cloudinary.com/dekljoqsm/image/upload/f_auto,q_auto,w_1200,h_630/dream-team/brand/og-image",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Development Team | React, Node.js, AI Development",
    description:
      "Dedicated team building scalable web applications using React, Node.js, and AI-assisted development.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-background text-fg antialiased">
        <BackgroundDecor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
