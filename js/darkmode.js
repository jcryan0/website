function toggleTheme() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.theme == "dark") {
        localStorage.theme = "light";
        app.setAttribute("theme", "light");
    } else {
        localStorage.theme = "dark";
        app.setAttribute("theme", "dark");
    }
    console.log("Successfully set theme to " + localStorage.theme);
}

function checkTheme() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.theme == "dark") {
        app.setAttribute("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkTheme();
}, false);
