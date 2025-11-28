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
      
      // Ensure user object has required fields
      if (!user) {
        showNoData();
        return;
      }
      
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
              <div class="detail-value">${user.idNumber || 'N/A'}</div>
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
              <div class="detail-value">${user.licenceNumber || 'N/A'}</div>
            </div>
          </div>
        `;
      } else {
        // Regular user - shows mobile number
        if (user.mobile) {
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
      }

      // Format registration date
      let registeredDate = 'N/A';
      if (user.registeredAt) {
        try {
          registeredDate = new Date(user.registeredAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } catch (e) {
          registeredDate = user.registeredAt || 'N/A';
        }
      }

      // Build profile HTML
      profileContainer.innerHTML = `
        <div class="profile-header">
          <div class="profile-icon">${icon}</div>
          <h1>${user.name || 'User'}</h1>
          <span class="user-type-badge">${user.type || 'user'}</span>
        </div>

        <div class="profile-details">
          ${specificDetails}
          
          <div class="detail-row">
            <div class="detail-icon"><i class="fas fa-envelope"></i></div>
            <div class="detail-content">
              <div class="detail-label">Email Address</div>
              <div class="detail-value">${user.email || 'N/A'}</div>
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
          <a href="/home/" class="back-btn"><i class="fas fa-home"></i> Go to Home</a>
        </div>
      `;
    }

    function editProfile() {
      alert('Edit profile functionality coming soon!');
    }

    
