import type { Metadata } from "next";
import DroneShootsBangaloreClient from "./DroneShootsBangaloreClient";

export const metadata: Metadata = {
  title: "Drone Shoots Bangalore | Aerial Photography & Videography Services",
  description:
    "Professional drone shoots and aerial photography in Bangalore. High-quality drone videography for real estate, IT parks, construction sites. Licensed drone operators.",
  keywords:
    "drone shoots Bangalore, aerial photography Bangalore, drone videography Bangalore, real estate drone shoots, construction drone filming Bangalore",
  alternates: {
    canonical: "/services/city-services/drone-shoots-bangalore",
  },
};

export default function Page() {
  return <DroneShootsBangaloreClient />;
}
