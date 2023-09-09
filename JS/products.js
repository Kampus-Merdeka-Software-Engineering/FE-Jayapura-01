document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".category-option");
    const coffeeItems = document.querySelectorAll(".menu-item");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");

            coffeeItems.forEach((item) => {
                const category = item.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
