import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const formEmail = document.querySelector(".feedback-form input");
const formMessage = document.querySelector(".feedback-form textarea");
let formData = {};

lastFeedback();
form.addEventListener("input", throttle(checkForm, 500));
form.addEventListener("submit", submitForm);

function checkForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function submitForm(event) {
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function lastFeedback() {
  const feedback = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (feedback) {
    formEmail.value = feedback.email;
    formMessage.value = feedback.message;
  }
}
