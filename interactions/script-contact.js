document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("mail").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("txt").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for contacting us!");
        form.reset(); 
    });
});
