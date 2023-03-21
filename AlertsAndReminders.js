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