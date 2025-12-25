document.addEventListener("DOMContentLoaded", () => {

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


  /* =====================================================
   * 3. Work Section (Roles)
   * ===================================================== */
  const rolesDisplay = document.getElementById("roles-display");
  const carousel = document.querySelector(".work-carousel");

  const cards = {
    wipro: document.getElementById("card-wipro"),
    tcs: document.getElementById("card-tcs"),
  };

  const roles = {
    wipro: `
      <center><span class="role-text">Senior QA Engineer</span><br>
      <span class="role-date">Oct 2021 — Present</span></center>
    `,
    tcs: `
      <center><span class="role-text">IT Analyst / Module Lead</span><br>
      <span class="role-date">Jan 2019 — Sept 2021</span><br><br>
      <span class="role-text">System Engineer / QA Analyst</span><br>
      <span class="role-date">June 2015 — Dec 2018</span></center>
    `,
  };

  window.revealRoles = (company) => {
    const selectedCard = cards[company];
    const isActive = selectedCard.classList.contains("active");

    if (isActive) {
      closeWorkSection();
      return;
    }

    resetWorkSection();

    setTimeout(() => {
      selectedCard.classList.add("active");
      rolesDisplay.classList.add(`active-${company}`);
      rolesDisplay.innerHTML = roles[company];
      rolesDisplay.classList.add("open");

      setTimeout(() => {
        carousel?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 350);
    }, 50);
  };

  const resetWorkSection = () => {
    rolesDisplay.classList.remove("open", "active-wipro", "active-tcs");
    Object.values(cards).forEach(card => card.classList.remove("active"));
  };

  const closeWorkSection = () => {
    resetWorkSection();
  };


  /* =====================================================
   * 4. Click Outside to Close
   * ===================================================== */
  document.addEventListener("click", (e) => {
    if (
      rolesDisplay.classList.contains("open") &&
      !carousel.contains(e.target)
    ) {
      closeWorkSection();
    }
  });

});
