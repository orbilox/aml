import type { Metadata } from "next";

export const revalidate = 86400;
import ConstructionUpdateVideosFlatClient from "./ConstructionUpdateVideosFlatClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Construction Videos & Construction Time Lapse India | Construction Update Videos | Alliance Media Labs",
  description:
    "Alliance Media Labs produces construction videos, construction time lapse, and drone timelapse construction coverage for real estate developers across India. A trusted construction time lapse company delivering real estate construction video updates on a scheduled cadence. Get a quote in 24 hours.",
  keywords:
    "construction videos, Construction update videos, construction time lapse, time lapse for construction sites, construction time lapse video, drone timelapse construction, construction time lapse company, real estate construction video",
  alternates: {
    canonical: `${BASE}/construction-update-videos`,
  },
  openGraph: {
    title: "Construction Videos & Construction Time Lapse India — Alliance Media Labs",
    description:
      "Construction update videos, construction time lapse, and drone timelapse construction coverage for real estate developers across India.",
    url: `${BASE}/construction-update-videos`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/portfolio/10.png`,
        width: 1200,
        height: 630,
        alt: "Construction Videos India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Videos India | Alliance Media Labs",
    description: "Construction update videos and construction time lapse for real estate developers across India.",
    images: [`${BASE}/images/portfolio/10.png`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/construction-update-videos#service`,
  name: "Construction Videos & Construction Time Lapse India",
  description:
    "Alliance Media Labs is a construction time lapse company producing construction videos, construction update videos, and drone timelapse construction coverage for developers across India — recurring real estate construction video updates that keep buyers and stakeholders confident through a long build cycle.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Construction Progress Video Production",
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
      description: "Construction update videos from ₹15,000 per update; recurring monthly/quarterly packages available",
    },
  },
  image: `${BASE}/images/portfolio/10.png`,
  url: `${BASE}/construction-update-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Construction Videos & Time Lapse",
      item: `${BASE}/construction-update-videos`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in construction update videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our construction update videos combine drone and ground-level construction videos, a plan-vs-actual timeline overlay, and brief narration from your project lead — delivered on a scheduled monthly or quarterly cadence for direct distribution to buyers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a construction time lapse and a construction update video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A construction time lapse is continuous fixed-camera footage compressed to show progress over weeks or months, while a construction update video is an edited, narrated piece combining time lapse for construction sites with drone footage and commentary — built for buyer communication.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer drone timelapse construction coverage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Drone timelapse construction coverage is a core part of our construction videos service, giving an aerial view of full-site progress that ground-level cameras can't capture — subject to standard local drone flight permissions and site clearances.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a construction time lapse company that works on a recurring schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a construction time lapse company, we offer recurring monthly or quarterly construction update videos as a standing engagement — not just a one-off shoot — so your real estate construction video updates stay consistent through the full build cycle.",
      },
    },
    {
      "@type": "Question",
      name: "How is a real estate construction video used by developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Developers share real estate construction video updates directly with booked buyers via WhatsApp and email to maintain confidence through construction, and repurpose the same footage for marketing, investor updates, and social media.",
      },
    },
  ],
};

export default function ConstructionUpdateVideosFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ConstructionUpdateVideosFlatClient />
    </>
  );
}
