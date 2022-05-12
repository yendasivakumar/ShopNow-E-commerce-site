var form = document.querySelector("#form");

form.addEventListener("submit", collectData);

var signupData = JSON.parse(localStorage.getItem("userDetails")) || [];

function collectData() {
  event.preventDefault();
  data = {
    name: form.name.value,
    mail: form.mail.value,
    pass: form.pass.value,
    cpass: form.cpass.value,
  };
  var mailExist = false;
  var emailExist = signupData.map((element) => {
    if (element.mail == data.mail) mailExist = true;
  });

  if (mailExist) {
    alert("This Email Already Exists!");
  } else {
    if (data.pass != data.cpass) {
      document.querySelector("#incorrect").textContent =
        "Passwords Doesn't Match";
    } else {
      signupData.push(data);
      localStorage.setItem("userDetails", JSON.stringify(signupData));
      alert("Signup Successful!");
      window.location.href = "login.html";
    }
  }
}

var showPass = document.querySelector("#showpassword");
showPass.addEventListener("click", showpassword);

function showpassword() {
  var x = document.querySelector("#pass");
  var y = document.querySelector("#cpass");
  if (x.type == "password" && y.type == "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}
