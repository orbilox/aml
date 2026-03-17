import type { Metadata } from "next";
import VirtualRealityToursClient from "./VirtualRealityToursClient";

export const metadata: Metadata = {
  title: "Virtual Reality Tours (360°) | Immersive VR Property Tours | Alliance Media Labs",
  description:
    "Experience properties like never before with our immersive 360° Virtual Reality Tours. Interactive VR walkthroughs for real estate projects with hotspots, multi-device support, and easy sharing.",
  keywords:
    "virtual reality tours, 360 degree tours, VR property tours India, immersive real estate tours, interactive property walkthrough",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/virtual-reality-tours`,
  },
  openGraph: {
    title: "Virtual Reality Tours (360°) | Alliance Media Labs",
    description:
      "Immersive 360° Virtual Reality Tours for real estate projects with interactive hotspots and multi-device support.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/virtual-reality-tours`,
  },
};

export default function VirtualRealityToursPage() {
  return <VirtualRealityToursClient />;
}
