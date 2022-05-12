var form = document.querySelector("#form");
form.addEventListener("submit", checkData);

var userInfo = JSON.parse(localStorage.getItem("userDetails")) || [];

function checkData() {
  event.preventDefault();
  data = {
    email: form.mail.value,
    password: form.pass.value,
  };
  var validUser = false;

  userInfo.forEach((element) => {
    if (element.mail == data.email && element.pass == data.password)
      validUser = true;
  });
  var loginInfo = JSON.parse(localStorage.getItem("loginDetails")) || [];
  if (validUser == true) {
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
}
