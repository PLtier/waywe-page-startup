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
document.getElementById("fake_address").addEventListener("click", sendMail);

document.getElementById("business-mail").addEventListener("click", sendMail);

let validator = require("email-validator");
