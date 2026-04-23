import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Dream Team — Full-stack engineering that ships",
  description:
    "A small, senior full-stack team that designs, builds and deploys production web and mobile apps fast — with AI-native workflows.",
  keywords: [
    "full-stack engineering",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI-assisted development",
    "product development team",
    "dedicated engineering team",
    "React Native",
    "Expo",
  ],
  authors: [{ name: "Dream Team" }],
  creator: "Dream Team",
  metadataBase: new URL("https://dream-team.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dream-team.dev",
    siteName: "Dream Team",
    title: "Dream Team — Full-stack engineering that ships",
    description:
      "Senior full-stack engineers building production products with AI-native workflows.",
    images: [
      {
        url: "https://res.cloudinary.com/dekljoqsm/image/upload/f_auto,q_auto,w_1200,h_630/dream-team/brand/og-image",
        width: 1200,
        height: 630,
        alt: "Dream Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Team — Full-stack engineering that ships",
    description:
      "Senior full-stack engineers building production products with AI-native workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
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
      <body className="bg-background text-fg antialiased">{children}</body>
    </html>
  );
}
