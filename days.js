/* ============================================================
   py2ai.in — SINGLE SOURCE OF TRUTH
   ------------------------------------------------------------
   This is now the ONLY place you add a new day.
   roadmap.html and project.html both read from this file, so
   unlocking a day here unlocks it on BOTH pages automatically.

   HOW TO ADD A DAY
   ----------------
   Lesson day  ->  kind: "lesson"  (yt, quiz, practice, notes)
   Project day ->  kind: "project" (yt, code, week)

   Project days are: 7, 14, 21, 28, 29, 30, 37, 44, 51, 58,
   59, 60, 67, 74, 81, 88, 89, 90, 96, 100
   `week` links the day to its shared Mega Quiz, so it must be
   the week the project BELONGS to:
     week 1 -> day 7     week 5 -> day 37    week  9 -> day 67
     week 2 -> day 14    week 6 -> day 44    week 10 -> day 74
     week 3 -> day 21    week 7 -> day 51    week 11 -> day 81
     week 4 -> day 28    week 8 -> day 58    week 12 -> day 88
     week 13 -> day 96

   Any day NOT listed here renders locked automatically.
   Filenames are CASE-SENSITIVE on GitHub Pages — keep them
   lowercase and zero-padded: day-07-quiz.html, not Day-7-quiz.html
   ============================================================ */

