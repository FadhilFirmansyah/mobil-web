const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('sign-in-button').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email !== 'haykal@mail.com' || password !== 'okegas') {
        errorMessage.style.display = 'block';
    } else {
        // Optionally, you can submit the form if the login is correct
        document.getElementById('login-form').submit();
    }
});

