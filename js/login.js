var users = [];
if(localStorage.getItem("usuarios")) {
    users = JSON.parse(localStorage.getItem("usuarios"));
}

if (users.length == 0) {
    location.assign("register.html");
}

const loginForm = document.querySelector("#loginForm");

const email = document.querySelector("#email");
const feedbackEmail = document.querySelector("#feedbackEmail");

const password = document.querySelector("#password");
const feedbackPassword = document.querySelector("#feedbackPassword");


// Validar email
email.addEventListener("input", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 7){
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        
        feedbackEmail.innerHTML = "El email debe tener al menos 7 caracteres";
        return;
    }
    let expresion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i;
    if (!expresion.test(valor)) {
        feedbackEmail.innerHTML = "El email no es válido";
        return;
    }
    let emails = users.map((user) => user.email);
    if (!emails.includes(valor)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        feedbackEmail.innerHTML = "El email no está registrado";
        return;
    }
    feedbackEmail.classList.remove("error");
    feedbackEmail.classList.remove("success");
    feedbackEmail.classList.add("success");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("success");
    feedbackEmail.innerHTML = "Correo Válido";
});


// Validar contraseña
password.addEventListener("input", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 8) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        return;
    }
    let expresion = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (!expresion.test(valor)) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña no es válida";
        return;
    }
    feedbackPassword.classList.remove("error");
    feedbackPassword.classList.remove("success");
    feedbackPassword.classList.add("success");
    e.target.classList.remove("error");
    e.target.classList.remove("success");
    e.target.classList.add("success");
    feedbackPassword.innerHTML = "Contraseña Válida";
});


// Validar formulario
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = false;

    //Validar el Email
    let valorEmail = email.value.trim();
    let expresion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i;
    let emails = users.map((user) => user.email);
    if (valorEmail.length < 7) {
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
        feedbackEmail.innerHTML = "No es un patrón correcto";
        errores = true;
    }else if (!emails.includes(valorEmail)) {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("error");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("error");
        feedbackEmail.innerHTML = "Este correo no está registrado";
        errores = true;
    } else {
        feedbackEmail.classList.remove("error");
        feedbackEmail.classList.remove("success");
        feedbackEmail.classList.add("success");
        email.classList.remove("error");
        email.classList.remove("success");
        email.classList.add("success");
        feedbackEmail.innerHTML = "Correo Válido";
    } 

    let valorPassword = password.value.trim();
    let expresionPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (valorPassword.length < 8) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        errores = true;
    }else if (!expresionPassword.test(valorPassword)) {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("error");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("error");
        feedbackPassword.innerHTML = "La contraseña no es válida";
        errores = true;
    } else {
        feedbackPassword.classList.remove("error");
        feedbackPassword.classList.remove("success");
        feedbackPassword.classList.add("success");
        e.target.classList.remove("error");
        e.target.classList.remove("success");
        e.target.classList.add("success");
        feedbackPassword.innerHTML = "Contraseña Válida";
    }

    let findUser = users.find((user) => user.email === valorEmail);
    if (findUser.password !== valorPassword) {
        feedbackPassword.innerHTML = "La contraseña no coincide";
        errores = true;
    }
    if (!errores) {
        localStorage.setItem("usuario", JSON.stringify(findUser));
        location.assign("welcome.html");
    }   
});
