function ani_home() {
    let menu = document.getElementById("menu");
    menu.classList.add("home");
    menu.classList.remove("project");
    menu.classList.remove("support");
    menu.classList.remove("about");
}

function ani_project() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.add("project");
    menu.classList.remove("support");
    menu.classList.remove("about");
}

function ani_support() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.remove("project");
    menu.classList.add("support");
    menu.classList.remove("about");
}

function ani_about() {
    let menu = document.getElementById("menu");
    menu.classList.remove("home");
    menu.classList.remove("project");
    menu.classList.remove("support");
    menu.classList.add("about");
}