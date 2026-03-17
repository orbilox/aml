import type { Metadata } from "next";
import WalkthroughBangaloreClient from "./WalkthroughBangaloreClient";

export const metadata: Metadata = {
  title: "3D Walkthrough Videos Bangalore | Architectural Visualization Services",
  description:
    "Professional 3D walkthrough videos in Bangalore. Premium architectural visualization for IT parks, residential projects in Whitefield, Electronic City. Get quote today!",
  keywords:
    "3D walkthrough Bangalore, architectural visualization Bangalore, real estate 3D tours Whitefield, property walkthrough videos Electronic City, 3D rendering services Bangalore",
  alternates: {
    canonical: "/services/city-services/3d-walkthrough-videos-bangalore",
  },
};

export default function Page() {
  return <WalkthroughBangaloreClient />;
}
