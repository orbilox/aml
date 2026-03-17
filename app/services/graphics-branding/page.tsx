import type { Metadata } from "next";
import GraphicsBrandingClient from "./GraphicsBrandingClient";

export const metadata: Metadata = {
  title: "Graphics & Branding Content | Real Estate Brand Identity | Alliance Media Labs",
  description:
    "Professional graphic design and branding solutions for real estate projects. Logo design, marketing collaterals, digital assets, signage, and presentation design for property developers.",
  keywords:
    "real estate branding India, graphic design real estate, property marketing collaterals, real estate logo design, brand identity developer",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/graphics-branding`,
  },
  openGraph: {
    title: "Graphics & Branding Content | Alliance Media Labs",
    description:
      "Professional graphic design and branding solutions to establish strong visual identity for real estate projects.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/graphics-branding`,
  },
};

export default function GraphicsBrandingPage() {
  return <GraphicsBrandingClient />;
}
