
const signinForm = document.getElementById("signinForm");
const message = document.getElementById("message");



// Xử lý đăng nhập
signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.textContent = "Please enter your email and password.";
        return;
    }

    message.textContent =
        "Form submitted. Account authentication is not configured yet.";
});

// Xử lý quên mật khẩu
document.getElementById("forgotLink").addEventListener("click", function (event) {
    event.preventDefault();
    message.textContent = "Password recovery is not configured yet.";
});
