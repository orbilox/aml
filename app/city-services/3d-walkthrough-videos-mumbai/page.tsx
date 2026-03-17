import type { Metadata } from "next";
import WalkthroughMumbaiClient from "./WalkthroughMumbaiClient";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Mumbai | Real Estate & Architectural Visuals",
  description:
    "Premium 3D walkthrough videos in Mumbai for real estate marketing, architectural visualization, and immersive property tours. Showcase your project with cinematic visuals.",
  keywords:
    "3D walkthrough Mumbai, architectural visualization Mumbai, real estate 3D tours Mumbai, property walkthrough videos Mumbai, 3D rendering services Mumbai",
  openGraph: {
    title: "3D Walkthrough Videos Mumbai | Real Estate & Architectural Visuals",
    description:
      "Premium 3D walkthrough videos in Mumbai for real estate marketing, architectural visualization, and immersive property tours. Showcase your project with cinematic visuals.",
    images: ["/images/og-walkthrough.png"],
    url: "https://www.alliancemedialabs.com/services/city-services/3d-walkthrough-videos-mumbai",
  },
  alternates: {
    canonical: "/services/city-services/3d-walkthrough-videos-mumbai",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough videos are animated visual tours that allow viewers to experience a property or architectural design in a realistic and immersive way before construction or completion.",
      },
    },
    {
      "@type": "Question",
      name: "Who should use 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough videos are widely used by real estate developers, architects, builders, and marketing teams to present residential, commercial, and mixed-use projects effectively.",
      },
    },
    {
      "@type": "Question",
      name: "How do 3D walkthrough videos help real estate marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough videos help buyers understand layouts, space flow, and amenities clearly, increasing engagement across sales offices, online listings, and property launch events.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to create a 3D walkthrough video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on project size, complexity, and level of detailing, but most 3D walkthrough videos are delivered within a defined project schedule after design finalization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 3D walkthrough video services in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide professional 3D walkthrough video services in Mumbai for real estate, architectural visualization, and property marketing projects.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WalkthroughMumbaiClient />
    </>
  );
}
