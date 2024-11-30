document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutButton = document.getElementById('logout-button');

    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('login-message');

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'portfolio.html';
        } else {
            message.textContent = 'Invalid Credentials. Please try again.';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#c85090';
            message.style.outline = 'none';
            message.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm').value;
        const name = document.getElementById('reg-name').value;
        const message = document.getElementById('register-message');

        if (password !== confirmPassword) {
            message.textContent = 'Passwords do not match.';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#c85090';
            message.style.outline = 'none';
            message.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('name', name);
        message.textContent = 'Registration successful! Redirecting to login page...';
        message.style.color = 'rgb(255, 255, 255)';
        message.style.background = '#50c8c4';
        message.style.outline = 'none';
        message.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    };

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    };

    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            handleLogout();
        });
    }

    // No content loading for the container is needed anymore.
});