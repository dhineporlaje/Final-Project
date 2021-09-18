function promptme() {
  var txt;
  var r = confirm("Confirm to Submit");
  if (r == true) {
    txt = "Submitted!"
  } else {
    txt = "Cancelled!"
  }
  document.getElementById("prompts").innerHTML = txt;
}       