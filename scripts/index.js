const toggleShowPassword = document.getElementById("showPassword");
toggleShowPassword.addEventListener("click", function () {
  toggleIcon();
  let input = document.getElementById("password");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});

function toggleIcon() {
  const icon = document.getElementById("showPassword");
  if (icon.classList.contains("fa-lock")) {
    icon.classList.replace("fa-lock", "fa-lock-open");
  } else {
    icon.classList.replace("fa-lock-open", "fa-lock");
  }
}

function validate() {
  const form = document.getElementsByClassName("form");
  if (form[0].username.value == "") {
    form[0].username.focus();
    return false;
  }

  if (form[0].password.value == "") {
    form[0].password.focus();
    return false;
  }

  if (form[0].username.value == "" && form[0].password.value == "") {
    form[0].username.focus();
    return false;
  }

  if ( form[0].username.value != "" && form[0].password.value != "") {
    return true;
  }

}

function closeElement(){
  var closeableElements = document.getElementsByClassName("closeable");
  console.log(closeableElements.length);
  if ( typeof (closeableElements) != 'undefined' && closeableElements) {
    for ( let i = 0; i < closeableElements.length; i++) {
      closeableElements[i].addEventListener("click", function(){
        const parentToClose = closeableElements[i].parentElement;
        const parent = parentToClose.parentNode;
        parent.removeChild(parentToClose);
      });
    }
  } else {}
}

closeElement();