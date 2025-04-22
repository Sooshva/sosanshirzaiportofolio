// Carousel Navigation
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function updateCarousel() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});
