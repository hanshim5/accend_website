/* Copied from W3 Schools: How TO - Slideshow */

// main.js
let slideIndex = 1;
let timer = null;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startAuto();
});

function startAuto() {
  // slower autoplay (Issue #2)
  timer = setInterval(() => {
    plusSlides(1);
  }, 4500);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAuto();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAuto();
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}
