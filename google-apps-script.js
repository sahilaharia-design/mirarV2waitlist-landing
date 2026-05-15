/**
 * Mirar Waitlist — Google Apps Script Web App
 *
 * HOW TO DEPLOY:
 * 1. Open the Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1-BsrhYr-ET4VqZZyiEDlx2DHFRNPds2evxgcr5iTvJo
 * 2. Extensions → Apps Script
 * 3. Paste this entire file, replacing any existing code
 * 4. Save (Ctrl+S / Cmd+S)
 * 5. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 6. Click Deploy → Authorize (allow all permissions)
 * 7. Copy the Web App URL — you'll need it for APPS_SCRIPT_URL in .env.local
 *
 * SHEET SETUP (auto-created on first submission):
 * Tab: "Waitlist" with columns: Timestamp | Name | Email | Note | Source | Submitted At
 */

var SHEET_NAME = 'Waitlist';

var NOTIFY_EMAIL = 'sahilaharia@gmail.com';

var HEADERS = ['Timestamp', 'Name', 'Email', 'Note', 'Source', 'Submitted At'];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    var name       = (body.name        || '').toString().trim();
    var email      = (body.email       || '').toString().trim();
    var note       = (body.note        || '').toString().trim();
    var source     = (body.source      || 'mirar-landing-v2').toString();
    var submittedAt = (body.submittedAt || new Date().toISOString()).toString();

    // Basic server-side validation
    if (!name || !email) {
      return jsonResponse({ ok: false, error: 'Name and email are required.' }, 400);
    }

    var ss    = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create the sheet + headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.setFrozenRows(1);
      // Style the header row
      sheet.getRange(1, 1, 1, HEADERS.length)
        .setBackground('#1C1A17')
        .setFontColor('#F6F1E8')
        .setFontWeight('bold');
    }

    // Check for duplicate email (case-insensitive)
    var emailCol = 3; // column C
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      var existingEmails = sheet
        .getRange(2, emailCol, lastRow - 1, 1)
        .getValues()
        .map(function(row) { return row[0].toString().toLowerCase(); });

      if (existingEmails.indexOf(email.toLowerCase()) !== -1) {
        return jsonResponse({ ok: false, error: 'duplicate', message: "You're already on the waitlist." }, 200);
      }
    }

    // Append the row
    sheet.appendRow([
      new Date(),   // Timestamp (spreadsheet date/time)
      name,
      email,
      note,
      source,
      submittedAt,  // ISO timestamp from browser
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, HEADERS.length);

    // Notify Sahil of new signup
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '🟡 Mirar Waitlist: New signup from ' + name,
      htmlBody:
        '<p><b>Name:</b> ' + name + '</p>' +
        '<p><b>Email:</b> ' + email + '</p>' +
        '<p><b>Note:</b> ' + (note || '—') + '</p>' +
        '<p><b>Source:</b> ' + source + '</p>' +
        '<p><b>Submitted:</b> ' + submittedAt + '</p>' +
        '<hr><p style="font-size:12px;color:#888;">Mirar Waitlist System</p>',
    });

    return jsonResponse({ ok: true, message: "You're on the list." }, 200);

  } catch (err) {
    return jsonResponse({ ok: false, error: err.message }, 500);
  }
}

// Allow CORS preflight and basic GET health check
function doGet() {
  return jsonResponse({ ok: true, service: 'Mirar Waitlist' }, 200);
}

function jsonResponse(payload, statusCode) {
  var output = ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
