function updateExpenses(forms_response) {
  let date = forms_response[0];
  let value = forms_response[1];
  let expense_type = forms_response[2];

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");
  let range = sheet.getRange(getRowNumber(expense_type, sheet), getColNumber(date, sheet));

  if (expense_type === "Automatic Payments") {
    range.setValue(0);
  }

  let old_value = range.getValue();
  range.setValue(old_value + value);
}


function getColNumber(name, sheet) {
  let col_names = sheet.getSheetValues(1, 1, 1, sheet.getLastColumn()).flat();
  return col_names.indexOf(name) + 1;
}


function getRowNumber(name, sheet) {
  let row_names = sheet.getSheetValues(1, 1, sheet.getLastRow(), 1).flat();
  return row_names.indexOf(name) + 1;
}