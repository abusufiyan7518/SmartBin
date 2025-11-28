// Toggle password visibility
function togglePassword(passwordId, eyeId) {
  const passwordField = document.getElementById(passwordId);
  const eyeIcon = document.getElementById(eyeId);
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// CAPTCHA Generator (A–Z, 4–6 chars)
function generateCaptcha() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = Math.floor(Math.random() * 3) + 4; // 4–6 letters
  let captcha = '';
  for (let i = 0; i < length; i++) {
    captcha += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  document.getElementById("captchaValue").value = captcha;
}

document.getElementById("refreshCaptcha").addEventListener("click", generateCaptcha);
window.onload = generateCaptcha;

// Admin login validation (no specific pattern)
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim().toUpperCase();
  const captchaValue = document.getElementById("captchaValue").value.trim();

  // Check for empty fields
  if (email === "" || password === "" || captchaInput === "") {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  // CAPTCHA validation
  if (captchaInput !== captchaValue) {
    alert("❌ Invalid CAPTCHA! Please try again.");
    generateCaptcha();
    return;
  }

  // SET ADMIN ROLE
  localStorage.setItem("userRole", "admin");
  
  // Set current user data for profile page
  const userData = {
    name: email.split('@')[0], // Use email prefix as name if not available
    email: email,
    type: 'admin',
    idNumber: email.split('@')[0].toUpperCase(), // Generate ID from email
    registeredAt: new Date().toISOString()
  };
  
  localStorage.setItem("currentUser", JSON.stringify(userData));
  localStorage.setItem("isLoggedIn", "true");

  // You can add real validation here (e.g., check from database)
  alert("Admin Login successful!");
  // Redirect to home page
  window.location.href = "/home/";
});