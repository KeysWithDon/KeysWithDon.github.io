import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keyswithdon.github.io"),
  title: {
    default: "Donovan Teasley | North Carolina Realtor | Keys With Don",
    template: "%s | Keys With Don",
  },
  description:
    "North Carolina Realtor Donovan Teasley helps first-time homebuyers understand credit, buying power, down payment assistance, and the path to homeownership.",
  applicationName: "Keys With Don",
  authors: [{ name: "Donovan Teasley", url: "https://keyswithdon.github.io/credentials" }],
  creator: "Donovan Teasley",
  publisher: "Keys With Don",
  keywords: [
    "Donovan Teasley",
    "Keys With Don",
    "North Carolina Realtor",
    "NC Realtor",
    "first-time homebuyer North Carolina",
    "home buying assistance North Carolina",
    "down payment assistance North Carolina",
    "The Next Level Realty Plus",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keyswithdon.github.io",
    siteName: "Keys With Don",
    title: "Donovan Teasley | North Carolina Realtor",
    description:
      "Clear, practical real estate guidance for first-time homebuyers in North Carolina.",
    images: [{ url: "/images/hero.png", width: 1200, height: 800, alt: "Keys With Don real estate guidance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donovan Teasley | North Carolina Realtor",
    description: "Clear, practical real estate guidance for first-time homebuyers in North Carolina.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://keyswithdon.github.io/#donovan-teasley",
                  name: "Donovan Teasley",
                  jobTitle: "North Carolina Realtor",
                  url: "https://keyswithdon.github.io/",
                  image: "https://keyswithdon.github.io/images/headshot.png",
                  email: "mailto:Keyswithdon@gmail.com",
                  telephone: "+1-980-331-4331",
                  worksFor: { "@id": "https://keyswithdon.github.io/#keys-with-don" },
                  sameAs: ["https://www.instagram.com/keyswithdon/"],
                  knowsAbout: [
                    "North Carolina real estate",
                    "First-time homebuying",
                    "Homebuyer assistance programs",
                    "Down payment assistance",
                    "Homebuyer credit preparation",
                  ],
                },
                {
                  "@type": ["RealEstateAgent", "ProfessionalService"],
                  "@id": "https://keyswithdon.github.io/#keys-with-don",
                  name: "Keys With Don",
                  url: "https://keyswithdon.github.io/",
                  logo: "https://keyswithdon.github.io/images/logo.png",
                  image: "https://keyswithdon.github.io/images/hero.png",
                  telephone: "+1-980-331-4331",
                  email: "Keyswithdon@gmail.com",
                  areaServed: { "@type": "State", name: "North Carolina" },
                  employee: { "@id": "https://keyswithdon.github.io/#donovan-teasley" },
                  sameAs: ["https://www.instagram.com/keyswithdon/"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://keyswithdon.github.io/#website",
                  url: "https://keyswithdon.github.io/",
                  name: "Keys With Don",
                  description: "North Carolina real estate guidance for first-time homebuyers.",
                  publisher: { "@id": "https://keyswithdon.github.io/#keys-with-don" },
                },
              ],
            }),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
