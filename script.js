document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  document.getElementById('mobileMenuBtn').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

  new Splide("#splide", {
    type: "loop",
    drag: "free",
    perPage: 2, // Use fade transition
    autoScroll: {
      speed: 1,
    },
    focus: "center",
    gap: "1rem",
    direction: "ttb",
    pagination: false, // Disable pagination
    arrows: false,
    height: "20em", // Top to bottom direction for vertical display
  }).mount(window.splide.Extensions);

  new Splide("#splide2", {
    type: "loop",
    drag: "free",
    perPage: 2, // Use fade transition
    autoScroll: {
      speed: 1,
    },
    gap: "1rem",
    direction: "btt",
    pagination: false, // Disable pagination
    arrows: false,
    height: "20em", // Top to bottom direction for vertical display
  }).mount(window.splide.Extensions);
});

const changeBottomImage = (imageindex) => {
  document.getElementsByClassName("active")[0].classList.add("hidden");
  document.getElementsByClassName("active")[0].classList.remove("active");
  //get the children of the element with class name slider-show-images
  let images = document.getElementsByClassName("slider-show-images");
  images[imageindex - 1].classList.add("active");
  images[imageindex - 1].classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-content");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.querySelector(".arrow-left").addEventListener("click", prevSlide);
  document.querySelector(".arrow-right").addEventListener("click", nextSlide);
});
