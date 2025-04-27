const body = document.getElementById("body");

// Mobile Menu Functionality
const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenuPanel = document.getElementById("mobileMenuPanel");
const mobileMenuClose = document.getElementById("mobileMenuClose");

mobileMenuIcon.addEventListener("click", () => {
  mobileMenuPanel.classList.add("open");
  body.classList.add("no_scroll");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenuPanel.classList.remove("open");
  body.classList.remove("no_scroll");
});

// Header Scroll functionality
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed_top");
  } else {
    header.classList.remove("fixed_top");
  }
});

// Testimonial Load Functionality
const loadBtn = document.getElementById("loadBtn");
const testimonialsRoot = document.getElementById("testimonialsRoot");
const testimonialCards = testimonialsRoot.querySelectorAll("#testimonialCard");
let currentCardShown = 3;

if (window.innerWidth <= 1024) {
  testimonialCards.forEach((card, index) => {
    if (index > currentCardShown) {
      card.style.display = "none";
    }
  });

  loadBtn.addEventListener("click", () => {
    let cards = Array.from(testimonialCards);
    for (let i = currentCardShown + 1; i < currentCardShown + 3; i++) {
      cards[i].style.display = "inline-block";
    }
    currentCardShown += 3;
    if (currentCardShown >= cards.length) {
      loadBtn.style.display = "none";
    }
  });
} else {
  loadBtn.style.display = "none";
}
