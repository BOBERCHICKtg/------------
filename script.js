document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const activeSlides = "slide--active";
  const slideCount = slides.length;
  const controlButtons = slider.querySelectorAll(".button-radio");
  const prevButton = slider.querySelector(".button-prev");
  const nextButton = slider.querySelector(".button-next");
  const activeButton = "active";
  const inactiveButton = "aria-disabled";
  const currentButton = "aria-current";
  let currentSlide = 0;

  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add(activeSlides);
      } else {
        slide.classList.remove(activeSlides);
      }
    });

    controlButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add(activeButton);
        button.setAttribute(currentButton, true);
      } else {
        button.classList.remove(activeButton);
        button.removeAttribute(currentButton, true);
      }

      prevButton.setAttribute(inactiveButton, currentSlide === 0);
      nextButton.setAttribute(inactiveButton, currentSlide === slideCount - 1);
    });
  }

  controlButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index < slideCount) {
        currentSlide = index;
        updateSlider();
      }
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slideCount - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  slider.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && currentSlide > 0) {
      currentSlide--;
      updateSlider();
    } else if (event.key === "ArrowRight" && currentSlide < slideCount - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  updateSlider();
});

const box = document.getElementById("boxBig");
const boxMini = document.getElementById("boxMini");
const hiddenBox = document.getElementById("hiddenBox");

boxMini.addEventListener("click", () => {
  box.classList.toggle("hidden");
});

const readMore = document.getElementById("readMore");

const originalText = readMore.textContent;

readMore.addEventListener("click", () => {
    hiddenBox.classList.toggle('hidden__box')

  if (readMore.textContent === originalText) {
    readMore.textContent = "Скрыть";
  } else {
    readMore.textContent = originalText;
  }
});
