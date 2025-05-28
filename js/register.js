
var users = [];
if(localStorage.getItem("usuarios")){
    users = JSON.parse(localStorage.getItem("usuarios"));
}

// Seleccionar elementos del DOM

const registerForm = document.querySelector("#registerForm");

const username = document.querySelector("#username");
const feedbackUsername = document.querySelector("#feedbackUsername");

const email = document.querySelector("#email");
const feedbackEmail = document.querySelector("#feedbackEmail");

const password = document.querySelector("#password");
const feedbackPassword = document.querySelector("#feedbackPassword");


// Validar email

email.addEventListener("input", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 7 ){
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email debe tener al menos 7 caracteres";
        return;
    }
    let expresion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i;
    if (!expresion.test(valor)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email no es válido";
        return;
    }
    let emails = users.map((user) => user.email);
    if (emails.includes(valor)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email ya está registrado";
        return;
    }
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("success");
    email.classList.remove("error");
    email.classList.remove("success");
    email.classList.add("success");
    feedbackEmail.innerHTML = "Correo Válido";
});


// Validar nombre de usuario

username.addEventListener("input", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 3 ){
        feedbackUsername.classList.remove("error");
        feedbackUsername.classList.remove("success");
        feedbackUsername.classList.add("error");
        username.classList.remove("error");
        username.classList.remove("success");
        username.classList.add("error");
        feedbackUsername.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres";
        return;
    }
    feedbackUsername.classList.remove("error");
    feedbackUsername.classList.remove("success");
    feedbackUsername.classList.add("success");
    username.classList.remove("error");
    username.classList.remove("success");
    username.classList.add("success");
    feedbackUsername.innerHTML = "Nombre de usuario Válido";
});



// Validar contraseña

password.addEventListener("input", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 8 ){
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        password.classList.remove("error");
        password.classList.remove("success");
        password.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        return;
    }
    let expresion = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (!expresion.test(valor)) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        password.classList.remove("error");
        password.classList.remove("success");
        password.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos una mayúscula, una minúscula y un número";
        return;
    }
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("success");
    password.classList.remove("error");
    password.classList.remove("success");
    password.classList.add("success");
    feedbackPassword.innerHTML = "Contraseña Válida";
});


// Validar formulario

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = false;
    
    // Validar email
    let valorEmail = email.value.trim();
    let expresion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i;
    let emails = users.map((user) => user.email);
    if (valorEmail.length < 7 ){
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email debe tener al menos 7 caracteres";
        errores = true;
    } else if (!expresion.test(valorEmail)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email no es válido";
        errores = true;
    } else if (emails.includes(valorEmail)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "El email ya está registrado";
        errores = true;
    } else{
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("success");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("success");
    feedbackEmail.innerHTML = "Correo Válido";
    }


    // Validar nombre de usuario
    let valorUsername = username.value.trim();
    if (valorUsername.length < 3 ){
        feedbackUsername.classList.remove("error");
        feedbackUsername.classList.remove("success");
        feedbackUsername.classList.add("error");
        username.classList.remove("error");
        username.classList.remove("success");
        username.classList.add("error");
        feedbackUsername.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres";
        errores = true;
    }else {
        feedbackUsername.classList.remove("error");
        feedbackUsername.classList.remove("success");
        feedbackUsername.classList.add("success");
        username.classList.remove("error");
        username.classList.remove("success");
        username.classList.add("success");
        feedbackUsername.innerHTML = "Nombre de usuario Válido";
    }


    // Validar contraseña
    let valorPassword = password.value.trim();
    let expresionPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (valorPassword.length < 8 ){
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        password.classList.remove("error");
        password.classList.remove("success");
        password.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        errores = true;
    }else if (!expresionPassword.test(valorPassword)) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        password.classList.remove("error");
        password.classList.remove("success");
        password.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos una mayúscula, una minúscula y un número";
        errores = true;
    }else {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("success");
        password.classList.remove("error");
        password.classList.remove("success");
        password.classList.add("success");
        feedbackPassword.innerHTML = "Contraseña Válida";
    }
    

    if(!errores){
        users.push({
            username: valorUsername,
            email: valorEmail,
            password: valorPassword
        });
        localStorage.setItem("usuarios", JSON.stringify(users));
        location.assign("login.html");
    }
});
