import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Portfolio | 3D Walkthrough Videos, VR Tours & Renders — Alliance Media Labs",
  description:
    "Explore 500+ real estate visualization projects by Alliance Media Labs. 3D walkthrough videos, VR tours, architectural renders, drone shoots, and scale models for leading developers across Mumbai, Delhi NCR, Bangalore, and Gurugram.",
  keywords:
    "real estate visualization portfolio India, 3D walkthrough video examples, VR tour portfolio real estate, architectural render portfolio, drone shoot portfolio real estate, Alliance Media Labs work, real estate animation examples India, 3D render samples property, walkthrough video samples Mumbai Delhi Bangalore",
  alternates: {
    canonical: `${BASE}/portfolio`,
  },
  openGraph: {
    title: "Portfolio | 3D Walkthrough Videos, VR Tours & Renders — Alliance Media Labs",
    description:
      "500+ real estate visualization projects: 3D walkthroughs, VR tours, architectural renders, and drone shoots for leading developers across India.",
    url: `${BASE}/portfolio`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`, width: 1200, height: 630, alt: "Alliance Media Labs Portfolio" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Alliance Media Labs — Real Estate Visualization",
    description: "500+ real estate visualization projects: 3D walkthroughs, VR tours, renders, drone shoots across India.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Alliance Media Labs Portfolio",
  description:
    "A comprehensive portfolio of 500+ real estate visualization projects including 3D walkthrough videos, VR tours, architectural renders, drone shoots, and scale models.",
  url: `${BASE}/portfolio`,
  publisher: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Real Estate Visualization Projects",
    numberOfItems: 500,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "3D Walkthrough Videos", url: `${BASE}/services/3d-walkthrough-videos` },
      { "@type": "ListItem", position: 2, name: "Virtual Reality Tours", url: `${BASE}/services/virtual-reality-tours` },
      { "@type": "ListItem", position: 3, name: "3D Renders & Isometrics", url: `${BASE}/services/3d-renders-isometrics` },
      { "@type": "ListItem", position: 4, name: "Drone Shoots", url: `${BASE}/services/drone-shoots` },
      { "@type": "ListItem", position: 5, name: "Architectural Scale Models", url: `${BASE}/services/architectural-scale-models` },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE}/portfolio` },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortfolioPageClient />
    </>
  );
}
