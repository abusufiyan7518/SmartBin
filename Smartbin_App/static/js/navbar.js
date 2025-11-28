
function setupNavbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = localStorage.getItem("currentUser");
  
  let userRole = localStorage.getItem("userRole"); // Old system
  
  // If logged in via registration, get role from currentUser
  if (isLoggedIn && currentUser) {
    const user = JSON.parse(currentUser);
    userRole = user.type; // 'user', 'admin', or 'driver'
    
    localStorage.setItem("userRole", userRole);
  }
  
  const dropdownContainer = document.getElementById("dynamicDropdownContainer");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const logoutBtn = document.getElementById("logoutBtn");

  // Clear existing dropdown content
  if (dropdownContainer) {
    dropdownContainer.innerHTML = '';

    // Role-based dropdown
    if (userRole === "user") {
      dropdownContainer.innerHTML = `
        <div class="dropdown">
          <button class="dropbtn" onclick="toggleMobileDropdown(event)">Complaint/View ▼</button>
          <div class="dropdown-content">
            <a href="/report/">Report Issue</a>
            <a href="/bin_status/">View Bins</a>
          </div>
        </div>
      `;

     
    } else if (userRole === "admin") {
      dropdownContainer.innerHTML = `
        <div class="dropdown">
          <button class="dropbtn" onclick="toggleMobileDropdown(event)">Admin Panel ▼</button>
          <div class="dropdown-content">
            <a href="/managedriver/">Manage Driver</a>  
            <a href="/complaint/">Complaint Views</a>
          </div>
        </div>
      `;
    } else if (userRole === "driver") {
      dropdownContainer.innerHTML = `
        <div class="dropdown">
          <button class="dropbtn" onclick="toggleMobileDropdown(event)">Driver Panel ▼</button>
          <div class="dropdown-content">
            <a href="/assignedtruck/">Assigned Truck</a>
            <a href="/update_status/">Update Status</a>
          </div>
        </div>
      `;
    }
  }

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear both old and new system
      localStorage.removeItem("userRole");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
      
      alert("You have logged out successfully!");
      window.location.href = ""; // Redirect to dropdown page
    });
  }

  // Hamburger menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

// Toggle mobile dropdown - Fixed to work properly
function toggleMobileDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (window.innerWidth <= 768) {
    const button = event.target;
    const dropdown = button.closest('.dropdown');
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('active');
      }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle("active");
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const isClickInside = event.target.closest('.dropdown');
    
    if (!isClickInside) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  }
});

// Auto-run setup when navbar loads
document.addEventListener('DOMContentLoaded', function() {
  setupNavbar();
});

// Also run when page loads (for compatibility)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupNavbar);
} else {
  setupNavbar();
}