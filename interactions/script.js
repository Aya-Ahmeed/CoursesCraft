document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profile-icon");
    const welcomeBox = document.getElementById("welcome-box");
    const usernameSpan = document.getElementById("username-placeholder");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const lastLogin = JSON.parse(localStorage.getItem("justLoggedIn"));

    if (lastLogin) {
        const currentUser = users.find(user => user.username === lastLogin.username);
        if (currentUser) {
            usernameSpan.textContent = currentUser.firstName;
        }
    }

    profileIcon.addEventListener("click", function () {
        if (welcomeBox.style.display === "none") {
            welcomeBox.style.display = "block";
        } else {
            welcomeBox.style.display = "none";
        }
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".profile-container")) {
            welcomeBox.style.display = "none";
        }
    });
});
