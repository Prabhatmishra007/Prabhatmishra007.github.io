/* ============================================================
   py2ai.in — sign-up gate, progress tracking, quiz scores
   ------------------------------------------------------------
   Load in <head>, after auth-config.js and auth.js:
     <script src="auth-config.js"></script>
     <script src="auth.js"></script>
     <script src="track.js"></script>
   What it does on every page:
   1. GATE      — every page except the public ones needs an account.
   2. VISITS    — opening a quiz / notes page, or clicking a practice
                  PDF / project code link, is recorded for that day.
                  A day is "completed" once all its items are visited.
   3. QUIZZES   — saves each attempt's score, shows best/last score,
                  and reshuffles questions + options on every attempt.
   4. PROGRESS  — PY2AI_TRACK.renderBars(el) draws the course and
                  Python Lab progress bars (used across the site).
   5. YOUTUBE   — a soft "subscribe" card on Roadmap, Project, Lab.
   ============================================================ */
(function () {
  'use strict';

  /* "day-12-notes", "day-12-notes.html", "/day-12-notes?x#y" → "day-12-notes.html"
     (files with another extension, like .pdf / .py, keep it) */
  function norm(href) {
    if (!href) return '';
    var k = String(href).split('#')[0].split('?')[0].split('/').pop().toLowerCase();
    if (k && k.indexOf('.') === -1) k += '.html';
    return k;
  }

  /* ── Settings ───────────────────────────────────────── */
  // Py2AI channel (@py.2ai) — sub_confirmation=1 opens YouTube's Subscribe dialog
  var YT_URL = 'https://www.youtube.com/channel/UCp2tB_f66OyRVQbnm3cDECQ?sub_confirmation=1';
  // Page names WITHOUT ".html": GitHub Pages serves both /signup and /signup.html
  var PUBLIC_PAGES = ['', 'index', 'about', 'signup', '404'];
  var YT_PAGES = ['roadmap', 'project', 'lab'];
  var TOTAL_DAYS = 100;
  var LAB_TOTAL = 171;

  var A = window.PY2AI_AUTH;
  var page = (location.pathname.split('/').pop() || '');
  var pageKey = norm(page).replace(/\.html$/, '');
  var isPublic = PUBLIC_PAGES.indexOf(pageKey) !== -1;
  var user = null;

  /* ── 1. Gate: hide the page until we know who's here ── */
  if (!isPublic) {
    var hide = document.createElement('style');
    hide.id = 'py2ai-gate-style';
    hide.textContent = 'html.py2ai-wait body{visibility:hidden!important}';
    document.head.appendChild(hide);
    document.documentElement.classList.add('py2ai-wait');
  }

  /* ── Storage ─────────────────────────────────────────── */
  function storeKey() { return 'py2ai-progress:' + (user ? user.uid : 'anon'); }
  function readStore() {
    try { var d = JSON.parse(localStorage.getItem(storeKey()) || '{}'); } catch (e) { d = {}; }
    d.visited = d.visited || {};
    d.quiz = d.quiz || {};
    return d;
  }
  function writeStore(d) { try { localStorage.setItem(storeKey(), JSON.stringify(d)); } catch (e) {} }


  /* ── 2. Visits and day completion ───────────────────── */
  function markVisited(href) {
    var k = norm(href);
    if (!k || !user) return;
    var d = readStore();
    if (!d.visited[k]) { d.visited[k] = Date.now(); writeStore(d); }
  }
  function isVisited(href) { return !!readStore().visited[norm(href)]; }

  function days() { return window.UNLOCKED_DAYS || {}; }

  /* What a learner must open for a day to count as completed */
  function resourcesFor(day) {
    var x = days()[day];
    if (!x) return [];
    if (Array.isArray(x.actions)) return x.actions.map(function (a) { return a.href; });
    if (x.kind === 'project') {
      var r = [];
      if (x.code) r.push(x.code);
      if (x.week) r.push('week-' + String(x.week).padStart(2, '0') + '-megaquiz.html');
      return r;
    }
    return [x.quiz, x.notes, x.practice].filter(Boolean);
  }
  function dayStatus(day) {
    var res = resourcesFor(day), st = readStore(), n = 0;
    res.forEach(function (h) { if (st.visited[norm(h)]) n++; });
    return { total: res.length, visited: n, done: res.length > 0 && n === res.length };
  }
  function completedDays() {
    var c = 0;
    Object.keys(days()).forEach(function (d) { if (dayStatus(+d).done) c++; });
    return c;
  }
  function labSolved() {
    if (!user) return 0;
    try {
      var d = JSON.parse(localStorage.getItem('py2ai-lab:' + user.uid) || '{}');
      return Object.keys(d).filter(function (k) { return d[k] && d[k].passed; }).length;
    } catch (e) { return 0; }
  }
  function quizRecord(file) { return readStore().quiz[norm(file || page)] || null; }

  /* Clicks on PDFs / code files / pages count as visits */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href');
    if (!h || /^(https?:|mailto:|#|javascript:)/i.test(h)) return;
    if (/\.(pdf|py|html)(\?|#|$)/i.test(h)) markVisited(h);
  }, true);

  /* ── 4. Progress bars component ─────────────────────── */
  var barCSS =
    '.py2ai-bars{display:grid;grid-template-columns:1fr 1fr;gap:14px;width:100%;max-width:720px;margin:0 auto;text-align:left;font-family:Inter,system-ui,sans-serif}' +
    '.py2ai-bar{background:var(--card,#13161f);border:1px solid var(--border,#1e2236);border-radius:14px;padding:14px 16px}' +
    '.py2ai-bar-top{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:9px}' +
    '.py2ai-bar-top span{font-size:13.5px;font-weight:600;color:var(--text2,#b8bccc)}' +
    '.py2ai-bar-top b{font-size:15px;font-weight:800;color:var(--text,#eef0f8)}' +
    '.py2ai-bar-top b small{font-size:12px;font-weight:600;color:var(--muted,#6b7191)}' +
    '.py2ai-track{height:8px;border-radius:8px;background:var(--border,#1e2236);overflow:hidden}' +
    '.py2ai-fill{height:100%;border-radius:8px;width:0;transition:width .6s ease}' +
    '.py2ai-bar.course .py2ai-fill{background:var(--accent,#f5a623)}' +
    '.py2ai-bar.lab .py2ai-fill{background:var(--green,#3ecf8e)}' +
    '.py2ai-bar a{display:inline-block;margin-top:8px;font-size:12.5px;font-weight:600;color:var(--muted,#6b7191)}' +
    '.py2ai-bar a:hover{color:var(--accent,#f5a623)}' +
    '@media(max-width:640px){.py2ai-bars{grid-template-columns:1fr}}';
  var cssDone = false;
  function addCSS(css) {
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  }
  function renderBars(el, opts) {
    if (!el || !user) return;
    opts = opts || {};
    if (!cssDone) { addCSS(barCSS); cssDone = true; }
    var c = completedDays(), l = labSolved();
    var html = '<div class="py2ai-bars">' +
      '<div class="py2ai-bar course"><div class="py2ai-bar-top"><span>Course progress</span>' +
      '<b>' + c + ' <small>/ ' + TOTAL_DAYS + ' days completed</small></b></div>' +
      '<div class="py2ai-track"><div class="py2ai-fill"></div></div>' +
      (opts.links ? '<a href="roadmap.html">Open roadmap</a>' : '') + '</div>' +
      '<div class="py2ai-bar lab"><div class="py2ai-bar-top"><span>Python Lab</span>' +
      '<b>' + l + ' <small>/ ' + LAB_TOTAL + ' problems solved</small></b></div>' +
      '<div class="py2ai-track"><div class="py2ai-fill"></div></div>' +
      (opts.links ? '<a href="lab.html">Open Python Lab</a>' : '') + '</div></div>';
    el.innerHTML = html;
    var fills = el.querySelectorAll('.py2ai-fill');
    requestAnimationFrame(function () {
      fills[0].style.width = Math.max(c ? 2 : 0, c / TOTAL_DAYS * 100) + '%';
      fills[1].style.width = Math.max(l ? 2 : 0, l / LAB_TOTAL * 100) + '%';
    });
  }

  /* ── 3. Quiz pages: shuffle, score, history ─────────── */
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function getQuestions() { try { return questions; } catch (e) { return null; } }   // page's own const
  function getAnswers() { try { return userAnswers; } catch (e) { return null; } }  // page's own let

  function shuffleQuiz() {
    var qs = getQuestions();
    if (!qs || !qs.length) return;
    shuffle(qs);
    qs.forEach(function (q) {
      if (!Array.isArray(q.opts) || typeof q.ans !== 'number') return;
      var correct = q.opts[q.ans];
      var order = shuffle(q.opts.map(function (_, i) { return i; }));
      q.opts = order.map(function (i) { return q.opts[i]; });
      q.ans = q.opts.indexOf(correct);
    });
  }

  var quizCSS =
    '.py2ai-qhist{margin:18px auto 0;max-width:520px;padding:12px 16px;border-radius:12px;font-size:14px;line-height:1.6;' +
    'background:rgba(245,166,35,.08);border:1px solid rgba(245,166,35,.28);color:inherit;text-align:center}' +
    '.py2ai-qhist b{color:#f5a623}' +
    '.py2ai-qhist small{display:block;opacity:.7;font-size:12.5px;margin-top:2px}';

  function histText(rec) {
    if (!rec) return '';
    var pct = function (a) { return Math.round(a.correct / a.total * 100); };
    var last = rec.attempts[rec.attempts.length - 1];
    return 'Last score <b>' + last.correct + '/' + last.total + ' (' + pct(last) + '%)</b> · Best <b>' +
      rec.best.correct + '/' + rec.best.total + ' (' + pct(rec.best) + '%)</b>' +
      '<small>' + rec.attempts.length + ' attempt' + (rec.attempts.length === 1 ? '' : 's') +
      ' · questions and options are reshuffled on every attempt</small>';
  }

  function initQuiz() {
    if (typeof window.startQuiz !== 'function' || typeof window.showResults !== 'function' || !getQuestions()) return;
    addCSS(quizCSS);
    var origStart = window.startQuiz, origShow = window.showResults, live = false;

    window.startQuiz = function () {
      shuffleQuiz();
      live = true;
      return origStart.apply(this, arguments);
    };
    window.showResults = function () {
      var r = origShow.apply(this, arguments);
      if (!live) return r;
      live = false;
      var qs = getQuestions(), ua = getAnswers() || [], correct = 0;
      qs.forEach(function (q, i) { if (ua[i] === q.ans) correct++; });
      var d = readStore(), k = norm(page);
      var rec = d.quiz[k] || { attempts: [], best: null };
      var att = { correct: correct, total: qs.length, at: Date.now() };
      rec.attempts.push(att);
      if (rec.attempts.length > 50) rec.attempts.shift();
      if (!rec.best || correct / qs.length > rec.best.correct / rec.best.total) rec.best = att;
      d.quiz[k] = rec;
      d.visited[k] = d.visited[k] || Date.now();
      writeStore(d);
      showHist();
      return r;
    };

    // Rename the retry button so learners know it's a fresh shuffle
    document.querySelectorAll('.btn-retry').forEach(function (b) { b.textContent = '↺ Reattempt (new order)'; });
    showHist();
  }
  function showHist() {
    var rec = quizRecord();
    var spots = [
      { anchor: document.querySelector('#screen-results .results-top'), id: 'py2ai-qhist-res' },
      { anchor: document.querySelector('.btn-start'), id: 'py2ai-qhist-start', before: true }
    ];
    spots.forEach(function (s) {
      if (!s.anchor || !rec) return;
      var el = document.getElementById(s.id);
      if (!el) {
        el = document.createElement('div'); el.id = s.id; el.className = 'py2ai-qhist';
        if (s.before) { el.style.margin = '0 auto 18px'; s.anchor.parentNode.insertBefore(el, s.anchor); }
        else s.anchor.appendChild(el);
      }
      el.innerHTML = histText(rec);
    });
    var sb = document.querySelector('.btn-start');
    if (sb && rec && !sb.dataset.py2ai) { sb.dataset.py2ai = '1'; sb.textContent = 'Reattempt Quiz →'; }
  }

  /* ── 5. Soft YouTube prompt ─────────────────────────── */
  var ytCSS =
    '.py2ai-yt{position:fixed;right:20px;bottom:20px;z-index:5000;max-width:340px;width:calc(100% - 40px);' +
    'background:var(--card,#13161f);color:var(--text,#eef0f8);border:1px solid var(--border2,#272d42);border-radius:16px;' +
    'padding:16px 16px 14px;box-shadow:0 18px 50px rgba(0,0,0,.35);font-family:Inter,system-ui,sans-serif;' +
    'transform:translateY(16px);opacity:0;transition:opacity .3s,transform .3s}' +
    '.py2ai-yt.in{transform:none;opacity:1}' +
    '.py2ai-yt-row{display:flex;gap:12px;align-items:flex-start}' +
    '.py2ai-yt-ico{flex:none;width:38px;height:27px;border-radius:8px;background:#ff0033;display:grid;place-items:center}' +
    '.py2ai-yt-ico i{width:0;height:0;border-left:10px solid #fff;border-top:6px solid transparent;border-bottom:6px solid transparent;margin-left:2px}' +
    '.py2ai-yt b{display:block;font-size:15px;margin-bottom:3px}' +
    '.py2ai-yt p{font-size:13.5px;line-height:1.5;color:var(--text2,#b8bccc);margin:0}' +
    '.py2ai-yt-x{position:absolute;top:8px;right:10px;background:none;border:none;color:var(--muted,#6b7191);font-size:18px;cursor:pointer;line-height:1}' +
    '.py2ai-yt-btns{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}' +
    '.py2ai-yt-btns a,.py2ai-yt-btns button{font:600 13px Inter,system-ui,sans-serif;padding:9px 14px;border-radius:10px;cursor:pointer}' +
    '.py2ai-yt-btns a{background:#ff0033;color:#fff;text-decoration:none}' +
    '.py2ai-yt-btns button{background:transparent;color:var(--text2,#b8bccc);border:1px solid var(--border2,#272d42)}' +
    '@media(prefers-reduced-motion:reduce){.py2ai-yt{transition:none}}';

  function ytPrompt() {
    if (YT_PAGES.indexOf(pageKey) === -1) return;
    try { if (localStorage.getItem('py2ai-yt-subscribed')) return; } catch (e) {}
    addCSS(ytCSS);
    var box = document.createElement('div');
    box.className = 'py2ai-yt'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Subscribe on YouTube');
    box.innerHTML =
      '<button class="py2ai-yt-x" aria-label="Close">×</button>' +
      '<div class="py2ai-yt-row"><span class="py2ai-yt-ico"><i></i></span><div>' +
      '<b>Subscribe on YouTube</b><p>Every day\u2019s lesson video goes up on the Py2AI channel first. Subscribe so you don\u2019t miss a day.</p></div></div>' +
      '<div class="py2ai-yt-btns"><a href="' + YT_URL + '" target="_blank" rel="noopener">Subscribe</a>' +
      '<button type="button" data-done>I\u2019ve subscribed</button></div>';
    document.body.appendChild(box);
    setTimeout(function () { box.classList.add('in'); }, 900);
    function close() { box.classList.remove('in'); setTimeout(function () { box.remove(); }, 300); }
    box.querySelector('.py2ai-yt-x').onclick = close;
    box.querySelector('a').addEventListener('click', function () { setTimeout(close, 300); });
    box.querySelector('[data-done]').onclick = function () {
      try { localStorage.setItem('py2ai-yt-subscribed', '1'); } catch (e) {}
      close();
    };
  }

  /* ── Public API ──────────────────────────────────────── */
  var changeCbs = [];
  window.PY2AI_TRACK = {
    YT_URL: YT_URL,
    user: function () { return user; },
    markVisited: markVisited,
    isVisited: isVisited,
    resourcesFor: resourcesFor,
    dayStatus: dayStatus,
    completedDays: completedDays,
    labSolved: labSolved,
    quizRecord: quizRecord,
    renderBars: renderBars,
    onReady: function (cb) { changeCbs.push(cb); if (user) cb(user); }
  };

  /* ── Boot ────────────────────────────────────────────── */
  function domReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn();
  }

  if (!A) { console.error('py2ai: load auth.js before track.js'); return; }
  A.onChange(function (u) {
    user = u;
    if (!u) {
      if (!isPublic && pageKey !== 'signup') {
        var next = norm(page) + location.search + location.hash;
        location.replace('signup.html?next=' + encodeURIComponent(next));
      }
      return;
    }
    document.documentElement.classList.remove('py2ai-wait');
    if (!isPublic) markVisited(page);
    domReady(function () {
      initQuizOnce();
      document.querySelectorAll('[data-py2ai-bars]').forEach(function (el) {
        renderBars(el, { links: el.hasAttribute('data-links') });
      });
      if (!ytShown) { ytShown = true; ytPrompt(); }
      changeCbs.forEach(function (cb) { try { cb(u); } catch (e) { console.error(e); } });
    });
  });
  var quizInit = false, ytShown = false;
  function initQuizOnce() { if (!quizInit) { quizInit = true; initQuiz(); } }

  // Coming back with the Back button: refresh anything progress-based
  window.addEventListener('pageshow', function (e) {
    if (e.persisted && user) {
      document.querySelectorAll('[data-py2ai-bars]').forEach(function (el) {
        renderBars(el, { links: el.hasAttribute('data-links') });
      });
      changeCbs.forEach(function (cb) { try { cb(user); } catch (er) {} });
    }
  });
})();
