// document.addEventListener("DOMContentLoaded", function() {
   
//     const carousel = document.querySelector(".carousel");
//     const slides = Array.from(document.querySelectorAll(".carousel-slide"));
//     const leftArrow = document.querySelector(".carousel-arrow-left");
//     const rightArrow = document.querySelector(".carousel-arrow-right");
//     let currentSlideIndex = 0;
  
//     // Display the initial slide
//     slides[currentSlideIndex].classList.add("active");

  
//     // Function to show the next slide
//     function showNextSlide() {
//       slides[currentSlideIndex].classList.remove("active");
//       currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//       slides[currentSlideIndex].classList.add("active");
//     }
  
//     // Function to show the previous slide
//     function showPreviousSlide() {
//       slides[currentSlideIndex].classList.remove("active");
//       currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//       slides[currentSlideIndex].classList.add("active");
//     }
  
//     // Function to handle left arrow click
//     function handleLeftArrowClick() {
//       showPreviousSlide();
//     }
  
//     // Function to handle right arrow click
//     function handleRightArrowClick() {
//       showNextSlide();
//     }
  
//     // Add event listeners to the arrow buttons
//     leftArrow.addEventListener("click", handleLeftArrowClick);
//     rightArrow.addEventListener("click", handleRightArrowClick);
//   });




document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const leftArrow = document.querySelector(".carousel-arrow-left");
    const rightArrow = document.querySelector(".carousel-arrow-right");
    let currentSlideIndex = 0;
    let slideInterval;
  
    // Function to show the next slide
    function showNextSlide() {
      slides[currentSlideIndex].classList.remove("active");
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add("active");
    }
  
    // Function to show the previous slide
    function showPreviousSlide() {
      slides[currentSlideIndex].classList.remove("active");
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      slides[currentSlideIndex].classList.add("active");
    }
  
    // Function to start the slide interval
    function startSlideInterval() {
      slideInterval = setInterval(showNextSlide, 3000);
    }
  
    // Function to stop the slide interval
    function stopSlideInterval() {
      clearInterval(slideInterval);
    }
  
    // Function to handle left arrow click
    function handleLeftArrowClick() {
      stopSlideInterval();
      showPreviousSlide();
      startSlideInterval();
    }
  
    // Function to handle right arrow click
    function handleRightArrowClick() {
      stopSlideInterval();
      showNextSlide();
      startSlideInterval();
    }
  
    // Add event listeners to the arrow buttons
    leftArrow.addEventListener("click", handleLeftArrowClick);
    rightArrow.addEventListener("click", handleRightArrowClick);
  
    // Start the slide interval
    startSlideInterval();
  });
  

document.addEventListener("DOMContentLoaded", function() {
  var fadeElements = document.querySelectorAll(".fade-in-on-scroll");

  function fadeInOnScroll() {
    for (var i = 0; i < fadeElements.length; i++) {
      var element = fadeElements[i];
      var elementTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        element.classList.add("fade-in");
      }
    }
  }

  fadeInOnScroll();

  window.addEventListener("scroll", fadeInOnScroll);
});

  