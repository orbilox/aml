const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/**
 * Drop-in replacement for the Web3Forms `fetch` every website form used to make.
 * Sends the email through Web3Forms exactly as before, and also logs a copy of the
 * lead (with the form name and page URL) to the consolidated Google Sheet through
 * /api/lead-sheet. Returns the Web3Forms response, so callers are unchanged.
 */
export async function submitLead(formName: string, init: RequestInit): Promise<Response> {
  let res: Response | undefined;
  try {
    res = await fetch(WEB3FORMS_URL, init);
    return res;
  } finally {
    logLeadToSheet(formName, init, res ? (res.ok ? "Sent" : "Failed") : "Failed");
  }
}

function logLeadToSheet(formName: string, init: RequestInit, emailStatus: string) {
  try {
    const payload = JSON.parse(String(init.body));
    delete payload.access_key;
    // Fire and forget: logging must never slow down or break the form.
    fetch("/api/lead-sheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formName, pageUrl: window.location.href, emailStatus, payload }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // ignore
  }
}
