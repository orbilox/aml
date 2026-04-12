import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import WalkthroughVideosClient from "./WalkthroughVideosClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "3D Walkthrough Video Service India | Photorealistic Property Tour Animation",
  description:
    "Professional 3D walkthrough video service for real estate developers in India. Cinematic, photorealistic 3D property tours that sell pre-launch projects faster. Serving Mumbai, Delhi NCR, Bangalore, Gurugram. Get a free quote today.",
  keywords:
    "3D walkthrough video service India, 3D property tour animation, photorealistic walkthrough video real estate, virtual house tour 3D, 3D walkthrough video Mumbai Delhi Bangalore, real estate 3D animation India, architectural walkthrough video service, pre-launch property walkthrough, residential 3D walkthrough, commercial 3D walkthrough India, 3D walkthrough video price India, best 3D walkthrough company India",
  alternates: {
    canonical: `${BASE}/services/3d-walkthrough-videos`,
  },
  openGraph: {
    title: "3D Walkthrough Video Service India | Alliance Media Labs",
    description:
      "Photorealistic 3D walkthrough videos for real estate developers. Sell pre-launch projects faster with cinematic 3D property tours. Mumbai, Delhi NCR, Bangalore, Gurugram.",
    url: `${BASE}/services/3d-walkthrough-videos`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`, width: 1200, height: 630, alt: "3D Walkthrough Video Service — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Walkthrough Video Service India | Alliance Media Labs",
    description: "Photorealistic 3D walkthrough videos for real estate developers. Sell pre-launch faster. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/3d-walkthrough-videos#service`,
  name: "3D Walkthrough Video Service",
  description:
    "Professional 3D walkthrough video production for real estate developers. Photorealistic animations that allow buyers to virtually tour properties before construction is complete.",
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
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Starting from ₹50,000 depending on project scope",
    },
  },
  image: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`,
  url: `${BASE}/services/3d-walkthrough-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "3D Walkthrough Videos", item: `${BASE}/services/3d-walkthrough-videos` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a 3D walkthrough video service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D walkthrough video service creates photorealistic animated tours of real estate projects before construction is complete. It helps buyers virtually tour every room, amenity, and outdoor space with smooth, cinematic camera movements — eliminating the need for a physical site visit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 3D walkthrough video cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D walkthrough video costs in India typically range from ₹50,000 for a basic residential walkthrough to ₹5,00,000+ for a comprehensive luxury project with multiple typologies, amenities, and master plan flyover. Contact Alliance Media Labs for a detailed quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to produce a 3D walkthrough video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production time ranges from 2–3 weeks for a simple residential walkthrough to 5–8 weeks for a large commercial or township project with multiple sequences. Alliance Media Labs delivers faster than industry standard timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create a 3D walkthrough from architectural drawings or CAD files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs creates 3D walkthrough videos from architectural drawings, CAD files, floor plans, and even rough sketches. Our team handles complete 3D modeling, texturing, lighting, and animation in-house.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does Alliance Media Labs serve for 3D walkthrough videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve real estate developers across India including Mumbai, Delhi NCR, Bangalore, Gurugram, Pune, Hyderabad, Chennai, Kolkata, and more. Remote collaboration allows us to work with any project nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 3D walkthrough and VR tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3D walkthrough is a pre-rendered video that plays like a movie. A VR tour is an interactive experience where users navigate through spaces themselves using a headset or browser. Both are offered by Alliance Media Labs.",
      },
    },
    {
      "@type": "Question",
      name: "Can 3D walkthrough videos be used for social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. 3D walkthrough videos outperform static content by 300–400% on Instagram, YouTube, and Facebook. They are the most-shared asset at property launches and on real estate portals.",
      },
    },
  ],
};

export default function WalkthroughVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WalkthroughVideosClient />
    </>
  );
}
