/* ============================================================
   py2ai.in — shared site behaviour
   Loaded by index / roadmap / project / about.
   Purely additive: no fonts, no colours, no layout changes.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. THEME ──────────────────────────────────────────────
     The <head> boot script applies the saved theme before first
     paint (no white flash). This just keeps the button label in
     sync and persists every toggle across pages. */
  function syncThemeButton() {
    var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    var icon = document.getElementById('t-icon');
    var lbl  = document.getElementById('t-lbl');
    if (!icon || !lbl) return;
    // Button shows the mode you'd switch TO.
    if (icon.dataset.svg === 'true' && window.__py2aiIcons) {
      icon.innerHTML = isDark ? window.__py2aiIcons.sun : window.__py2aiIcons.moon;
    } else {
      icon.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    }
    lbl.textContent = isDark ? 'Light' : 'Dark';
  }
  window.py2aiSyncThemeButton = syncThemeButton;

  window.py2aiSaveTheme = function (theme) {
    try { localStorage.setItem('py2ai-theme', theme); } catch (e) {}
  };

  /* ── 2. SCROLL REVEAL ──────────────────────────────────────
     Anything with .rv fades up once as it enters the viewport.
     Staggering is handled with --rv-i (index) in CSS. */
  function initReveal() {
    var items = document.querySelectorAll('.rv');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('rv-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('rv-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  /* Re-scan after a page renders cards with innerHTML */
  window.py2aiRefreshReveal = initReveal;

  /* ── 3. NAV SCROLL STATE ───────────────────────────────────
     Adds .scrolled to .nav-outer past 20px so the bar can pick
     up a subtle backdrop instead of floating over content. */
  function initNav() {
    var nav = document.querySelector('.nav-outer');
    if (!nav) return;
    var ticking = false;
    function update() {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ── 4. ESC CLOSES THE ROADMAP MODAL ───────────────────────
     Clicking the backdrop already worked; the keyboard didn't. */
  function initEsc() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var modal = document.getElementById('rm-modal');
      if (modal && modal.classList.contains('active') && typeof closeModal === 'function') {
        closeModal();
      }
    });
  }

  /* ── 5. CLOSE THE MOBILE MENU ON OUTSIDE TAP ───────────────── */
  function initNavDismiss() {
    document.addEventListener('click', function (e) {
      var bar = document.querySelector('.navbar');
      var btn = document.getElementById('nav-toggle-btn');
      if (!bar || !bar.classList.contains('open')) return;
      if (bar.contains(e.target) || (btn && btn.contains(e.target))) return;
      bar.classList.remove('open');
      if (btn) btn.classList.remove('open');
    });
  }

  function boot() {
    syncThemeButton();
    initReveal();
    initNav();
    initEsc();
    initNavDismiss();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
