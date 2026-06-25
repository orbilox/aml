import type { Metadata } from "next";

export const revalidate = 86400;
import ArchitecturalDesignModelClient from "./ArchitecturalDesignModelClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Scale Model Making Company India | Architectural Scale Models & 3D Scale Model Maker | Alliance Media Labs",
  description:
    "Alliance Media Labs is a leading scale model making company in India, building architectural scale models, real estate scale models, and miniature models for developers nationwide. Our scale model makers and scale model builders deliver precision miniature model making, 3D scale model maker, and 3D model making service with LED lighting. Get a quote in 24 hours.",
  keywords:
    "scale model making company, scale models, architectural scale models, scale model builders, miniature model, real estate scale model, scale model makers, miniature model making, scale model making, 3d scale model maker, 3d model making service, architectural scale models service in india",
  alternates: {
    canonical: `${BASE}/architectural-scale-models`,
  },
  openGraph: {
    title: "Scale Model Making Company India | Architectural Scale Models — Alliance Media Labs",
    description:
      "A leading scale model making company in India — architectural scale models, real estate scale models, and miniature model making for developers nationwide. Expert scale model makers and scale model builders.",
    url: `${BASE}/architectural-scale-models`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/architectural-scale-models/2.jpg`,
        width: 1200,
        height: 630,
        alt: "Scale Model Making Company India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Model Making Company India | Alliance Media Labs",
    description:
      "Architectural scale models, real estate scale models, and miniature model making by India's trusted scale model makers and scale model builders.",
    images: [`${BASE}/images/services/architectural-scale-models/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/architectural-scale-models#service`,
  name: "Scale Model Making Company India",
  description:
    "Alliance Media Labs is a scale model making company delivering architectural scale models, real estate scale models, and miniature model making for developers, architects, and infrastructure projects across India. Our scale model makers and scale model builders provide 3D scale model maker and 3D model making service with precision CNC fabrication and LED integration.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Scale Model Making",
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
      description: "Miniature models and concept models from ₹35,000; detailed architectural scale models from ₹1,50,000",
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
      name: "Scale Model Making Company",
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
      name: "What does a scale model making company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A scale model making company designs and fabricates miniature physical replicas of buildings, townships, and infrastructure projects. Alliance Media Labs, as a scale model making company, handles everything from digital modelling to CNC fabrication, LED integration, and hand-finishing — delivering architectural scale models and real estate scale models for sales offices, exhibitions, and design presentations.",
      },
    },
    {
      "@type": "Question",
      name: "What are architectural scale models used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectural scale models are used to showcase building design, layout, and scale to buyers, investors, and design review panels. Real estate developers use architectural scale models at sales offices and launch events, while architects use them for design presentations and competition entries.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the best scale model makers and scale model builders in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best scale model makers and scale model builders combine in-house digital modelling, CNC and laser fabrication, and hand-finishing under one roof. Alliance Media Labs is a trusted scale model making company with 200+ projects delivered as scale model makers and scale model builders for developers across India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between miniature model making and a full-scale architectural scale model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miniature model making typically refers to smaller-scale, detailed dioramas built at ratios like 1:500 or 1:1000, while architectural scale models for real estate are often larger, more detailed builds at 1:100 or 1:200 with LED lighting and landscaping. Both fall under our scale model making services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer 3D scale model maker and 3D model making service together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our 3D scale model maker workflow starts with a 3D model making service — converting your CAD or BIM drawings into a precise digital model — before any physical fabrication begins. This ensures dimensional accuracy in every real estate scale model and architectural scale model we build.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide architectural scale models service in India for all cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver our architectural scale models service in India across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, and other major cities, with on-site installation support included.",
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
