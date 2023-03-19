function checkStatus() {
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

function weeklyReminder() {
  let message = "Don't forget to fill in your expenses.";
  let subject = "Weekly Reminder | Expenses";

  sendEmail(subject, message);
}


function sendEmail(subject, message) {
  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: subject,
    body: message
  });
}