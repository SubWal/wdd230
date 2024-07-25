function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match. Please re-enter your password.";
        return false;
    }

    passwordError.textContent = ""; // Clear the error message if passwords match
    return true;
}
