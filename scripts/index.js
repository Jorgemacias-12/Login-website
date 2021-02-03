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
    form[0].password.focus();
    return false;
  }

  if ( form[0].username.value != "" && form[0].password.value != "") {
    return true;
  }

}
