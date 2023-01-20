function insertFormData() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let target_sheet = ss.getSheetByName("Form - Formatted");

  let forms_response = getFormNewResponse();

  target_sheet.appendRow(forms_response);
  updateExpenses(forms_response);
}


function getFormNewResponse() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Form");

  let last_row = sheet.getLastRow();
  let last_col = sheet.getLastColumn();
  let forms_response = sheet.getSheetValues(last_row, 1, 1, last_col);
  forms_response = formatFormResponse(forms_response);

  return forms_response
}


function formatFormResponse(forms_response) {
  let formatted_data = forms_response[0];

  formatted_data[0] = formatDate(formatted_data[0]);
  formatted_data[1] = parseFloat(formatted_data[1]);

  return formatted_data
}


function formatDate(date) {
  let new_date = Utilities.formatDate(new Date(date), 'GMT-3', 'MM/yy');
  return new_date;
}