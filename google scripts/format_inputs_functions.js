var ss = SpreadsheetApp.openById('0ApcyOCZecYGkdGllNlVIVnlyNmF2d0JfaExSQ3pVYmc');
var sssheet = ss.getSheetByName("Sheet 1");
var formsheet = ss.getSheetByName('Form Responses 1');
var newss = SpreadsheetApp.openById('0ApcyOCZecYGkdFNXV0VjcVFaZDFVUVd5R0hIcm04Qnc');
var newsssheet = newss.getSheetByName("Sheet1");


// functions

//helper that adjusts accessability to acceptable format
function Accessability(inData){
  if (inData == "Yes, the restroom is Accessable!"){
    return 1
  }
  else
  {
    return 0
  }    
}

//helper that adjusts type to acceptable format
function type(datain){
  if (datain == "Gender Neutral / Unisex"){
    return 0
  }
  else
  {
    return 1
  }
}

//main function that takes last row, formats it, inserts it into formatted db
function rowformatted() {
  var row = formsheet.getRange(2,1);
  var newrow = [];
  
  // pushing each element into the new row array. 
  newrow.push("");
  newrow.push(formsheet.getRange(2,2).getValues());
  newrow.push(type(row[5]));
  newrow.push(formsheet.getRange(2,3).getValues());
  newrow.push(formsheet.getRange(2,4).getValues());
  newrow.push(formsheet.getRange(2,5).getValues());
  newrow.push("United States");
  newrow.push("");
  newrow.push("");
  newrow.push("");
  newrow.push(Accessability(row[6]));
  newrow.push(formsheet.getRange(2,8).getValues());
  newrow.push(formsheet.getRange(2,9).getValues());
  
  sssheet.appendRow(newrow);
  formsheet.deleteRow(2);
}