---
layout: default
title: Home
---

## About Me
I am a software engineer focused on building robust and resilient systems. I believe in the philosophy: **"Built to break. Tested to last."**

## Technical Skills

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

<div style="font-size: 30px; display: flex; gap: 15px; margin-top: 10px;">
  <i class="devicon-python-plain colored" title="Python"></i>
  <i class="devicon-javascript-plain colored" title="JavaScript"></i>
  <i class="devicon-cplusplus-plain colored" title="C++"></i>
  <i class="devicon-git-plain colored" title="Git"></i>
  <i class="devicon-docker-plain colored" title="Docker"></i>
</div>

## Featured Projects
<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.url }}">{{ project.title }}</a></strong> - {{ project.description }}
    </li>
  {% endfor %}
</ul>