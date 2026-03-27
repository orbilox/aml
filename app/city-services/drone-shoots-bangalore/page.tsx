import type { Metadata } from "next";
import DroneShootsBangaloreClient from "./DroneShootsBangaloreClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Drone Shoots Bangalore | Aerial Photography & Videography Real Estate | Alliance Media Labs",
  description:
    "Professional drone shoots and aerial photography in Bangalore for real estate developers. 4K aerial cinematography for Whitefield, Sarjapur, Hebbal, North Bangalore, and Devanahalli projects. DGCA-licensed operators.",
  keywords:
    "drone shoots Bangalore, aerial photography Bangalore, drone videography Bangalore, 4K drone video Bangalore, aerial cinematography Bangalore, real estate drone Bangalore, aerial photography Whitefield, drone video Sarjapur, drone Hebbal, real estate aerial Bangalore, DGCA licensed drone Bangalore, construction aerial Bangalore",
  alternates: {
    canonical: `${BASE}/city-services/drone-shoots-bangalore`,
  },
  openGraph: {
    title: "Drone Shoots Bangalore | Aerial Photography & Videography — Alliance Media Labs",
    description:
      "Professional 4K drone shoots and aerial cinematography for Bangalore real estate developers. DGCA-licensed operators. Whitefield, Sarjapur, Hebbal, North Bangalore.",
    url: `${BASE}/city-services/drone-shoots-bangalore`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/2.jpg`, width: 1200, height: 630, alt: "Drone Shoots Bangalore — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Shoots Bangalore | Alliance Media Labs",
    description: "DGCA-licensed 4K drone photography and videography for Bangalore real estate. Whitefield, Sarjapur, Hebbal.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional drone shoot and aerial photography service for real estate developers in Bangalore.",
  url: `${BASE}/city-services/drone-shoots-bangalore`,
  priceRange: "₹₹",
  telephone: "+91-9988931093",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "Neighborhood", name: "Whitefield" },
    { "@type": "Neighborhood", name: "Sarjapur" },
    { "@type": "Neighborhood", name: "Hebbal" },
    { "@type": "Neighborhood", name: "Devanahalli" },
    { "@type": "Neighborhood", name: "North Bangalore" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Drone Shoots Bangalore", item: `${BASE}/city-services/drone-shoots-bangalore` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your drone operators DGCA-licensed in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Alliance Media Labs drone operators working in Bangalore are DGCA Remote Pilot License (RPL) holders operating with certified drones in compliance with India's Drone Rules 2021.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bangalore areas do you cover for drone shoots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bangalore real estate areas including Whitefield, Sarjapur Road, Hebbal, Devanahalli, Yelahanka, Electronic City, Kanakapura Road, Bannerghatta, and North Bangalore. We handle DGCA permissions for each shoot location.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a real estate drone shoot in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Bangalore real estate drone shoots include 4K aerial video, high-resolution aerial photography, sunrise/sunset golden hour options, neighbourhood and connectivity overviews, and post-production editing with colour grading.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a drone shoot cost in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drone shoot pricing in Bangalore starts from ₹15,000 for a half-day shoot with standard coverage. Full-day shoots with multiple angles, golden hour footage, and post-production start from ₹30,000. Contact us for a project-specific quote.",
      },
    },
  ],
};

export default function DroneShootsBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DroneShootsBangaloreClient />
    </>
  );
}
