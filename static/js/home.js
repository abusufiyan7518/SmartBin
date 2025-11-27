$(document).ready(function() {

  $("#navbar-placeholder").load("navbar.html", function() {
    console.log("✓ Navbar loaded");
    
  
    initializeLogout();
  });


  $("#footer-placeholder").load("footer.html");
});

//  LOGOUT FUNCTION - Called AFTER navbar loads
function initializeLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  
  if (!logoutBtn) {
    console.error(" logoutBtn not found");
    return;
  }
  
  console.log("✓ Logout button found");

  logoutBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("✓ Logout clicked");

    const doLogout = confirm("Are you sure you want to logout?");
    
    if (doLogout) {
      try {
        localStorage.removeItem("loggedInUser");
        sessionStorage.clear();
        console.log("✓ Cleared storage");
      } catch(err) {
        console.warn("Storage clear failed", err);
      }

      alert("You have successfully logged out!");
      window.location.href = "../../templates/dropdown.html";
    } else {
      alert("Logout cancelled.");
    }
  });
}