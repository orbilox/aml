import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import VideoProductionGurugramClient from "./VideoProductionGurugramClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Real Estate Video Production Gurugram | 3D Walkthrough & Drone Shoots Gurgaon | Alliance Media Labs",
  description:
    "Professional real estate video production in Gurugram. 3D walkthrough videos, drone aerial shoots, and marketing films for Golf Course Road, DLF, Dwarka Expressway, and Sohna Road luxury projects.",
  keywords:
    "real estate video production Gurugram, 3D walkthrough Gurugram, drone shoots Gurugram, Gurgaon real estate video, 3D walkthrough Gurgaon, property video Golf Course Road, drone video Dwarka Expressway, real estate film Gurugram, luxury property video Gurgaon, DLF real estate video, architectural video Gurugram, property marketing video Gurgaon",
  alternates: {
    canonical: `${BASE}/city-services/real-estate-video-production-gurugram`,
  },
  openGraph: {
    title: "Real Estate Video Production Gurugram | 3D Walkthrough & Drone — Alliance Media Labs",
    description:
      "Complete real estate video production in Gurugram: 3D walkthrough videos, drone aerial shoots, and cinematic marketing films for Golf Course Road, DLF, and Dwarka Expressway.",
    url: `${BASE}/city-services/real-estate-video-production-gurugram`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/4.jpg`, width: 1200, height: 630, alt: "Real Estate Video Production Gurugram — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Video Production Gurugram | Alliance Media Labs",
    description: "3D walkthrough, drone shoots, and property films for Gurugram luxury real estate. Golf Course Road, DLF, Dwarka Expressway.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/4.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional real estate video production service in Gurugram including 3D walkthroughs, drone shoots, and marketing films.",
  url: `${BASE}/city-services/real-estate-video-production-gurugram`,
  priceRange: "₹₹₹",
  telephone: "+91-9999916744",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Gurugram" },
    { "@type": "Neighborhood", name: "Golf Course Road" },
    { "@type": "Neighborhood", name: "DLF Phase 5" },
    { "@type": "Neighborhood", name: "Dwarka Expressway" },
    { "@type": "Neighborhood", name: "Sohna Road" },
    { "@type": "City", name: "Delhi" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Video Production Services Gurugram",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Walkthrough Videos Gurugram" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone Aerial Shoots Gurugram" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Interior Cinematic Walkthrough Gurugram" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Update Videos Gurugram" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Real Estate Video Production Gurugram", item: `${BASE}/city-services/real-estate-video-production-gurugram` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What real estate video production services does Alliance Media Labs offer in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs offers complete real estate video production in Gurugram including 3D walkthrough videos, interior cinematic walkthroughs, drone aerial shoots, construction update videos, route and location videos, and marketing AV films for residential and commercial projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Gurugram areas does Alliance Media Labs cover for real estate videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Gurugram real estate corridors including Golf Course Road, Golf Course Extension Road, DLF Phase 1–5, Dwarka Expressway, NH-48, Sohna Road, New Gurugram sectors, and the entire NCR micro-market.",
      },
    },
    {
      "@type": "Question",
      name: "How much does real estate video production cost in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate video production costs in Gurugram vary by service: 3D walkthroughs start from ₹50,000, drone shoots from ₹20,000, and complete marketing AV production packages from ₹2,00,000 depending on scope and duration.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alliance Media Labs work with luxury real estate developers in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs specialises in luxury real estate video production for premium Gurugram projects by top developers. Our studio-quality output matches the premium positioning of Golf Course Road and DLF luxury developments.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs handle both 3D animation and live drone footage for a Gurugram project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs provides integrated real estate marketing content combining 3D animated walkthroughs, aerial drone footage, and live interior photography — all produced in-house for consistent quality and efficient project management.",
      },
    },
  ],
};

export default function VideoProductionGurugramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VideoProductionGurugramClient />
    </>
  );
}
