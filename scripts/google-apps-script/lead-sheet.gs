/**
 * Alliance Media Labs — consolidated lead sheet
 *
 * Receives every website form submission (sent by /api/lead-sheet) and appends it
 * as one row. One-time setup:
 *
 *  1. Open the Google Sheet -> Extensions -> Apps Script, and paste this whole file.
 *  2. Project Settings (gear icon) -> Script properties -> Add:
 *       LEAD_SHEET_SECRET = a long random string (the same value goes in the site's env)
 *  3. Deploy -> New deployment -> type "Web app"
 *       Execute as: Me      Who has access: Anyone
 *     Authorise when asked, then copy the "Web app URL".
 *  4. On the website host set the env vars:
 *       LEAD_SHEET_WEBHOOK_URL = the Web app URL
 *       LEAD_SHEET_SECRET      = the same secret as step 2
 *  5. After editing this script later: Deploy -> Manage deployments -> edit -> New version.
 *
 * Run testLead() once from the editor to check a row is added (then delete that row).
 */

var SHEET_NAME = "Leads";
var TIMEZONE = "Asia/Kolkata";
var HEADERS = [
  "Submitted At (IST)", "Form Name", "Page URL", "Name", "Email", "Phone", "Company",
  "Service / Project Type", "City / Location", "Budget", "Timeline", "Message",
  "Email Sent", "Subject", "Other Details",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty("LEAD_SHEET_SECRET");
    if (!secret || data.secret !== secret) return json_({ ok: false, error: "unauthorized" });

    var sheet = getSheet_();
    sheet.appendRow([
      Utilities.formatDate(new Date(data.submittedAt || new Date()), TIMEZONE, "dd MMM yyyy, hh:mm a"),
      safe_(data.formName), safe_(data.pageUrl), safe_(data.name), safe_(data.email),
      safe_(data.phone), safe_(data.company), safe_(data.service), safe_(data.location),
      safe_(data.budget), safe_(data.timeline), safe_(data.message),
      safe_(data.emailStatus), safe_(data.subject), safe_(data.other),
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#facc15");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(2, 240);
    sheet.setColumnWidth(3, 320);
    sheet.setColumnWidth(12, 360);
  }
  return sheet;
}

// Stops spreadsheet formulas being injected through form fields (=, +, -, @ at the start).
function safe_(v) {
  var s = v == null ? "" : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function testLead() {
  var secret = PropertiesService.getScriptProperties().getProperty("LEAD_SHEET_SECRET");
  var res = doPost({ postData: { contents: JSON.stringify({
    secret: secret, submittedAt: new Date().toISOString(), formName: "TEST — delete this row",
    pageUrl: "https://alliancemedialabs.com/test", name: "Test Lead", email: "test@example.com",
    phone: "+91 9999999999", message: "Test row from testLead()", emailStatus: "Sent",
  }) } });
  Logger.log(res.getContent());
}
