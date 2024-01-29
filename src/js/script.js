document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  document
    .getElementById("mobileMenuBtn")
    .addEventListener("click", function () {
      console.log("clicked");
      document.getElementById("mobileMenu").classList.toggle("hidden");
    });

  // Initialize the first Splide slider (moving upwards)
  const splideUp = new Splide("#splide", {
    type: "loop",
    perPage: 2,
    focus: "center",
    gap: "1rem",
    direction: "ttb",
    pagination: false,
    arrows: false,
    height: "30em",
    width: "12em",
  }).mount();

  // Initialize the second Splide slider (also moving upwards, but we'll reverse the transform)
  const splideDown = new Splide("#splide2", {
    type: "loop",
    perPage: 2,
    gap: "1rem",
    direction: "ttb",
    pagination: false,
    arrows: false,
    height: "30em",
    width: "12em",
  }).mount();

  // Function to update the slider's position
  function updatePosition(splide, velocity) {
    let position = splide.Components.Move.getPosition();
    position += velocity;

    const limit = splide.Components.Move.getLimit(false);
    const size = splide.Components.Layout.sliderSize();

    splide.Components.Move.translate(position);
  }

  // Animation loop for smooth scrolling
  function animate() {
    // Update positions
    updatePosition(splideUp, -1); // Move up by 1px
    updatePosition(splideDown, 1); // Move down by 1px

    // Continue the loop
    requestAnimationFrame(animate);
  }

  // Start the animation
  animate();
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

  const itemTexts = {
    1: "Hochwertige Malerarbeiten Text...",
    2: "Kompetente Gestaltung & Beratung Text...",
    3: "Qualitative Bodenbelagsarbeiten Text...",
    4: "Liebevolle Restaurierungen Text...",
    5: "Energieberatung Text...",
  };

  // Function to open the popup with the correct content
  function openPopup(itemNumber) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    popupContent.textContent = itemTexts[itemNumber];
    popup.classList.remove("hidden");
  }

  document.querySelectorAll(".item").forEach((item, index) => {
    item.addEventListener("click", () => openPopup(index + 1));
  });

  const projects = [
    {
      imgSrc: "src/images/Rectangle 70.png",
      title: "Projekt 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imgSrc: "src/images/Rectangle 46.png",
      title: "Projekt 2024",
      text: "Ut enim ad minim veniam, quis nostrud exercitation...",
    },
  ];

  // Keep track of the current project index
  let currentProjectIndex = 0;

  // Function to update the project content
  function updateProjectContent(index) {
    const projectImage = document.querySelector(".slider-content img");
    const projectTitle = document.querySelector(".slider-secoder-text");
    const projectText = document.querySelector(".slider-content-text");

    projectImage.src = projects[index].imgSrc;
    projectTitle.textContent = projects[index].title;
    projectText.textContent = projects[index].text;
  }

  // Function to handle left arrow click
  function handleLeftArrowClick() {
    if (currentProjectIndex === 0) {
      currentProjectIndex = projects.length - 1;
    } else {
      currentProjectIndex--;
    }
    updateProjectContent(currentProjectIndex);
  }

  // Function to handle right arrow click
  function handleRightArrowClick() {
    if (currentProjectIndex === projects.length - 1) {
      currentProjectIndex = 0;
    } else {
      currentProjectIndex++;
    }
    updateProjectContent(currentProjectIndex);
  }

  const leftArrowButton = document.querySelector(".arrow-left");
  const rightArrowButton = document.querySelector(".arrow-right");

  leftArrowButton.addEventListener("click", handleLeftArrowClick);
  rightArrowButton.addEventListener("click", handleRightArrowClick);

  updateProjectContent(0);
});

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}
