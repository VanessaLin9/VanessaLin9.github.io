const slides = Array.from(document.querySelectorAll(".slide"));
const slidesTrack = document.getElementById("slides");
const slideDots = document.getElementById("slideDots");
const progressFill = document.getElementById("progressFill");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const navButtons = Array.from(document.querySelectorAll(".nav-button"));

let currentIndex = 0;
let isTransitioning = false;

function decorateRevealElements() {
  slides.forEach((slide) => {
    const revealCandidates = slide.querySelectorAll(
      ".eyebrow, h1, h2, .lead, .pill-row, .cta-row, .info-card, .story-panel, .principles-panel, .section-copy, .timeline-card, .project-card, .closing-card"
    );

    revealCandidates.forEach((element, index) => {
      if (!element.classList.contains("reveal")) {
        element.classList.add("reveal");
      }

      element.dataset.delay = String(Math.min(index, 3));
    });
  });
}

function clampIndex(index) {
  return Math.max(0, Math.min(index, slides.length - 1));
}

function updateDots() {
  const dots = slideDots.querySelectorAll(".slide-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
  });
}

function updateProgress() {
  const progress = ((currentIndex + 1) / slides.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function updateSlides(nextIndex) {
  currentIndex = clampIndex(nextIndex);
  slidesTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === currentIndex);
  });

  updateDots();
  updateProgress();
}

function goToSlide(nextIndex) {
  if (window.innerWidth <= 1100) {
    currentIndex = clampIndex(nextIndex);
    slides[currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    updateDots();
    updateProgress();
    return;
  }

  if (isTransitioning) return;
  isTransitioning = true;
  updateSlides(nextIndex);

  window.setTimeout(() => {
    isTransitioning = false;
  }, 700);
}

function buildDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    slideDots.appendChild(dot);
  });
}

function handleWheel(event) {
  if (window.innerWidth <= 1100) return;
  if (Math.abs(event.deltaY) < 20 && Math.abs(event.deltaX) < 20) return;

  event.preventDefault();
  const direction = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

  if (direction > 0) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function handleKeydown(event) {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    goToSlide(currentIndex + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    goToSlide(currentIndex - 1);
  }
}

let touchStartX = 0;
let touchDeltaX = 0;

function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].clientX;
}

function handleTouchEnd(event) {
  touchDeltaX = event.changedTouches[0].clientX - touchStartX;

  if (Math.abs(touchDeltaX) < 60) return;

  if (touchDeltaX < 0) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

buildDots();
decorateRevealElements();
updateSlides(0);

prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));
navButtons.forEach((button) => {
  button.addEventListener("click", () => goToSlide(Number(button.dataset.target)));
});

window.addEventListener("wheel", handleWheel, { passive: false });
window.addEventListener("keydown", handleKeydown);
window.addEventListener("touchstart", handleTouchStart, { passive: true });
window.addEventListener("touchend", handleTouchEnd, { passive: true });
