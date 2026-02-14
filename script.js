// NAVBAR + HERO LOAD
const navbar = document.getElementById("navbarID");
const hero = document.getElementById("heroID");
const subhero = document.getElementById("subheroID");

window.addEventListener('load', () => {
  navbar.style.opacity = '1';
  navbar.style.transform = 'translateY(0px)';
  
  setTimeout(() => {
    hero.style.opacity = '1';
  }, 200);
  
  setTimeout(() => {
    subhero.style.opacity = '1';
  }, 600);
});

// SCROLL REVEAL ANIMATION
const animatedSections = document.querySelectorAll('.content, .section2, .catalogue, .menusec');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(section => {
  observer.observe(section);
});

// PRODUCT IMAGE HOVER SWAPS
const product1 = document.getElementById("clothe1");
const product2 = document.getElementById("clothe2");
const product3 = document.getElementById("clothe3");
const product4 = document.getElementById("clothe4");

const products = [
  { el: product1, normal: "clothe1.avif", hover: "clothe1hover.avif" },
  { el: product2, normal: "clothe2.avif", hover: "clothe2hover.avif" },
  { el: product3, normal: "clothe3.avif", hover: "clothe4hover.avif" },
  { el: product4, normal: "clothe4.avif", hover: "clothe3hover.avif" }
];

products.forEach(({ el, normal, hover }) => {
  el.addEventListener("mouseenter", () => el.src = hover);
  el.addEventListener("mouseleave", () => el.src = normal);
});
