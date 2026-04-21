/**
 * IndexNow Auto-Ping Script
 * Runs automatically after every build (postbuild hook).
 * Submits all site URLs to IndexNow — picked up by Bing, Yandex, and other engines.
 */

const KEY = "8f3e7a2b9d1c4e6f0a5b8c3d7e2f1a4b";
const BASE = "https://www.alliancemedialabs.com";

const ALL_URLS = [
  // Core pages
  "/",
  "/contact",
  "/portfolio",

  // Blog
  "/blog",
  "/blog/3d-walkthrough-video-service",
  "/blog/architectural-scale-models-india-real-estate",
  "/blog/3d-house-rendering-guide-india",

  // Service pages
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

  // City pages
  "/city-services/3d-renders-mumbai",
  "/city-services/3d-walkthrough-videos-bangalore",
  "/city-services/3d-walkthrough-videos-delhi",
  "/city-services/3d-walkthrough-videos-mumbai",
  "/city-services/drone-shoots-bangalore",
  "/city-services/real-estate-video-production-gurugram",
].map((path) => `${BASE}${path}`);

async function pingIndexNow() {
  console.log("\n🔔 IndexNow Auto-Ping Starting...");
  console.log(`   Submitting ${ALL_URLS.length} URLs to IndexNow\n`);

  const body = {
    host: "www.alliancemedialabs.com",
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: ALL_URLS,
  };

  // Submit to IndexNow (shared with Bing, Yandex, and others)
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`   ✅ IndexNow (api.indexnow.org) — ${res.status} Accepted`);
    } else if (res.status === 422) {
      console.log(`   ⚠️  IndexNow — 422 (key file not yet publicly accessible, will work after deploy)`);
    } else {
      console.log(`   ⚠️  IndexNow — ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.log(`   ⚠️  IndexNow ping skipped (${err.message}) — will retry on next build`);
  }

  // Also submit directly to Bing for faster Windows/Edge discovery
  try {
    const bingUrl = `https://www.bing.com/indexnow?url=${encodeURIComponent(BASE + "/")}&key=${KEY}`;
    const bingRes = await fetch(bingUrl);
    if (bingRes.status === 200 || bingRes.status === 202) {
      console.log(`   ✅ Bing IndexNow — ${bingRes.status} Accepted`);
    } else {
      console.log(`   ⚠️  Bing — ${bingRes.status}`);
    }
  } catch (err) {
    console.log(`   ⚠️  Bing ping skipped (${err.message})`);
  }

  console.log("\n🏁 IndexNow ping complete.\n");
}

pingIndexNow();
