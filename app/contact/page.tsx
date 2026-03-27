import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Contact Alliance Media Labs | Get a Free Quote for 3D Walkthrough & Real Estate Visualization",
  description:
    "Contact Alliance Media Labs for professional real estate visualization services. Get a free quote for 3D walkthrough videos, VR tours, architectural renders, drone shoots, and digital marketing. Serving Mumbai, Delhi NCR, Bangalore, Gurugram.",
  keywords:
    "contact Alliance Media Labs, real estate visualization quote India, 3D walkthrough video quote, VR tour pricing India, architectural rendering contact, drone shoot quote real estate, real estate visualization company contact, get quote 3D walkthrough Mumbai Delhi Bangalore",
  alternates: {
    canonical: `${BASE}/contact`,
  },
  openGraph: {
    title: "Contact Alliance Media Labs | Free Quote for Real Estate Visualization",
    description:
      "Get a free quote for 3D walkthrough videos, VR tours, architectural renders, and drone shoots. India's leading real estate visualization company.",
    url: `${BASE}/contact`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/3.jpg`, width: 1200, height: 630, alt: "Contact Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Alliance Media Labs | Free Quote",
    description: "Get a free quote for 3D walkthrough videos, VR tours, renders, and drone shoots across India.",
    images: [`${BASE}/images/home/3.jpg`],
  },
  robots: { index: true, follow: true },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alliance Media Labs",
  description: "Contact Alliance Media Labs for professional real estate visualization services and get a free project quote.",
  url: `${BASE}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
    url: BASE,
    telephone: "+91-9988931093",
    email: "info@alliancemedialabs.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9988931093",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9999916744",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        email: "info@alliancemedialabs.com",
        contactType: "customer service",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-244, 3rd Floor, Unit-4, Sector 74",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      postalCode: "160055",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "Country", name: "India" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I get a quote from Alliance Media Labs?", acceptedAnswer: { "@type": "Answer", text: "Fill out the contact form on this page or call +91-9988931093. Our team responds within 24 hours with a detailed project quote based on your requirements." } },
    { "@type": "Question", name: "What is the minimum budget for a project?", acceptedAnswer: { "@type": "Answer", text: "3D walkthrough videos start from ₹50,000, drone shoots from ₹15,000, and 3D renders from ₹8,000 per view. Contact us for a customised package quote for your project." } },
    { "@type": "Question", name: "Does Alliance Media Labs work with developers outside Mumbai, Delhi, and Bangalore?", acceptedAnswer: { "@type": "Answer", text: "Yes. Alliance Media Labs works with real estate developers pan-India including Pune, Hyderabad, Chennai, Kolkata, and tier-2 cities. All 3D production work is done remotely and delivered digitally." } },
    { "@type": "Question", name: "How long does a typical project take?", acceptedAnswer: { "@type": "Answer", text: "3D renders are delivered in 5–10 working days. 3D walkthrough videos take 2–4 weeks for standard projects. VR tours take 3–6 weeks. Timelines vary based on project scope and revision rounds." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactPageClient />
    </>
  );
}
