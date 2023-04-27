function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    
    // Check if the email is valid
    if (email.length === 0) {
      emailInput.setCustomValidity("Please enter an email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }
  }

  emailInput.addEventListener('input', validateEmail);
