import type { Metadata } from "next";
import ContactPanel from "@/components/contact/ContactPanel";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our full-stack development team. Email, LinkedIn, or book a call directly.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Dream Team",
    description:
      "Get in touch with our full-stack development team. Email, LinkedIn, or book a call directly.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPanel />;
}
