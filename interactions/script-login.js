document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("btn");
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("password");

    const justSignedUp = JSON.parse(localStorage.getItem("justSignedUp"));
    if (justSignedUp) {
        usernameInput.value = justSignedUp.username;
        passwordInput.value = justSignedUp.password;

        localStorage.removeItem("justSignedUp");
    }

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const enteredUsername = usernameInput.value.trim().toLowerCase();
        const enteredPassword = passwordInput.value.trim();

        if (!enteredUsername || !enteredPassword) {
            alert("Please fill in both fields.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(user =>
            user.username === enteredUsername && user.password === enteredPassword
        );

        if (foundUser) {
            alert(`Welcome, ${foundUser.firstName}!`);

            localStorage.setItem("justLoggedIn", JSON.stringify({
                username: foundUser.username
            }));

            window.location.href = "../structure/Home.html";
        }

    });
});
