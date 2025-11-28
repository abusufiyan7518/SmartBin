    // Form validation before submission
    document.getElementById("complaintForm").addEventListener("submit", function(e) {
      const name = document.getElementById("fullName").value.trim();
      const phone = document.getElementById("phoneNo").value.trim();
      const email = document.getElementById("emailId").value.trim();
      const complaintType = document.getElementById("complaintType").value;
      const description = document.getElementById("description").value.trim();
      
      // Validate required fields
      if (!name || !phone || !email || !complaintType || !description) {
        e.preventDefault();
        alert("Please fill in all required fields!");
        return false;
      }
      
      // Validate phone number (should be 10 digits)
      if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        e.preventDefault();
        alert("Please enter a valid 10-digit phone number!");
        return false;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address!");
        return false;
      }
      
      // If all validations pass, let the form submit to Django
      // Django will handle the submission and show success/error messages
    });