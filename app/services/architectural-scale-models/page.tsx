import type { Metadata } from "next";
import ArchitecturalScaleModelsClient from "./ArchitecturalScaleModelsClient";

export const metadata: Metadata = {
  title: "Architectural Scale Models | Miniature Model Making India | Alliance Media Labs",
  description:
    "Professional architectural scale models and miniature model making for real estate developers. Precision craftsmanship, LED lighting integration, and premium materials for stunning property presentations.",
  keywords:
    "architectural scale models India, miniature model making, real estate scale model, 3D scale model, professional scale model builders",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/architectural-scale-models`,
  },
  openGraph: {
    title: "Architectural Scale Models | Alliance Media Labs",
    description:
      "Precision architectural scale models and miniature model making for real estate developers across India.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/architectural-scale-models`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are architectural scale models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architectural scale models are detailed miniature representations of buildings or real estate projects that help visualize design, layout, and scale before construction.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose professional scale model builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional scale model builders ensure high accuracy, premium materials, realistic detailing, and superior finishing, which enhances project presentation and marketing impact.",
      },
    },
    {
      "@type": "Question",
      name: "What types of scale models does Alliance Media Labs create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alliance Media Labs creates architectural scale models, real estate scale models, 3D scale models, and customized miniature model making solutions for architects, developers, and exhibitions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does architectural scale model making take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time required depends on project scale, complexity, and detailing, but most architectural scale models are delivered within a competitive and defined timeframe.",
      },
    },
    {
      "@type": "Question",
      name: "How do scale models help in real estate marketing and sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scale models improve buyer understanding, increase engagement, and create strong visual appeal at sales offices and exhibitions, helping real estate projects convert faster.",
      },
    },
  ],
};

export default function ArchitecturalScaleModelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ArchitecturalScaleModelsClient />
    </>
  );
}
