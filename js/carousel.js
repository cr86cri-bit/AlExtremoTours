window.initHeroCarousel = function initHeroCarousel() {
  const slides = Array.from(document.querySelectorAll(".hero-image"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  let currentSlide = 0;
  let carouselTimer;

  function showSlide(index) {
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
  }

  function startCarousel() {
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5200);
  }

  prevButton?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startCarousel();
  });

  nextButton?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.carouselDot));
      startCarousel();
    });
  });

  if (slides.length) {
    showSlide(0);
    startCarousel();
  }
};
