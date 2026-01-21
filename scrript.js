
// --- NAV LOGIC (UNCHANGED) ---
const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".site-menu-toggle");
const nav = document.querySelector(".site-nav");
const closeBtn = document.querySelector(".site-close-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 50);
});

menuBtn.onclick = () => nav.classList.add("is-active");
closeBtn.onclick = () => nav.classList.remove("is-active");

document.querySelectorAll(".site-dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      link.parentElement.classList.toggle("is-active");
    }
  });
});
// --- UPDATED SLIDER LOGIC ---
const slides = document.querySelectorAll('.slider-item');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentSlide = 0;
const slideIntervalTime = 5000; // 5 seconds
let slideInterval;

// Function to switch slides
function goToSlide(index) {
  slides[currentSlide].classList.remove('is-active');
  // Calculate index correctly regardless of direction (handles looping negative numbers)
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('is-active');
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Event Listeners for manual controls
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// Timer functions for auto-play
function startTimer() {
  slideInterval = setInterval(nextSlide, slideIntervalTime);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

// Initialize auto-play
startTimer();