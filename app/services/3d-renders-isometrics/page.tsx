import type { Metadata } from "next";
import RendersIsometricsClient from "./RendersIsometricsClient";

export const metadata: Metadata = {
  title: "3D Renders & Isometrics | Photorealistic Architectural Visualization | Alliance Media Labs",
  description:
    "Photorealistic 3D renders and isometric illustrations for real estate and architecture. Exterior renders, interior renders, aerial views, and dynamic lighting for stunning property presentations.",
  keywords:
    "3D renders real estate, architectural visualization India, isometric illustrations, photorealistic renders, 3D architectural rendering",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-renders-isometrics`,
  },
  openGraph: {
    title: "3D Renders & Isometrics | Alliance Media Labs",
    description:
      "Photorealistic 3D renders and isometric illustrations for stunning real estate and architectural presentations.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/3d-renders-isometrics`,
  },
};

export default function RendersIsometricsPage() {
  return <RendersIsometricsClient />;
}
