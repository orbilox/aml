import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import WalkthroughDelhiClient from "./WalkthroughDelhiClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Delhi NCR | Real Estate Animation & Property Tours | Alliance Media Labs",
  description:
    "Professional 3D walkthrough video service in Delhi NCR for real estate developers. Photorealistic 3D property tours for Gurugram, Noida, Ghaziabad, Dwarka Expressway, and Golf Course Road projects.",
  keywords:
    "3D walkthrough videos Delhi NCR, 3D property tour Delhi, architectural visualization Delhi, real estate 3D animation Delhi NCR, walkthrough video Gurugram, walkthrough video Noida, 3D walkthrough Dwarka Expressway, property tour video Delhi NCR, real estate visualization Delhi, photorealistic walkthrough Delhi NCR, 3D animation Delhi real estate, Gurgaon 3D walkthrough",
  alternates: {
    canonical: `${BASE}/city-services/3d-walkthrough-videos-delhi`,
  },
  openGraph: {
    title: "3D Walkthrough Videos Delhi NCR | Real Estate Animation — Alliance Media Labs",
    description:
      "Premium 3D walkthrough videos for Delhi NCR real estate developers. Cinematic property tours for Gurugram, Noida, Ghaziabad, and Dwarka Expressway projects.",
    url: `${BASE}/city-services/3d-walkthrough-videos-delhi`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/3.jpg`, width: 1200, height: 630, alt: "3D Walkthrough Videos Delhi NCR — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Walkthrough Videos Delhi NCR | Alliance Media Labs",
    description: "Photorealistic 3D property tour videos for Delhi NCR real estate. Gurugram, Noida, Ghaziabad, Dwarka Expressway.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/3.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional 3D walkthrough video service for real estate developers in Delhi NCR.",
  url: `${BASE}/city-services/3d-walkthrough-videos-delhi`,
  priceRange: "₹₹₹",
  telephone: "+91-9988931093",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "Neighborhood", name: "Dwarka Expressway" },
    { "@type": "Neighborhood", name: "Golf Course Road" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Walkthrough Videos Delhi NCR", item: `${BASE}/city-services/3d-walkthrough-videos-delhi` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Delhi NCR areas does Alliance Media Labs serve for 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs serves real estate developers across Delhi NCR including Gurugram, Noida, Greater Noida, Ghaziabad, Dwarka, Dwarka Expressway, Golf Course Road, Sohna Road, Sector 150, and all major micro-markets.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 3D walkthrough video cost in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough video pricing in Delhi NCR starts from ₹50,000 for basic residential walkthroughs and goes up to ₹5,00,000+ for comprehensive luxury projects. Contact Alliance Media Labs for a customised quote.",
      },
    },
    {
      "@type": "Question",
      name: "How do 3D walkthrough videos help Delhi NCR real estate projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delhi NCR has one of India's most competitive real estate markets. 3D walkthrough videos help developers stand out in pre-launch campaigns, reach buyers digitally across national portals, and present under-construction luxury projects with confidence.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs create 3D walkthrough videos for Gurugram luxury projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs specialises in high-end 3D walkthrough video production for Gurugram luxury projects on Golf Course Road, DLF sectors, Dwarka Expressway, and Sohna Road — with cinematic quality matching the premium positioning of these projects.",
      },
    },
  ],
};

export default function WalkthroughDelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WalkthroughDelhiClient />
    </>
  );
}
