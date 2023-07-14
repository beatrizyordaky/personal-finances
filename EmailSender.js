function sendEmail(subject, message) {
  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: subject,
    body: message
  });
}