
    document.getElementById("complaintForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert(" Complaint submitted successfully! Thank you for your feedback.");
      this.reset();
    });

    // Load navbar
    $(function () {
      $("#navbar-placeholder").load("/navbar/");
    });
    // Load footer
    $(function () {
      $("#footer-placeholder").load("/footer/");
    });