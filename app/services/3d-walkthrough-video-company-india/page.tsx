import type { Metadata } from "next";

export const revalidate = 86400;
import WalkthroughVideoCompanyClient from "./WalkthroughVideoCompanyClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Walkthrough Video Company India | Best Architectural Walkthrough Company | Alliance Media Labs",
  description:
    "Alliance Media Labs — India's leading 3D walkthrough video company for real estate developers. Photorealistic architectural walkthrough videos, cinematic property tours, and AI-powered virtual presentations. Trusted by top developers across Mumbai, Delhi, Bangalore & pan-India. Get a quote in 24 hours.",
  keywords:
    "3D walkthrough video company India, best 3D walkthrough company India, architectural walkthrough company, real estate 3D walkthrough company, walkthrough video company India, 3D architectural walkthrough company, property walkthrough video company, best walkthrough video company India, real estate walkthrough company, 3D animation company India real estate, architectural visualization company India, photorealistic walkthrough company, virtual tour company India, real estate animation company India",
  alternates: {
    canonical: `${BASE}/services/3d-walkthrough-video-company-india`,
  },
  openGraph: {
    title: "3D Walkthrough Video Company India | Best Architectural Walkthrough Company — Alliance Media Labs",
    description:
      "India's leading 3D walkthrough video company for real estate. Photorealistic architectural walkthroughs, AI-powered virtual tours, and cinematic property presentations. Trusted by 200+ developers pan-India.",
    url: `${BASE}/services/3d-walkthrough-video-company-india`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`,
        width: 1200,
        height: 630,
        alt: "3D Walkthrough Video Company India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Walkthrough Video Company India | Alliance Media Labs",
    description:
      "India's best 3D walkthrough video company — photorealistic architectural walkthroughs for real estate launches, investor pitches & RERA. Mumbai, Delhi, Bangalore & pan-India.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/3d-walkthrough-video-company-india#service`,
  name: "3D Walkthrough Video Company India",
  description:
    "Alliance Media Labs is India's premier 3D walkthrough video company — delivering photorealistic architectural walkthrough videos, AI-powered virtual property tours, and cinematic real estate presentations for developers, builders, and infrastructure companies across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, and all major Indian cities.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "3D Architectural Walkthrough Video Production",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "3D walkthrough videos from ₹75,000 for residential units; township master plan walkthroughs from ₹3,50,000",
    },
  },
  image: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`,
  url: `${BASE}/services/3d-walkthrough-video-company-india`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "3D Walkthrough Video Company India",
      item: `${BASE}/services/3d-walkthrough-video-company-india`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Alliance Media Labs the best 3D walkthrough video company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs is India's most trusted 3D walkthrough video company — with 200+ projects delivered for leading real estate developers, infrastructure companies, and government agencies. We use AI-powered rendering, photorealistic texturing, and cinematic camera choreography to produce walkthroughs that drive sales decisions. Our in-house team handles everything from concept to delivery with no outsourcing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to produce a 3D walkthrough video in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard residential walkthrough videos (2–4 minutes) take 10–18 working days. Large township or commercial walkthroughs take 20–35 working days. Rush production (5–8 days) is available for urgent project launches at a premium. Timeline starts from drawing and reference sign-off.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a 3D walkthrough video in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough video prices in India range from ₹75,000 for a simple apartment walkthrough to ₹5,00,000+ for a full township cinematic presentation. Cost depends on project scale, duration, level of detail, AI enhancements, and number of revision rounds. Contact us for a detailed quote based on your drawings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you produce 3D walkthroughs across all Indian cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We produce and deliver 3D walkthrough videos for real estate projects across India — Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, Chennai, Ahmedabad, Kolkata, and all other cities. Our cloud-based delivery means you receive final files within hours of approval, regardless of your city.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create a 3D walkthrough from my CAD or architectural drawings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work directly from AutoCAD DWG, Revit, SketchUp, and PDF architectural drawings. Our 3D team models every element precisely from your plans before any rendering begins, ensuring the walkthrough is construction-accurate — critical for RERA compliance and investor presentations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of 3D walkthrough videos does your company produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We produce five types of 3D walkthrough videos: (1) Residential apartment and villa walkthroughs, (2) Commercial office and retail walkthroughs, (3) Township master plan flythrough animations, (4) Interior cinematic walkthroughs with furniture and lighting detail, and (5) Luxury branded walkthroughs with AI-enhanced photorealism for premium projects.",
      },
    },
  ],
};

const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "3D Walkthrough Video — Etereo 1, Goa | Alliance Media Labs",
  description:
    "Cinematic 3D property walkthrough for Etereo 1, Goa — a luxury residential project by Etereo Realty. Showcasing photorealistic renders, fluid camera movement, and premium interior detailing produced by Alliance Media Labs.",
  thumbnailUrl: `${BASE}/images/portfolio/1.png`,
  uploadDate: "2025-03-01",
  duration: "PT2M45S",
  contentUrl: "https://www.youtube.com/watch?v=BiCCdx0fDik",
  embedUrl: "https://www.youtube.com/embed/BiCCdx0fDik",
  publisher: {
    "@type": "Organization",
    name: "Alliance Media Labs",
    logo: { "@type": "ImageObject", url: `${BASE}/images/logo.png` },
  },
};

export default function WalkthroughVideoCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />
      <WalkthroughVideoCompanyClient />
    </>
  );
}
