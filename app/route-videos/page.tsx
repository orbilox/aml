import type { Metadata } from "next";

export const revalidate = 86400;
import RouteVideosFlatClient from "./RouteVideosFlatClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Location Video & Real Estate Videography Services India | Route Videos | Alliance Media Labs",
  description:
    "Alliance Media Labs produces location videos, real estate videography, and property videography services for developers across India — showcasing location advantage with drone footage, animated maps, and real estate video packages. A trusted real estate video company. Get a quote in 24 hours.",
  keywords:
    "location video, real estate videos, real estate videography, property videography, real estate drone video, real estate video company, real estate video packages, real estate videography services, location advantage, real estate connectivity videos, real estate location av in india, real estate location video",
  alternates: {
    canonical: `${BASE}/route-videos`,
  },
  openGraph: {
    title: "Location Video & Real Estate Videography Services India — Alliance Media Labs",
    description:
      "Location videos, real estate videography, and property videography services for developers across India — showcasing location advantage.",
    url: `${BASE}/route-videos`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/home/2.jpg`,
        width: 1200,
        height: 630,
        alt: "Location Video India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Video India | Alliance Media Labs",
    description: "Real estate videography and location video services for developers across India.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/route-videos#service`,
  name: "Location Video & Real Estate Videography Services India",
  description:
    "Alliance Media Labs is a real estate video company producing location videos, real estate videography, and property videography for developers across India — delivering real estate location av in India with drone footage, animated maps, and proximity callouts.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Location and Route Video Production",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "Country", name: "India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Location videos from ₹45,000; full real estate video packages from ₹1,20,000",
    },
  },
  image: `${BASE}/images/home/2.jpg`,
  url: `${BASE}/route-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Location Video & Real Estate Videography",
      item: `${BASE}/route-videos`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a location video and why do developers need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A location video shows a buyer the location advantage of a project — connectivity to metro stations, schools, hospitals, and highways — using drone footage, animated map overlays, and proximity text labels. It answers 'what's around the project' before a buyer ever visits.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in real estate videography services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our real estate videography services include drone aerial B-roll, animated map overlays, proximity callouts, licensed music and voiceover, and social media cut-downs — everything needed for a complete real estate video packages deliverable.",
      },
    },
    {
      "@type": "Question",
      name: "How is property videography different from a construction update video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property videography and location videos focus on the site's surroundings and connectivity for marketing, while a construction update video documents the building's own progress. Many developers commission both from the same real estate video company for a consistent look.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer real estate drone video as part of location videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real estate drone video is a core part of every location video we produce — capturing aerial approach routes, arterial roads, and key landmarks around your project site.",
      },
    },
    {
      "@type": "Question",
      name: "Can real estate connectivity videos be used for channel partner presentations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real estate connectivity videos are commonly used in channel partner presentations, pre-launch buyer decks, and digital ads — equipping your sales team with a compelling location story for every client meeting.",
      },
    },
  ],
};

export default function RouteVideosFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RouteVideosFlatClient />
    </>
  );
}
