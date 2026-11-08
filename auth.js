/* ============================================================
   py2ai.in — accounts (sign up / sign in / sign out)
   ------------------------------------------------------------
   • Uses Firebase Authentication when auth-config.js is filled in.
   • Falls back to "local mode" (accounts in this browser only)
     so the site keeps working before Firebase is set up.
   • Adds a "Sign up" / account button to every page's navbar.
   Load order on a page:  auth-config.js → auth.js
   ============================================================ */
(function () {
  'use strict';

  var FB_VERSION = '10.12.2';
  var CFG = window.PY2AI_FIREBASE_CONFIG || null;
  var useFirebase = !!(CFG && CFG.apiKey && !/PASTE/i.test(CFG.apiKey));

  var state = { ready: false, user: null };
  var listeners = [];
  var fbAuth = null;
  var readyResolve;
  var readyPromise = new Promise(function (r) { readyResolve = r; });

  function setUser(u) {
    state.user = u;
    if (!state.ready) { state.ready = true; readyResolve(u); }
    listeners.slice().forEach(function (cb) { try { cb(u); } catch (e) { console.error(e); } });
  }

  function shape(fbUser, nameOverride) {
    if (!fbUser) return null;
    var email = fbUser.email || '';
    return {
      uid: fbUser.uid,
      email: email,
      name: nameOverride || fbUser.displayName || email.split('@')[0] || 'Learner'
    };
  }

  /* ── Friendly error text ─────────────────────────────── */
  var MESSAGES = {
    'auth/email-already-in-use': 'An account with this email already exists. Sign in instead.',
    'auth/invalid-email': 'That email address doesn\u2019t look right.',
    'auth/weak-password': 'Use at least 6 characters for your password.',
    'auth/missing-password': 'Enter your password.',
    'auth/invalid-credential': 'Email or password is incorrect.',
    'auth/wrong-password': 'Email or password is incorrect.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/too-many-requests': 'Too many attempts. Wait a minute and try again.',
    'auth/network-request-failed': 'No connection. Check your internet and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was closed before it finished.',
    'auth/popup-blocked': 'Your browser blocked the Google pop-up. Allow pop-ups and try again.',
    'auth/unauthorized-domain': 'This website isn\u2019t allowed in Firebase yet. Add the domain under Authentication \u2192 Settings \u2192 Authorized domains.',
    'auth/operation-not-allowed': 'This sign-in method isn\u2019t switched on in Firebase yet.'
  };
  function fail(code, fallback) {
    var e = new Error(MESSAGES[code] || fallback || 'Something went wrong. Try again.');
    e.code = code;
    return e;
  }
  function wrap(err) {
    return fail(err && err.code, err && err.message);
  }

  /* ── Firebase mode ───────────────────────────────────── */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function initFirebase() {
    var base = 'https://www.gstatic.com/firebasejs/' + FB_VERSION + '/';
    loadScript(base + 'firebase-app-compat.js')
      .then(function () { return loadScript(base + 'firebase-auth-compat.js'); })
      .then(function () {
        if (!firebase.apps.length) firebase.initializeApp(CFG);
        fbAuth = firebase.auth();
        fbAuth.onAuthStateChanged(function (u) { setUser(shape(u)); });
      })
      .catch(function (e) {
        console.error('py2ai auth:', e);
        setUser(null);
      });
  }

  var firebaseApi = {
    signUp: function (o) {
      return readyPromise.then(function () {
        return fbAuth.createUserWithEmailAndPassword(o.email.trim(), o.password);
      }).then(function (cred) {
        var name = (o.name || '').trim();
        return cred.user.updateProfile({ displayName: name }).then(function () {
          setUser(shape(cred.user, name));
          return state.user;
        });
      }).catch(function (e) { throw wrap(e); });
    },
    signIn: function (o) {
      return readyPromise.then(function () {
        return fbAuth.signInWithEmailAndPassword(o.email.trim(), o.password);
      }).then(function (c) { return shape(c.user); })
        .catch(function (e) { throw wrap(e); });
    },
    signInWithGoogle: function () {
      return readyPromise.then(function () {
        return fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }).then(function (c) { return shape(c.user); })
        .catch(function (e) { throw wrap(e); });
    },
    resetPassword: function (email) {
      return readyPromise.then(function () {
        return fbAuth.sendPasswordResetEmail(email.trim());
      }).catch(function (e) { throw wrap(e); });
    },
    signOut: function () { return readyPromise.then(function () { return fbAuth.signOut(); }); }
  };

  /* ── Local mode (no backend yet) ─────────────────────── */
  var USERS_KEY = 'py2ai-local-users';
  var SESSION_KEY = 'py2ai-local-session';

  function readJSON(key, dflt) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : dflt; } catch (e) { return dflt; }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function hash(text) {
    if (window.crypto && crypto.subtle && window.TextEncoder) {
      return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('');
      });
    }
    var h = 5381;
    for (var i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return Promise.resolve('d' + (h >>> 0).toString(16));
  }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  var localApi = {
    signUp: function (o) {
      var email = (o.email || '').trim().toLowerCase();
      var name = (o.name || '').trim();
      if (!validEmail(email)) return Promise.reject(fail('auth/invalid-email'));
      if (!o.password || o.password.length < 6) return Promise.reject(fail('auth/weak-password'));
      var users = readJSON(USERS_KEY, {});
      if (users[email]) return Promise.reject(fail('auth/email-already-in-use'));
      var salt = Math.random().toString(36).slice(2);
      return hash(salt + o.password).then(function (h) {
        var uid = 'local-' + Date.now().toString(36);
        users[email] = { uid: uid, name: name, salt: salt, hash: h };
        writeJSON(USERS_KEY, users);
        var u = { uid: uid, email: email, name: name || email.split('@')[0] };
        writeJSON(SESSION_KEY, u);
        setUser(u);
        return u;
      });
    },
    signIn: function (o) {
      var email = (o.email || '').trim().toLowerCase();
      var users = readJSON(USERS_KEY, {});
      var rec = users[email];
      if (!rec) return Promise.reject(fail('auth/user-not-found'));
      return hash(rec.salt + (o.password || '')).then(function (h) {
        if (h !== rec.hash) throw fail('auth/invalid-credential');
        var u = { uid: rec.uid, email: email, name: rec.name || email.split('@')[0] };
        writeJSON(SESSION_KEY, u);
        setUser(u);
        return u;
      });
    },
    signInWithGoogle: function () {
      return Promise.reject(new Error('Google sign-in works once Firebase is connected. Use email for now.'));
    },
    resetPassword: function () {
      return Promise.reject(new Error('Password reset works once Firebase is connected.'));
    },
    signOut: function () {
      try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
      setUser(null);
      return Promise.resolve();
    }
  };

  /* ── Public API ──────────────────────────────────────── */
  var impl = useFirebase ? firebaseApi : localApi;
  window.PY2AI_AUTH = {
    mode: useFirebase ? 'firebase' : 'local',
    ready: readyPromise,
    user: function () { return state.user; },
    isReady: function () { return state.ready; },
    onChange: function (cb) {
      listeners.push(cb);
      if (state.ready) cb(state.user);
      return function () { listeners = listeners.filter(function (x) { return x !== cb; }); };
    },
    signUp: impl.signUp,
    signIn: impl.signIn,
    signInWithGoogle: impl.signInWithGoogle,
    resetPassword: impl.resetPassword,
    signOut: impl.signOut
  };

  if (useFirebase) initFirebase();
  else setTimeout(function () { setUser(readJSON(SESSION_KEY, null)); }, 0);

  /* ── Navbar account button ───────────────────────────── */
  var css = [
    '.navbar li a.py2ai-acct{background:var(--accent);color:#07090d;}',
    '.navbar li a.py2ai-acct:hover{background:var(--accent);color:#07090d;filter:brightness(1.08);}',
    '.navbar li a.py2ai-acct.is-in{background:transparent;color:var(--text2);box-shadow:inset 0 0 0 1px var(--border2);}',
    '.navbar li a.py2ai-acct.is-in:hover{color:var(--text);}',
    '.py2ai-avatar{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;',
    'background:var(--purple);color:#fff;font-size:11px;font-weight:800;}',
    '.navbar li a.py2ai-acct.pending{visibility:hidden;}'
  ].join('');

  function mountNav() {
    var bar = document.querySelector('.navbar');
    if (!bar || document.getElementById('py2ai-acct')) return;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    var li = document.createElement('li');
    li.innerHTML = '<a id="py2ai-acct" class="py2ai-acct pending" href="signup.html">Sign up</a>';
    bar.appendChild(li);
    var a = li.firstChild;
    if (/signup\.html$/.test(location.pathname)) a.classList.add('active');

    window.PY2AI_AUTH.onChange(function (u) {
      a.classList.remove('pending');
      if (u) {
        a.classList.add('is-in');
        a.href = 'signup.html';
        a.title = 'Your account';
        var initial = (u.name || u.email || '?').charAt(0).toUpperCase();
        a.innerHTML = '<span class="py2ai-avatar"></span><span class="py2ai-name"></span>';
        a.firstChild.textContent = initial;
        a.lastChild.textContent = (u.name || 'Account').split(' ')[0];
      } else {
        a.classList.remove('is-in');
        a.textContent = 'Sign up';
        a.href = 'signup.html?next=' + encodeURIComponent(location.pathname.split('/').pop() || 'index.html');
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountNav);
  else mountNav();
})();
