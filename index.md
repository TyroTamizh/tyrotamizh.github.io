---
layout: default
title: Home
---

<section class="hero" id="Landing Page">
  <div class="container hero-container">
    <div class="terminal-meta">
      <span class="meta-prompt">></span> USER: Tamizh | ROLE: Automation_Eng | STATUS: Online
    </div>

    <h1 class="typing-container">
      Hi, I'm&nbsp;<span id="typewriter"></span><span class="cursor">█</span>
    </h1>

    <p class="subtitle fade-in-delayed">Automation Engineer with an urge to learn new technologies.</p>

    <div class="hero-btns fade-in-delayed">
      <a href="/projects" class="btn">View My Work</a>
    </div>
  </div>
</section>

<section class="trait" id="Possibilities">
  <div class="container">
    <h1>I can</h1>
    <div class="list-wrapper">
      <ul id="ticker">
        <li class="active">Test Applications and APIs</li>
        <li>Manage defects</li>
        <li>Write Automation scripts</li>
        <li>Be a team-player</li>
        <li>Manage a simple team</li>
        <li>Build simple application</li>
      </ul>
    </div>
  </div>
</section>

<section class="work" id="Career Map">

  <div class="container reveal">
    <h1 class="section-title" style="color: white;">Career Roadmap</h1>
    <div class="timeline">
      {% for job in site.data.experience %}
      <div class="timeline-item">
        <div class="timeline-dot {% if job.status == 'current' %}active-dot{% endif %}"></div>
        <div class="timeline-content">
          <div class="logo-container">
            {% if job.logo %}
            <img src="/assets/images/{{ job.logo }}" alt="{{ job.company }}" class="company-logo">
            {% else %}
            <span class="logo-fallback">{{ job.short_name }}</span>
            {% endif %}
          </div>
          <h4>{{ job.designation }}</h4>
          <p class="duration">{{ job.duration }}</p>

          <div class="achievement-box hidden-mobile">
            <span class="cmd-prefix">></span> {{ job.highlight }}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="skills" id="Skills">
  <div class="container reveal">
    <h1 class="section-title">Technical Toolbox</h1>
    <div class="skills-grid">

      <div class="skill-category">
        <h3><i class="fas fa-layer-group"></i> Frameworks</h3>
        <ul>
          {% for skill in site.data.framework %}
          <li>{{ skill.name }}</li>
          {% endfor %}
        </ul>
      </div>

      <div class="skill-category">
        <h3><i class="fas fa-code"></i> Scripting Mastery</h3>
        <ul>
          {% for skill in site.data.swLang %}
          <li class="skill-row">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar-container">
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: {{ skill.level }}"></div>
              </div>
            </div>
          </li>
          {% endfor %}
        </ul>
      </div>

      <div class="skill-category">
        <h3><i class="fas fa-cubes"></i> Tech Bundles</h3>
        <ul>
          {% for skill in site.data.bundle %}
          <li>{{ skill.name }}</li>
          {% endfor %}
        </ul>
      </div>

    </div>
  </div>
</section>