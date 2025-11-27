function togglePassword(id, iconId) {
  const passwordInput = document.getElementById(id);
  const icon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// Form validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop default reload

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields!");
    return;
  }

  //  SET USER ROLE - ADD THIS LINE
  localStorage.setItem("userRole", "user");

  // Simulate successful login
  alert("Login successful!");
  window.location.href = "../../templates/index.html"; // Redirect to home
});