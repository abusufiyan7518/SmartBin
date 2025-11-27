document.addEventListener('DOMContentLoaded', function() {
      const profileContainer = document.getElementById('profileContainer');
      const userData = localStorage.getItem('currentUser');
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      if (!isLoggedIn || !userData) {
        showNoData();
        return;
      }

      const user = JSON.parse(userData);
      displayProfile(user);
    });

    function displayProfile(user) {
      const profileContainer = document.getElementById('profileContainer');
      
      let icon = '<i class="fas fa-user"></i>';
      let specificDetails = '';

      // Determine user type and set appropriate icon and details
      if (user.type === 'admin') {
        icon = '<i class="fas fa-user-shield"></i>';
        specificDetails = `
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-id-card"></i></div>
            <div class="detail-content">
              <div class="detail-label">ID Number</div>
              <div class="detail-value">${user.idNumber}</div>
            </div>
          </div>
        `;
      } else if (user.type === 'driver') {
        icon = '<i class="fas fa-car"></i>';
        specificDetails = `
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-id-badge"></i></div>
            <div class="detail-content">
              <div class="detail-label">Licence Number</div>
              <div class="detail-value">${user.licenceNumber}</div>
            </div>
          </div>
        `;
      } else {
        // Regular user - shows mobile number
        specificDetails = `
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-mobile-alt"></i></div>
            <div class="detail-content">
              <div class="detail-label">Mobile Number</div>
              <div class="detail-value">${user.mobile}</div>
            </div>
          </div>
        `;
      }

      // Format registration date
      const registeredDate = new Date(user.registeredAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Build profile HTML
      profileContainer.innerHTML = `
        <div class="profile-header">
          <div class="profile-icon">${icon}</div>
          <h1>${user.name}</h1>
          <span class="user-type-badge">${user.type}</span>
        </div>

        <div class="profile-details">
          ${specificDetails}
          
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-envelope"></i></div>
            <div class="detail-content">
              <div class="detail-label">Email Address</div>
              <div class="detail-value">${user.email}</div>
            </div>
          </div>

          ${user.phone ? `
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-phone"></i></div>
            <div class="detail-content">
              <div class="detail-label">Phone Number</div>
              <div class="detail-value">${user.phone}</div>
            </div>
          </div>
          ` : ''}

          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-calendar-check"></i></div>
            <div class="detail-content">
              <div class="detail-label">Registration Date</div>
              <div class="detail-value">${registeredDate}</div>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <button class="btn-edit" onclick="editProfile()">
            <i class="fas fa-edit"></i> Edit Profile
          </button>
        </div>
      `;
    }

    function showNoData() {
      const profileContainer = document.getElementById('profileContainer');
      profileContainer.innerHTML = `
        <div class="no-data">
          <i class="fas fa-user-slash"></i>
          <h2>No Profile Found</h2>
          <p>Please login or register to view your profile</p>
          <a href="index.html" class="back-btn"><i class="fas fa-home"></i> Go to Home</a>
        </div>
      `;
    }

    function editProfile() {
      alert('Edit profile functionality coming soon!');
    }

    $(function () {
      $("#navbar-placeholder").load("../../templates/navbar.html", function() {
        if (typeof initializeLogout === 'function') {
          initializeLogout();
        }
      });
      $("#footer-placeholder").load("../../templates/footer.html");
    });
