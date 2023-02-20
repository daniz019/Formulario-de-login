const passwordInput = document.getElementById('senha');

function eyeClick(eyesElement) {
    let inputTypeIsPassword = passwordInput.type === 'password';
    if (inputTypeIsPassword) {
        showPassword();
        eyesElement.setAttribute("src", "./assets/eye-off.svg");
    } else {
        hidePassword();
        eyesElement.setAttribute("src", "./assets/eye.svg");
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
}




