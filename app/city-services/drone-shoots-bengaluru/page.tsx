import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import DroneShootsBengaluruClient from "./DroneShootsBengaluruClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Drone Shoots Bengaluru | Aerial Photography & Videography Real Estate | Alliance Media Labs",
  description:
    "Professional drone shoots and aerial photography in Bengaluru for real estate developers. 4K aerial cinematography for Whitefield, Sarjapur, Hebbal, North Bengaluru, and Devanahalli projects. DGCA-licensed operators.",
  keywords:
    "drone shoots Bengaluru, aerial photography Bengaluru, drone videography Bengaluru, 4K drone video Bengaluru, aerial cinematography Bengaluru, real estate drone Bengaluru, aerial photography Whitefield, drone video Sarjapur, drone Hebbal, real estate aerial Bengaluru, DGCA licensed drone Bengaluru, construction aerial Bengaluru",
  alternates: {
    canonical: `${BASE}/city-services/drone-shoots-bengaluru`,
  },
  openGraph: {
    title: "Drone Shoots Bengaluru | Aerial Photography & Videography — Alliance Media Labs",
    description:
      "Professional 4K drone shoots and aerial cinematography for Bengaluru real estate developers. DGCA-licensed operators. Whitefield, Sarjapur, Hebbal, North Bengaluru.",
    url: `${BASE}/city-services/drone-shoots-bengaluru`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/2.jpg`, width: 1200, height: 630, alt: "Drone Shoots Bengaluru — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Shoots Bengaluru | Alliance Media Labs",
    description: "DGCA-licensed 4K drone photography and videography for Bengaluru real estate. Whitefield, Sarjapur, Hebbal.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional drone shoot and aerial photography service for real estate developers in Bengaluru.",
  url: `${BASE}/city-services/drone-shoots-bengaluru`,
  image: `${BASE}/images/home/2.jpg`,
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  telephone: "+91-9999916744",
  email: "info@alliancemedialabs.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-244, 3rd Floor, Unit-4, Sector 74",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    postalCode: "160055",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.7021,
    longitude: 76.7179,
  },
  hasMap: "https://share.google/q1UmsNMlUsc99Bnwv",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "Neighborhood", name: "Whitefield" },
    { "@type": "Neighborhood", name: "Sarjapur" },
    { "@type": "Neighborhood", name: "Hebbal" },
    { "@type": "Neighborhood", name: "Devanahalli" },
    { "@type": "Neighborhood", name: "North Bengaluru" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Drone Shoots Bengaluru", item: `${BASE}/city-services/drone-shoots-bengaluru` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your drone operators DGCA-licensed in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Alliance Media Labs drone operators working in Bengaluru are DGCA Remote Pilot License (RPL) holders operating with certified drones in compliance with India's Drone Rules 2021.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bengaluru areas do you cover for drone shoots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bengaluru real estate areas including Whitefield, Sarjapur Road, Hebbal, Devanahalli, Yelahanka, Electronic City, Kanakapura Road, Bannerghatta, and North Bengaluru. We handle DGCA permissions for each shoot location.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a real estate drone shoot in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Bengaluru real estate drone shoots include 4K aerial video, high-resolution aerial photography, sunrise/sunset golden hour options, neighbourhood and connectivity overviews, and post-production editing with colour grading.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a drone shoot cost in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drone shoot pricing in Bengaluru starts from ₹15,000 for a half-day shoot with standard coverage. Full-day shoots with multiple angles, golden hour footage, and post-production start from ₹30,000. Contact us for a project-specific quote.",
      },
    },
  ],
};

export default function DroneShootsBengaluruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DroneShootsBengaluruClient />
    </>
  );
}
