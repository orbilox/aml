import { NextRequest, NextResponse } from "next/server";

/**
 * Manual IndexNow Ping API
 *
 * Usage (from browser or curl):
 *   https://www.alliancemedialabs.com/api/ping-indexnow?secret=aml2026ping
 *
 * Protected by secret key — set INDEXNOW_SECRET env var to override default.
 */

const KEY = "8f3e7a2b9d1c4e6f0a5b8c3d7e2f1a4b";
const BASE = "https://www.alliancemedialabs.com";
const SECRET = process.env.INDEXNOW_SECRET || "aml2026ping";

const ALL_URLS = [
  "/",
  "/contact",
  "/portfolio",
  "/blog",
  "/blog/3d-walkthrough-video-service",
  "/blog/architectural-scale-models-india-real-estate",
  "/blog/3d-house-rendering-guide-india",
  "/blog/real-estate-drone-photography-india",
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
  "/city-services/3d-renders-mumbai",
  "/city-services/3d-walkthrough-videos-bangalore",
  "/city-services/3d-walkthrough-videos-delhi",
  "/city-services/3d-walkthrough-videos-mumbai",
  "/city-services/drone-shoots-bangalore",
  "/city-services/real-estate-video-production-gurugram",
].map((path) => `${BASE}${path}`);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Secret key check
  if (secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = {
    host: "www.alliancemedialabs.com",
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: ALL_URLS,
  };

  const results: Record<string, string> = {};

  // Ping IndexNow
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    results.indexnow = `${res.status} ${res.statusText}`;
  } catch (err: unknown) {
    results.indexnow = `error: ${err instanceof Error ? err.message : String(err)}`;
  }

  // Ping Bing
  try {
    const bingRes = await fetch(
      `https://www.bing.com/indexnow?url=${encodeURIComponent(BASE + "/")}&key=${KEY}`
    );
    results.bing = `${bingRes.status} ${bingRes.statusText}`;
  } catch (err: unknown) {
    results.bing = `error: ${err instanceof Error ? err.message : String(err)}`;
  }

  return NextResponse.json({
    success: true,
    message: `Pinged IndexNow for ${ALL_URLS.length} URLs`,
    results,
    urls_submitted: ALL_URLS.length,
    timestamp: new Date().toISOString(),
  });
}
