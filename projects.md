---
layout: default
title: My Projects
---

<section id="Works" class="projects-section" style="display: block; padding-top: 100px;">
  <div class="container reveal">
  
    <div class="terminal-window">
      <div class="terminal-header">
        <span>/home/tamizh/portfolio/projects</span>
      </div>

      <div class="terminal-body">
        <div class="directory-header">
          <span class="col">FROM</span>
          <span class="col">TILL</span>
          <span class="col">SIZE</span>
          <span class="col">NAME</span>
        </div>

        {% assign sorted_projList = site.professional_projects | where: "layout", "projectview" | sort: "duration"  %}

        <div class="project-list">
          {% for project in sorted_projList %}
          <div class="project-item">
            <span class="time">{{project.startYr}}</span>
            <span class="time">{{project.endYr}}</span>
            <span class="size">{{ project.title.size | times: 1.0 | divided_by: project.tools.size | round: 2 }}K</span>
            <span class="name">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
              <span class="role-tag">[{{ project.role }}]</span>
            </span>
          </div>
          {% endfor %}

          {% assign sorted_acadList = site.academic_projects | where: "layout", "projectview" | sort: "duration" %}

          {% for project in sorted_acadList %}
          <div class="project-item">
            <span class="time">{{project.startYr}}</span>
            <span class="time">{{project.endYr}}</span>
            <span class="size">{{ project.title.size | times: 1.0 | divided_by: project.tools.size | round: 2 }}K</span>
            <span class="name">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </span>
          </div>
          {% endfor %}
        </div>
      </div>

      <div class="terminal-footer-status">
      <div class="status-item">
        <span class="status-label">TOTAL_PROJECTS:</span>
        <span class="status-value">{{ site.professional_projects.size | plus: site.academic_projects.size }}</span>
      </div>
      <div class="status-item hidden-mobile">
        <span class="status-label">LAST_SCAN:</span>
        <span class="status-value" id="current-date"></span>
      </div>
      <div class="status-item hidden-mobile">
        <span class="status-label">BUILD_STATUS:</span>
        <span class="status-value green">SUCCESS [0 errors]</span>
      </div>
    </div>
    </div>
  </div>
</section>
