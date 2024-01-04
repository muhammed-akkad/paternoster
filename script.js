document.addEventListener("DOMContentLoaded", function () {
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
    height: "80vh", // Top to bottom direction for vertical display
  }).mount(window.splide.Extensions);

  new Splide("#splide2", {
    type: "loop",
    drag: "free",
    perPage: 2, // Use fade transition
    autoScroll: {
      speed: 1,
    },
    gap: "1rem",
    direction: "ttb",
    pagination: false, // Disable pagination
    arrows: false,
    height: "80vh", // Top to bottom direction for vertical display
  }).mount(window.splide.Extensions);
});


const changeBottomImage = (imageindex) =>{
  document.getElementsByClassName('active')[0].classList.add('hidden');
  document.getElementsByClassName('active')[0].classList.remove('active');
//get the children of the element with class name slider-show-images      
  let images = document.getElementsByClassName('slider-show-images');
  images[imageindex-1].classList.add('active');
  images[imageindex-1].classList.remove('hidden');

}

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slider-content');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.remove('hidden');
          } else {
              slide.classList.add('hidden');
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

  document.querySelector('.arrow-left').addEventListener('click', prevSlide);
  document.querySelector('.arrow-right').addEventListener('click', nextSlide);

  const targetElement = document.getElementById('splide-list');

// Create a MutationObserver instance
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        // Check if the style attribute is mutated
        if (mutation.attributeName === 'style') {
            const currentTransformValue = targetElement.style.transform;

            // Check if the current transform value contains translateY
            if (currentTransformValue.includes('translateY')) {
                // Extract the translateY value
                const translateYValue = currentTransformValue.match(/translateY\(([-\d.]+)px\)/);
                
                if (translateYValue) {
                    // Flip the translateY value and apply it back to the element
                    const flippedValue = -parseFloat(translateYValue[1]);
                    targetElement.style.transform = `translateY(${flippedValue}px)`;
                }
            }
        }
    });
});

// Configure the observer to watch for attribute changes
const config = { attributes: true };

// Start observing the target element
observer.observe(targetElement, config);
});


