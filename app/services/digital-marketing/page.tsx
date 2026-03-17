import type { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing | SEM, Social Media & Content Marketing | Alliance Media Labs",
  description:
    "Comprehensive digital marketing services for real estate developers. Search engine marketing, social media campaigns, email marketing, content strategy, and analytics-driven ROI.",
  keywords:
    "real estate digital marketing India, property SEM services, social media marketing real estate, real estate content marketing, digital marketing developer",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/digital-marketing`,
  },
  openGraph: {
    title: "Real Estate Digital Marketing | Alliance Media Labs",
    description:
      "Comprehensive digital marketing for real estate: SEM, social media, email, content strategy and analytics.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/digital-marketing`,
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
