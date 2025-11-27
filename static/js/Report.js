
    document.getElementById("complaintForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert(" Complaint submitted successfully! Thank you for your feedback.");
      this.reset();
    });

    // Load navbar
    $(function () {
      $("#navbar-placeholder").load("../../templates/navbar.html");
    });
    // Load footer
    $(function () {
      $("#footer-placeholder").load("../../templates/footer.html");
    });