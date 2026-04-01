

function registerUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !phone || !email || !password) {
    alert("Fill all fields");
    return;
  }

  const user = { name, phone, email, password };

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Registered Successfully ✅");

  window.location.href = "login.html";
}


// GLOBAL CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
  console.log("Adding:", name); // debug

  let item = cart.find(p => p.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart ✅");
}
