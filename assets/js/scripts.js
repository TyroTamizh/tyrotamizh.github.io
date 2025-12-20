document.addEventListener("DOMContentLoaded", function() {
  
  // --- PART 1: Scroll Reveal Logic ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
  
  const hero = document.querySelector(".hero .reveal");
  if (hero) {
    hero.classList.add("active");
  }

  // --- PART 2: Vertical Ticker Logic ---
  const ticker = document.getElementById('ticker');
  
  if (ticker) {
    const listItems = ticker.querySelectorAll('li');
    let currentIndex = 0;

    function moveTicker() {
      // 1. Increment index
      currentIndex++;
      
      // 2. Reset if at the end
      if (currentIndex > listItems.length-2) {
        currentIndex = 0;
      }
      listItems[currentIndex].classList.remove('active');
      listItems[currentIndex+1].classList.add('active');
      // 3. GET DYNAMIC HEIGHT
      // This measures the exact height of the LI in the browser right now
      const stepHeight = listItems[currentIndex].offsetHeight;
      
      // 4. APPLY TRANSFORM
      ticker.style.transform = `translateY(-${currentIndex * stepHeight}px)`;
    }

    // Run every 2.5 seconds
    setInterval(moveTicker, 2500);
  }
});