

function addToCartAndUpdate(itemName, itemPrice, itemImageSrc) {
  const cartList = document.querySelector(".cart-list");

  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item");

  // Menambahkan gambar produk
  const itemImage = document.createElement("img");
  itemImage.src = itemImageSrc;
  itemImage.alt = itemName;
  cartItem.appendChild(itemImage);

  // Membuat elemen "item-info" untuk nama produk, harga, jumlah, tombol decrement, dan tombol increment
  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const itemNameElement = document.createElement("h4");
  itemNameElement.textContent = itemName;
  itemInfo.appendChild(itemNameElement);

  const itemPriceElement = document.createElement("p");
  itemPriceElement.textContent = `Rp. ${itemPrice}`;
  itemInfo.appendChild(itemPriceElement);

  const itemQuantity = document.createElement("div");
  itemQuantity.classList.add("item-quantity");

  const decrementButton = document.createElement("button");
  decrementButton.classList.add("decrement"); // Menambahkan kelas "decrement"
  decrementButton.innerHTML = '<div class="button-text">-</div>'; // Menambahkan angka di dalam tombol
  decrementButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityDisplay.textContent);
    if (currentQuantity > 1) {
      quantityDisplay.textContent = (currentQuantity - 1).toString();
      cartTotal -= itemPrice;
      document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
    } else if (currentQuantity === 1) {
      // Hapus produk dari keranjang jika jumlahnya adalah 1
      cartList.removeChild(cartItem);
      cartTotal -= itemPrice;
      document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
    }
  });
  itemQuantity.appendChild(decrementButton);
  //Deafult jumlah barang
  const quantityDisplay = document.createElement("span");
  quantityDisplay.textContent = "1";
  quantityDisplay.classList.add("quantity-display")
  itemQuantity.appendChild(quantityDisplay);

  const incrementButton = document.createElement("button");
  incrementButton.classList.add("increment"); // Menambahkan kelas "increment"
  incrementButton.innerHTML = '<div class="button-text">+</div>'; // Menambahkan angka di dalam tombol
  incrementButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityDisplay.textContent);
    quantityDisplay.textContent = (currentQuantity + 1).toString();
    cartTotal += itemPrice;
    document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
  });
  itemQuantity.appendChild(incrementButton);
  itemInfo.appendChild(itemQuantity);
  cartItem.appendChild(itemInfo);
  cartList.appendChild(cartItem);

  cartTotal += itemPrice;
  cartQuantity++;

  document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
  document.querySelector(".quantity").textContent = cartQuantity;
}