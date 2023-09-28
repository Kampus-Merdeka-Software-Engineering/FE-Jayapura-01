// =================
// responsive navbar
// =================

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navList = document.querySelector(".nav-list");

  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navList.classList.remove("active");
  })
);

// Dropdown Checkout.html
/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
// close function dropdown

/* 
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', ()=> {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
*/
