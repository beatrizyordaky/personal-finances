function getColNumber(name, sheet) {
  let col_names = sheet.getSheetValues(1, 1, 1, sheet.getLastColumn()).flat();
  return col_names.indexOf(name) + 1;
}

function getRowNumber(name, sheet) {
  let row_names = sheet.getSheetValues(1, 1, sheet.getLastRow(), 1).flat();
  return row_names.indexOf(name) + 1;
}

function formatDate(date) {
  let new_date = Utilities.formatDate(new Date(date), 'GMT-3', 'MM/yy');
  return new_date;
}