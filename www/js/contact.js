document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  var myContact = navigator.contacts.create({"displayName": "Lockdown User!"});
  myContact.save();
  alert("person saved!");
}
// 