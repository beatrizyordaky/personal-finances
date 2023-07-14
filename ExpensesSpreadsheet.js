function updateExpenses(forms_response) {
  let date = forms_response[0];
  let value = forms_response[1];
  let expense_type = forms_response[2];

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("all_expenses");
  let range = sheet.getRange(getRowNumber(expense_type, sheet), getColNumber(date, sheet));

  if (expense_type === "Automatic Payments") {
    range.setValue(0);
  }

  let old_value = range.getValue();
  range.setValue(old_value + value);

  let total = sheet.getRange(getRowNumber("Total", sheet), getColNumber(date, sheet)).getValue();

  sendEmail(
    "Expenses update",
    "You already spent R$" + total + " this month. To see in detail, check the link https://docs.google.com/spreadsheets/d/1zg18l-1faPuiMffPAREtw8hvNiNAAEijXpXlkNS0iNE/edit?usp=sharing"
  )
}
