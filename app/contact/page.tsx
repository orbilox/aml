import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Alliance Media Labs - Get Your Real Estate Project Started",
  description:
    "Contact Alliance Media Labs for professional real estate visualization services. Get quotes for 3D walkthroughs, VR tours, architectural rendering, and more.",
  keywords:
    "contact alliance media labs, real estate visualization quote, 3D walkthrough services, VR tour pricing, architectural rendering contact",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/contact`,
  },
  openGraph: {
    title: "Contact Alliance Media Labs - Get Your Real Estate Project Started",
    description:
      "Contact Alliance Media Labs for professional real estate visualization services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/contact`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alliance Media Labs",
  description: "Contact Alliance Media Labs for professional real estate visualization services",
  url: "https://www.alliancemedialabs.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Alliance Media Labs",
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+91-9988931093", contactType: "customer service" },
      { "@type": "ContactPoint", telephone: "+91-9999916744", contactType: "customer service" },
      { "@type": "ContactPoint", email: "info@alliancemedialabs.com", contactType: "customer service" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-244, 3rd Floor, Unit-4, Sector 74",
      addressLocality: "Chandigarh",
      addressRegion: "Mohali",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPageClient />
    </>
  );
}
