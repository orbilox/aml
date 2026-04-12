import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import VirtualRealityToursClient from "./VirtualRealityToursClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Virtual Reality Tours for Real Estate | 360° VR Property Tours India | Alliance Media Labs",
  description:
    "Immersive 360° Virtual Reality tours for real estate developers in India. Interactive VR property walkthroughs with hotspots, multi-device support, browser-based — no headset required. Mumbai, Delhi NCR, Bangalore. Get a free demo.",
  keywords:
    "virtual reality tours real estate India, 360 degree VR tour property, VR property tour India, immersive real estate tour, interactive 360 property walkthrough, VR tour for apartment buyers, browser-based VR tour real estate, 360 virtual tour real estate Mumbai Delhi Bangalore, VR showroom real estate India",
  alternates: { canonical: `${BASE}/services/virtual-reality-tours` },
  openGraph: {
    title: "Virtual Reality Tours for Real Estate | 360° VR Property Tours India",
    description: "Immersive 360° VR property tours for real estate developers. Interactive walkthroughs with hotspots, multi-device access. Mumbai, Delhi, Bangalore.",
    url: `${BASE}/services/virtual-reality-tours`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/virtual-reality-tours/1.jpg`, width: 1200, height: 630, alt: "Virtual Reality Tours — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "360° VR Property Tours India | Alliance Media Labs",
    description: "Immersive VR property tours with hotspots. Browser-based, no headset needed. Mumbai, Delhi, Bangalore.",
    images: [`${BASE}/images/services/virtual-reality-tours/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/virtual-reality-tours#service`,
  name: "Virtual Reality Tours for Real Estate",
  description: "360° interactive VR property tours allowing buyers to navigate through real estate projects from any device with hotspots and material customization.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "Virtual Reality Property Tour",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Starting from ₹80,000 depending on number of rooms and customization",
    },
  },
  image: `${BASE}/images/services/virtual-reality-tours/1.jpg`,
  url: `${BASE}/services/virtual-reality-tours`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Virtual Reality Tours", item: `${BASE}/services/virtual-reality-tours` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a Virtual Reality property tour?", acceptedAnswer: { "@type": "Answer", text: "A VR property tour is an interactive 360° experience where buyers navigate through a real estate project on any device. Unlike a 3D walkthrough video, VR tours let users control their view and explore rooms independently." } },
    { "@type": "Question", name: "Do buyers need a VR headset?", acceptedAnswer: { "@type": "Answer", text: "No. Alliance Media Labs VR tours are browser-based and work on smartphone, tablet, laptop, or desktop without a headset. Optional headset mode is available for sales offices." } },
    { "@type": "Question", name: "Can the VR tour be embedded on our project website?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our VR tours can be embedded on your website, shared via link, or deployed on tablets in your sales office. They are fully responsive for all screen sizes." } },
    { "@type": "Question", name: "How long does it take to create a VR tour?", acceptedAnswer: { "@type": "Answer", text: "VR tours typically take 3–6 weeks depending on the number of rooms and customization, including 3D modeling, rendering all viewpoints, hotspot mapping, and web deployment." } },
    { "@type": "Question", name: "How much does a VR property tour cost in India?", acceptedAnswer: { "@type": "Answer", text: "VR tour pricing in India starts from ₹80,000 for a standard 2–3 bedroom apartment. Larger projects with multiple unit types, custom material selectors, and sales office deployment start from ₹2,00,000. Contact Alliance Media Labs for a project quote." } },
    { "@type": "Question", name: "What is the difference between a VR tour and a 3D walkthrough video?", acceptedAnswer: { "@type": "Answer", text: "A 3D walkthrough video is a pre-rendered film that plays linearly. A VR tour is interactive — buyers navigate through the space themselves, controlling their view and exploring rooms at their own pace. VR tours are more engaging but take longer to produce." } },
  ],
};

export default function VirtualRealityToursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VirtualRealityToursClient />
    </>
  );
}
