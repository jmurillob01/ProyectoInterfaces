function check() {

    let occasional = document.getElementsByClassName("form-occasional");
    let valid = true;

    // Si se está mostrando el login
    if (occasional[0].style.display == "none") {
        valid = checkLogin();
    }else{
        valid = checkRegister();
    }

    if (valid){
        // Limpiamos el formulario
        clearForm();
        // Redirigimos a la página
        location.href = "../public/movies.html";
    } else {
        // alert("Introduce datos válidos");
    }
}

// Función para checkear el login
function checkLogin() {
    const REGEX_USERNAME = /^([A-Za-z0-9]){6,20}$/;
    const REGEX_PASSWORD = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    // Obtenemos los campos
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let valid = true; // Por defecto es válido

    // Comprobamos valores
    if (!REGEX_USERNAME.test(userName)) valid = false;
    if (!REGEX_PASSWORD.test(password)) valid = false;

    return valid;
}

// Función para checkear el registro
function checkRegister() {
    const REGEX_USERNAME = /^([A-Za-z0-9]){6,20}$/;
    const REGEX_PASSWORD = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const REGEX_PHONE = /^[0-9]{9}$/;
    const REGEX_DNI = /^[0-9]{8}[A-Za-z]{1}$/;
    const REGEX_EMAIL =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // Obtenemos los campos
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let valid = true; // Por defecto es válido

    // Comprobamos valores
    if (!REGEX_USERNAME.test(userName)) valid = false;
    if (!REGEX_PASSWORD.test(password)) valid = false;
    if (!REGEX_PHONE.test(phone)) valid = false;
    if (!REGEX_DNI.test(dni)) valid = false;
    if (!REGEX_EMAIL.test(email)) valid = false;
    if (password != confirmPassword) valid = false;

    return valid;
}

// Recibimos la marca de tiempo
function displayForm(timestamp, optionName) {
    let occasional = document.getElementsByClassName("form-occasional");
    let form_access = document.getElementById("form__access");

    if (timestamp == "always") {
        // Cambiamos el estilo del formulario
        form_access.style.display = "flex";
        form_access.style.flexDirection = "column";
        form_access.style.alignItems = "center";

        for (i = 0; i < occasional.length; i++) {
            occasional[i].style.display = "none";
        }
    } else {
        form_access.style.display = "grid";
        for (i = 0; i < occasional.length; i++) {
            occasional[i].style.display = "block";
        }
    }
    borderButtoms(optionName);
}

// Función para pintar el borde del botón seleccionado
function borderButtoms(optionName) {

    let buttons = document.getElementsByClassName("main__buttons__form");
    let i;
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderBottom = "none";
    }
    document.getElementById(optionName).style.borderBottom = "2px solid rgb(15, 118, 208)";
}

// Función para limpiar el formulario
function clearForm(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("email").value = "";
    document.getElementById("confirm-password").value = "";
}