import type { Metadata } from "next";

export const revalidate = 86400;
import VirtualRealityToursFlatClient from "./VirtualRealityToursFlatClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Virtual Reality Tours India | VR Tour & 360 Virtual Photography for Real Estate | Alliance Media Labs",
  description:
    "Alliance Media Labs builds immersive virtual reality tours for Indian real estate developers — interactive VR tour experiences, 3D virtual home tours, and 360 virtual photography that let buyers explore a project from anywhere. Real estate virtual tours service in India, trusted by 200+ developers. Get a quote in 24 hours.",
  keywords:
    "virtual reality tours, vr tour, vr real estate tours, 3d virtual reality tours, 360 virtual photography, best virtual reality tours, real estate virtual tours, 3d virtual home tour, 3d virtual real estate tours, Real estate virtual tours service in india",
  alternates: {
    canonical: `${BASE}/virtual-reality-tours`,
  },
  openGraph: {
    title: "Virtual Reality Tours India | VR Tour & 360 Virtual Photography — Alliance Media Labs",
    description:
      "Immersive virtual reality tours, VR tour experiences, and 360 virtual photography for real estate developers across India. Real estate virtual tours service in India.",
    url: `${BASE}/virtual-reality-tours`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/virtual-reality-tours/1.jpg`,
        width: 1200,
        height: 630,
        alt: "Virtual Reality Tours India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Reality Tours India | Alliance Media Labs",
    description: "VR tour, 3D virtual home tour, and 360 virtual photography — real estate virtual tours service in India.",
    images: [`${BASE}/images/services/virtual-reality-tours/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/virtual-reality-tours#service`,
  name: "Virtual Reality Tours India",
  description:
    "Alliance Media Labs provides a complete real estate virtual tours service in India — building interactive VR tour experiences, 3D virtual home tours, and 360 virtual photography for developers, architects, and infrastructure projects nationwide.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Virtual Reality Tour Production",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "VR tour packages from ₹90,000; full interactive virtual reality tours from ₹2,50,000",
    },
  },
  image: `${BASE}/images/services/virtual-reality-tours/1.jpg`,
  url: `${BASE}/virtual-reality-tours`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Virtual Reality Tours",
      item: `${BASE}/virtual-reality-tours`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a virtual reality tours service in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our real estate virtual tours service in India includes a fully interactive VR tour with clickable hotspots, room-to-room navigation, and multi-device support — viewable on VR headsets, mobile, or desktop, plus 360 virtual photography of every space captured during production.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a VR tour and a 3D virtual home tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A VR tour is built for headset and interactive navigation with hotspots and room jumps, while a 3D virtual home tour typically refers to a browser-based walkthrough experience viewable on any device without special hardware. We build both as part of our virtual reality tours offering.",
      },
    },
    {
      "@type": "Question",
      name: "Can 360 virtual photography be produced before construction is complete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For under-construction or pre-launch projects, we build a rendered virtual reality tour directly from architectural drawings. For completed sample flats or finished projects, we capture true 360 virtual photography on-site.",
      },
    },
    {
      "@type": "Question",
      name: "Are these VR real estate tours accessible without a VR headset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every VR tour we deliver works on desktop and mobile browsers with mouse or touch navigation, and upgrades to full immersive mode automatically when viewed on a compatible headset — so buyers without hardware are never excluded.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer the best virtual reality tours for pre-launch marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Interactive virtual reality tours are one of the highest-converting pre-launch assets for developers — letting NRI and out-of-city buyers explore a project remotely, which is why we position this as one of our best virtual reality tours use cases.",
      },
    },
  ],
};

export default function VirtualRealityToursFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VirtualRealityToursFlatClient />
    </>
  );
}
