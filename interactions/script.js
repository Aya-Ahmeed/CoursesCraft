document.addEventListener("DOMContentLoaded", function () {

    const profileIcon = document.getElementById("profile-icon");
    const welcomeBox = document.getElementById("welcome-box");
    const usernameSpan = document.getElementById("username-placeholder");
    const logoutBtn = document.getElementById("logout-btn");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const lastLogin = JSON.parse(localStorage.getItem("justLoggedIn"));

    if (lastLogin) {
        const currentUser = users.find(user => user.username === lastLogin.username);
        if (currentUser) {
            usernameSpan.textContent = currentUser.firstName;
        }
    }

    profileIcon.addEventListener("click", function () {
        welcomeBox.style.display = (welcomeBox.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".profile-container")) {
            welcomeBox.style.display = "none";
        }
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("justLoggedIn");
        window.location.href = "../structure/index.html";
    });

    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('nav-items');

    if (hamburger && navItems) {
        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('show');
        });
    }
});
