---
layout: default
title: Contact
---

<section class="contact-terminal-section" id="Connect" style="scroll-snap-align: unset;">
  <div class="container">
    <h1 class="section-title">Establish Link</h1>
    
    <div class="contact-pills">
      <button class="pill" onclick="initiateConnection('email', 'mailto:tamizh602@gmail.com')">
        <i class="fas fa-envelope"></i> SMTP_INIT
      </button>
      <button class="pill" onclick="initiateConnection('linkedin', 'https://linkedin.com/in/tamizh-selvan-johnson-093377176')">
        <i class="fab fa-linkedin"></i> TLS_HANDSHAKE
      </button>
      <button class="pill" onclick="initiateConnection('github', 'https://github.com/TyroTamizh')">
        <i class="fab fa-github"></i> SSH_CONNECT
      </button>
    </div>

    <div id="status-console" class="status-console hidden-mobile">
      <div class="console-header">
        <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
        <span class="console-title">Connection_Log.exe</span>
      </div>
      <div id="console-output" class="console-output">
        </div>
    </div>
  </div>
</section>