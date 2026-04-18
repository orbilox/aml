import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import RendersIsometricsClient from "./RendersIsometricsClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Renders & Isometrics | Photorealistic Architectural Visualization India | Alliance Media Labs",
  description:
    "Photorealistic 3D exterior renders, interior renders, isometric illustrations, and aerial views for real estate developers in India. Stunning property visualizations that close sales. Mumbai, Delhi, Bangalore. Get a free quote.",
  keywords:
    "3D renders real estate India, 3d house rendering, 3d floor plan, 3d floor plan design, 3d floor plan designer, 3d rendering companies, 3d rendering services, rendering services, 3d render, 3d rendering of house plans, 3d rendering services near me, 3d visualisation, ai 3d rendering, photorealistic architectural rendering India, CGI rendering real estate India, architectural CGI India, 3D exterior render property, interior 3D render real estate, architectural visualization company India, architectural rendering companies, isometric illustration real estate, aerial view 3D render India, CGI renders property marketing, 3D architectural visualization Mumbai Delhi Bangalore, photorealistic property renders India, architectural visualization services in india",
  alternates: { canonical: `${BASE}/services/3d-renders-isometrics` },
  openGraph: {
    title: "3D Renders & Isometrics | Photorealistic Architectural Visualization India",
    description: "Photorealistic 3D exterior & interior renders, isometrics, and aerial views for real estate developers. Mumbai, Delhi, Bangalore.",
    url: `${BASE}/services/3d-renders-isometrics`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-renders-isometrics/1.jpg`, width: 1200, height: 630, alt: "3D Renders & Isometrics — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photorealistic 3D Renders India | Alliance Media Labs",
    description: "3D exterior & interior renders, isometrics, and aerial views for real estate. Mumbai, Delhi, Bangalore.",
    images: [`${BASE}/images/services/3d-renders-isometrics/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/3d-renders-isometrics#service`,
  name: "3D Renders & Isometrics",
  description: "Photorealistic 3D exterior renders, interior renders, isometric illustrations, and aerial views for real estate marketing and architectural presentations.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "Architectural Visualization",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Starting from ₹8,000 per exterior view for standard residential; luxury projects from ₹25,000 per view",
    },
  },
  image: `${BASE}/images/services/3d-renders-isometrics/1.jpg`,
  url: `${BASE}/services/3d-renders-isometrics`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Renders & Isometrics", item: `${BASE}/services/3d-renders-isometrics` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a photorealistic 3D render for real estate?", acceptedAnswer: { "@type": "Answer", text: "A photorealistic 3D render is a computer-generated image of a property that looks indistinguishable from a real photograph. It shows the completed building with accurate materials, lighting, landscaping, and surrounding environment — all before construction begins." } },
    { "@type": "Question", name: "What types of 3D renders does Alliance Media Labs produce?", acceptedAnswer: { "@type": "Answer", text: "We produce exterior renders, interior renders, aerial views, isometric illustrations, twilight renders, and master plan illustrations for residential, commercial, and township real estate projects." } },
    { "@type": "Question", name: "What is the difference between a 3D render and a 3D walkthrough?", acceptedAnswer: { "@type": "Answer", text: "A 3D render is a still image — a high-resolution photograph of a 3D scene. A 3D walkthrough is an animated video that moves through the space. Renders are ideal for brochures and hoardings; walkthroughs are ideal for video marketing and sales presentations." } },
    { "@type": "Question", name: "How long does a 3D render take to produce?", acceptedAnswer: { "@type": "Answer", text: "A single exterior or interior render typically takes 5–10 business days. Larger packages with multiple views, isometrics, and aerial renders may take 2–4 weeks depending on complexity." } },
    { "@type": "Question", name: "How much does a 3D render cost in India?", acceptedAnswer: { "@type": "Answer", text: "3D render pricing in India starts from ₹8,000–₹15,000 per exterior view for standard residential projects. Luxury high-rise or commercial renders with complex materials and lighting start from ₹25,000 per view. Contact Alliance Media Labs for a package quote." } },
    { "@type": "Question", name: "Can I use 3D renders for RERA registration and brochures?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs delivers renders in high-resolution print-ready formats suitable for RERA registration documents, brochures, hoardings, and digital marketing. Renders meet all quality standards for property portal listings." } },
  ],
};

export default function RendersIsometricsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RendersIsometricsClient />
    </>
  );
}
