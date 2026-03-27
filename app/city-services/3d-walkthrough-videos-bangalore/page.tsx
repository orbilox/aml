import type { Metadata } from "next";
import WalkthroughBangaloreClient from "./WalkthroughBangaloreClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Bangalore | Real Estate Animation & Property Tours | Alliance Media Labs",
  description:
    "Professional 3D walkthrough video service in Bangalore for real estate developers. Photorealistic 3D property tours for Whitefield, Sarjapur, Electronic City, Hebbal, and North Bangalore. Get a free quote today.",
  keywords:
    "3D walkthrough videos Bangalore, 3D property tour Bangalore, architectural visualization Bangalore, real estate 3D animation Bangalore, walkthrough video Whitefield, walkthrough video Sarjapur, 3D walkthrough Hebbal, property tour video Bangalore, real estate visualization Bangalore, photorealistic walkthrough Bangalore, 3D animation Bangalore real estate",
  alternates: {
    canonical: `${BASE}/city-services/3d-walkthrough-videos-bangalore`,
  },
  openGraph: {
    title: "3D Walkthrough Videos Bangalore | Real Estate Animation — Alliance Media Labs",
    description:
      "Premium 3D walkthrough videos for Bangalore real estate developers. Cinematic property tours for Whitefield, Sarjapur, Electronic City, Hebbal, and North Bangalore.",
    url: `${BASE}/city-services/3d-walkthrough-videos-bangalore`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`, width: 1200, height: 630, alt: "3D Walkthrough Videos Bangalore — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Walkthrough Videos Bangalore | Alliance Media Labs",
    description: "Photorealistic 3D property tour videos for Bangalore real estate. Whitefield, Sarjapur, Hebbal, Electronic City.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional 3D walkthrough video service for real estate developers in Bangalore.",
  url: `${BASE}/city-services/3d-walkthrough-videos-bangalore`,
  priceRange: "₹₹₹",
  telephone: "+91-9988931093",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "Neighborhood", name: "Whitefield" },
    { "@type": "Neighborhood", name: "Sarjapur" },
    { "@type": "Neighborhood", name: "Hebbal" },
    { "@type": "Neighborhood", name: "Electronic City" },
    { "@type": "Neighborhood", name: "North Bangalore" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Walkthrough Videos Bangalore", item: `${BASE}/city-services/3d-walkthrough-videos-bangalore` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Bangalore areas does Alliance Media Labs serve for 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs serves real estate developers across Bangalore including Whitefield, Sarjapur Road, Electronic City, Hebbal, Devanahalli, Marathahalli, Yelahanka, Kanakapura Road, and all major micro-markets.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 3D walkthrough video cost in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough video costs in Bangalore range from ₹50,000 for a basic residential walkthrough to ₹5,00,000+ for large township projects. Contact Alliance Media Labs for a detailed project quote.",
      },
    },
    {
      "@type": "Question",
      name: "How do 3D walkthrough videos help Bangalore real estate marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Bangalore where IT professionals are key buyers, 3D walkthrough videos enable digital-first property marketing, reach NRI and out-of-city buyers online, and perform strongly across LinkedIn, YouTube, and housing portals.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to create a 3D walkthrough video in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard production takes 2–4 weeks for residential projects and 4–8 weeks for large commercial or township projects. We work remotely with Bangalore developers and deliver on defined schedules.",
      },
    },
  ],
};

export default function WalkthroughBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WalkthroughBangaloreClient />
    </>
  );
}
