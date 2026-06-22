import type { Metadata } from "next";

export const revalidate = 86400;
import VirtualPropertyTourClient from "./VirtualPropertyTourClient";

const BASE = "https://alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Virtual Property Tour Video India | Online 3D Property Tours for NRI Buyers | Alliance Media Labs",
  description:
    "Alliance Media Labs produces virtual property tour videos for NRI and remote real estate buyers — shareable online 3D tours that let overseas buyers experience a project without a site visit. Pan-India production, fast delivery.",
  keywords:
    "virtual property tour video India, online property tour video, property video for NRI buyers, pre-launch 3D walkthrough video India, animated property tour video, remote property viewing India, NRI virtual property tour, online 3D house tour India, virtual site visit real estate India, shareable property tour video",
  alternates: {
    canonical: `${BASE}/3d-walkthrough-videos`,
  },
  openGraph: {
    title: "Virtual Property Tour Video India | Online 3D Property Tours for NRI Buyers — Alliance Media Labs",
    description:
      "Shareable virtual property tour videos that let NRI and remote buyers experience a project online — without a site visit. Fast pan-India production.",
    url: `${BASE}/3d-walkthrough-videos`,
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`,
        width: 1200,
        height: 630,
        alt: "Virtual Property Tour Video India — Alliance Media Labs",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Property Tour Video India | Alliance Media Labs",
    description: "Online 3D property tours built for NRI and remote buyers. Shareable, cinematic, fast turnaround.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/3d-walkthrough-videos#service`,
  name: "Virtual Property Tour Video for NRI & Remote Buyers",
  description:
    "Alliance Media Labs produces virtual property tour videos designed for NRI and remote real estate buyers — shareable, cinematic 3D tours optimised for WhatsApp, video calls, and overseas digital marketing campaigns, eliminating the need for a physical site visit before booking.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
  },
  serviceType: "Virtual Property Tour Video Production",
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
      description: "Virtual property tour videos from ₹60,000; NRI-targeted campaign packages from ₹1,50,000",
    },
  },
  image: `${BASE}/images/services/3d-walkthrough-videos/2.jpg`,
  url: `${BASE}/3d-walkthrough-videos`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    {
      "@type": "ListItem",
      position: 2,
      name: "Virtual Property Tour Video",
      item: `${BASE}/3d-walkthrough-videos`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a virtual property tour video different from a regular 3D walkthrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual property tour video is produced and packaged specifically for remote viewing — optimised file sizes for WhatsApp sharing, subtitle options for overseas audiences, and a presentation style designed to be watched on a video call with a buyer who has never visited the site, rather than only on a sales-office screen.",
      },
    },
    {
      "@type": "Question",
      name: "Can NRI buyers really make a booking decision from a virtual tour alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when the virtual tour is combined with supporting content like drone footage and construction updates. A well-produced virtual property tour addresses the scale and quality verification concerns that are the biggest source of remote-buyer hesitation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a virtual property tour video be produced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard virtual tours are typically produced in 10–18 working days. We also offer rush production in 7 days for time-sensitive overseas marketing campaigns or roadshows.",
      },
    },
    {
      "@type": "Question",
      name: "Can the video be customised for different overseas markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can produce market-specific cuts with subtitles, currency-relevant messaging, and adjusted pacing for different NRI markets — Gulf, US, UK, Canada, Australia, and Singapore are the most common.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide this service across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We produce virtual property tour videos for developers pan-India, working remotely from your architectural drawings — Mumbai, Delhi NCR, Bangalore, Gurugram, Pune, Hyderabad, and other cities.",
      },
    },
  ],
};

export default function VirtualPropertyTourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VirtualPropertyTourClient />
    </>
  );
}
