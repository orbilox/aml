import type { Metadata } from "next";
import Interactive3DToolsClient from "./Interactive3DToolsClient";

export const metadata: Metadata = {
  title: "Interactive 3D Tools | Property Configurators & Virtual Showrooms | Alliance Media Labs",
  description:
    "Engage buyers with interactive 3D tools including property configurators, virtual showrooms, and interactive floor plans. Real-time customization and cross-platform support for real estate.",
  keywords:
    "interactive 3D tools real estate, property configurator, virtual showroom, interactive floor plan, 3D viewer real estate India",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/interactive-3d-tools`,
  },
  openGraph: {
    title: "Interactive 3D Tools | Alliance Media Labs",
    description:
      "Property configurators, virtual showrooms, and interactive 3D tools for engaging real estate buyer experiences.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/interactive-3d-tools`,
  },
};

export default function Interactive3DToolsPage() {
  return <Interactive3DToolsClient />;
}
