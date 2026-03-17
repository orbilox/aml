import type { Metadata } from "next";
import RendersMumbaiClient from "./RendersMumbaiClient";

export const metadata: Metadata = {
  title: "3D Renders Mumbai | Architectural Visualization & 3D Modeling Services",
  description:
    "Professional 3D renders and architectural visualization in Mumbai. High-quality 3D modeling for real estate projects in Bandra, Worli, Lower Parel. Get quote today!",
  keywords:
    "3D renders Mumbai, architectural visualization Mumbai, 3D modeling Mumbai, real estate renders Mumbai, photorealistic 3D images Mumbai",
  alternates: {
    canonical: "/services/city-services/3d-renders-mumbai",
  },
};

export default function Page() {
  return <RendersMumbaiClient />;
}
