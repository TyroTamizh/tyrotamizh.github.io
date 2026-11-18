document.addEventListener("DOMContentLoaded", () => {
  // Active Section Observer
  const sections = document.querySelectorAll("section, .hero");
  const paletteText = document.getElementById("palette-text");

  // Fires when a section crosses the vertical middle of the viewport.
  // (A fixed visibility threshold never triggers on tall sections.)
  const observerOptions = {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && paletteText) {
        const label = entry.target.dataset.label || entry.target.id;
        if (label) {
          paletteText.textContent = `Location: /${label}`;
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Typing metadata (home page only)
  const text = "Tamizh";
  const speed = 150; // Milliseconds per character
  const typewriter = document.getElementById("typewriter");
  const delayedElements = document.querySelectorAll(".fade-in-delayed");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealDelayed = () => {
    requestAnimationFrame(() => {
      delayedElements.forEach((el, index) => {
        // Stagger the buttons/subtitle slightly
        setTimeout(() => {
          el.classList.add("visible");
        }, index * 200);
      });
    });
  };

  if (typewriter) {
    // The name is in the markup as a no-JS fallback.
    if (prefersReducedMotion) {
      typewriter.textContent = text;
      revealDelayed();
    } else {
      typewriter.textContent = "";
      let i = 0;

      const type = () => {
        if (i < text.length) {
          typewriter.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          revealDelayed();
        }
      };

      // Start typing after a small initial delay
      setTimeout(type, 800);
    }
  }

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

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

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
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".skill-category");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150); // 150ms delay between each card
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  const skillsGrid = document.querySelector(".skills-grid");
  if (skillsGrid) {
    // Initialize cards to be invisible
    skillsGrid.querySelectorAll(".skill-category").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.5s ease-out";
    });
    staggerObserver.observe(skillsGrid);
  }

  //Adding Current date to footer
  const dateElement = document.getElementById("current-date");
  if (dateElement) {
    const today = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    dateElement.textContent = today
      .toLocaleDateString("en-IN", options)
      .toUpperCase();
  }

  function updateClock() {
    const clockElement = document.getElementById("live-clock");
    if (clockElement) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-IN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      clockElement.textContent = timeString;
    }
  }
  setInterval(updateClock, 1000);
  updateClock(); // Initial call

  // Subtle Wiggle
  const cards = document.querySelectorAll('.flip-card');
  
  // Create an observer to trigger the hint when the user scrolls to the cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a temporary wiggle class to each card with a staggered delay
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('hint-wiggle');
            // Remove it after the animation finishes
            setTimeout(() => card.classList.remove('hint-wiggle'), 1000);
          }, index * 150);
        });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const grid = document.querySelector('.module-grid');
  if(grid) cardObserver.observe(grid);

  /* =====================================================
   * 3. Career Roadmap Carousel
   * ===================================================== */
  const timeline = document.getElementById('careerTimeline');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (timeline && nextBtn && prevBtn) {
    const viewport = timeline.parentElement;
    const status = document.getElementById('carouselStatus');
    let counter = 0;

    const getVisible = () => (window.innerWidth <= 768 ? 1 : 3);
    const getTotal = () => timeline.querySelectorAll('.timeline-item').length;
    const getMax = () => Math.max(0, getTotal() - getVisible());

    const updateCarousel = () => {
      const visible = getVisible();
      const total = getTotal();
      counter = Math.min(counter, getMax());

      // Move by one item width (e.g. 33.33% when 3 items are visible)
      timeline.style.transform = `translateX(-${counter * (100 / visible)}%)`;

      // Disable buttons at both ends
      prevBtn.disabled = counter === 0;
      nextBtn.disabled = counter >= getMax();

      // Position indicator, e.g. "1–3 of 4" or "2 of 4"
      if (status) {
        const first = counter + 1;
        const last = Math.min(counter + visible, total);
        status.textContent =
          first === last ? `${first} of ${total}` : `${first}\u2013${last} of ${total}`;
      }
    };

    const goNext = () => {
      if (counter < getMax()) {
        counter++;
        updateCarousel();
      }
    };

    const goPrev = () => {
      if (counter > 0) {
        counter--;
        updateCarousel();
      }
    };

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    // Touch swipe (horizontal swipes only, so vertical scrolling still works)
    if (viewport) {
      let startX = 0;
      let startY = 0;

      viewport.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) goNext();
          else goPrev();
        }
      }, { passive: true });
    }

    // Recalculate on resize (visible count can change between 1 and 3)
    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Initial state
  }
  
});

// Contacts
function initiateConnection(type, url) {
  const consoleBox = document.getElementById("status-console");
  const output = document.getElementById("console-output");

  consoleBox.classList.add("active");
  output.innerHTML = "";

  const lines = [
    `> INITIATING ${type.toUpperCase()} CONNECTION...`,
    `> RESOLVING REMOTE HOST...`,
    `> PINGing ${type}.tamizh.io`,
    `> Reply from 127.0.0.1: time=12ms`,
    `> Reply from 127.0.0.1: time=10ms`,
    `> Handshake successful.`,
    `> Launching secure tunnel...`,
  ];

  let lineIndex = 0;
  const printLine = () => {
    if (lineIndex < lines.length) {
      const p = document.createElement("p");
      p.textContent = lines[lineIndex];
      p.style.margin = "2px 0";
      output.appendChild(p);

      // Auto-scroll to bottom for mobile
      output.scrollTop = output.scrollHeight;

      lineIndex++;
      setTimeout(printLine, 150);
    } else {
      setTimeout(() => {
        window.open(url, "_blank");
        // Optional: Keep console open for a bit or close it
        // consoleBox.classList.remove('active');
      }, 600);
    }
  };

  printLine();
}

function togglePalette() {
  document.getElementById("palette-menu").classList.toggle("open");
}

// Close palette when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".command-palette-nav");
  if (!nav.contains(e.target)) {
    document.getElementById("palette-menu").classList.remove("open");
  }
});

// Shortcut key (Ctrl + K or Cmd + K)
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    togglePalette();
  }
});

// Close palette when a link is clicked
document.querySelectorAll(".palette-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("palette-menu").classList.remove("open");
  });
});
