---
layout: page
title: Proactive Software Engineer
---

I'm a developer/designer based in [Location]. 

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

## Technical Skills
<div style="font-size: 40px; display: flex; gap: 20px; flex-wrap: wrap;">
  <i class="devicon-python-plain colored" title="Python"></i>
  <i class="devicon-javascript-plain colored" title="JavaScript"></i>
  <i class="devicon-git-plain colored" title="Git"></i>
</div>

## Featured Projects
<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.url }}">{{ project.title }}</a></strong> - {{ project.description }}
    </li>
  {% endfor %}
</ul>

[Download my CV]