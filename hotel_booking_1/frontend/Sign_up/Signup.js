
const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const agreeTerms = document.getElementById("agreeTerms").checked;

    if (!fullname || !email || !password || !confirmPassword) {
        message.style.color = "#dc2626";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (password.length < 8) {
        message.style.color = "#dc2626";
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "#dc2626";
        message.textContent = "Passwords do not match.";
        return;
    }

    if (!agreeTerms) {
        message.style.color = "#dc2626";
        message.textContent = "Please agree to the Terms and Conditions.";
        return;
    }

    message.style.color = "#16a34a";
    message.textContent = "Form validated successfully!";

    document.querySelectorAll(".toggle-password").forEach(function (button) {
        button.addEventListener("click", function () {
            const input = document.getElementById(button.dataset.target);
            const isHidden = input.type === "password";

            input.type = isHidden ? "text" : "password";

            button.setAttribute(
                "aria-label",
                isHidden ? "Hide password" : "Show password"
            );
        });
    });
});
