import handleHamburger from "./hamburger.js";
import getPosts from "./api/getPosts.js";
import renderPosts from "./ui/renderPosts.js";
import { showLoader, hideLoader } from "./loader/loader.js";

handleHamburger();

async function displayPosts() {
  const boardsElement = document.querySelector(".carousel");

  try {
    showLoader();
    const posts = await getPosts();
    renderPosts(posts, boardsElement);

    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    console.log(slides);
    const slidewidth = slides[0].getBoundingClientRect().width;
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);

    const setSlidePosition = (slide, index) => {
      slide.style.left = slidewidth * index + "px";
    };

    slides.forEach(setSlidePosition);
    const prevButton = document.querySelector(".carousel__button--left");

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    };

    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const prevDot = currentDot.previousElementSibling;
      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
    });

    const nextButton = document.querySelector(".carousel__button--right");

    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const nextDot = currentDot.nextElementSibling;
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    });

    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".current-slide");
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      console.log(dots);
    });
  } catch (error) {
    boardsElement.innerHTML = error.message;
  }
  hideLoader();
}

displayPosts();
