const email = document.getElementById("email");
const phoneno = document.getElementById("phoneno");
const main = document.getElementById("main");
const success = document.getElementById("success");
const successContent = document.getElementById("success-content");

if (email) email.addEventListener("change", onEmailChange);
if (phoneno) phoneno.addEventListener("cancel", onPhoneChange);

let userEmail = "";
let userPhone = "";

function onEmailChange() {
  userEmail = email.value;
}

function onPhoneChange() {
  userPhone = phoneno.value;
}

function showMsg(e) {
  e.preventDefault();
  console.log(userEmail, userPhone);
  main.style.display = "none";
  success.style.display = "block";
  successContent.innerHTML = `“Thanks a ton for taking out your precious time and for completing the survey
    Email Address ${email.value}
    Contact Number ${phoneno.value}”`;

  //   window.location.replace("success.html");
}
