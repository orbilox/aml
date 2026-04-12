import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import ConstructionUpdateVideosClient from "./ConstructionUpdateVideosClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Construction Update Videos for Real Estate | Site Progress Videos India | Alliance Media Labs",
  description:
    "Professional construction update videos for real estate developers. Transparent site progress documentation with drone + ground-level footage. Builds buyer confidence across Mumbai, Delhi NCR, Bangalore, Gurugram.",
  keywords:
    "construction update videos India, RERA compliance video real estate, RERA construction update India, site progress videos real estate, construction documentation video, real estate progress videos, builder update videos India, construction timelapse India, project progress documentation, real estate construction video Mumbai Delhi Bangalore, construction update video service India",
  alternates: {
    canonical: `${BASE}/services/construction-update-videos`,
  },
  openGraph: {
    title: "Construction Update Videos | Real Estate Site Progress Documentation — Alliance Media Labs",
    description:
      "Transparent construction progress videos for real estate developers. Drone + ground-level footage that builds buyer trust and brand credibility.",
    url: `${BASE}/services/construction-update-videos`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/construction-update-videos/1.jpg`, width: 1200, height: 630, alt: "Construction Update Videos — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Update Videos India | Alliance Media Labs",
    description: "Site progress documentation videos for real estate developers. Drone + ground footage. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/services/construction-update-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/construction-update-videos#service`,
  name: "Construction Update Videos",
  description:
    "Professional construction update video production for real estate developers. Regular site progress documentation using drone and ground-level footage to maintain buyer transparency and trust.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Construction Progress Documentation",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  image: `${BASE}/images/services/construction-update-videos/1.jpg`,
  url: `${BASE}/services/construction-update-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Construction Update Videos", item: `${BASE}/services/construction-update-videos` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are construction update videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construction update videos are regular progress documentation videos shot at real estate project sites using drone and ground-level cameras. They show current construction status to buyers, investors, and stakeholders, building transparency and trust.",
      },
    },
    {
      "@type": "Question",
      name: "How often should construction update videos be produced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most real estate developers produce construction update videos monthly or quarterly. Alliance Media Labs can set up a regular production schedule aligned with your project milestones and marketing calendar.",
      },
    },
    {
      "@type": "Question",
      name: "Do construction update videos include drone footage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs combines licensed drone aerial footage with ground-level walkthrough video to provide a comprehensive view of construction progress across all areas of the project site.",
      },
    },
    {
      "@type": "Question",
      name: "Why are construction update videos important for real estate marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construction update videos build buyer confidence, demonstrate project credibility, reduce anxiety for off-plan purchasers, and provide valuable content for social media and email marketing campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does Alliance Media Labs cover for construction update videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide construction update video services across India including Mumbai, Delhi NCR, Gurugram, Bangalore, Pune, Hyderabad, and other major cities.",
      },
    },
    {
      "@type": "Question",
      name: "Are construction update videos required for RERA compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under RERA (Real Estate Regulation & Development Act), developers are required to regularly update project progress on the RERA portal. Construction update videos are an effective way to document and communicate this progress to buyers and regulatory bodies, supporting RERA compliance obligations.",
      },
    },
  ],
};

export default function ConstructionUpdateVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ConstructionUpdateVideosClient />
    </>
  );
}