const UNLOCKED_DAYS = {
  1: {
    kind: "lesson",
    yt: "YPWWq8Rgau8",
    quiz: "day-01-quiz.html",
    practice: "day-01-practice.pdf",
    notes: "day-01-notes.html"
  },
  2: {
    kind: "lesson",
    yt: "8Tc6L6SVZGA",
    quiz: "day-02-quiz.html",
    practice: "day-02-practice.pdf",
    notes: "day-02-notes.html"
  },
  3: {
    kind: "lesson",
    yt: "4NVatBbUjig",
    quiz: "day-03-quiz.html",
    practice: "day-03-practice.pdf",
    notes: "day-03-notes.html"
  },
  4: {
    kind: "lesson",
    yt: "OkTBbd2R_ZM",
    quiz: "day-04-quiz.html",
    practice: "day-04-practice.pdf",
    notes: "day-04-notes.html"
  },
  5: {
    kind: "lesson",
    yt: "faJMPE1LAvQ",
    quiz: "day-05-quiz.html",
    practice: "day-05-practice.pdf",
    notes: "day-05-notes.html"
  },
  6: {
    kind: "lesson",
    yt: "mbwUIJknZF8",
    quiz: "day-06-quiz.html",
    practice: "day-06-practice.pdf",
    notes: "day-06-notes.html"
  },
  7: {
    kind: "project",
    yt: "dtsSaKxlVA4",
    code: "project-01.py",
    week: 1
  },
  8: {
    kind: "lesson",
    yt: "b6un5kiiJWQ",
    quiz: "day-08-quiz.html",
    practice: "day-08-practice.pdf",
    notes: "day-08-notes.html"
  },

  /* ✅ VERIFIED against the repo: Days 9 & 10 really are saved with a
     capital "D" (Day-09-quiz.html). Correct as-is — do not lowercase
     these unless you also rename the files. */
  9: {
    kind: "lesson",
    yt: "gL4xI0dgaIQ",
    quiz: "Day-09-quiz.html",
    practice: "Day-09-practice.pdf",
    notes: "Day-09-notes.html"
  },
  10: {
    kind: "lesson",
    yt: "Kku1QiGxKGQ",
    quiz: "Day-10-quiz.html",
    practice: "Day-10-practice.pdf",
    notes: "Day-10-notes.html"
  },

  11: {
    kind: "lesson",
    yt: "aMpl2IgjNvg",
    quiz: "day-11-quiz.html",
    practice: "day-11-practice.pdf",
    notes: "day-11-notes.html"
  },
  12: {
    kind: "lesson",
    yt: "rnCVfABtkYQ",
    quiz: "day-12-quiz.html",
    practice: "day-12-practice.pdf",
    notes: "day-12-notes.html"
  },
  13: {
    kind: "lesson",
    yt: "QQmT0yNrbPw",
    quiz: "day-13-quiz.html",
    practice: "day-13-practice.pdf",
    notes: "day-13-notes.html"
  },
  14: {
    kind: "project",
    yt: "t6_mQPcxYEc",
    code: "project-02.py",
    week: 2
  },
  15: {
    kind: "lesson",
    yt: "JMcAQnJWB8I",
    quiz: "day-15-quiz.html",
    practice: "day-15-practice.pdf",
    notes: "day-15-notes.html"
  },
  16: {
    kind: "lesson",
    yt: "-Kqt48n_Q6Q",
    quiz: "day-16-quiz.html",
    practice: "day-16-practice.pdf",
    notes: "day-16-notes.html"
  },
  17: {
    kind: "lesson",
    yt: "OJE9w-RdeJg",
    quiz: "day-17-quiz.html",
    practice: "day-17-practice.pdf",
    notes: "day-17-notes.html"
  },
  18: {
    kind: "lesson",
    yt: "FtHIxRe1INs",
    quiz: "day-18-quiz.html",
    practice: "day-18-practice.pdf",
    notes: "day-18-notes.html"
  },

  /* ✅ FIXED: day 19 pointed at day-17-practice.pdf and day-17-notes.html
     (copy-paste slip). Now points at day 19 — verified those files exist. */
  19: {
    kind: "lesson",
    yt: "kFpWuA4rn9Q",
    quiz: "day-19-quiz.html",
    practice: "day-19-practice.pdf",
    notes: "day-19-notes.html"
  },

  20: {
    kind: "lesson",
    yt: "iN4WRG-j8kc",
    quiz: "day-20-quiz.html",
    practice: "day-20-practice.pdf",
    notes: "day-20-notes.html"
  },
  21: {
    kind: "project",
    yt: "AWx8fe1TA18",
    code: "project-03.py",
    week: 3
  },
  22: {
    kind: "lesson",
    yt: "spWsoIICnBE",
    quiz: "day-22-quiz.html",
    practice: "day-22-practice.pdf",
    notes: "day-22-notes.html"
  },
  23: {
    kind: "lesson",
    yt: "Hzmy396oCm0",
    quiz: "day-23-quiz.html",
    practice: "day-23-practice.pdf",
    notes: "day-23-notes.html"
  },
  24: {
    kind: "lesson",
    yt: "3McU-NpnjDw",
    quiz: "day-24-quiz.html",
    practice: "day-24-practice.pdf",
    notes: "day-24-notes.html"
  },
  25: {
    kind: "lesson",
    yt: "RDCfIK2HmSc",
    quiz: "day-25-quiz.html",
    practice: "day-25-practice.pdf",
    notes: "day-25-notes.html"
  },
  26: {
    kind: "lesson",
    yt: "kPRRnwJPcWE",
    quiz: "day-26-quiz.html",
    practice: "day-26-practice.pdf",
    notes: "day-26-notes.html"
  },
  27: {
    kind: "lesson",
    yt: "IK6cBywlNsI",
    quiz: "day-27-quiz.html",
    practice: "day-27-practice.pdf",
    notes: "day-27-notes.html"
  },

  /* ✅ FIXED: day 28 said week: 3, so it opened week-03-megaquiz.html.
     Day 28 is the Week 4 mini project -> week: 4. */
  28: {
    kind: "project",
    yt: "nmj0EfOzNDE",
    code: "project-04.py",
    week: 4
  },

  /* ── MONTH 1 MAJOR PROJECT · Days 29-30 ──────────────────
     Student Report Card Generator (follows the flowchart).
     These use the `actions` array instead of the standard
     project buttons, so each day can have its own links. */
  29: {
    kind: "project",
    yt: "pPTh9YIDaAo",
    actions: [
      { label: "Read the Project Brief", href: "project-05-brief.html",  style: "primary" },
      { label: "Month 1 Mega Quiz",      href: "month-01-megaquiz.html", style: "outline" }
    ]
  },
  30: {
    kind: "project",
    yt: "S8yabRRuj9s",
    actions: [
      { label: "Month 1 Mega Quiz",      href: "month-01-megaquiz.html", style: "outline" },
      { label: "Read the Project Brief", href: "project-05-brief.html",  style: "outline" },
      { label: "Get the Code",           href: "project-05.py",          style: "primary" }
    ]
  },

  /* ── MONTH 2 BEGINS · Week 5 ─────────────────────────── */
  31: {
    kind: "lesson",
    yt: "q4C2DsJzc_0",
    quiz: "day-31-quiz.html",
    practice: "day-31-practice.pdf",
    notes: "day-31-notes.html"
  },
   32: {
    kind: "lesson",
    yt: "6roNUt_48Bc",
    quiz: "day-32-quiz.html",
    practice: "day-32-practice.pdf",
    notes: "day-32-notes.html"
  },
   33: {
    kind: "lesson",
    yt: "aEaiKVWIM9E",
    quiz: "day-33-quiz.html",
    practice: "day-33-practice.pdf",
    notes: "day-33-notes.html"
  },
   34: {
    kind: "lesson",
    yt: "",
    quiz: "day-34-quiz.html",
    practice: "day-34-practice.pdf",
    notes: "day-34-notes.html"
  }

  /* ── NEXT DAY GOES HERE ──────────────────────────────────
     Lesson day:
       , 32: { kind: "lesson", yt: "ID", quiz: "day-32-quiz.html",
               practice: "day-32-practice.pdf", notes: "day-32-notes.html" }

     Project day with the standard two buttons:
       , 37: { kind: "project", yt: "ID", code: "project-06.py", week: 5 }

     Project day with custom buttons (any number, any links):
       , 37: { kind: "project", yt: "ID", actions: [
                 { label: "Get the Code", href: "project-06.py", style: "outline" },
                 { label: "Take the Quiz", href: "day-37-quiz.html", style: "primary" }
               ] }
     ───────────────────────────────────────────────────────── */
};

/* ============================================================
   SHARED HELPERS — used by roadmap.html and project.html
   ============================================================ */
const PY2AI = {
  TOTAL_DAYS: 100,

  isUnlocked(day) {
    return Object.prototype.hasOwnProperty.call(UNLOCKED_DAYS, day);
  },

  get(day) {
    return UNLOCKED_DAYS[day] || null;
  },

  unlockedCount() {
    return Object.keys(UNLOCKED_DAYS).length;
  },

  /* Highest consecutive unlocked day — used for the "You're on Day N" pill */
  currentDay() {
    let d = 0;
    while (this.isUnlocked(d + 1)) d++;
    return d;
  },

  megaQuizLink(week) {
    return 'week-' + String(week).padStart(2, '0') + '-megaquiz.html';
  }
};

/* Make available to both pages (and guard against double-loading) */
if (typeof window !== 'undefined') {
  window.UNLOCKED_DAYS = UNLOCKED_DAYS;
  window.PY2AI = PY2AI;
}
