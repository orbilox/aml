import type { Metadata } from "next";
import WalkthroughVideosClient from "./WalkthroughVideosClient";

export const metadata: Metadata = {
  title: "3D Walkthrough Video Services | 3D Property & Virtual House Tours in India",
  description:
    "Professional 3D walkthrough & virtual house tour services for real estate developers. We create stunning 3D property tours, photorealistic renders, and virtual house tours for residential and commercial projects. Get a customized quote.",
  keywords:
    "3D walkthrough videos, virtual house tours, 3D property tours India, architectural visualization services, real estate 3D animation",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-walkthrough-videos`,
  },
  openGraph: {
    title: "3D Walkthrough Videos Services | Alliance Media Labs",
    description:
      "Create stunning 3D property tours and virtual house walkthroughs with Alliance Media Labs",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-walkthrough-videos`,
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
        text: "3D walkthrough videos are animated visual tours of architectural designs and real estate projects that provide immersive, photorealistic previews before construction is complete.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a 3D walkthrough video take to produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production time varies by project complexity. Simple residential projects typically take 2-3 weeks, while large commercial developments may require 4-6 weeks for full production.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats do you deliver the final videos in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver final videos in HD (1080p) and 4K formats including MP4, MOV, and web-optimized formats suitable for websites, social media, and presentations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create 3D walkthrough videos from architectural drawings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can create detailed 3D walkthrough videos from architectural drawings, floor plans, CAD files, and even rough sketches. Our team handles the complete 3D modeling and animation process.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of 3D walkthrough video services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on project scope, complexity, and duration. Contact us for a customized quote based on your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer revisions on 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we include revision rounds in our production process to ensure the final video meets your expectations and represents your project accurately.",
      },
    },
    {
      "@type": "Question",
      name: "Can 3D walkthrough videos be used for marketing purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. 3D walkthrough videos are powerful marketing tools used across websites, social media, sales offices, investor presentations, and property exhibitions.",
      },
    },
  ],
};

export default function WalkthroughVideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WalkthroughVideosClient />
    </>
  );
}
