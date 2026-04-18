import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import GraphicsBrandingClient from "./GraphicsBrandingClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Real Estate Graphics & Branding Design India | Property Marketing Collaterals | Alliance Media Labs",
  description:
    "Complete graphic design and branding solutions for real estate developers in India. Logo design, brochures, hoardings, sales kit, digital assets, signage, and brand identity for property launches. Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "real estate branding design India, property brochure design, brochure design online, brochure design agency, construction hoarding design, commercial real estate graphics, property marketing collaterals India, real estate logo design, brochure design real estate India, real estate graphic design agency, property launch branding India, sales kit design real estate, real estate hoarding design, brand identity for builder India, real estate marketing material design, real estate graphics design, brochure design company, brochure design service",
  alternates: { canonical: `${BASE}/services/graphics-branding` },
  openGraph: {
    title: "Real Estate Graphics & Branding Design India | Alliance Media Labs",
    description: "Complete branding and graphic design for real estate developers. Logos, brochures, hoardings, digital assets, sales kits. Mumbai, Delhi, Bangalore.",
    url: `${BASE}/services/graphics-branding`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/3.jpg`, width: 1200, height: 630, alt: "Real Estate Graphics & Branding — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Graphics & Branding India | Alliance Media Labs",
    description: "Logos, brochures, hoardings & digital assets for real estate developers. Mumbai, Delhi, Bangalore.",
    images: [`${BASE}/images/home/3.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/graphics-branding#service`,
  name: "Real Estate Graphics & Branding Design",
  description: "Professional graphic design and branding for real estate developers including logo design, brochures, hoardings, digital assets, sales kits, and complete brand identity.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "Graphic Design & Branding",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
  url: `${BASE}/services/graphics-branding`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Graphics & Branding", item: `${BASE}/services/graphics-branding` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What branding materials do you create for real estate projects?", acceptedAnswer: { "@type": "Answer", text: "We create logos, project brand identities, brochures, sales kits, e-brochures, hoardings, site signage, presentation decks, social media templates, website banners, and complete brand guidelines for real estate developers." } },
    { "@type": "Question", name: "Can you handle branding for a property launch from scratch?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs handles end-to-end branding for property launches — from naming consultation and logo design to all print and digital marketing collaterals." } },
    { "@type": "Question", name: "Do you offer digital-ready design files?", acceptedAnswer: { "@type": "Answer", text: "Yes. All our designs are delivered in both print-ready (PDF, AI, EPS) and digital-ready (PNG, JPG, SVG, web-optimized) formats for immediate deployment across all channels." } },
    { "@type": "Question", name: "How much does real estate brochure design cost in India?", acceptedAnswer: { "@type": "Answer", text: "Real estate brochure design in India starts from ₹15,000 for a 8–12 page e-brochure. Premium print brochures with photography direction, custom illustrations, and full brand design start from ₹40,000. Contact us for a package quote." } },
    { "@type": "Question", name: "Do you design real estate hoardings and site signage?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs designs hoardings, site boards, entrance signage, sales office banners, and all outdoor marketing materials. We deliver print-ready files sized to exact hoarding dimensions for direct printing." } },
    { "@type": "Question", name: "Can you create a complete brand identity for a new real estate project?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs offers complete project branding — project name ideation, logo design, brand colour palette, typography system, and a full collateral suite including brochures, hoardings, digital creatives, and sales office materials for new project launches." } },
  ],
};

export default function GraphicsBrandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GraphicsBrandingClient />
    </>
  );
}
