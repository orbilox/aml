import type { Metadata } from "next";

export const revalidate = 86400;
import GraphicsBrandingFlatClient from "./GraphicsBrandingFlatClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Real Estate Graphics & Brochure Design Company India | Hoarding Design Service | Alliance Media Labs",
  description:
    "Alliance Media Labs delivers real estate graphics, real estate brochure design, and hoarding design service for developers across India. From property brochure design and construction hoarding design to full brochure design agency engagements, our real estate graphic design services cover every touchpoint. Get a quote in 24 hours.",
  keywords:
    "real estate graphics, commercial real estate graphics, graphics for real estate, real estate graphics design, real estate brochure design, property brochure design, brochure design service, brochure design online, brochure design company, brochure design agency, hoarding design service, construction hoarding design, real estate graphic design services",
  alternates: {
    canonical: `${BASE}/graphics-branding`,
  },
  openGraph: {
    title: "Real Estate Graphics & Brochure Design Company India — Alliance Media Labs",
    description:
      "Real estate graphics, brochure design, and hoarding design service for developers across India — from a trusted real estate graphic design services partner.",
    url: `${BASE}/graphics-branding`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/home/3.jpg`,
        width: 1200,
        height: 630,
        alt: "Real Estate Graphics & Branding India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Graphics & Branding India | Alliance Media Labs",
    description: "Real estate brochure design, hoarding design service, and graphics for real estate developers.",
    images: [`${BASE}/images/home/3.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/graphics-branding#service`,
  name: "Real Estate Graphics & Brochure Design Company India",
  description:
    "Alliance Media Labs provides real estate graphic design services, real estate brochure design, and hoarding design service for developers, architects, and infrastructure projects across India — covering commercial real estate graphics, construction hoarding design, and full brochure design agency engagements.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Real Estate Graphic Design and Branding",
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
      description: "Brochure design service from ₹25,000; full branding and hoarding design packages from ₹1,00,000",
    },
  },
  image: `${BASE}/images/home/3.jpg`,
  url: `${BASE}/graphics-branding`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Real Estate Graphics & Brochure Design",
      item: `${BASE}/graphics-branding`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in real estate graphic design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our real estate graphic design services cover real estate brochure design, hoarding design service, social media graphics, sales office branding, and digital ad creatives — a full commercial real estate graphics package for developers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between property brochure design and a brochure design agency engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property brochure design refers to a single brochure deliverable, while a full brochure design agency engagement includes brand-consistent collateral across brochures, hoardings, digital ads, and presentation decks — all built on one visual system.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer brochure design online for developers outside major cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our brochure design service is delivered fully online — share your project details and drawings remotely, and we handle real estate brochure design, hoarding design service, and all graphics for real estate without requiring an in-person meeting.",
      },
    },
    {
      "@type": "Question",
      name: "What is construction hoarding design and when is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construction hoarding design is large-format signage installed at a project site during construction — showing renders, amenities, and contact details to passersby. It's typically commissioned alongside real estate brochure design for a consistent pre-launch identity.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right brochure design company for a real estate project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a brochure design company with real estate-specific experience, a portfolio of commercial real estate graphics, and the ability to handle hoarding design service and digital assets under one visual system rather than outsourcing pieces separately.",
      },
    },
  ],
};

export default function GraphicsBrandingFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GraphicsBrandingFlatClient />
    </>
  );
}
