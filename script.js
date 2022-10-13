
// Variable Declarations
let signupformEle = document.getElementById("signupForm");
let userNameEle = document.getElementById("username");
let emailEle = document.getElementById("email");
let passwordEle = document.getElementById("password");
let confirmPasswordEle = document.getElementById("confirm-password");
let errMessage = document.querySelectorAll(".error-message");

let inputs = document.querySelectorAll(".form-input");
let showPassords = document.querySelectorAll(".show-passwrod");
let currInput, passwordValue;


// User Validation
userNameEle.addEventListener("input", function (e) {
  if (e.target.value.length < 5 || e.target.value.length >= 15) {
    errMessage[0].innerText = "Min value should 5 and Max 15";
  } else {
    errMessage[0].innerText = "";
  }
});

// Email Validation
emailEle.addEventListener("change", function (e) {
  let emailVal = e.target.value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  if (!emailPattern.test(emailVal)) {
    errMessage[1].style.color = "red";
    errMessage[1].innerText = "Enter Valid Email Address";
  } else {
    errMessage[1].style.color = "transparent";
    errMessage[1].innerText = "";
  }
});

// Password Validation
passwordEle.addEventListener("change", function (e) {
  let passwordValidation = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/;
  passwordValue = e.target.value;

  // console.log(passwordValidation.test(passwordValue));

  if (!passwordValidation.test(passwordValue)) {
    errMessage[2].style.color = "red";
    errMessage[2].style.postion = "red";
    errMessage[2].innerText = `
    should contain at least 8 from the mentioned characters
    should contain at least one digit
    should contain at least one lower case
    should contain at least one upper case
    should contain at least one Special character`;
  } else {
    errMessage[2].style.color = "tranparent";
    errMessage[2].innerText = "";
  }
});

// Confirm Password Validation
confirmPasswordEle.addEventListener("input", function (e) {
  console.log(passwordEle.value, e.target.value);
  if (passwordValue !== e.target.value) {
    errMessage[3].style.color = "red";
    errMessage[3].innerText = "Both Password should match";
  } else {
    errMessage[3].style.color = "transparent";
    errMessage[3].innerText = "";
  }
});

signupformEle.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userNameEle.value == 0) {
    errMessage[0].innerText = "User is Required";
  } else {
    errMessage[0].innerText = " ";
  }

  if (emailEle.value == 0) {
    errMessage[1].innerText = "Valid Email Adress is required";
  } else {
    errMessage[1].innerText = " ";
  }

  if (passwordEle.value == 0) {
    errMessage[2].innerText = "Valid Password is Required";
  } else {
    errMessage[2].innerText = " ";
  }

  if (confirmPasswordEle.value == 0) {
    errMessage[3].innerText = "Valid Password is Required";
  } else {
    errMessage[3].innerText = " ";
  }

});

// Animate Labels   
inputs.forEach((input) => {
  input.addEventListener("blur", function (event) {
    if (event.target.value.length) {
      event.target.classList.add("full");
    } else {
      event.target.classList.remove("full");
    }
  });
});

// Toggle Password Visiblity

showPassords.forEach((password) => {
  password.addEventListener("click", (event) => {
    currInput = event.currentTarget.parentNode.firstChild.nextElementSibling;
    // console.log(currInput);

    if (currInput.type === "password") {
      currInput.type = "text";
      event.target.classList.add("fa-eye-slash");
      event.target.classList.remove("fa-eye");
    } else {
      currInput.type = "password";
      event.target.classList.add("fa-eye");
      event.target.classList.remove("fa-eye-slash");
    }
  });
});
