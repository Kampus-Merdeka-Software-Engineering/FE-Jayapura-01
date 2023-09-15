// responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navList = document.querySelector(".nav-list");

  navbarToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  const videoPlayer = document.getElementById("video-player");

  window.addEventListener("load", () => {
    videoPlayer.controls = false;
  });
});


// AUTO SLIDE
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change after 3 second
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}