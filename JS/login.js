const input = document.getElementById('password');

input.addEventListener('focus', () => {
    input.placeholder = '';
    input.classList.add('focused');
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        input.placeholder = 'Enter your password';
        input.classList.remove('focused');
    }
});

// gajadi