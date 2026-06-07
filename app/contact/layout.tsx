import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Donovan Teasley",
  description:
    "Contact North Carolina Realtor Donovan Teasley by phone, email, or Instagram for clear first-time homebuyer guidance.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
