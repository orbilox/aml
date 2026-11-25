import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_HOSTS = ["alliancemedialabs.com", "www.alliancemedialabs.com", "localhost"];
const MAX_FIELD = 4000;

const PLACEHOLDERS = /^(not provided|not specified|not selected|no details provided|no additional details provided|n\/a|-)$/i;

// Canonical sheet column -> every field / message-label spelling the site's forms use.
const ALIASES: Record<string, string[]> = {
  name: ["name", "from_name", "full_name"],
  email: ["email", "from_email"],
  phone: ["phone", "mobile"],
  company: ["company", "firm", "organization"],
  service: ["project_type", "service_type", "service", "service_interested_in", "interested_in", "videotype", "video_type", "deliverabletype", "deliverable_type"],
  location: ["city", "project_location", "location"],
  budget: ["budget", "budget_range"],
  timeline: ["timeline"],
  message: ["project_details", "message", "details"],
};

const HANDLED_KEYS = new Set([
  "access_key", "subject", "botcheck", "countrycode", "country_code", "source", "page_url",
  ...Object.values(ALIASES).flat(),
]);

const key = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
const clean = (v: unknown) => {
  const s = typeof v === "string" ? v.trim() : v == null ? "" : String(v).trim();
  return PLACEHOLDERS.test(s) ? "" : s.slice(0, MAX_FIELD);
};

/** Parses "Label: value" lines from the text blob some forms send as `message`. */
function parseBlob(text: string): { fields: Record<string, string>; details: string } {
  const fields: Record<string, string> = {};
  let details = "";
  const lines = text.replace(/\r/g, "").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([A-Za-z][A-Za-z /&'-]{1,40}):\s*(.*)$/);
    if (!m) continue;
    const k = key(m[1]);
    if (k === "project_details" || k === "message" || k === "details") {
      details = [m[2], ...lines.slice(i + 1)].join("\n").trim();
      break;
    }
    fields[k] = m[2];
  }
  return { fields, details };
}

export async function POST(req: Request) {
  const webhook = process.env.LEAD_SHEET_WEBHOOK_URL;
  const secret = process.env.LEAD_SHEET_SECRET;
  if (!webhook || !secret) {
    console.warn("[lead-sheet] LEAD_SHEET_WEBHOOK_URL / LEAD_SHEET_SECRET not set — lead not logged");
    return NextResponse.json({ ok: false, skipped: true });
  }

  // Only accept submissions that come from our own pages.
  const origin = req.headers.get("origin");
  if (origin) {
    let host = "";
    try { host = new URL(origin).hostname; } catch { /* invalid */ }
    if (!ALLOWED_HOSTS.includes(host)) return NextResponse.json({ ok: false }, { status: 403 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const payload: Record<string, unknown> = body?.payload && typeof body.payload === "object" ? body.payload : {};

  // Merge flat fields with fields parsed out of a text-blob message.
  const raw: Record<string, string> = {};
  for (const [k, v] of Object.entries(payload)) raw[key(k)] = clean(v);
  let blobFields: Record<string, string> = {};
  let blobDetails = "";
  const msg = typeof payload.message === "string" ? payload.message : "";
  if (/^\s*(New [^\n]*\n+\s*)?Name:\s/m.test(msg) && /\nEmail:\s/.test("\n" + msg)) {
    const parsed = parseBlob(msg);
    blobFields = Object.fromEntries(Object.entries(parsed.fields).map(([k, v]) => [k, clean(v)]));
    blobDetails = clean(parsed.details);
    delete raw.message;
  }
  const pick = (names: string[]) => {
    for (const n of names) if (raw[n]) return raw[n];
    for (const n of names) if (blobFields[n]) return blobFields[n];
    return "";
  };

  let phone = pick(ALIASES.phone);
  const code = raw.countrycode || raw.country_code || "";
  if (phone && code && !phone.startsWith("+") && !blobFields.phone) phone = `${code} ${phone}`;

  const used = new Set<string>();
  const other = [...Object.entries(raw), ...Object.entries(blobFields)]
    .filter(([k, v]) => v && !HANDLED_KEYS.has(k) && !used.has(k) && used.add(k))
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ");

  const row = {
    secret,
    submittedAt: new Date().toISOString(),
    formName: clean(body?.formName),
    pageUrl: clean(body?.pageUrl),
    name: pick(ALIASES.name),
    email: pick(ALIASES.email),
    phone,
    company: pick(ALIASES.company),
    service: pick(ALIASES.service),
    location: pick(ALIASES.location),
    budget: pick(ALIASES.budget),
    timeline: pick(ALIASES.timeline),
    message: blobDetails || raw.message || blobFields.project_details || "",
    emailStatus: clean(body?.emailStatus),
    subject: clean(payload.subject),
    other,
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(row),
      redirect: "follow",
    });
    const ok = res.ok;
    if (!ok) console.error("[lead-sheet] webhook responded", res.status);
    return NextResponse.json({ ok });
  } catch (err) {
    console.error("[lead-sheet] webhook failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
