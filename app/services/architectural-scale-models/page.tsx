import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import ArchitecturalScaleModelsClient from "./ArchitecturalScaleModelsClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Architectural Scale Models | Miniature Model Making India | Alliance Media Labs",
  description:
    "Professional architectural scale models and miniature model making for real estate developers. Precision craftsmanship, LED lighting integration, and premium materials for stunning property launch presentations. Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "architectural scale models India, 3d model making service, miniature model making India, real estate scale model, scale model makers, scale model making company, 3D scale model builder India, physical scale model real estate, model making company India, architectural model for property launch, LED scale model real estate, township scale model India, scale model making Mumbai Delhi Bangalore, professional scale model builders, miniature model, scale models",
  alternates: {
    canonical: `${BASE}/services/architectural-scale-models`,
  },
  openGraph: {
    title: "Architectural Scale Models | Miniature Model Making — Alliance Media Labs",
    description:
      "Precision architectural scale models and miniature model making for real estate developers across India. LED lighting, premium materials, and stunning craftsmanship.",
    url: `${BASE}/services/architectural-scale-models`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/architectural-scale-models/1.jpg`, width: 1200, height: 630, alt: "Architectural Scale Models — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Scale Models India | Alliance Media Labs",
    description: "Precision scale models with LED lighting for real estate developers. Property launch display models. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/services/architectural-scale-models/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/architectural-scale-models#service`,
  name: "Architectural Scale Models",
  description:
    "Professional architectural scale model making for real estate developers. Precision-crafted physical models with LED lighting, premium materials, and detailed landscaping for property launch presentations, sales offices, and exhibitions.",
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
    { "@type": "Country", name: "India" },
  ],
  image: `${BASE}/images/services/architectural-scale-models/1.jpg`,
  url: `${BASE}/services/architectural-scale-models`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Architectural Scale Models", item: `${BASE}/services/architectural-scale-models` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are architectural scale models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectural scale models are detailed miniature physical representations of buildings or real estate projects. They show the complete project layout, building design, landscaping, and amenities at a reduced scale, helping buyers and investors visualise the project before construction.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose professional scale model builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional scale model builders like Alliance Media Labs ensure high accuracy with architectural drawings, premium materials, realistic detailing with LED lighting, superior finishing, and robust construction for long-term display at sales offices and exhibitions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of scale models does Alliance Media Labs create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs creates architectural scale models for residential complexes, commercial projects, townships, and mixed-use developments. All models include LED lighting integration, landscaping details, and custom display bases.",
      },
    },
    {
      "@type": "Question",
      name: "How long does architectural scale model making take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production time depends on project scale and complexity. Simple building models are typically completed in 3–4 weeks, while large township or master plan models may take 6–10 weeks. Alliance Media Labs provides a detailed timeline after reviewing your project drawings.",
      },
    },
    {
      "@type": "Question",
      name: "How do scale models help in real estate marketing and sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scale models are the most tangible sales tool at any property launch. They improve buyer understanding of layout and scale, create strong visual impact at sales offices and exhibitions, and serve as the centrepiece of launch events — significantly boosting buyer confidence and conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs ship scale models across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs packages and ships architectural scale models securely to any city in India including Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, and other locations. We also offer installation support at your sales office or launch venue.",
      },
    },
  ],
};

export default function ArchitecturalScaleModelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArchitecturalScaleModelsClient />
    </>
  );
}
