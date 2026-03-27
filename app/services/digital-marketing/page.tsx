import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing Agency India | Google Ads, Social Media & SEO | Alliance Media Labs",
  description:
    "Full-service digital marketing for real estate developers in India. Google Ads, Meta Ads, SEO, social media marketing, content strategy, and lead generation. Performance-driven campaigns for property launches. Mumbai, Delhi NCR, Bangalore.",
  keywords:
    "real estate digital marketing agency India, Google Ads for real estate India, social media marketing real estate India, property launch digital marketing, real estate lead generation India, real estate SEO India, Meta Ads property marketing, performance marketing real estate developer India, real estate content marketing, digital marketing for builders India",
  alternates: { canonical: `${BASE}/services/digital-marketing` },
  openGraph: {
    title: "Real Estate Digital Marketing Agency India | Alliance Media Labs",
    description: "Full-service digital marketing for real estate developers. Google Ads, Meta Ads, SEO, social media. Mumbai, Delhi NCR, Bangalore.",
    url: `${BASE}/services/digital-marketing`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/2.jpg`, width: 1200, height: 630, alt: "Real Estate Digital Marketing — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Digital Marketing India | Alliance Media Labs",
    description: "Google Ads, Meta Ads, SEO & social media for property launches. Performance-driven. Mumbai, Delhi, Bangalore.",
    images: [`${BASE}/images/home/2.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/digital-marketing#service`,
  name: "Real Estate Digital Marketing",
  description: "Comprehensive digital marketing for real estate developers: Google Ads, Meta Ads, SEO, social media, email marketing, and content strategy with analytics-driven ROI.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "Digital Marketing",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
  url: `${BASE}/services/digital-marketing`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Digital Marketing", item: `${BASE}/services/digital-marketing` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What digital marketing services do you offer for real estate?", acceptedAnswer: { "@type": "Answer", text: "Alliance Media Labs offers Google Search Ads, Google Display Ads, Meta (Facebook & Instagram) Ads, YouTube Ads, SEO, social media management, email marketing, content marketing, and analytics reporting for real estate developers." } },
    { "@type": "Question", name: "How do you generate leads for real estate projects?", acceptedAnswer: { "@type": "Answer", text: "We use targeted paid campaigns (Google, Meta, YouTube) combined with landing page optimization, retargeting, and CRM integration to drive qualified leads for property launches at optimal cost-per-lead." } },
    { "@type": "Question", name: "Do you handle social media for real estate developers?", acceptedAnswer: { "@type": "Answer", text: "Yes. We manage Instagram, Facebook, YouTube, and LinkedIn pages for real estate developers — creating content calendars, posting, running paid campaigns, and growing organic audiences." } },
    { "@type": "Question", name: "Can you help with SEO for a real estate website?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide full on-page and off-page SEO for real estate websites, including keyword research, content creation, technical SEO, local SEO for city-specific targeting, and backlink building." } },
    { "@type": "Question", name: "What is the typical cost-per-lead for real estate digital marketing in India?", acceptedAnswer: { "@type": "Answer", text: "Cost-per-lead (CPL) varies by city, property type, and budget. For mid-segment residential projects, CPL typically ranges from ₹500–₹1,500 on Meta Ads and ₹1,000–₹3,000 on Google Search. Luxury segment CPL can be higher due to narrower audience targeting." } },
    { "@type": "Question", name: "Do you offer performance-based digital marketing for real estate?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs offers performance marketing packages with defined lead targets, cost-per-lead benchmarks, and monthly reporting. Our campaigns are optimised for quality leads — site visits and bookings — not just raw inquiry volume." } },
  ],
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DigitalMarketingClient />
    </>
  );
}
