---
layout: default
title: Home
---

<section class="hero">
  <div class="container reveal"> <h1>Hi, I'm Tamizh</h1>
    <p class="subtitle">Automation Engineer with an urge to learn new technologies.</p>
    <a href="/projects" class="btn">View My Work</a>
  </div>
</section>

<section class="trait"> 
  <div class="container">
    <h1>I can</h1>
    <div class="list-wrapper">
      <ul id="ticker">
        <li>Test Applications and APIs</li>
        <li>Manage defects</li>
        <li>Write Automation scripts</li>
        <li>Be a team-player</li>
        <li>Manage a simple team</li>
        <li>Build simple application</li>
      </ul>
    </div>
  </div>
</section>

<section class="work">
  <div class="container">
    <h1>Worked at</h1>
    
    <div class="work-carousel">
      <div class="company-card" id="card-wipro" onclick="revealRoles('wipro')">
        <img src="{{ '/assets/images/wipro.svg' | relative_url }}" alt="Wipro">
      </div>

      <div class="roles-display" id="roles-display">
        </div>

      <div class="company-card" id="card-tcs" onclick="revealRoles('tcs')">
        <img src="{{ '/assets/images/tcs.svg' | relative_url }}" alt="TCS">
      </div>
    </div>
  </div>
</section>

<section class="skills">
  <div class="container reveal"> 
    <h1 class="section-title">Technical Toolbox</h1>
    <div class="skills-grid">

      <div class="skill-category">
        <h3>Code speak</h3>
        <ul>
          {% for skill in site.data.swLang %}
            <li>{{ skill.name }}</li>
          {% endfor %}
        </ul>
      </div>

      <div class="skill-category">
        <h3>Frameworks</h3>
        <ul>
          {% for skill in site.data.framework %}
            <li>{{ skill.name }}</li>
          {% endfor %}
        </ul>
      </div>

      <div class="skill-category">
        <h3>Tech Bundles</h3>
        <ul>
          {% for skill in site.data.bundle %}
            <li>{{ skill.name }}</li>
          {% endfor %}
        </ul>
      </div>

    </div>
  </div>
</section>