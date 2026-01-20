---
layout: default
title: Home
---

<section class="hero" id="Landing Page">
  <div class="container hero-container">
    <div class="terminal-meta">
      <span class="meta-prompt">></span> Querying database for 'innovation'... 100% matches found.
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

    <div class="timeline-viewport">
      <div class="timeline" id="careerTimeline">
        {% for job in site.data.experience %}
        <div class="timeline-item {% if job.status == 'current' %}active-role{% endif %}">
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

    <div class="carousel-controls">
      <button id="prevBtn" class="ctrl-btn">&lt; PREV_LOG</button>
      <button id="nextBtn" class="ctrl-btn">NEXT_LOG &gt;</button>
    </div>

  </div>
</section>

<section class="awards-section" id="Awards">
  <div class="container reveal">
    <h1 class="section-title">Recognition_Log</h1>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="terminal-title">awards_output.log</span>
      </div>
      
      <div class="terminal-body">
        <div class="awards-list">
          {% for award in site.data.awards %}
          <div class="award-entry">
            <div class="entry-header">
              <span class="entry-year">[{{ award.year }}]</span>
              <span class="entry-status">SUCCESS</span>
            </div>
            <div class="entry-content">
              <i class="{{ award.icon }} award-glyph"></i>
              <div class="text-group">
                <h3>{{ award.title }}</h3>
                <p class="issuer">SRC: {{ award.issuer }}</p>
                <p class="desc">{{ award.description }}</p>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="skills" id="Skills">
  <div class="container reveal">
    <h1 class="section-title">Technical Toolbox</h1>
    <div class="skills-grid">

      <div class="skill-category">
        <h3><i class="fas fa-code"></i> Automation Frameworks</h3>
        <ul>
          {% for skill in site.data.framework %}
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
        <h3><i class="fas fa-code"></i> Software Tools</h3>
        <ul>
          {% for skill in site.data.bundle %}
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

    </div>
  </div>
</section>