import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import InteriorCinematicClient from "./InteriorCinematicClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Interior Cinematic Walkthrough Videos | Luxury Interior 3D Animation India | Alliance Media Labs",
  description:
    "Premium interior cinematic walkthrough videos for luxury real estate. Photorealistic interior 3D animation with studio-quality lighting and cinematic camera work. Showcase apartments, villas, and penthouses in Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "interior cinematic walkthrough India, luxury interior 3D animation, interior walkthrough video real estate, apartment interior 3D video, villa interior walkthrough India, penthouse interior animation, interior visualization real estate India, cinematic interior tour India, photorealistic interior render video, interior design 3D video Mumbai Delhi Bangalore",
  alternates: {
    canonical: `${BASE}/services/interior-cinematic-walkthrough`,
  },
  openGraph: {
    title: "Interior Cinematic Walkthrough Videos — Alliance Media Labs",
    description:
      "Studio-quality interior cinematic 3D walkthrough videos for luxury apartments, villas, and penthouses. Photorealistic lighting and materials for premium real estate marketing.",
    url: `${BASE}/services/interior-cinematic-walkthrough`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`, width: 1200, height: 630, alt: "Interior Cinematic Walkthrough — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Cinematic Walkthrough Videos India | Alliance Media Labs",
    description: "Photorealistic interior 3D animation for luxury apartments, villas, and penthouses. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/interior-cinematic-walkthrough#service`,
  name: "Interior Cinematic Walkthrough",
  description:
    "Premium interior cinematic walkthrough video production for luxury real estate developers. Photorealistic 3D interior animation with studio-quality lighting, furniture staging, and cinematic camera movements for apartments, villas, and penthouses.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "3D Interior Visualization",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Starting from ₹80,000 per typology for luxury interior cinematic walkthrough",
    },
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  image: `${BASE}/images/services/interior-cinematic-walkthrough/1.jpg`,
  url: `${BASE}/services/interior-cinematic-walkthrough`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Interior Cinematic Walkthrough", item: `${BASE}/services/interior-cinematic-walkthrough` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an interior cinematic walkthrough video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An interior cinematic walkthrough is a premium 3D animated video that takes viewers through the interior spaces of a property — living areas, bedrooms, kitchens, bathrooms — with photorealistic lighting, furniture, textures, and smooth cinematic camera movements that replicate a film-quality experience.",
      },
    },
    {
      "@type": "Question",
      name: "How is an interior cinematic walkthrough different from a standard 3D walkthrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard 3D walkthrough covers both exterior and interior. An interior cinematic walkthrough focuses entirely on interior spaces with higher resolution textures, more detailed furniture and material rendering, studio-quality lighting setups, and more complex cinematic camera work for a luxury presentation feel.",
      },
    },
    {
      "@type": "Question",
      name: "Which property types benefit most from interior cinematic walkthroughs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luxury apartments, premium villas, penthouses, and high-end residential projects benefit most. Interior cinematic walkthroughs help justify premium pricing by giving buyers a tangible sense of space quality, material finishes, and lifestyle experience before construction completion.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs customise interior walkthroughs for different typologies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs creates separate interior walkthrough videos for each typology — 2BHK, 3BHK, 4BHK, penthouses, and villas — each with customised furniture layouts, material palettes, and camera paths to showcase each unit type effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What inputs are needed to create an interior cinematic walkthrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We require architectural floor plans, interior design references or mood boards, material and finish specifications, and any brand guidelines. Our 3D team handles complete modelling, texturing, lighting, and animation in-house from these inputs.",
      },
    },
  ],
};

export default function InteriorCinematicWalkthroughPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <InteriorCinematicClient />
    </>
  );
}
