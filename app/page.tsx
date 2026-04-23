import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import HeroSection from "@/app/components/home/HeroSection";
import AboutSection from "@/app/components/home/AboutSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import PortfolioSection from "@/app/components/home/PortfolioSection";
import TechnologySection from "@/app/components/home/TechnologySection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import ContactSection from "@/app/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Alliance Media Labs | #1 Real Estate Visualization Company in India",
  description:
    "Alliance Media Labs — India's leading real estate visualization company. 3D walkthrough videos, VR tours, architectural renders, drone shoots & digital marketing for real estate developers in Mumbai, Delhi NCR, Bangalore & Gurugram. 500+ projects delivered.",
  keywords:
    "real estate visualization company India, 3D walkthrough video service India, architectural visualization India, VR tours real estate, drone shoots real estate, 3D renders India, real estate marketing company Mumbai Delhi Bangalore, photorealistic architectural rendering, real estate 3D animation India, property visualization agency",
  alternates: {
    canonical: "https://www.alliancemedialabs.com",
  },
  openGraph: {
    title: "Alliance Media Labs | #1 Real Estate Visualization Company in India",
    description:
      "India's leading real estate visualization company. 3D walkthrough videos, VR tours, architectural renders, drone shoots & digital marketing. 500+ projects delivered across Mumbai, Delhi NCR, Bangalore & Gurugram.",
    url: "https://www.alliancemedialabs.com",
    siteName: "Alliance Media Labs",
    images: [
      {
        url: "https://www.alliancemedialabs.com/images/home/1.jpg",
        width: 1200,
        height: 630,
        alt: "Alliance Media Labs — Real Estate Visualization Company India",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alliance Media Labs | #1 Real Estate Visualization Company in India",
    description:
      "India's leading real estate visualization company. 3D walkthrough videos, VR tours, architectural renders & drone shoots. 500+ projects delivered.",
    images: ["https://www.alliancemedialabs.com/images/home/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://www.alliancemedialabs.com/#organization",
    name: "Alliance Media Labs",
    legalName: "Alliance Media Labs",
    description:
      "India's leading real estate visualization company specializing in 3D walkthrough videos, virtual reality tours, architectural renders, drone shoots, and digital marketing for real estate developers.",
    url: "https://www.alliancemedialabs.com",
    logo: {
      "@type": "ImageObject",
      url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png",
      width: 320,
      height: 88,
    },
    image: "https://www.alliancemedialabs.com/images/home/1.jpg",
    telephone: "+91-9999916744",
    email: "info@alliancemedialabs.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9999916744",
        contactType: "customer service",
        email: "info@alliancemedialabs.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
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
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Visualization Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Walkthrough Videos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virtual Reality Tours" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Renders & Isometrics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone Shoots" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Scale Models" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      ],
    },
    sameAs: [
      "https://linkedin.com/company/alliance-media-labs",
      "https://www.instagram.com/alliancemedialabs",
      "https://youtube.com/@alliancemedialabs",
      "https://www.facebook.com/share/1KC5TqxSQL",
    ],
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
    slogan: "Bringing Real Estate to Life",
    dateModified: new Date().toISOString().split("T")[0],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.alliancemedialabs.com/#website",
    url: "https://www.alliancemedialabs.com",
    name: "Alliance Media Labs",
    description: "Real Estate Visualization & Marketing Company India",
    publisher: { "@id": "https://www.alliancemedialabs.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.alliancemedialabs.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TechnologySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
