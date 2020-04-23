
function showIt(){
  //var link = "https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=204928812195-gc1c11mp9mqm72iu9961oio1p25bbu8t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fscript.google.com%2Foauthcallback&state=2032995900246196224&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fscript.container.ui%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fspreadsheets&response_type=none%20gsession&access_type=offline&approval_prompt=force&hl=en&o2v=1&as=4776gLLAMzq4NmxNGhof8Q&flowName=GeneralOAuthFlow";
  var shortLink = "https://bit.ly/2RZsImw";
  openTab(shortLink);
  }




function openTab(url) {
  var html = "<script>window.open('" + url + "');google.script.host.close();</script>";
  var userInterface = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModalDialog(userInterface, 'Open Tab');
}
