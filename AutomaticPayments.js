function insertAutomaticPaymentData() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let source_sheet = ss.getSheetByName("automatic_payments");
  let target_sheet = ss.getSheetByName("form_formatted");

  let last_row = source_sheet.getLastRow();
  let total_amount = source_sheet.getRange(last_row, 2).getValue();

  let date = Utilities.formatDate(new Date(), 'GMT-3', 'MM/yy');

  let data = [date, total_amount, "Automatic Payments"];
  
  target_sheet.appendRow(data);
  updateExpenses(data);
}
