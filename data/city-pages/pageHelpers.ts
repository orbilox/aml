import type { Metadata } from "next";
import { getCityPageData, getServiceConfig } from "./registry";

const BASE = "https://alliancemedialabs.com";

export function buildCityPageMetadata(fullSlug: string): Metadata {
  const data = getCityPageData(fullSlug);
  if (!data) return {};

  const url = `${BASE}/city-services/${data.fullSlug}`;
  const ogImage = `${BASE}${data.ogImage}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      siteName: "Alliance Media Labs",
      images: [{ url: ogImage, width: 1200, height: 630, alt: data.heroTitle }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function buildCityPageSchemas(fullSlug: string) {
  const data = getCityPageData(fullSlug);
  const config = data ? getServiceConfig(data.serviceSlug) : undefined;
  if (!data || !config) return null;

  const url = `${BASE}/city-services/${data.fullSlug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
    description: `Professional ${config.serviceLabel.toLowerCase()} service for real estate developers in ${data.cityName}.`,
    url,
    image: `${BASE}${data.ogImage}`,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    telephone: "+91-9999916744",
    email: "info@alliancemedialabs.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-244, 3rd Floor, Unit-4, Sector 74",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      postalCode: "160055",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.7021,
      longitude: 76.7179,
    },
    hasMap: "https://share.google/q1UmsNMlUsc99Bnwv",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: data.cityName },
      ...data.areasServed.map((a) => ({ "@type": "Place", name: a })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.serviceLabel} — ${data.cityName}`,
      itemListElement: config.services(data.cityName).map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${s.title} — ${data.cityName}` },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: data.heroTitle, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...config.baseFaqs(data.cityName), ...data.extraFaqs].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { localBusinessSchema, breadcrumbSchema, faqSchema };
}
