import type { Metadata } from "next";
import BackgroundDecor from "@/components/BackgroundDecor";

export const metadata: Metadata = {
  title: "You opened our email — NoAgency",
  description:
    "Three senior engineers. No swap. The shortest version of why we wrote.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundDecor />
      <main>{children}</main>
    </>
  );
}
