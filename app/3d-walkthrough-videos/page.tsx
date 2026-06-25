import type { Metadata } from "next";

export const revalidate = 86400;
import VirtualPropertyTourClient from "./VirtualPropertyTourClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Architectural Walkthrough Services India | Real Estate 3D Walkthrough Service | Alliance Media Labs",
  description:
    "Alliance Media Labs delivers 3D architectural walkthrough services for real estate developers across India. Get a cinematic 3D walkthrough video, 3D virtual house tours, and 3D property walkthrough in India — a trusted Real Estate 3D walkthrough service in India for 3D virtual tours real estate and 3D walkthrough real estate needs. Get a quote in 24 hours.",
  keywords:
    "3d architectural walkthrough services, 3D walkthrough services, 3D walkthrough video, 3d virtual house tours, 3d property walkthrough, architectural walkthrough, 3d architectural walkthrough, 3d walkthrough real estate, 3d virtual tours real estate, 3d virtual real estate tours, Real Estate 3D walkthrough service in India, 3d property walkthrough in india",
  alternates: {
    canonical: `${BASE}/3d-walkthrough-videos`,
  },
  openGraph: {
    title: "3D Architectural Walkthrough Services India | Alliance Media Labs",
    description:
      "Real Estate 3D walkthrough service in India — 3D walkthrough video, 3D virtual house tours, and 3D property walkthrough for developers nationwide.",
    url: `${BASE}/3d-walkthrough-videos`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`,
        width: 1200,
        height: 630,
        alt: "3D Architectural Walkthrough Services India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Architectural Walkthrough Services India | Alliance Media Labs",
    description: "3D walkthrough video, 3D virtual house tours, and 3D property walkthrough — Real Estate 3D walkthrough service in India.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/3d-walkthrough-videos#service`,
  name: "3D Architectural Walkthrough Services India",
  description:
    "Alliance Media Labs provides 3D architectural walkthrough services and a complete Real Estate 3D walkthrough service in India — producing 3D walkthrough video, 3D virtual house tours, and 3D property walkthrough content for developers, architects, and infrastructure projects nationwide.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "3D Architectural Walkthrough Services",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "3D walkthrough video and 3D property walkthrough packages from ₹60,000; full campaign packages from ₹1,50,000",
    },
  },
  image: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`,
  url: `${BASE}/3d-walkthrough-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "3D Architectural Walkthrough Services",
      item: `${BASE}/3d-walkthrough-videos`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are 3D architectural walkthrough services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D architectural walkthrough services produce a cinematic 3D walkthrough video that takes viewers through a building or property digitally — covering everything from a 3D property walkthrough of individual units to full 3D virtual house tours of a complete project, before construction is finished.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a 3D property walkthrough and 3D virtual house tours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D property walkthrough is typically a pre-rendered cinematic 3D walkthrough video showing a fixed camera path through a property, while 3D virtual house tours can include interactive elements that let viewers navigate at their own pace. We offer both as part of our architectural walkthrough services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a Real Estate 3D walkthrough service in India for all project types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Real Estate 3D walkthrough service in India covers residential, commercial, and township projects — producing 3D walkthrough real estate content and 3D virtual tours real estate developers use for sales offices, digital marketing, and investor presentations.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you deliver a 3D property walkthrough in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 3D architectural walkthrough projects take 10–18 working days. We also offer 7-day rush production for time-sensitive launches anywhere in India.",
      },
    },
    {
      "@type": "Question",
      name: "Can a 3D architectural walkthrough be produced from drawings alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build every 3D walkthrough video directly from your AutoCAD, Revit, or SketchUp drawings, ensuring the architectural walkthrough is dimensionally accurate before any rendering begins.",
      },
    },
  ],
};

export default function VirtualPropertyTourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VirtualPropertyTourClient />
    </>
  );
}
