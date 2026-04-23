import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import WalkthroughMumbaiClient from "./WalkthroughMumbaiClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Mumbai | Real Estate Animation & Property Tours | Alliance Media Labs",
  description:
    "Professional 3D walkthrough video service in Mumbai for real estate developers. Photorealistic 3D property tours for Bandra, Worli, Andheri, Lower Parel, Thane, and Navi Mumbai projects. Get a free quote today.",
  keywords:
    "3D walkthrough videos Mumbai, 3D property tour Mumbai, architectural visualization Mumbai, real estate 3D animation Mumbai, walkthrough video Bandra, walkthrough video Worli, 3D walkthrough Lower Parel, property tour video Mumbai, real estate visualization Mumbai, photorealistic walkthrough Mumbai, 3D animation Mumbai real estate, pre-launch property video Mumbai",
  alternates: {
    canonical: `${BASE}/city-services/3d-walkthrough-videos-mumbai`,
  },
  openGraph: {
    title: "3D Walkthrough Videos Mumbai | Real Estate Animation — Alliance Media Labs",
    description:
      "Premium 3D walkthrough videos for Mumbai real estate developers. Cinematic property tours for Bandra, Worli, Andheri, Lower Parel, and beyond.",
    url: `${BASE}/city-services/3d-walkthrough-videos-mumbai`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`, width: 1200, height: 630, alt: "3D Walkthrough Videos Mumbai — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Walkthrough Videos Mumbai | Alliance Media Labs",
    description: "Photorealistic 3D property tour videos for Mumbai real estate developers. Bandra, Worli, Andheri, Lower Parel.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional 3D walkthrough video service for real estate developers in Mumbai.",
  url: `${BASE}/city-services/3d-walkthrough-videos-mumbai`,
  priceRange: "₹₹₹",
  telephone: "+91-9999916744",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Neighborhood", name: "Bandra" },
    { "@type": "Neighborhood", name: "Worli" },
    { "@type": "Neighborhood", name: "Andheri" },
    { "@type": "Neighborhood", name: "Lower Parel" },
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Navi Mumbai" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3D Walkthrough Video Services Mumbai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential 3D Walkthrough Videos Mumbai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial 3D Walkthrough Videos Mumbai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Interior Cinematic Walkthrough Mumbai" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Walkthrough Videos Mumbai", item: `${BASE}/city-services/3d-walkthrough-videos-mumbai` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Mumbai areas does Alliance Media Labs serve for 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs serves real estate developers across all Mumbai areas including Bandra, Worli, Andheri, Juhu, Lower Parel, Dadar, Thane, Navi Mumbai, Kharghar, Panvel, and all major micro-markets.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 3D walkthrough video cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough video costs in Mumbai range from ₹50,000 for a basic residential unit walkthrough to ₹5,00,000+ for a comprehensive luxury project with multiple typologies, amenity areas, and master plan flyover. Contact us for a project-specific quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does 3D walkthrough video production take in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard production takes 2–4 weeks for residential projects. Larger commercial or township projects may take 4–8 weeks. We offer priority production schedules for Mumbai project launches.",
      },
    },
    {
      "@type": "Question",
      name: "What are 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough videos are photorealistic animated property tours created from architectural drawings before construction. They let buyers virtually experience every room, amenity, and outdoor space — eliminating the need for a physical site visit.",
      },
    },
    {
      "@type": "Question",
      name: "Who should use 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough videos are used by real estate developers, builders, architects, and marketing teams for residential and commercial project launches, pre-sales campaigns, and property portals.",
      },
    },
  ],
};

export default function WalkthroughMumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WalkthroughMumbaiClient />
    </>
  );
}
