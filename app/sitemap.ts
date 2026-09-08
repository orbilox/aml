import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

// Real last-content-change dates per route. Google ignores lastmod entirely
// when every URL reports the same build timestamp — keep these honest and
// only bump a date when the page's content actually changes.
const LASTMOD: Record<string, string> = {
  "/": "2026-06-27",
  "/contact": "2026-02-10",
  "/portfolio": "2026-06-20",
  "/construction-update-videos": "2026-07-09",
  "/route-videos": "2026-07-09",
  "/graphics-branding": "2026-07-09",
  "/services/scale-model-maker-india": "2026-06-15",
  "/services/3d-walkthrough-video-company-india": "2026-06-22",
  "/services/virtual-reality-tours": "2026-02-10",
  "/services/drone-shoots": "2026-02-10",
  "/services/3d-renders-isometrics": "2026-02-10",
  "/services/interactive-3d-tools": "2026-02-10",
  "/services/digital-marketing": "2026-02-10",
  "/services/3d-isometrics": "2026-02-10",
  "/services/interior-cinematic-walkthrough": "2026-02-10",
  "/city-services/3d-renders-mumbai": "2026-02-10",
  "/city-services/3d-walkthrough-videos-bangalore": "2026-02-10",
  "/city-services/3d-walkthrough-videos-delhi": "2026-02-10",
  "/city-services/3d-walkthrough-videos-mumbai": "2026-02-10",
  "/city-services/drone-shoots-bangalore": "2026-02-10",
  "/city-services/real-estate-video-production-gurugram": "2026-02-10",
};

const FALLBACK_DATE = new Date("2026-02-10");

function lastmod(path: string): Date {
  return LASTMOD[path] ? new Date(LASTMOD[path]) : FALLBACK_DATE;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alliancemedialabs.com";

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/construction-update-videos", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/route-videos", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/graphics-branding", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = [
    "/services/scale-model-maker-india",
    "/services/3d-walkthrough-video-company-india",
    "/services/virtual-reality-tours",
    "/services/drone-shoots",
    "/services/3d-renders-isometrics",
    "/services/interactive-3d-tools",
    "/services/digital-marketing",
    "/services/3d-isometrics",
    "/services/interior-cinematic-walkthrough",
  ];

  const cityRoutes = [
    "/city-services/3d-renders-mumbai",
    "/city-services/3d-walkthrough-videos-bangalore",
    "/city-services/3d-walkthrough-videos-delhi",
    "/city-services/3d-walkthrough-videos-mumbai",
    "/city-services/drone-shoots-bangalore",
    "/city-services/real-estate-video-production-gurugram",
  ];

  // Newest post date doubles as the blog index's lastmod.
  const newestPost = blogPosts.reduce(
    (max, p) => (p.dateISO > max ? p.dateISO : max),
    blogPosts[0]?.dateISO ?? "2026-02-10",
  );

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastmod(path),
      changeFrequency,
      priority,
    })),
    ...serviceRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastmod(path),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(newestPost),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastmod(path),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
