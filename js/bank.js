document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("userEmail");
  const email = emailField.value;
  const passwordField = document.getElementById("userPassword");
  const password = passwordField.value;

  if (email === "mdmaraj1500@gmail.com" && password === "123456") {
    window.location.href = "bank.html";
  } else {
    alert("kihh!!! Tui password vule gesossss???");
  }
});
