import type { Metadata } from "next";
import DroneShootsClient from "./DroneShootsClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Drone Shoots & Location AV for Real Estate | Aerial Cinematography India | Alliance Media Labs",
  description:
    "Professional drone shoots and location AV production for real estate marketing in India. 4K aerial cinematography, licensed drone operators, scenic route planning. Mumbai, Delhi NCR, Bangalore, Gurugram. Get a quote.",
  keywords:
    "drone shoots real estate India, aerial photography real estate, location AV production India, real estate drone footage, aerial cinematography property India, 4K drone video real estate, DGCA certified drone operator India, licensed drone operator real estate, real estate aerial videography Mumbai Delhi Bangalore, drone photography property marketing India",
  alternates: { canonical: `${BASE}/services/drone-shoots` },
  openGraph: {
    title: "Drone Shoots & Location AV for Real Estate | Aerial Cinematography India",
    description: "4K aerial drone cinematography and location AV for real estate marketing. Licensed operators. Mumbai, Delhi NCR, Bangalore, Gurugram.",
    url: `${BASE}/services/drone-shoots`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/2.jpg`, width: 1200, height: 630, alt: "Drone Shoots Real Estate — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Shoots & Location AV Real Estate India | Alliance Media Labs",
    description: "4K aerial cinematography and location AV for real estate. Licensed drone operators. Pan-India service.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/drone-shoots#service`,
  name: "Drone Shoots & Location AV for Real Estate",
  description: "Professional aerial drone cinematography and location AV production for real estate marketing. 4K footage, licensed operators, scenic route planning, cinematic post-production.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "Aerial Cinematography",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "City", name: "Gurugram" }, { "@type": "Country", name: "India" }],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Starting from ₹15,000 for a half-day shoot; full-day packages from ₹30,000",
    },
  },
  url: `${BASE}/services/drone-shoots`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Drone Shoots & Location AV", item: `${BASE}/services/drone-shoots` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you have licensed drone operators?", acceptedAnswer: { "@type": "Answer", text: "Yes. All Alliance Media Labs drone pilots are DGCA-licensed and operate fully compliant drones with proper permissions for real estate shoots across India." } },
    { "@type": "Question", name: "What is a location AV video?", acceptedAnswer: { "@type": "Answer", text: "A location AV (audio-visual) video showcases the surrounding environment of a real estate project — connectivity routes, nearby schools, hospitals, malls, and scenic elements — to highlight location advantages to buyers." } },
    { "@type": "Question", name: "What resolution is the drone footage?", acceptedAnswer: { "@type": "Answer", text: "We shoot in 4K resolution with stabilized DJI drones. Footage is color graded and post-produced for broadcast-quality output suitable for TV commercials, YouTube, and property portals." } },
    { "@type": "Question", name: "Can you shoot during golden hour or at night?", acceptedAnswer: { "@type": "Answer", text: "Yes. We plan shoots around optimal lighting conditions including golden hour (sunrise/sunset) and twilight. Low-light drone footage is available for specific projects with the appropriate equipment." } },
    { "@type": "Question", name: "How much does a real estate drone shoot cost in India?", acceptedAnswer: { "@type": "Answer", text: "Drone shoot pricing in India starts from ₹15,000 for a standard half-day shoot. Full-day packages with multiple angles, golden hour footage, and post-production editing start from ₹30,000. Large township or multi-location shoots are priced on request." } },
    { "@type": "Question", name: "What permissions are needed for a drone shoot at a construction site?", acceptedAnswer: { "@type": "Answer", text: "Drone shoots in India require DGCA Remote Pilot License (RPL) for operators, drone registration, and local permissions depending on the shoot location. Alliance Media Labs handles all regulatory compliance and permissions for every shoot." } },
  ],
};

export default function DroneShootsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DroneShootsClient />
    </>
  );
}
