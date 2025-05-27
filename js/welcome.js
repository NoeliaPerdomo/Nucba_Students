if (!localStorage.getItem("usuario")) {
    location.assign("login.html");
}


var users = JASON.parse(localStorage.getItem("usuarios"));
const username = document.querySelector("#username");
username.innerHTML = user.username.toUpperCase();

const logout = document.querySelector("#logout");

logout.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("usuario");
    location.assign("index.html");
});

