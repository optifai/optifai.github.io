// Navbar scroll behavior
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Scroll suave al hacer clic en links con anclas internas
document.addEventListener("DOMContentLoaded", () => {
  const headerOffset = 80;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href.length > 1) {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const targetPosition = target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
});




  
  