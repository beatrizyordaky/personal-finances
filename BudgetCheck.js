function checkTotalBudget() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Monthy View");

  let status = sheet.getRange(4,1).getValue();

  switch (status) {
    case "You are under budget":
      break;
    case "You are on budget":
      sendEmail("Be aware", status);
      break;
    case "Attention, you are over budget":
      sendEmail("Attention!", status);
      break;
    case "You spent more than your income":
      sendEmail("Danger!", status);
      break;
  }
}


function checkBudgetByExpense(expense_type) {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Monthy View");

  // ensure the sheet has the current month
  let mm_yy = Utilities.formatDate(new Date(), 'GMT-3', 'MM/yy');
  sheet.getRange(2,1).setValue(mm_yy);

  let arr_expenses = sheet.getRange("B:B").getValues().flat();
  let expense_index = arr_expenses.indexOf(expense_type);
  let percentage_of_spending = sheet.getRange(expense_index + 1, 5).getValue();

  if (percentage_of_spending > 1) {
    sendEmail("Warning! Exceeded budget", "Exceeded budget for: " + expense_type);
  }
  else if (percentage_of_spending == 1) {
    sendEmail("Attention! Achieved the budget", "Achieved the budget for: " + expense_type);
  }
  
}