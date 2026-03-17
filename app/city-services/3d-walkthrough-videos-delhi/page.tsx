import type { Metadata } from "next";
import WalkthroughDelhiClient from "./WalkthroughDelhiClient";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Delhi NCR | Architectural Visualization Services",
  description:
    "Professional 3D walkthrough videos in Delhi NCR. Premium architectural visualization for real estate projects in Gurgaon, Noida, Greater Noida. Get quote today!",
  keywords:
    "3D walkthrough Delhi, architectural visualization Delhi NCR, real estate 3D tours Gurgaon, property walkthrough videos Noida, 3D rendering services Delhi",
  alternates: {
    canonical: "/services/city-services/3d-walkthrough-videos-delhi",
  },
};

export default function Page() {
  return <WalkthroughDelhiClient />;
}
