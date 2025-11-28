
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

  // You can add real validation here (e.g., check from database)
  alert("Driver Login successful!");
  // Redirect to home page
  window.location.href = "/home/";
});