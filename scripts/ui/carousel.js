const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
console.log(slides);
const slidewidth = slides[0].getBoundingClientRect().width;

export default function setSlidePosition = (slide, index) => {
  slide.style.left = slidewidth * index + "px";
};

const nextButton = document.querySelector(".carousel__button--right");
const prvcButton = document.querySelector(".carousel__button--left");
const nav = document.querySelector("carousel__nav");
const dots = Array.from(nav.children);
