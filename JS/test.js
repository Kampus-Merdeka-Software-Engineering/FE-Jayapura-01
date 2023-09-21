function addToCartAndUpdate(itemName, itemPrice, itemImageSrc) {
    const cartList = document.querySelector(".list");
  
    // Membuat elemen-elemen untuk item yang ditambahkan
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
  
    const itemImage = document.createElement("img");
    itemImage.src = itemImageSrc;
    itemImage.alt = itemName;
    cartItem.appendChild(itemImage);
  
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
  
    const quantityDisplay = document.createElement("span");
    quantityDisplay.textContent = "1";
    itemQuantity.appendChild(quantityDisplay);
  
    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.classList.add("decrement");
    decrementButton.addEventListener("click", () => {
      const currentQuantity = parseInt(quantityDisplay.textContent);
      if (currentQuantity > 1) {
        quantityDisplay.textContent = (currentQuantity - 1).toString();
        cartTotal -= itemPrice;
        document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
      }
    });
    itemQuantity.appendChild(decrementButton);
  
    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.classList.add("increment");
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
  