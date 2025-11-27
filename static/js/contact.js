
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      alert("Thank you! We have received your message. We will contact you within 5 minutes.");
      contactForm.reset(); 
    });
  });

