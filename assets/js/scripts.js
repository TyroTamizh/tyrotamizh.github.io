document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // THIS is what makes it work "a second time"
        // It removes the class when you scroll away so it can re-animate
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
  
  // FORCE Hero to show immediately if JS is slow
  const hero = document.querySelector(".hero .reveal");
  if (hero) {
    hero.classList.add("active");
  }
});