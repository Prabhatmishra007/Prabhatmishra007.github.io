# Sign up + Python Lab — setup

## What's new
- `signup.html` — Create account / Sign in / Account page (sign out, solved count)
- `lab.html` — Python Lab, Days 1–57, 3 problems/day, Run + Test (real Python in the browser via Pyodide). Locked unless signed in.
- `lab-questions.js` — all 171 problems + tests (every one verified with a reference solution)
- `auth.js` + `auth-config.js` — accounts; adds the Sign up / profile button to every navbar
- `py2ai-shell.css` — shared nav/tokens for the two new pages
- Navbar on all main pages now has **Python Lab**; roadmap day popup has a **Python Lab · 3 Problems** button (Days 1–57)
- Removed all "No sign-up / no account" copy (index.html, about.html)
- Fixed in days.js: Day 56 was saved as a second `55:` (it hid Day 55's video), Day 53 pointed at Day 52's PDF/notes

## Sign-up gate, progress and quiz scores (track.js)
- Public pages: index, about, signup. Everything else (roadmap, project, lab, every quiz / notes / mega quiz / brief) sends signed-out visitors to sign up, then back to the page they wanted.
- A day is **completed** when its quiz, notes and practice PDF have all been opened (project days: code + mega quiz, or the brief/quiz/code buttons for Days 29–30). Completed days turn green on the roadmap; half-done days show "1/3 done".
- Progress bars (course days + Python Lab, separately): roadmap, project, home page (signed in), lab sidebar, account page.
- Quizzes save every attempt (last + best score shown on the start screen, results screen and roadmap popup). Every attempt reshuffles questions and options.
- YouTube "Subscribe" card shows on Roadmap / Project / Lab until the learner taps "I've subscribed". Channel link (@py.2ai) is set in `track.js` → `YT_URL`.
- New quiz/notes pages: add the 4 script lines from the top of any day page into `<head>`.

## Turn on real accounts (Firebase, free) — ~10 minutes
Until you do this the site runs in **local mode**: accounts only live in that one browser. Fine to test, not for real users.

1. Go to https://console.firebase.google.com → **Add project** (e.g. `py2ai`). Analytics optional.
2. **Build → Authentication → Get started → Sign-in method**: enable **Email/Password** and **Google**.
3. **Authentication → Settings → Authorized domains** → add `py2ai.in` (and `www.py2ai.in`, `prabhatmishra007.github.io`).
4. **Project settings (gear) → Your apps → Web (</>)** → register app → copy the `firebaseConfig`.
5. Paste `apiKey`, `authDomain`, `projectId`, `appId` into `auth-config.js`. Commit & push.

The Firebase web apiKey is meant to be public — it's safe in a GitHub repo.

## Adding more lab days later
Lab content is in `lab-questions.js` (`window.PY2AI_LAB[day] = {topic, qs:[...]}`).
Test types: `{"in": "line1\nline2", "out": "expected\n"}` (stdin) or `{"call": "print(f(2))", "out": "4\n"}` (function days).
Then bump `window.PY2AI_LAB_DAYS = 57` in roadmap.html.

## Good to know
- Lab progress + code drafts save per account in the browser (same device).
- Gating is client-side (GitHub Pages has no server), so it stops normal visitors, not someone reading the JS files.
