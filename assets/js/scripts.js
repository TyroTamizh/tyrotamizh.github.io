document.addEventListener("DOMContentLoaded", () => {

  // Typing metadata
  const text = " Tamizh";
  const speed = 150; // Milliseconds per character
  const typewriter = document.getElementById("typewriter");
  const delayedElements = document.querySelectorAll(".fade-in-delayed");
  
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Once typing is done, show the subtitle and buttons
      delayedElements.forEach(el => el.classList.add("visible"));
    }
  }

  // Start typing after a small initial delay
  setTimeout(type, 800);

  /* =====================================================
   * 1. Scroll Reveal
   * ===================================================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle("active", isIntersecting);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach(el =>
    revealObserver.observe(el)
  );

  // Ensure hero content is visible immediately
  document.querySelector(".hero .reveal")?.classList.add("active");


  /* =====================================================
   * 2. Vertical Ticker
   * ===================================================== */
  const ticker = document.getElementById("ticker");
  const listWrapper = document.querySelector(".list-wrapper");

  if (ticker && listWrapper) {
    const items = ticker.querySelectorAll("li");
    let index = 0;

    const moveTicker = () => {
      items[index].classList.remove("active");

      index = (index + 1) % items.length;

      items[index].classList.add("active");

      const itemHeight = items[index].offsetHeight;
      ticker.style.transform = `translateY(-${index * itemHeight}px)`;
    };

    setInterval(moveTicker, 2500);
  }

  /* Add this to your existing scroll reveal logic */
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.skill-category');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 150); // 150ms delay between each card
      });
    }
  });
}, { threshold: 0.2 });

const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid) {
  // Initialize cards to be invisible
  skillsGrid.querySelectorAll('.skill-category').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease-out";
  });
  staggerObserver.observe(skillsGrid);
}

//Adding Current date to footer
const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-IN', options).toUpperCase();
  }

});
