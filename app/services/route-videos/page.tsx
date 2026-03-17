import type { Metadata } from "next";
import RouteVideosClient from "./RouteVideosClient";

export const metadata: Metadata = {
  title: "Route Videos | Location AV & Scenic Tour Videos | Alliance Media Labs",
  description:
    "Professional route videos and location AV services showcasing scenic routes, accessibility, and neighbourhood highlights for real estate projects. Cinematic production with aerial perspectives.",
  keywords:
    "route videos real estate, location AV India, scenic tour video property, neighbourhood video real estate, location showcase video",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/route-videos`,
  },
  openGraph: {
    title: "Route Videos | Alliance Media Labs",
    description:
      "Professional route and location AV videos for real estate marketing with cinematic aerial perspectives.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/route-videos`,
  },
};

export default function RouteVideosPage() {
  return <RouteVideosClient />;
}
