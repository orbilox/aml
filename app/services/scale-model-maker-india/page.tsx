import type { Metadata } from "next";

export const revalidate = 86400;
import ScaleModelMakerIndiaClient from "./ScaleModelMakerIndiaClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Scale Model Maker India | Architectural Model Maker | Alliance Media Labs",
  description:
    "Alliance Media Labs — India's expert scale model maker for real estate developers & infrastructure projects. Premium architectural model maker with LED lighting, CNC precision, and pan-India delivery. Trusted by Shapoorji, Hiranandani & 200+ developers. Get a quote in 24 hours.",
  keywords:
    "scale model maker India, architectural model maker, miniature model maker India, property scale model maker, scale model maker for real estate, 3D model maker India, scale model manufacturer India, architectural model maker India, real estate model maker, scale model company India, best scale model maker, professional model maker India, scale model for property launch, LED architectural model India, township scale model maker",
  alternates: {
    canonical: `${BASE}/services/scale-model-maker-india`,
  },
  openGraph: {
    title: "Scale Model Maker India | Architectural Model Maker — Alliance Media Labs",
    description:
      "India's expert scale model maker for real estate developers. Premium architectural model maker with LED lighting, CNC precision, and pan-India delivery. Trusted by 200+ developers.",
    url: `${BASE}/services/scale-model-maker-india`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/architectural-scale-models/1.jpg`,
        width: 1200,
        height: 630,
        alt: "Scale Model Maker India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Model Maker India | Architectural Model Maker | Alliance Media Labs",
    description:
      "Expert scale model maker India — LED-lit architectural models for real estate launches, investor presentations & exhibitions. Mumbai, Delhi, Bangalore & pan-India.",
    images: [`${BASE}/images/services/architectural-scale-models/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/scale-model-maker-india#service`,
  name: "Scale Model Maker India",
  description:
    "Alliance Media Labs is India's expert scale model maker — a professional architectural model maker serving real estate developers, infrastructure companies, and government agencies. We deliver precision miniature models with LED lighting, CNC fabrication, and premium handcrafted finishing across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, and all major Indian cities.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Architectural Scale Model Making",
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
      description: "Residential block models from ₹1,50,000; township master plan models from ₹7,00,000",
    },
  },
  image: `${BASE}/images/services/architectural-scale-models/1.jpg`,
  url: `${BASE}/services/scale-model-maker-india`,
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
      name: "Scale Model Maker India",
      item: `${BASE}/services/scale-model-maker-india`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Alliance Media Labs the best scale model maker in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs is India's most trusted architectural model maker — with 200+ projects delivered for leading real estate developers, infrastructure companies, and government agencies. Our in-house team handles CNC fabrication, LED integration, hand-finishing, and pan-India delivery under one roof with no outsourcing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a scale model made in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard residential block models take 15–25 working days. Large township master plan models take 30–50 working days. Rush production (7–15 days) is available for urgent launches at a premium. Timeline starts from drawing sign-off.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of hiring a scale model maker in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scale model prices in India range from ₹75,000 for a simple villa model to ₹20,00,000+ for a large township master plan with LED phase-wise lighting. Cost depends on model size, scale ratio, finish quality, and LED integration. Contact us for a detailed quote based on your drawings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver architectural models across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver and install architectural scale models across India — Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, Chennai, Ahmedabad, and other cities. Our team handles custom crating, transportation, and on-site installation at your sales office.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make a scale model from my CAD drawings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work directly from AutoCAD DWG, Revit, and SketchUp files. Our digital modelling team converts your architectural drawings into precise 3D digital models before any physical fabrication begins, ensuring dimensional accuracy down to the last millimetre.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide LED lighting in architectural scale models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LED integration is one of our core specialisations. We install warm-white building illumination, cool-white commercial lighting, fibre-optic landscape effects, and phase-wise zoning control panels — all wired into the model base for clean, reliable operation during sales office use.",
      },
    },
  ],
};

export default function ScaleModelMakerIndiaPage() {
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
      <ScaleModelMakerIndiaClient />
    </>
  );
}
