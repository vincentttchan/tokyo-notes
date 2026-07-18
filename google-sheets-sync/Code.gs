const SHEET_NAME = 'Expenses';
const HEADERS = [
  'Record ID', 'Created at', 'Expense date', 'Item', 'Category',
  'JPY', 'HKD', 'Rate (HKD per JPY)', 'Payment', 'Status',
  'Updated at', 'Job ID', 'Source', 'Paid by', 'Split count', 'Per person JPY'
];

/**
 * Run once from a Google Sheet-bound Apps Script project.
 * Before running, add a Script Property named SYNC_TOKEN with a private value.
 */
function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Please bind this script to a Google Sheet.');
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', spreadsheet.getId());
  ensureSheet_();
  return 'Setup complete';
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData && event.postData.contents || '{}');
    authenticate_(payload.token);
    const result = writeExpense_(payload);
    return json_({ ok: true, id: result.id, jobId: payload.jobId });
  } catch (error) {
    return json_({ ok: false, error: String(error && error.message || error) });
  }
}

function doGet(event) {
  const params = event && event.parameter || {};
  const callback = safeCallback_(params.callback);
  let response;
  try {
    authenticate_(params.token);
    if (params.action !== 'status' || !params.jobId) throw new Error('Invalid status request.');
    response = { ok: true, received: hasJob_(params.jobId), jobId: params.jobId };
  } catch (error) {
    response = { ok: false, received: false, error: String(error && error.message || error) };
  }
  return ContentService
    .createTextOutput(callback + '(' + JSON.stringify(response) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function writeExpense_(payload) {
  if (!payload.jobId || !payload.expenseId) throw new Error('Missing record identifier.');
  const action = payload.action === 'delete' ? 'delete' : 'upsert';
  const expense = payload.expense || {};
  const sheet = ensureSheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const existingRow = findRow_(sheet, 1, payload.expenseId);
    const now = new Date().toISOString();
    const rate = Number(expense.rate) || 0;
    const amount = Number(expense.amount) || 0;
    const row = [
      payload.expenseId,
      expense.createdAt || now,
      expense.date || '',
      expense.note || '',
      expense.category || '',
      amount,
      Number((amount * rate).toFixed(2)),
      rate,
      expense.payment || '',
      action === 'delete' ? 'deleted' : 'active',
      now,
      payload.jobId,
      payload.source || 'tokyo-notes',
      expense.payer || '我',
      Math.max(1, Number(expense.splitCount) || 1),
      Number((amount / Math.max(1, Number(expense.splitCount) || 1)).toFixed(2))
    ];
    if (existingRow) sheet.getRange(existingRow, 1, 1, row.length).setValues([row]);
    else sheet.appendRow(row);
    return { id: payload.expenseId };
  } finally {
    lock.releaseLock();
  }
}

function hasJob_(jobId) {
  const sheet = ensureSheet_();
  if (sheet.getLastRow() < 2) return false;
  return Boolean(sheet.getRange(2, 12, sheet.getLastRow() - 1, 1)
    .createTextFinder(jobId).matchEntireCell(true).findNext());
}

function findRow_(sheet, column, value) {
  if (sheet.getLastRow() < 2) return 0;
  const match = sheet.getRange(2, column, sheet.getLastRow() - 1, 1)
    .createTextFinder(value).matchEntireCell(true).findNext();
  return match ? match.getRow() : 0;
}

function ensureSheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Run setup() once before deploying.');
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#dfeae8');
    sheet.autoResizeColumns(1, HEADERS.length);
  } else if (sheet.getLastColumn() < HEADERS.length) {
    const start = sheet.getLastColumn() + 1;
    const missing = HEADERS.slice(start - 1);
    sheet.getRange(1, start, 1, missing.length).setValues([missing]);
    sheet.getRange(1, start, 1, missing.length).setFontWeight('bold').setBackground('#dfeae8');
    sheet.autoResizeColumns(start, missing.length);
  }
  return sheet;
}

function authenticate_(token) {
  const expected = PropertiesService.getScriptProperties().getProperty('SYNC_TOKEN');
  if (!expected) throw new Error('SYNC_TOKEN is not configured.');
  if (!token || token !== expected) throw new Error('Unauthorized.');
}

function safeCallback_(value) {
  return /^[A-Za-z_$][0-9A-Za-z_$\.]*$/.test(value || '') ? value : 'googleSheetsSyncCallback';
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
