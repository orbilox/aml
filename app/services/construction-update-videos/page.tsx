import type { Metadata } from "next";
import ConstructionUpdateVideosClient from "./ConstructionUpdateVideosClient";

export const metadata: Metadata = {
  title: "Construction Update Videos | Site Progress Documentation | Alliance Media Labs",
  description:
    "Professional construction update videos and time-lapse documentation for real estate projects. Drone cinematography, 4K quality, cloud delivery for investor and buyer confidence.",
  keywords:
    "construction update videos, site progress videos, construction time-lapse, drone construction footage, real estate progress documentation",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/construction-update-videos`,
  },
  openGraph: {
    title: "Construction Update Videos | Alliance Media Labs",
    description:
      "Professional construction update videos with drone cinematography and time-lapse documentation for real estate projects.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/construction-update-videos`,
  },
};

export default function ConstructionUpdateVideosPage() {
  return <ConstructionUpdateVideosClient />;
}
