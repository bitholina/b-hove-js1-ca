const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("Form submitted");

  // N A M E
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;
  const trimNameValue = nameValue.trim();
  const nameValueLength = trimNameValue.length;

  if (nameValueLength > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  // A N S W E R
  const answer = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answer.value;
  const trimAnswerValue = answerValue.trim();
  const answerValueLength = trimAnswerValue.length;

  if (answerValueLength >= 10) {
    answerError.style.display = "none";
  } else {
    answerError.style.display = "block";
  }

  // E M A I L
  const email = document.querySelector("#email");
  const emailValue = email.value;
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    emailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  // A D D R E S S
  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = address.value;
  const trimaddressValue = addressValue.trim();
  const addressValueLength = trimaddressValue.length;

  if (addressValueLength >= 15) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
