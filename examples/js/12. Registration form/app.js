const registerBtn = document.getElementById('registerBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function validForm() {
    return emailInput.value.includes('@') && passwordInput.value.length >= 6;
}

emailInput.addEventListener('input', (event) => {
    if(!event.target.value.includes('@')) {
        event.target.style.backgroundColor = 'red';
    } else {
        event.target.style.backgroundColor = 'green';
    }

    registerBtn.disabled = !validForm();
})


passwordInput.addEventListener('input', (event) => {
    if(event.target.value.length < 6) {
        event.target.style.backgroundColor = 'red';
    } else {
        event.target.style.backgroundColor = 'green';
    }

    registerBtn.disabled = !validForm();
})

registerBtn.addEventListener('click', () => {
    if(!emailInput.value || !passwordInput.value) {
        alert('Please fill in all fields.');
        return;
    }
})