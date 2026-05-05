function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (
    storedUser &&
    email === storedUser.email &&
    password === storedUser.password
  ) {
    alert("Login Successful ✅");

    // Save login state
    localStorage.setItem("user", storedUser.name);

    window.location.href = "index.html";
  } else {
    alert("Invalid Email or Password ❌");
  }
}


// Skip button
function skipLogin() {
  localStorage.setItem("user", "Guest");
  window.location.href = "index.html";
}