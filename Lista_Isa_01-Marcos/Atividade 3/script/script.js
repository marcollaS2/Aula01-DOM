const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'teste' && password === 'teste') {
        loginForm.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.visibility = 'visible';
    }
});
