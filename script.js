document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Login form - make sure email field is referenced correctly
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.email.value.trim();
            const password = loginForm.password.value.trim();

            if (email === '' || password === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Login Successful!');
                window.location.href = 'index.html';
                loginForm.reset();
            }
        });
    }

    // Signup form validation
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

            // Check if all fields are filled
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
