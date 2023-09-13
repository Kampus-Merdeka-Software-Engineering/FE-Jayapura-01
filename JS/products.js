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


    // shopping cart
    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let listCard = document.querySelector('.listCard');
    let body = document.body;
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');

    // Inisialisasi total dan quantity awal
    let cartTotal = 0;
    let cartQuantity = 0;

    openShopping.addEventListener('click', () => {
        body.classList.add('active');
    });

    closeShopping.addEventListener('click', () => {
        body.classList.remove('active');
    });

    // Function untuk menambah item ke keranjang
    function addToCart(itemName, itemPrice, itemImageSrc) {
        // Membuat elemen <li> untuk item yang ditambahkan ke keranjang
        let listItem = document.createElement('li');

        // Membuat elemen gambar untuk menampilkan gambar item
        let itemImage = document.createElement('img');
        itemImage.src = itemImageSrc; // Mengatur URL gambar

        // Menambahkan item ke dalam elemen <li>
        listItem.appendChild(itemImage); // Menambahkan gambar ke dalam elemen <li>
        listItem.textContent = `${itemName} - Rp. ${itemPrice.toFixed(2)}`;

        // Menambahkan item ke keranjang
        listCard.appendChild(listItem);

        // Menghitung total dan quantity
        cartTotal += itemPrice;
        cartQuantity++;

        // Memperbarui tampilan total dan quantity
        total.textContent = `Rp. ${cartTotal.toFixed(2)}`;
        quantity.textContent = cartQuantity;
    }

    // addToCart
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', () => {
            // Ambil nama, harga, dan URL gambar dari elemen yang sesuai
            let itemName = button.parentElement.querySelector('h2').textContent;
            let itemPrice = parseFloat(button.parentElement.querySelector('p').textContent.replace('Rp. ', ''));
            let itemImageSrc = button.parentElement.querySelector('img').src; // Ambil URL gambar
            console.log(itemImageSrc);

            // Panggil fungsi addToCart untuk menambahkan item ke keranjang
            addToCart(itemName, itemPrice, itemImageSrc);
        });
    });
