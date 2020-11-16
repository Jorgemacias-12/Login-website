var btn_initSesion = document.getElementById("form__login-button");

var errorElements = document.getElementsByClassName("error-info");

var username_error = document.getElementById("username__input-error");
var password_error = document.getElementById("password__input-error");

btn_initSesion.addEventListener("click", init);

function init() {

    let userField = document.getElementById("form__username").value;
    let passwordField = document.getElementById("form__password").value;

    if (userField == "" && passwordField != "") {
        errorElements[0].style.display = "block"
        username_error.innerText = "Error: El campo se encuentra vació."
    }
    else if (passwordField == "" && userField != "") {
        errorElements[1].style.display = "block";
        password_error.innerText = "Error: El campo se encuentra vació."
    }
    else {
        if (userField == "" && passwordField == "") {
            for (let i = 0; i <= errorElements.length; i++) {
                errorElements[i].style.display="block";
                username_error.innerText="Error: El campo se encuentra vació.";
                password_error.innerText ="Error: El campo se encuentra vació.";
            }
        }
        else{
            for (let i = 0; i <= errorElements.length; i++) {
                errorElements[i].style.display = "none";
            }  
        }


    }

}

