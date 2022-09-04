const submitBtn = document.getElementById("submit-email");
const inputEl = document.getElementById("input-el");
const inputContainer = document.getElementById("input-container");

submitBtn.addEventListener("click", function () {
  let emailValue = inputEl.value;
  if (validateEmail(emailValue)) {
    inputContainer.innerHTML += `<p class= "thank-you">Thank you for submitting!</p>`;
  } else {
    inputEl.style.border = "2px solid red";
    inputContainer.innerHTML += `<img src="images/icon-error.svg" class="error"> <p class="enter-email">Please provide a valid email</p>`;
  }
});

function validateEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
