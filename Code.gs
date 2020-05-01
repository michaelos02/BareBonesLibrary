function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Library Check')
      .addItem("Show Sidebar", 'bbMod.showSidebar')
      .addItem("Get Permissions", 'bbMod.getPermission')
      .addItem("Authorize", 'bbMod.showIt2')
      .addToUi();
}

function showSidebar(){
  var page = HtmlService.createTemplateFromFile('tablist').evaluate();
  page.setTitle("Library Experiment");
  SpreadsheetApp.getUi().showSidebar(page);
}

//get css and js into the web page
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

//** Name space experiment
var myUts = myUts || {};
myUts = {
  addIt: (x,y)=>{return x+y}
}

function test(x,y){
 let rslt = myUts.addIt(x,y);
 console.log(rslt)
 return rslt;
}

function theMessage(msg){
  return "Got to the MESSAGE in bbMod! " + msg;
}

function callLibrary(){
  return "Whoo hoo! Made it to bbMod";
}

/*
*This is the name that must be used with google.script.run
*It also must exist in the /other script/
*/

function pick(func, args){
  args = args || [];
  return this[func].apply(this, args);
}
/**
*The above was inspired by the following:
*from https://stackoverflow.com/questions/48928932/call-library-function-from-html-with-google-script-run
*Inspired by Bruce McPherson 
*https://ramblings.mcpher.com/google-apps-scripts-snippets-2/addressing-namespace-and-library-methods-from-google-script-run/
**/

//added this to see if I can get some script auth going
function getPermission(){
  try{
  DriveApp.getRootFolder();
  return "Good";
  }
  catch(err){
  return err;
  }
}