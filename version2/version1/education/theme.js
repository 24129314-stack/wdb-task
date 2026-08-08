/* ============================================
   Dark / Light mode toggle - shared script
   Applies the saved theme as soon as the page
   starts loading (no flash of the wrong colours),
   then lets the user switch it with the button
   added to the nav bar.
   ============================================ */

// Runs immediately, before the body is drawn
(function () {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
})();

function toggleTheme() {
    document.documentElement.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeIcon();
}

function updateThemeIcon() {
    var icon = document.getElementById("themeIcon");
    var label = document.getElementById("themeLabel");
    if (!icon || !label) {
        return;
    }
    if (document.documentElement.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        label.textContent = "Dark";
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        label.textContent = "Light";
    }
}

document.addEventListener("DOMContentLoaded", updateThemeIcon);