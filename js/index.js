const form = document.getElementById("form");
const contactEmail = document.getElementById("contact-email");
const contactName = document.getElementById("contact-name");
const contactMessage = document.getElementById("contact-message");
const contactPhone = document.getElementById("contact-phone");

form.addEventListener("submit", e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const contactNameValue = contactName.value.trim();
  const emailValue = contactEmail.value.trim();
  const messageValue = contactMessage.value.trim();
  const phoneValue = contactPhone.value.trim();

  if (contactNameValue === "") {
    setErrorFor(contactName, "Username cannot be blank");
  } else {
    setSuccessFor(contactName);
  }

  if (emailValue === "") {
    setErrorFor(contactEmail, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(contactEmail, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(contactPhone, "Password cannot be blank");
  } else {
    setSuccessFor(contactPhone);
  }

  if (messageValue === "") {
    setErrorFor(contactMessage, "Message cannot be blank");
  } else {
    setSuccessFor(contactMessage);
  }
}

function setErrorFor(input, message) {}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
