import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alliancemedialabs.com";

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const serviceRoutes = [
    "/services/3d-walkthrough-videos",
    "/services/virtual-reality-tours",
    "/services/construction-update-videos",
    "/services/drone-shoots",
    "/services/3d-renders-isometrics",
    "/services/interactive-3d-tools",
    "/services/digital-marketing",
    "/services/graphics-branding",
    "/services/route-videos",
    "/services/3d-isometrics",
    "/services/interior-cinematic-walkthrough",
    "/services/architectural-scale-models",
  ];

  const blogRoutes = [
    "/blog",
    "/blog/3d-walkthrough-video-service",
    "/blog/architectural-scale-models-india-real-estate",
  ];

  const cityRoutes = [
    "/city-services/3d-renders-mumbai",
    "/city-services/3d-walkthrough-videos-bangalore",
    "/city-services/3d-walkthrough-videos-delhi",
    "/city-services/3d-walkthrough-videos-mumbai",
    "/city-services/drone-shoots-bangalore",
    "/city-services/real-estate-video-production-gurugram",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...serviceRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...cityRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
