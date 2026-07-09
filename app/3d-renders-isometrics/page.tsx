import type { Metadata } from "next";

export const revalidate = 86400;
import RendersIsometricsFlatClient from "./RendersIsometricsFlatClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D House Rendering India | 3D Renders, Floor Plans & Architectural Visualization | Alliance Media Labs",
  description:
    "Alliance Media Labs delivers 3D house rendering, 3D floor plan design, and full architectural visualization services for developers across India. From 3D renders and AI 3D rendering to isometric views, our architectural rendering company covers every stage of real estate marketing. Get a quote in 24 hours.",
  keywords:
    "3d house rendering, 3d floor plan, 3d renders, 3d rendering services, architectural rendering, architectural rendering services, 3d rendering interior design, rendering services, 3d render, 3d rendering of house plans, 3d rendering companies, 3d rendering services near me, 3d architectural rendering services, 3d visualisation, architectural visualisation, 3d architectural visualization, ai 3d rendering, 3d floor plan design, 3d floor plan designer, architectural rendering companies, architectural visualization services, architectural visualization services in india",
  alternates: {
    canonical: `${BASE}/3d-renders-isometrics`,
  },
  openGraph: {
    title: "3D House Rendering India | 3D Renders & Architectural Visualization — Alliance Media Labs",
    description:
      "3D house rendering, 3D floor plan design, and architectural visualization services for real estate developers across India — from a leading architectural rendering company.",
    url: `${BASE}/3d-renders-isometrics`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/3d-renders-isometrics/1.jpg`,
        width: 1200,
        height: 630,
        alt: "3D House Rendering India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D House Rendering India | Alliance Media Labs",
    description: "3D renders, 3D floor plan design, and architectural visualization services for real estate developers.",
    images: [`${BASE}/images/services/3d-renders-isometrics/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/3d-renders-isometrics#service`,
  name: "3D House Rendering & Architectural Visualization India",
  description:
    "Alliance Media Labs is an architectural rendering company delivering 3D house rendering, 3D floor plan design, 3D renders, and full architectural visualization services for developers, architects, and infrastructure projects across India.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "3D Rendering and Architectural Visualization",
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
      description: "3D renders from ₹8,000 per view; full architectural visualization packages from ₹1,00,000",
    },
  },
  image: `${BASE}/images/services/3d-renders-isometrics/1.jpg`,
  url: `${BASE}/3d-renders-isometrics`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "3D House Rendering & Architectural Visualization",
      item: `${BASE}/3d-renders-isometrics`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an architectural rendering company actually deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An architectural rendering company converts your CAD, Revit, or SketchUp drawings into photorealistic 3D renders, 3D floor plan visuals, and isometric views used for sales, marketing, and design presentations. Alliance Media Labs handles the full pipeline in-house, from 3D visualisation to final delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 3D house rendering and a 3D floor plan design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D house rendering produces a photorealistic exterior or interior view of a building, while a 3D floor plan design shows the unit layout from an angled top-down perspective with furniture and finishes visualised — both are part of our architectural visualization services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI 3D rendering to speed up delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use AI 3D rendering tools to accelerate texturing, lighting studies, and revision cycles, while every final render is reviewed and refined by our in-house artists for accuracy and photorealism before delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose between 3D rendering companies in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for an architectural rendering company with an in-house team (not outsourced), a real estate-specific portfolio, and a track record of accurate scale and lighting. Ask to see full-resolution 3D renders from a completed project before commissioning your own.",
      },
    },
    {
      "@type": "Question",
      name: "Can you produce 3D rendering of house plans before construction begins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our 3D rendering services work directly from architectural drawings, so we can produce accurate 3D house rendering, 3D floor plan design, and full architectural visualisation months before ground-breaking — ideal for pre-launch marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer 3D rendering services near me across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While our studio is centrally based, our 3D rendering services are delivered remotely to developers across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, and all major Indian cities — no site visit required for most rendering work.",
      },
    },
  ],
};

export default function RendersIsometricsFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RendersIsometricsFlatClient />
    </>
  );
}
