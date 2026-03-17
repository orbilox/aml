import type { Metadata } from "next";
import IsometricsClient from "./IsometricsClient";

export const metadata: Metadata = {
  title: "3D Isometrics | Architectural Isometric Illustrations | Alliance Media Labs",
  description:
    "Professional 3D isometric illustrations and technical visualizations for real estate. Master plan layouts, multi-level visualization, and detailed architectural documentation for property marketing.",
  keywords:
    "3D isometrics real estate, isometric illustration architecture, master plan visualization, architectural isometric India, property isometric drawing",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-isometrics`,
  },
  openGraph: {
    title: "3D Isometrics | Alliance Media Labs",
    description:
      "Professional 3D isometric illustrations and technical architectural visualizations for real estate.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-isometrics`,
  },
};

export default function IsometricsPage() {
  return <IsometricsClient />;
}
