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

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

