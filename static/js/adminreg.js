document.addEventListener("DOMContentLoaded", () => {
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
  
  window.togglePassword = togglePassword;
  
  function generateCaptcha() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = Math.floor(Math.random() * 3) + 4; // 4–6 characters
    let captcha = '';
    for (let i = 0; i < length; i++) {
      captcha += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    document.getElementById("captchaValue").value = captcha;
  }
  
  document.getElementById("refreshCaptcha").addEventListener("click", generateCaptcha);
  
  generateCaptcha();
  
  document.getElementById("adminRegisterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const idNumber = document.getElementById("idNumber").value.trim();
    const name = document.getElementById("adminName").value.trim();
    const email = document.getElementById("adminEmail").value.trim();
    const mobile = document.getElementById("mobileNo").value.trim();
    const password = document.getElementById("adminPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const captchaInput = document.getElementById("captchaInput").value.trim().toUpperCase();
    const captchaValue = document.getElementById("captchaValue").value.trim();
    const agreeTerms = document.getElementById("agreeTerms").checked;
    
    // Check all fields
    if (!idNumber || !name || !email || !mobile || !password || !confirmPassword || !captchaInput) {
      alert("⚠️ Please fill in all fields!");
      return;
    }
    
    // Check checkbox
    if (!agreeTerms) {
      alert("⚠️ Please accept the terms and conditions!");
      return;
    }
    
    // Check password match
    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }
    
    // Check CAPTCHA
    if (captchaInput !== captchaValue) {
      alert("⚠️ Invalid CAPTCHA! Please try again.");
      generateCaptcha();
      document.getElementById("captchaInput").value = "";
      return;
    }
    
    // Create user object
    const userData = {
      type: 'admin',
      idNumber: idNumber,
      name: name,
      email: email,
      phone: mobile,
      password: password,
      registeredAt: new Date().toISOString()
    };
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Store in users list (for future login)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Success message and redirect
    alert("✅ Admin Registration Successful! Please login to continue.");
    window.location.href = "../../templates/adminlogin.html";
  });
});