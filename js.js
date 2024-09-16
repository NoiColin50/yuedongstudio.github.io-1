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

function language_select_open() {
    let s = document.getElementById("language_select");
    s.classList.add("open");
}

function language_select_close() {
    let s = document.getElementById("language_select");
    s.classList.remove("open");
}

function switchLanguage(language) {
    var elements = document.querySelectorAll('[lang-en]');
    elements.forEach(function(element) {
        element.textContent = element.getAttribute('lang-' + language);
    });
}
document.onkeydown = function (event) {
    if (event.keyCode === 123) { // F12键的键码
      event.preventDefault();
      return false;
    }
};

document.oncontextmenu = function (event) {
    event.preventDefault();
    return false;
}

