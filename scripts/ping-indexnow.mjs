/**
 * IndexNow + Google Indexing API Auto-Ping Script
 * Runs automatically after every build (postbuild hook).
 *
 * 1. IndexNow — Bing, Yandex, Seznam, Naver. Always runs (no credentials needed).
 * 2. Google Indexing API — same mechanism WordPress "Instant Indexing" plugins
 *    (e.g. RankMath) use. OPT-IN: only runs when the env var
 *    GOOGLE_INDEXING_KEY_JSON is set to the service-account JSON key
 *    (or GOOGLE_INDEXING_KEY_FILE to a path of that file). Setup:
 *      a. Google Cloud Console -> new project -> enable "Web Search Indexing API"
 *      b. Create a Service Account -> create JSON key -> download it
 *      c. Google Search Console -> Settings -> Users -> add the service
 *         account's email as OWNER
 *      d. Vercel -> Project Settings -> Environment Variables ->
 *         GOOGLE_INDEXING_KEY_JSON = (paste full JSON file contents)
 *    Note: Google officially scopes this API to job-posting/livestream pages;
 *    regular pages submitted this way may not be prioritized. GSC "Request
 *    Indexing" remains the highest-certainty manual lever.
 */

import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

const KEY = "8f3e7a2b9d1c4e6f0a5b8c3d7e2f1a4b";
const BASE = "https://alliancemedialabs.com";

const ALL_URLS = [
  // Core pages
  "/",
  "/contact",
  "/portfolio",
  "/architectural-scale-models",
  "/3d-walkthrough-videos",
  "/virtual-reality-tours",
  "/3d-renders-isometrics",
  "/construction-update-videos",
  "/route-videos",
  "/graphics-branding",

  // Blog
  "/blog",
  "/blog/portfolio-inventory-faster-sales-india",
  "/blog/scale-model-sales-gallery-real-estate-india",
  "/blog/premium-real-estate-marketing-differentiation-india",
  "/blog/sell-property-to-nri-buyers-india",
  "/blog/construction-delay-buyer-trust-india",
  "/blog/architectural-scale-model-price-india-2026",
  "/blog/best-architectural-scale-model-company-india",
  "/blog/real-estate-marketing-video-types-india",
  "/blog/3d-walkthrough-video-service",
  "/blog/architectural-scale-models-india-real-estate",
  "/blog/3d-house-rendering-guide-india",
  "/blog/real-estate-drone-photography-india",
  "/blog/scale-model-making-india-complete-guide",

  // Service pages
  "/services/scale-model-maker-india",
  "/services/3d-walkthrough-videos",
  "/services/3d-walkthrough-video-company-india",
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
    host: "alliancemedialabs.com",
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

/* ── Google Indexing API (opt-in via env credentials) ─────────────── */

function loadGoogleCredentials() {
  const raw = process.env.GOOGLE_INDEXING_KEY_JSON
    ? process.env.GOOGLE_INDEXING_KEY_JSON
    : process.env.GOOGLE_INDEXING_KEY_FILE
      ? readFileSync(process.env.GOOGLE_INDEXING_KEY_FILE, "utf-8")
      : null;
  if (!raw) return null;
  const creds = JSON.parse(raw);
  if (!creds.client_email || !creds.private_key) {
    throw new Error("service-account JSON missing client_email/private_key");
  }
  return creds;
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

async function getGoogleAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(creds.private_key, "base64url");
  const jwt = `${header}.${claims}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`token exchange failed — ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.access_token;
}

async function pingGoogleIndexingApi() {
  let creds;
  try {
    creds = loadGoogleCredentials();
  } catch (err) {
    console.log(`   ⚠️  Google Indexing API skipped (bad credentials: ${err.message})\n`);
    return;
  }
  if (!creds) {
    console.log(
      "   ℹ️  Google Indexing API not configured — set GOOGLE_INDEXING_KEY_JSON to enable (see header of this script).\n",
    );
    return;
  }

  console.log(`🔔 Google Indexing API — submitting ${ALL_URLS.length} URLs...`);
  try {
    const token = await getGoogleAccessToken(creds);
    let ok = 0;
    let failed = 0;
    for (const url of ALL_URLS) {
      try {
        const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ url, type: "URL_UPDATED" }),
        });
        if (res.ok) {
          ok++;
        } else {
          failed++;
          if (failed <= 3) console.log(`   ⚠️  ${res.status} for ${url}`);
        }
      } catch {
        failed++;
      }
    }
    console.log(`   ✅ Google Indexing API — ${ok} accepted, ${failed} failed\n`);
  } catch (err) {
    console.log(`   ⚠️  Google Indexing API skipped (${err.message})\n`);
  }
}

await pingIndexNow();
await pingGoogleIndexingApi();
