import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import RouteVideosClient from "./RouteVideosClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Route Videos & Location AV for Real Estate | Connectivity Videos India | Alliance Media Labs",
  description:
    "Professional route videos and location AV for real estate developers. Showcase project connectivity, nearby infrastructure, and location advantages with cinematic driving route videos. Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "route videos real estate India, location AV real estate, connectivity video property India, driving route video real estate, location advantage video developer, highway connectivity video real estate, metro connectivity real estate video, real estate location video Mumbai Delhi Bangalore, project connectivity video India, neighbourhood walkthrough video, proximity video real estate",
  alternates: {
    canonical: `${BASE}/services/route-videos`,
  },
  openGraph: {
    title: "Route Videos & Location AV for Real Estate — Alliance Media Labs",
    description:
      "Cinematic route and location videos that showcase project connectivity, nearby infrastructure, and location advantages for real estate developers.",
    url: `${BASE}/services/route-videos`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/2.jpg`, width: 1200, height: 630, alt: "Route Videos — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Route Videos & Location AV | Alliance Media Labs",
    description: "Connectivity and location advantage videos for real estate developers. Mumbai, Delhi NCR, Bangalore.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/route-videos#service`,
  name: "Route Videos & Location AV",
  description:
    "Professional route video and location AV production for real estate developers. Cinematic driving route videos that showcase project connectivity, proximity to key amenities, and location advantages.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Location Video Production",
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Country", name: "India" },
  ],
  image: `${BASE}/images/services/route-videos/1.jpg`,
  url: `${BASE}/services/route-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Route Videos", item: `${BASE}/services/route-videos` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a route video for real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A route video is a cinematic driving or walking video that showcases the path from key landmarks, transit hubs, or main roads to a real estate project site. It highlights connectivity, travel times, and nearby infrastructure to reassure potential buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How do route videos help real estate sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Route videos address one of the most common buyer concerns — location connectivity. By showing actual road conditions, travel time from key areas, and proximity to schools, hospitals, and metro stations, they build buyer confidence in the project location.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Location AV for real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Location AV (Audio-Visual) is a broader video that showcases the project neighbourhood, including nearby amenities, lifestyle attractions, infrastructure, green spaces, and overall area development. It tells the story of why the location is ideal for living or investment.",
      },
    },
    {
      "@type": "Question",
      name: "Can Alliance Media Labs produce route videos in any city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alliance Media Labs produces route videos and location AV across India including Mumbai, Delhi NCR, Gurugram, Bangalore, Pune, Hyderabad, and other cities with our network of production teams.",
      },
    },
    {
      "@type": "Question",
      name: "Can route videos showcase metro and highway connectivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Route videos are specifically designed to showcase metro station proximity, expressway access, and highway connectivity — key selling points for real estate buyers. We include timed driving segments, proximity text overlays, and maps to clearly communicate travel time to key destinations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a route video cost for a real estate project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Route video pricing starts from ₹20,000 for a basic driving route video with post-production. Full location AV packages that include multiple routes, drone footage, neighbourhood highlights, and motion graphics start from ₹60,000.",
      },
    },
  ],
};

export default function RouteVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RouteVideosClient />
    </>
  );
}
