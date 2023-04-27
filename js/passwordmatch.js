const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function checkPasswordMatch() {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordInput.style.borderColor = 'green';
    confirmPasswordInput.style.borderColor = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
  }
}

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);
