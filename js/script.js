function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    const emailInput = document.getElementById("email-input");
    const emailMessage = document.getElementById("message");
    const iconError = document.getElementById("icon-error");

    const email = emailInput.value.trim();

    console.log(email);

    if (!isValidEmail(email)) {
      event.preventDefault();

      emailInput.classList.add("invalid-email");
      emailMessage.style.display = "inline";
      iconError.style.display = "inline";
    } else {
      emailInput.classList.contains("invalid-email") &&
        emailInput.classList.remove("invalid-email");

      emailMessage.style.display = "none";
      iconError.style.display = "none";
    }
  });
