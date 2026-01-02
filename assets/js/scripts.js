document.addEventListener("DOMContentLoaded", () => {
  // Active Section Observer
  const sections = document.querySelectorAll("section, .hero");
  const paletteText = document.getElementById("palette-text");

  const observerOptions = {
    threshold: 0.6, // Change text when 60% of section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Find the matching path from our navigation logic
        const id = entry.target.getAttribute("id");
        if (id) {
          paletteText.textContent = `Location: /${id}`;
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

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
      requestAnimationFrame(() => {
        delayedElements.forEach((el, index) => {
          // Stagger the buttons/subtitle slightly
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 200);
        });
      });
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
