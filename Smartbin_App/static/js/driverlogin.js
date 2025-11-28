
function togglePassword(passwordId, eyeId) {
  const passField = document.getElementById(passwordId);
  const eyeIcon = document.getElementById(eyeId);
  if (passField.type === "password") {
    passField.type = "text";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passField.type = "password";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// Login Form Redirect
document.getElementById("driverLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //  SET DRIVER ROLE - ADD THIS LINE
  localStorage.setItem("userRole", "driver");
  
  // Get email from form
  const email = document.getElementById("email").value.trim();
  
  // Set current user data for profile page
  // Try to get user from localStorage users list, or create basic user data
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let userData = users.find(u => u.email === email && u.type === 'driver');
  
  if (!userData) {
    // If user not found in registration list, create basic data
    userData = {
      name: email.split('@')[0] || 'Driver',
      email: email || '',
      licenceNumber: email.split('@')[0].toUpperCase() || '',
      type: 'driver',
      registeredAt: new Date().toISOString()
    };
  }
  
  localStorage.setItem("currentUser", JSON.stringify(userData));
  localStorage.setItem("isLoggedIn", "true");

  // You can add real validation here (e.g., check from database)
  alert("Driver Login successful!");
  // Redirect to home page
  window.location.href = "/home/";
});