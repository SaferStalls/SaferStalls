// creates a new gobetween database of formatted responces for inserting into the main csv file. 

function createNewDB() {
  // create new spreadsheet template
  var newnew = SpreadsheetApp.create("Formatted_Responces", 2, 17);
  Logger.log(newnew.getUrl());
  // select sheet to compile formatted data
  var newsheet = newnew.getSheetByName("Sheet1");
  // append headers for easy readability
  var headers = ["id", "name", "type", "street", "city", "state", "country", "postal", "lat", "lon", "access", "directions", "comment"];
  newsheet.appendRow(headers);
}