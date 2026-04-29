// Navbar scroll blur
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.webkitBackdropFilter = 'blur(12px)';
  } else {
    navbar.style.backdropFilter = 'none';
    navbar.style.webkitBackdropFilter = 'none';
  }
}, { passive: true });

// Scroll fade-up animation
const fadeUpElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
fadeUpElements.forEach((el) => observer.observe(el));
