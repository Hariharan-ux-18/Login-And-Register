// Get form elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterFormLink = document.getElementById('show-register-form');
const showLoginFormLink = document.getElementById('show-login-form');

// Handle form switching
showRegisterFormLink.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

showLoginFormLink.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Handle form validation and submission
document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  if (validateEmail(email) && validatePassword(password)) {
    alert('Login Successful');
  } else {
    alert('Invalid email or password');
  }
});

document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
    alert('Registration Successful');
    // Clear the form after submission
    document.getElementById('register').reset();
    // Switch back to login form
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Please check the inputs');
  }
});

// Validation Functions
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}
