function copySomeValues() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("theData");
  let data = ws.getRange(1, 1, ws.getLastRow(),3).getValues();
  
  let newData = data.slice(1);
  
  ws.getRange(1,5,newData.length,3).setValues(newData);
}
