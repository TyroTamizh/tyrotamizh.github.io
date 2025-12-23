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
  const wrapper = document.querySelector('.list-wrapper');
  if (ticker && wrapper) {
    const listItems = ticker.querySelectorAll('li');
    let currentIndex = 0;

    function moveTicker() {      
      // 2. Reset if at the end
      if (currentIndex == listItems.length-1) {
        listItems[currentIndex].classList.remove('active');
        currentIndex = 0;
      }

      listItems[currentIndex+1].classList.add('active');
      listItems[currentIndex].classList.remove('active');
      // 3. GET DYNAMIC HEIGHT
      // This measures the exact height of the LI in the browser right now
      const stepHeight = listItems[currentIndex].offsetHeight;
      
      // 4. APPLY TRANSFORM
      ticker.style.transform = `translateY(-${currentIndex * stepHeight}px)`;
      currentIndex++;
    }
    // Run every 2.5 seconds
    setInterval(moveTicker, 2500);
  }

  // Secction 3 : Work
 window.revealRoles = function(company) {
  const display = document.getElementById('roles-display');
  const wiproCard = document.getElementById('card-wipro');
  const tcsCard = document.getElementById('card-tcs');

  const roles = {
    wipro: `
      <span class="role-text">Senior QA Engineer</span>
      <span class="role-date">Oct 2021 — Present</span>
    `,
    tcs: `
      <span class="role-text">IT Analyst / Module Lead</span>
      <span class="role-date">Jan 2019 — Sept 2021</span>
      <span class="role-text">System Engineer / QA Analyst</span>
      <span class="role-date">June 2015 — Dec 2018</span>
    `
  };

  const isAlreadyActive = (company === 'wipro' && wiproCard.classList.contains('active')) || 
                          (company === 'tcs' && tcsCard.classList.contains('active'));

  if (isAlreadyActive) {
    closeWorkSection();
  } else {
    // Reset classes first for a clean switch
    display.classList.remove('open', 'active-wipro', 'active-tcs');
    wiproCard.classList.remove('active');
    tcsCard.classList.remove('active');

   // 1. Initial reset timeout (existing)
    setTimeout(() => {
      if (company === 'wipro') {
        wiproCard.classList.add('active');
        display.classList.add('active-wipro');
      } else {
        tcsCard.classList.add('active');
        display.classList.add('active-tcs');
      }

      display.innerHTML = roles[company];
      display.classList.add('open');

      // 2. New Scroll Timeout (Added inside the first one)
      // We wait 300ms so the "open" animation has physically moved the logos apart
      setTimeout(() => {
        const carousel = document.querySelector('.work-carousel');
        carousel.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 350);

    }, 50);
  }

  // Section 4 : Hamburger section
  // Add this inside your DOMContentLoaded wrapper
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

console.log("Hamburger found:", hamburger); // This will tell us if JS sees the button

if (hamburger) {
  hamburger.onclick = function(e) {
    e.stopPropagation(); // Stop the click from "bleeding" to the body
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    console.log("Hamburger clicked!"); 
  };
}

// Close menu when clicking any link inside
document.querySelectorAll('.nav-links a').forEach(link => {
  link.onclick = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  };
});

};

// Helper function to close the section
function closeWorkSection() {
  const display = document.getElementById('roles-display');
  const wiproCard = document.getElementById('card-wipro');
  const tcsCard = document.getElementById('card-tcs');
  
  display.classList.remove('open', 'active-wipro', 'active-tcs');
  wiproCard.classList.remove('active');
  tcsCard.classList.remove('active');
}

// THE CLICK-AWAY LISTENER
document.addEventListener('click', function(event) {
  const carousel = document.querySelector('.work-carousel');
  const display = document.getElementById('roles-display');

  // If the display is open AND the user clicks outside the carousel container
  if (display.classList.contains('open') && !carousel.contains(event.target)) {
    closeWorkSection();
  }
});

});