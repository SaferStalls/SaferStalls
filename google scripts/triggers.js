// Create Trigger for form submission. 

function defineFormTrigger(){
  var form = FormApp.openById('1enIbwcMxmt3vwRkUv8CCuhP3gZ5GF_otQ623SoMETP0')
  ScriptApp.newTrigger('rowformatted').forForm(form).onFormSubmit().create()
}
