// 1.## 1️⃣ Dynamic List Creator

// Create a button **"Add Item"**.

// When the button is clicked:

// - Create a new `<li>` element using `createElement()`
// - Add text `"New Item"`
// - Append it to an existing `<ul>`

function addItem() {

    // create li element
    let li = document.createElement("li");

    // add text
    li.textContent = "New Item";

    // select ul
    let ul = document.getElementById("list");

    // append li to ul
    ul.appendChild(li);
}

//2.## Create Cards Dynamically
// constproducts= [
//  { name:"Laptop", price:50000 },
//  { name:"Phone", price:20000 },
//  { name:"Tablet", price:15000 }
// ];

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const container = document.getElementById("container");

products.forEach(p => {
  const div = document.createElement("div");
  div.textContent = p.name + " - ₹" + p.price;
  container.appendChild(div);
});

// //3.# 3️⃣Dynamic Table Generator

// Create a button **"Generate Table Row"**.

// When clicked:

// - Create a new `<tr>`
// - Add `<td>` elements:
//     - Name
//     - Email
//     - Role
// - Append to table body.

// Use:

// ```
// createElement()
// appendChild()
function addRow() {

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = "John";

  const td2 = document.createElement("td");
  td2.textContent = "john@gmail.com";

  const td3 = document.createElement("td");
  td3.textContent = "Developer";

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  document.getElementById("tableBody").appendChild(tr);
}