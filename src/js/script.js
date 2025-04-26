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
