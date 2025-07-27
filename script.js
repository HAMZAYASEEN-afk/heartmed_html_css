document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!loginForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            loginForm.classList.add('was-validated');
        });
    }
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const password = document.getElementById('registerPassword');
            const confirmPassword = document.getElementById('confirmPassword');
            
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords must match");
                confirmPassword.classList.add('is-invalid');
            } else {
                confirmPassword.setCustomValidity("");
                confirmPassword.classList.remove('is-invalid');
            }

            if (!registerForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            registerForm.classList.add('was-validated');
        });

    }
});