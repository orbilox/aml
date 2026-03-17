import type { Metadata } from "next";
import InteriorCinematicClient from "./InteriorCinematicClient";

export const metadata: Metadata = {
  title: "Interior Cinematic Walkthrough | Luxury Interior Films | Alliance Media Labs",
  description:
    "Cinematic interior walkthrough videos for luxury real estate. Hollywood-grade production showcasing premium finishes, spatial flow, and lifestyle experiences with professional lighting and audio.",
  keywords:
    "interior cinematic walkthrough, luxury interior video real estate, interior walkthrough India, cinematic real estate video, interior lifestyle film",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/interior-cinematic-walkthrough`,
  },
  openGraph: {
    title: "Interior Cinematic Walkthrough | Alliance Media Labs",
    description:
      "Immersive interior walkthroughs highlighting premium finishes and lifestyle through cinematic storytelling.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"}/services/interior-cinematic-walkthrough`,
  },
};

export default function InteriorCinematicWalkthroughPage() {
  return <InteriorCinematicClient />;
}
