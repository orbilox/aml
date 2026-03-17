import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio - Alliance Media Labs Real Estate Visualization Projects",
  description:
    "Explore our comprehensive portfolio of real estate visualization projects including 3D walkthroughs, VR tours, architectural renderings, and construction documentation.",
  keywords:
    "real estate portfolio, 3D walkthrough examples, VR tour samples, architectural visualization portfolio, construction video examples",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/portfolio`,
  },
  openGraph: {
    title: "Portfolio - Alliance Media Labs Real Estate Visualization Projects",
    description:
      "Explore our comprehensive portfolio of real estate visualization projects.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/portfolio`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Alliance Media Labs Portfolio",
  description: "Comprehensive portfolio of real estate visualization projects",
  url: "https://www.alliancemedialabs.com/portfolio",
  mainEntity: {
    "@type": "ItemList",
    name: "Real Estate Visualization Projects",
    numberOfItems: 38,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPageClient />
    </>
  );
}
