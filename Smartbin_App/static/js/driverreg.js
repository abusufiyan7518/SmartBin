// Generate CAPTCHA
function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captchaText').textContent = captcha;
}

// Initialize CAPTCHA on page load
window.addEventListener('DOMContentLoaded', function() {
  generateCaptcha();
});

// Refresh CAPTCHA button
document.getElementById('refreshBtn').addEventListener('click', function() {
  generateCaptcha();
  document.getElementById('captchaInput').value = '';
  this.style.transform = 'rotate(360deg)';
  this.style.transition = 'transform 0.5s ease';
  setTimeout(() => { this.style.transform = 'rotate(0deg)'; }, 500);
});

// Toggle Password Visibility
function togglePassword(fieldId, icon) {
  const input = document.getElementById(fieldId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = "password";
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// Form Validation
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Get all form values
  const licenceNumber = this.querySelector('input[placeholder="Enter your Licence Number"]').value.trim();
  const name = this.querySelector('input[placeholder="Enter your full name"]').value.trim();
  const email = this.querySelector('input[placeholder="Enter your email"]').value.trim();
  const phone = this.querySelector('input[placeholder="Enter your Mobile Number"]').value.trim();
  const pass = document.getElementById('password').value.trim();
  const confirmPass = document.getElementById('confirmPassword').value.trim();
  const captchaInput = document.getElementById('captchaInput').value.trim();
  const captchaText = document.getElementById('captchaText').textContent.trim();
  
  // Validate all fields are filled
  if (!licenceNumber || !name || !email || !phone || !pass || !confirmPass) {
    alert("⚠️ Please fill in all fields!");
    return;
  }
  
  // Validate passwords match
  if (pass !== confirmPass) {
    alert("⚠️ Passwords do not match!");
    return;
  }
  
  // Validate CAPTCHA
  if (captchaInput !== captchaText) {
    alert("⚠️ Invalid CAPTCHA. Please try again!");
    generateCaptcha();
    document.getElementById('captchaInput').value = '';
    return;
  }
  
  // Create driver user object
  const userData = {
    type: 'driver',
    licenceNumber: licenceNumber,
    name: name,
    email: email,
    phone: phone,
    password: pass,
    registeredAt: new Date().toISOString()
  };
  
  // Store user data in localStorage
  localStorage.setItem('currentUser', JSON.stringify(userData));
  localStorage.setItem('isLoggedIn', 'true');
  
  // Store in users list (for future login)
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
  
  const btn = document.querySelector('.btn');
  btn.textContent = 'Registering...';
  btn.style.background = '#00ff00';
  
  setTimeout(() => {
    alert("✅ Driver Registered Successfully! Please login to continue.");
    this.reset();
    generateCaptcha();
    window.location.href = "/driver_login/";
  }, 1200);
});

// Input field animation
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.2s ease';
    this.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.5)';
  });
  
  input.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
});