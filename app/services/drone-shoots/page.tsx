import type { Metadata } from "next";
import DroneShootsClient from "./DroneShootsClient";

export const metadata: Metadata = {
  title: "Location AVs & Drone Shoots | Aerial Cinematography Services | Alliance Media Labs",
  description:
    "Professional drone shoots and location AV services for real estate marketing. Scenic route planning, aerial perspectives, 4K drone footage, and cinematic production for property showcases.",
  keywords:
    "drone shoots real estate, aerial photography, location AV videos, real estate drone footage India, aerial cinematography property",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/drone-shoots`,
  },
  openGraph: {
    title: "Location AVs & Drone Shoots | Alliance Media Labs",
    description:
      "Professional drone shoots and location AV services for real estate marketing with aerial cinematography.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/drone-shoots`,
  },
};

export default function DroneShootsPage() {
  return <DroneShootsClient />;
}
