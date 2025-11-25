document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            if (username === '' || password === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Login Successful!');
                window.location.href = 'index.html';
                loginForm.reset();
            }
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstname = signupForm.firstname.value.trim();
            const lastname = signupForm.lastname.value.trim();
            const email = signupForm.email.value.trim();
            const password = signupForm.password.value.trim();
            const province = signupForm.province.value;
            const nationality = signupForm.nationality.value;

            if (firstname === '' || lastname === '' || email === '' || password === '' || province === '' || nationality === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Sign Up Successful!');
                window.location.href = 'login.html';
                signupForm.reset();
            }
        });
    }
});
