import type { Metadata } from "next";
import IsometricsClient from "./IsometricsClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Isometric Views for Real Estate | Master Plan Isometrics India | Alliance Media Labs",
  description:
    "Professional 3D isometric views and master plan isometrics for real estate developers. Bird's-eye perspective renders that showcase entire townships, amenity zones, and project layouts. Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "3D isometric view real estate India, master plan isometric India, township isometric view India, isometric render property, bird's eye view township India, township master plan 3D render, isometric architectural visualization India, 3D project layout render, isometric amenity zone view, animated isometric flyover India, real estate isometric view Mumbai Delhi Bangalore",
  alternates: {
    canonical: `${BASE}/services/3d-isometrics`,
  },
  openGraph: {
    title: "3D Isometric Views for Real Estate — Alliance Media Labs",
    description:
      "Bird's-eye isometric renders that showcase entire project layouts, township master plans, and amenity zones for real estate developers across India.",
    url: `${BASE}/services/3d-isometrics`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-renders-isometrics/1.jpg`, width: 1200, height: 630, alt: "3D Isometric Views — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Isometric Views India | Alliance Media Labs",
    description: "Photorealistic 3D isometric renders for real estate master plans and project layouts. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/services/3d-renders-isometrics/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/3d-isometrics#service`,
  name: "3D Isometric Views",
  description:
    "Professional 3D isometric view production for real estate developers. Photorealistic bird's-eye renders of project layouts, master plans, amenity zones, and township overviews.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "3D Architectural Visualization",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  image: `${BASE}/images/services/3d-isometrics/1.jpg`,
  url: `${BASE}/services/3d-isometrics`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Isometrics", item: `${BASE}/services/3d-isometrics` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a 3D isometric view in real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D isometric view is a photorealistic bird's-eye perspective render of a real estate project showing the entire layout, buildings, amenities, landscaping, and surroundings from an elevated angled viewpoint. It helps buyers understand the scale and scope of large projects.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a master plan and an isometric view?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A master plan is a 2D or simplified overhead view showing plot boundaries and zoning. A 3D isometric view is a photorealistic 3D render with depth, buildings, landscaping, and atmosphere that creates a compelling visual of the completed project.",
      },
    },
    {
      "@type": "Question",
      name: "When should real estate developers use isometric views?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D isometric views are ideal for township projects, large residential complexes, and commercial developments where buyers need to understand overall scale and layout. They are used on hoardings, brochures, digital ads, and project launch presentations.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs create animated isometric views?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs creates both static isometric renders and animated flyover sequences that provide a dynamic bird's-eye tour of the entire project, ideal for digital marketing and project launch events.",
      },
    },
    {
      "@type": "Question",
      name: "How is a 3D isometric view different from a 3D render?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D render typically shows a close-up exterior or interior view from ground or eye level. A 3D isometric view is always a bird's-eye angled perspective showing the entire project layout from above — ideal for townships, large complexes, and master plans where overall scale matters.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 3D isometric view cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D isometric view pricing starts from ₹20,000 for a single static bird's-eye render of a smaller project. Large township master plan isometrics with full landscaping, multiple buildings, and amenity zones start from ₹60,000. Animated flyover sequences are priced separately.",
      },
    },
  ],
};

export default function IsometricsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <IsometricsClient />
    </>
  );
}
