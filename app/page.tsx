import type { Metadata } from "next";
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
  title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
  description:
    "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
  keywords:
    "real estate visualization, 3D walkthrough, VR tours, drone cinematography, architectural rendering, construction videos",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com",
  },
  openGraph: {
    title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
    description:
      "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com",
    siteName: "Alliance Media Labs",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Alliance Media Labs",
      },
    ],
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alliance Media Labs",
  description:
    "Creative technology company specializing in real estate content creation and virtual visualization",
  url: "https://www.alliancemedialabs.com",
  logo: "https://www.alliancemedialabs.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9988931093",
    contactType: "customer service",
    email: "info@alliancemedialabs.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-244, 3rd Floor, Unit-4, Sector 74",
    addressLocality: "Chandigarh",
    addressRegion: "Mohali",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/alliance-media-labs",
    "https://www.instagram.com/alliancemedialabs",
    "https://youtube.com/@alliancemedialabs",
    "https://www.facebook.com/share/1KC5TqxSQL",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
