function goBack() {
  window.location.href = "index.html";
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cartItems");
  let totalPrice = document.getElementById("totalPrice");

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItemsDiv.innerHTML += `
      <div class="bg-white p-3 rounded shadow flex justify-between items-center">
        <div>
          <p class="font-semibold">${item.name}</p>
          <p class="text-sm text-gray-500">₹${item.price}</p>
        </div>

        <button onclick="removeItem(${index})"
          class="bg-red-500 text-white px-3 py-1 text-xs rounded">
          Delete
        </button>
      </div>
    `;
  });

  if (totalPrice) {
    totalPrice.innerText = total;
  }
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();

function buyNow() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty ❌");
    return;
  }

  alert("Order placed successfully 🎉");

  localStorage.removeItem("cart");

  loadCart();
}