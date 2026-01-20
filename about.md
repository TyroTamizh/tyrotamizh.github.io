---
layout: default
title: System_Profile
---

<section class="system-spec-container">
  <div class="spec-header">
    <h1 class="glitch-text" data-text="SYSTEM_SPECIFICATION">SYSTEM_SPECIFICATION</h1>
    <p class="subtitle">Unit ID: TAMIZH SELVAN JOHNSON<br> Role: Automation_Engineer</p>
  </div>

  <div class="spec-grid">
    
    <div class="spec-card reveal">
      <div class="card-header">CORE_IDENTITY</div>
      <div class="card-body">
        <p><span class="label">ALIAS:</span> Tyro</p>
        <p><span class="label">LOCATION:</span> Chennai, TN, India</p>
        <p><span class="label">UPTIME:</span>  {% include tenure.html %} Years</p>
      </div>
    </div>

    <div class="spec-card reveal">
      <div class="card-header">FIRMWARE_REVISIONS</div>
      <div class="card-body">

      <div class="edu-item">
          <p class="edu-title">Master of Business Administation</p>
          <p class="edu-meta">OM & BA @ SRMIST, Chennai</p>
          <p class="edu-date">VER: 2021 - 2024</p>
        </div>

        <div class="edu-item">
          <p class="edu-title">Bachelor of Engineering</p>
          <p class="edu-meta">ECE @ Panimalar Engineering College, Chennai</p>
          <p class="edu-date">VER: 2016 - 2020</p>
        </div>

      </div>
    </div>

    <div class="spec-card reveal">
      <div class="card-header">BACKGROUND_PROCESSES</div>
      <div class="card-body">
        <div class="tags">
          {% for hobby in site.data.details.hobbies %}
          <span class="tag">{{hobby}}</span>
          {% endfor %}
        </div>
      </div>
    </div>

    <div class="spec-card reveal">
      <div class="card-header">VALIDATED_DRIVERS</div>
      <div class="card-body">
        <ul class="spec-list">
          {% for cert in site.data.details.certs %}
          <li>{{cert}}</li>
          {% endfor %}
        </ul>
      </div>
    </div>

  </div>
</section>