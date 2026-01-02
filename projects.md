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
          <span class="col">PERMISSIONS</span>
          <span class="col">OWNER</span>
          <span class="col">SIZE</span>
          <span class="col">NAME</span>
        </div>

        <div class="project-list">
          {% for project in site.professional_projects %}
          <div class="project-item">
            <span class="perm">drwxr-xr-x</span>
            <span class="owner">pro</span>
            <span class="size">4.0K</span>
            <span class="name">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
              <span class="role-tag">[{{ project.role }}]</span>
            </span>
          </div>
          {% endfor %}

          {% for project in site.academic_projects %}
          <div class="project-item">
            <span class="perm">-rw-r--r--</span>
            <span class="owner">acad</span>
            <span class="size">2.1K</span>
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
      <div class="status-item">
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
