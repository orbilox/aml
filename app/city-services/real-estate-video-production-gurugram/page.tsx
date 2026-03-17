import type { Metadata } from "next";
import VideoProductionGurugramClient from "./VideoProductionGurugramClient";

export const metadata: Metadata = {
  title: "Real Estate Video Production Gurugram | 3D Walkthrough & Drone Videos",
  description:
    "Professional real estate video production in Gurugram. 3D walkthrough videos, aerial drone shoots, VR tours for Millennium City's premium real estate projects.",
  alternates: {
    canonical: "/services/city-services/real-estate-video-production-gurugram",
  },
};

export default function Page() {
  return <VideoProductionGurugramClient />;
}
