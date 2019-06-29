let validator = require("email-validator");
const redirects = require('../_redirects');
console.log(redirects);
//by clicking sign up button in the header you will be moved to email section
const scrollToRegister = () => {
  let element = document.getElementById("footer");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
};
document
  .getElementById("register_anchor")
  .addEventListener("click", scrollToRegister);

//basic protection for mail

const sendMail = () => {
  let username = "wayweapp",
    domain = "gmail.com";
  window.location.href =
    "mailto:" + username.substring(0) + "@" + domain.substring(0);
};
document
  .getElementById("fake_address")
  .addEventListener("click", sendMail);

document
  .getElementById("business-mail")
  .addEventListener("click", sendMail);

const validateEmail = e => {
  if (validator.validate(document.getElementById("email").value)) {
    console.log("udalo się");
  } else {
    e.preventDefault();
    alert("Wrong email");
  }
};

let form = document.getElementsByClassName("form");
Array.from(form).forEach(function(element) {
  element.addEventListener("submit", validateEmail);
});

function detectmob() {
  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    document
      .getElementsByClassName("nav-01")[0]
      .classList.add("is-hidden");
  } else {
    return false;
  }
}
detectmob();
