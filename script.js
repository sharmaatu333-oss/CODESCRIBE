const loginCard = document.getElementById("loginCard");
const registerCard = document.getElementById("registerCard");
const forgotCard = document.getElementById("forgotCard");

function showCard(card) {
    loginCard.classList.add("hidden");
    registerCard.classList.add("hidden");
    forgotCard.classList.add("hidden");

    card.classList.remove("hidden");
}

document.getElementById("showRegister").onclick = function(event) {
    event.preventDefault();
    showCard(registerCard);
};


document.getElementById("showLogin").onclick = function(event) {
    event.preventDefault();
    showCard(loginCard);
};

document.getElementById("forgotLink").onclick = function(event) {
    event.preventDefault();
    showCard(forgotCard);
};

document.getElementById("backToLogin").onclick = function(event) {
    event.preventDefault();
    showCard(loginCard);
};

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        document.getElementById("loginMessage").textContent =
            "Login demo successful! Backend authentication is required.";
    }
};

document.getElementById("registerForm").onsubmit = function(event) {
    event.preventDefault();

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("registerMessage");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    message.textContent =
        "Registration demo complete! Backend connection is required.";
};

document.getElementById("forgotForm").onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("forgotMessage").textContent =
        "Password reset requires a backend and email service.";
};
```
