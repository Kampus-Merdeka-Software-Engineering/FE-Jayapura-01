//fetching json
fetch("assets/products.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop melalui data produk dan tambahkan setiap produk ke dalam DOM
    data.products.forEach((product) => {
      addProductToDOM(product);
    });
  });

//looping product to html structures
function addProductToDOM(product) {
  const menuItems = document.querySelector(".menu-item"); // Ganti dengan elemen HTML tempat menampilkan produk

  // Buat elemen div untuk menampilkan produk
  const productDiv = document.createElement("div");
  productDiv.className = "menu-items";
  productDiv.dataset.category = product.category;

  // Buat elemen gambar
  const img = document.createElement("img");
  img.src = product.imageSrc;
  img.alt = product.name;

  // Buat elemen judul produk
  const h3 = document.createElement("h3");
  h3.textContent = product.name;

  // Buat elemen harga produk
  const p = document.createElement("p");
  p.textContent = `Rp. ${parseFloat(product.price)}`;

  const button = document.createElement("button");
  button.className = "add-to-cart-button";
  button.innerHTML = '<i class="fa-solid fa-cart-plus"></i>Add to Cart';

  productDiv.appendChild(img);
  productDiv.appendChild(h3);
  productDiv.appendChild(p);
  productDiv.appendChild(button);
  menuItems.appendChild(productDiv);
}

//Logika shopping  cart
let cartTotal = 0;
let cartQuantity = 0;

const list = document.querySelector(".card .list");

function addToCartAndUpdate(itemName, itemPrice, itemImageSrc) {
  let listItem = document.createElement("li");
  let itemImage = document.createElement("img");
  itemImage.src = itemImageSrc;

  listItem.textContent = `${itemName} - Rp. ${itemPrice}`;
  listItem.insertBefore(itemImage, listItem.firstChild);

  list.appendChild(listItem);

  cartTotal += itemPrice;
  cartQuantity++;

  document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
  document.querySelector(".quantity").textContent = cartQuantity;
}

//add event to button add-to-cart
document.querySelector(".menu-item").addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-button")) {
    const productDiv = event.target.parentElement;
    const productName = productDiv.querySelector("h3").textContent;
    const productPriceText = productDiv.querySelector("p").innerText;
    console.log(productPriceText);
    const cleanedPriceText = productPriceText.replace("Rp. ", "").replace(",", "");
    const productPrice = parseFloat(cleanedPriceText);
    console.log(productPrice);
    const productImageSrc = productDiv.querySelector("img").src;

    addToCartAndUpdate(productName, productPrice, productImageSrc);
  }
});

// Open and Close Shopping Cart
const shoppingCart = document.querySelector(".shopping img");
const closeShoppingCart = document.querySelector(".closeShopping");
const body = document.body;

shoppingCart.addEventListener("click", () => {
  body.classList.toggle("active");
});

closeShoppingCart.addEventListener("click", (event) => {
  if (event.target.classList.contains("closeShopping")) {
    body.classList.remove("active");
  }
});

// Fungsi untuk mengaktifkan filter berdasarkan kategori
const categoryOptions = document.querySelectorAll(".category-option");

function filterProducts(category) {
  const menuItems = document.querySelectorAll(".menu-items");

  menuItems.forEach((menuItem) => {
    const productCategory = menuItem.dataset.category;

    console.log(productCategory);
    if (category === "all" || category === productCategory) {
      console.log(productCategory);
      menuItem.style.display = "inline-block";
    } else {
      menuItem.style.display = "none";
    }
  });
}

categoryOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();

    categoryOptions.forEach((opt) => {
      opt.classList.remove("active");
    });

    // Tambahkan kelas "active" ke opsi kategori yang dipilih
    option.classList.add("active");

    // Ambil nilai data-category dari opsi kategori yang dipilih
    const selectedCategory = option.dataset.category;

    // Panggil fungsi untuk mengaktifkan filter
    filterProducts(selectedCategory);
  });
});

// berpindah halaman ke checkout.html
function redirectToPage() {
  window.location.href = "checkout.html";
}
