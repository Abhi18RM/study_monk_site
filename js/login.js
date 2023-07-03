// Get the register and login links
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

// Get the login and register forms
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

// Add click event listener to the register link
registerLink.addEventListener('click', () => {
    loginForm.classList.remove('show');
    registerForm.classList.add('show');
});

// Add click event listener to the login link
loginLink.addEventListener('click', () => {
    loginForm.classList.add('show');
    registerForm.classList.remove('show');
});
