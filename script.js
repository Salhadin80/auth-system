const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const btn = document.getElementById("btn");

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  btn.style.left = "0";
}

function showRegister() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  btn.style.left = "50%";
}

function validateLogin(event) {
  event.preventDefault();
  alert("Login successful (fake alert)");
  return false;
}

function validateRegister(event) {
  event.preventDefault();
  alert("Registration successful (fake alert)");
  return false;
}

// Show login by default
showLogin();
