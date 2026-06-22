import type { Metadata } from "next";

export const revalidate = 86400;
import ArchitecturalDesignModelClient from "./ArchitecturalDesignModelClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Architectural Design Model Maker for Architects | Concept & Presentation Models | Alliance Media Labs",
  description:
    "Alliance Media Labs makes concept, massing, and presentation models for architecture firms and design studios — competition entries, client presentations, and design-development models with precision CNC fabrication. Pan-India delivery.",
  keywords:
    "architectural design model maker, concept model making India, competition model maker for architects, design presentation scale model, architect model making services India, presentation model maker India, massing model India, design development model maker, architecture firm model making, conceptual scale model India",
  alternates: {
    canonical: `${BASE}/architectural-scale-models`,
  },
  openGraph: {
    title: "Architectural Design Model Maker for Architects — Alliance Media Labs",
    description:
      "Concept, massing, and presentation models for architecture firms and design studios. Competition entries, client presentations, and design-development models built with precision.",
    url: `${BASE}/architectural-scale-models`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/architectural-scale-models/2.jpg`,
        width: 1200,
        height: 630,
        alt: "Architectural Design Model Maker for Architects — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Design Model Maker for Architects | Alliance Media Labs",
    description:
      "Concept, massing, and presentation models for architecture firms — competition entries, client presentations, design-development models.",
    images: [`${BASE}/images/services/architectural-scale-models/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/architectural-scale-models#service`,
  name: "Architectural Design Model Maker for Architects",
  description:
    "Alliance Media Labs builds concept, massing, design-development, and presentation models for architecture firms and design studios across India — supporting competition entries, client pitches, and design review milestones with precision CNC fabrication.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Architectural Design & Presentation Model Making",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Pune" },
    { "@type": "Country", name: "India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Concept/massing models from ₹35,000; detailed presentation models from ₹1,50,000",
    },
  },
  image: `${BASE}/images/services/architectural-scale-models/2.jpg`,
  url: `${BASE}/architectural-scale-models`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Architectural Design Model Maker",
      item: `${BASE}/architectural-scale-models`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you make models for architecture firms, not just real estate developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While many of our clients are real estate developers, we work directly with architecture firms and design studios on concept models, massing studies, competition entries, and client presentation models — produced from your design drawings at any stage of the design process.",
      },
    },
    {
      "@type": "Question",
      name: "What is a concept or massing model and when is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A concept or massing model is a simplified physical study of a building's volumes, proportions, and site relationships — used early in design to test form and context before detailing begins. It is typically produced in monochrome or simple material blocks and turned around faster than a finished presentation model.",
      },
    },
    {
      "@type": "Question",
      name: "Can you produce a model for a design competition on a tight deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Competition models often run on compressed timelines, and we offer rush production for concept and presentation models — typically 7–12 working days depending on scale and detail level, once drawings are finalised.",
      },
    },
    {
      "@type": "Question",
      name: "What scale ratios do you work in for design and presentation models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across the full range used in architectural practice — from 1:500 and 1:200 site/massing models to 1:100 and 1:50 detailed presentation models, and 1:20 material/facade study models. Scale is selected based on what the model needs to communicate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work directly with architects on revisions during the design process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Design models often go through iterations as a scheme develops. We support staged model production — an initial massing study followed by a refined presentation model once the design is locked — keeping cost proportional to each design stage.",
      },
    },
  ],
};

export default function ArchitecturalDesignModelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArchitecturalDesignModelClient />
    </>
  );
}
