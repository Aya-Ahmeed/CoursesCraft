document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("btn-signup");

    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!firstName || !lastName || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const username = (firstName + lastName).toLowerCase();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("This user already exists. Try a different name.");
            return;
        }

        const newUser = {
            username,
            firstName,
            lastName,
            password
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("justSignedUp", JSON.stringify({
            username: username,
            password: password
        }));
        
        window.location.href = "../structure/login.html";
    });
});
