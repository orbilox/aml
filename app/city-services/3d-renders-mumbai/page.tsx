import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import RendersMumbaiClient from "./RendersMumbaiClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Renders Mumbai | Photorealistic Architectural Visualization & 3D Modeling | Alliance Media Labs",
  description:
    "Professional 3D renders and architectural visualization in Mumbai. High-quality exterior and interior renders for real estate projects in Bandra, Worli, Lower Parel, Thane, and Navi Mumbai. Get a free quote today.",
  keywords:
    "3D renders Mumbai, architectural visualization Mumbai, photorealistic renders Mumbai, exterior 3D render Mumbai, interior 3D render Mumbai, CGI renders Mumbai, real estate renders Mumbai, 3D modeling Mumbai, architectural render Bandra, render Worli, CGI visualization Lower Parel, property render Thane, 3D image real estate Mumbai",
  alternates: {
    canonical: `${BASE}/city-services/3d-renders-mumbai`,
  },
  openGraph: {
    title: "3D Renders Mumbai | Architectural Visualization — Alliance Media Labs",
    description:
      "Professional 3D architectural renders for Mumbai real estate developers. Photorealistic exterior and interior CGI for Bandra, Worli, Lower Parel, Thane, and Navi Mumbai.",
    url: `${BASE}/city-services/3d-renders-mumbai`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-renders-isometrics/1.jpg`, width: 1200, height: 630, alt: "3D Renders Mumbai — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Renders Mumbai | Alliance Media Labs",
    description: "Photorealistic 3D architectural renders for Mumbai real estate. Bandra, Worli, Lower Parel, Thane, Navi Mumbai.",
    images: [`${BASE}/images/services/3d-renders-isometrics/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#organization`,
  name: "Alliance Media Labs",
  description: "Professional 3D render and architectural visualization service for real estate developers in Mumbai.",
  url: `${BASE}/city-services/3d-renders-mumbai`,
  priceRange: "₹₹₹",
  telephone: "+91-9988931093",
  email: "info@alliancemedialabs.com",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Neighborhood", name: "Bandra" },
    { "@type": "Neighborhood", name: "Worli" },
    { "@type": "Neighborhood", name: "Lower Parel" },
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Navi Mumbai" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Renders Mumbai", item: `${BASE}/city-services/3d-renders-mumbai` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of 3D renders does Alliance Media Labs produce in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs produces photorealistic exterior renders, interior renders, aerial renders, night renders, and isometric renders for residential, commercial, and luxury real estate projects across Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "How much do 3D renders cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D render pricing in Mumbai starts from ₹8,000–₹15,000 per single exterior view for standard residential projects, and goes up to ₹50,000+ per view for luxury high-rise projects with complex lighting and materials. Contact us for a project-specific quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to create 3D renders for a Mumbai project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 3D renders for Mumbai projects are delivered in 5–10 working days per view depending on complexity. Rush delivery options are available for project launches.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs create 3D renders from CAD drawings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We create all 3D renders from architectural drawings, CAD files, floor plans, and elevation drawings. Our team handles complete 3D modelling, material application, lighting setup, and high-resolution rendering in-house.",
      },
    },
  ],
};

export default function RendersMumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RendersMumbaiClient />
    </>
  );
}
