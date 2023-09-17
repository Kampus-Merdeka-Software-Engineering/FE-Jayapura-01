document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".category-option");
    const coffeeItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();

            // Hapus kelas "active" dari semua item menu
            menuItems.forEach((item) => item.classList.remove("active"));
            // Tambahkan kelas "active" hanya pada item menu yang diklik
            this.classList.add("active");

            // Dapatkan nilai data-filter dari item menu yang diklik
            const filter = this.getAttribute("data-filter");

            // Tampilkan atau sembunyikan item kopi berdasarkan filter
            coffeeItems.forEach((coffeeItem) => {
                const category = coffeeItem.getAttribute("data-category");
                if (filter === "all" || filter === category) {
                    coffeeItem.style.display = "block";
                } else {
                    coffeeItem.style.display = "none";
                }
            });
        });
    });
});



//fetching json

fetch('assets/products.json')
    .then((response) => response.json())
    .then((data) => {
        // Loop melalui data produk dan tambahkan setiap produk ke dalam DOM
        data.products.forEach((product) => {
            addProductToDOM(product);
        });
    });

//looping product to html structures

function addProductToDOM(product) {
    const menuItems = document.querySelector('.menu-item'); // Ganti dengan elemen HTML tempat menampilkan produk

    // Buat elemen div untuk menampilkan produk
    const productDiv = document.createElement('div');
    productDiv.className = 'menu-item';
    productDiv.dataset.category = product.category;

    // Buat elemen gambar
    const img = document.createElement('img');
    img.src = product.imageSrc;
    img.alt = product.name;

    // Buat elemen judul produk
    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    // Buat elemen harga produk
    const p = document.createElement('p');
    p.textContent = `Rp. ${parseFloat(product.price)}`;

    const button = document.createElement('button');
    button.className = 'add-to-cart-button';
    button.innerHTML = '<i class="fa-solid fa-cart-plus"></i>Add to Cart';

    productDiv.appendChild(img);
    productDiv.appendChild(h2);
    productDiv.appendChild(p);
    productDiv.appendChild(button);

    menuItems.appendChild(productDiv);
}

//Logika shopping  cart

let cartTotal = 0;
let cartQuantity = 0;

const list = document.querySelector('.card .list');

function addToCartAndUpdate(itemName, itemPrice, itemImageSrc) {
    let listItem = document.createElement('li');
    let itemImage = document.createElement('img');
    itemImage.src = itemImageSrc;

    listItem.textContent = `${itemName} - Rp. ${itemPrice.toFixed(3)}`;
    listItem.insertBefore(itemImage,listItem.firstChild);

    list.appendChild(listItem);

    cartTotal += itemPrice;
    cartQuantity++;

    document.querySelector('.total').textContent = `Rp. ${cartTotal.toFixed(3)}`;
    document.querySelector('.quantity').textContent = cartQuantity;
}

//add event to button add-to-cart

document.querySelector('.menu-item').addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-button')) {
      const productDiv = event.target.parentElement;
      const productName = productDiv.querySelector('h2').textContent;
      const productPriceText = productDiv.querySelector('p').innerText;
      console.log(productPriceText);
      const cleanedPriceText = productPriceText.replace('Rp. ', '').replace(',', '');   
      const productPrice = parseFloat(cleanedPriceText);
      console.log(productPrice);
      const productImageSrc = productDiv.querySelector('img').src;
        
      
      addToCartAndUpdate(productName, productPrice, productImageSrc);
    }
  });

// Open and Close Shopping Cart
const shoppingCart = document.querySelector('.shopping');
const closeShoppingCart = document.querySelector('.closeShopping');
const body = document.body;

shoppingCart.addEventListener('click', () => {
    body.classList.toggle('active');
});

closeShoppingCart.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeShopping')) {
        body.classList.remove('active');
    }
});