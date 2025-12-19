---
layout: default
title: My Projects
---

# Project Portfolio

## 🏢 Professional Work
These projects were completed during my tenure at various companies.

<div class="project-grid">
  {% for project in site.professional_projects %}
    <div class="project-card">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p><strong>Role:</strong> {{ project.role }}</p>
      <p>{{ project.content | strip_html | truncatewords: 20 }}</p>
    </div>
  {% endfor %}
</div>

---

## 🎓 Academic & Personal
Research and projects from my university years.

<div class="project-grid">
  {% for project in site.academic_projects %}
    <div class="project-card">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.content | strip_html | truncatewords: 20 }}</p>
    </div>
  {% endfor %}
</div>