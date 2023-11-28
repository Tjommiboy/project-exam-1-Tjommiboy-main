document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const errorMessages = document.getElementById("error-messages");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  contactForm.addEventListener("submit", function (event) {
    const errors = [];

    if (nameInput.value.length < 5) {
      errors.push("Name must be at least 5 characters long.");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }

    if (subjectInput.value.length < 15) {
      errors.push("Subject must be at least 15 characters long.");
    }

    if (messageInput.value.length < 25) {
      errors.push("Message must be at least 25 characters long.");
    }

    if (errors.length > 0) {
      event.preventDefault();
      errorMessages.innerHTML =
        "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
      errorMessages.style.color = "red";
    } else {
      errorMessages.innerHTML = "";
      errorMessages.style.color = "inherit";
    }
  });
});
