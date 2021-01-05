function getProperties() {
  let props = PropertiesService.getDocumentProperties().getProperties();
  return props;
  
}

function setProperties(key, value){
  let props = PropertiesService.getDocumentProperties();
  props.setProperty(key, value);
  return true;
}

function showPropDialog(){
  let info = showPrompt_();
  setProperties(info.key, info.value);
  let rslt = getProperties();
  SpreadsheetApp.getUi().alert(JSON.stringify(rslt));
  console.log(rslt);
}

function showPrompt_(){
  let ans = {};
  let ui = SpreadsheetApp.getUi();
  let ans1 = ui.prompt("Key", "Whats the key name?", ui.ButtonSet.OK_CANCEL);
  ans.key = ans1.getResponseText();
  let ans2 = ui.prompt("Value", "Whats the value?", ui.ButtonSet.OK_CANCEL);
  ans.value = ans2.getResponseText()
  return ans;
}

function deleteProps(){
  PropertiesService.getDocumentProperties().deleteAllProperties();
}
