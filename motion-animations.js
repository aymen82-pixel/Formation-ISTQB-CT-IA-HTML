/**
 * motion-animations.js
 * Premium entrance & interaction animations powered by Motion One
 * — the web-standard animation engine by Matt Perry (creator of Framer Motion)
 * CDN: https://cdn.motionone.dev/motion.js
 */
import { animate, stagger, inView } from "https://cdn.motionone.dev/motion.js";

/* ── Bail if user prefers reduced motion ─────────────────────────── */
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  throw new Error("skip-animations"); // exits module cleanly; CSS fallbacks remain
}

/* ── Shared easing curves ─────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1];       // ease-out-expo (smooth decelerate)
const SPRING = [0.34, 1.56, 0.64, 1];  // spring overshoot (snappy)
const MATERIAL = [0.4, 0, 0.2, 1];     // material standard

/* ── Utility ─────────────────────────────────────────────────────── */
const q  = (s, root = document) => root.querySelector(s);
const qq = (s, root = document) => [...root.querySelectorAll(s)];

/* ─────────────────────────────────────────────────────────────────── *
 *  HEADER — fade-up with stagger                                     *
 * ─────────────────────────────────────────────────────────────────── */
function animateHeader() {
  const header = q("header");
  if (!header) return;

  const h1  = q("h1", header);
  const sub = q(".subtitle", header);
  const back = q(".back-link", header);

  if (back) animate(back, { opacity: [0, 1], x: [-12, 0] }, { duration: 0.38, easing: EASE });
  if (h1)   animate(h1,   { opacity: [0, 1], y: [24, 0]  }, { duration: 0.52, delay: back ? 0.06 : 0, easing: EASE });
  if (sub)  animate(sub,  { opacity: [0, 1], y: [14, 0]  }, { duration: 0.48, delay: 0.11, easing: EASE });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  HERO STATS — staggered scale-in                                   *
 * ─────────────────────────────────────────────────────────────────── */
function animateHeroStats() {
  const stats = qq(".hero-stats .stat, .stats-grid .stat-mini");
  if (!stats.length) return;

  animate(stats,
    { opacity: [0, 1], y: [16, 0], scale: [0.96, 1] },
    { delay: stagger(0.07, { start: 0.2 }), duration: 0.42, easing: EASE }
  );
}

/* ─────────────────────────────────────────────────────────────────── *
 *  NAV TOOL CARDS — staggered slide-up                               *
 * ─────────────────────────────────────────────────────────────────── */
function animateNavCards() {
  const cards = qq(".nav-tools .tool-card");
  if (!cards.length) return;

  animate(cards,
    { opacity: [0, 1], y: [32, 0] },
    { delay: stagger(0.09, { start: 0.32 }), duration: 0.5, easing: EASE }
  );
}

/* ─────────────────────────────────────────────────────────────────── *
 *  SECTION LABELS                                                     *
 * ─────────────────────────────────────────────────────────────────── */
function animateSectionLabels() {
  const labels = qq(".section-title");
  if (!labels.length) return;

  animate(labels,
    { opacity: [0, 1], x: [-8, 0] },
    { delay: stagger(0.1, { start: 0.24 }), duration: 0.36, easing: EASE }
  );
}

/* ─────────────────────────────────────────────────────────────────── *
 *  PAGE CONTROLS — filters, TOC, start-screen, card-stage            *
 * ─────────────────────────────────────────────────────────────────── */
function animatePageControls() {
  const targets = [
    q(".filters"),
    q(".start-screen"),
    q(".card-stage"),
    q(".controls"),
    q(".toc"),
    q(".stats-bar"),
  ].filter(Boolean);

  targets.forEach((el, i) => {
    animate(el,
      { opacity: [0, 1], y: [14, 0] },
      { duration: 0.4, delay: 0.1 + i * 0.05, easing: EASE }
    );
  });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  PROGRESS SECTION                                                   *
 * ─────────────────────────────────────────────────────────────────── */
function animateProgressSection() {
  const bar = q(".progress-bar");
  if (!bar) return;

  const section = bar.closest("div[style]") || bar.parentElement?.parentElement;
  if (section) {
    animate(section, { opacity: [0, 1], y: [14, 0] }, { duration: 0.4, delay: 0.42, easing: EASE });
  }
}

/* ─────────────────────────────────────────────────────────────────── *
 *  SCROLL-TRIGGERED — day cards, fiches, review questions            *
 * ─────────────────────────────────────────────────────────────────── */
function animateOnScroll() {
  const seen = new WeakSet();

  function once(target, props, opts) {
    if (seen.has(target)) return;
    seen.add(target);
    animate(target, props, opts);
  }

  /* Day cards */
  inView(".day-card", ({ target }) => {
    once(target, { opacity: [0, 1], y: [20, 0] }, { duration: 0.44, easing: EASE });
  }, { margin: "0px 0px -60px 0px" });

  /* Fiche summary cards */
  inView(".fiche", ({ target }) => {
    once(target, { opacity: [0, 1], y: [16, 0] }, { duration: 0.42, easing: EASE });
  }, { margin: "0px 0px -40px 0px" });

  /* Chapter result rows */
  inView(".chapter-row", ({ target }) => {
    once(target, { opacity: [0, 1], x: [-12, 0] }, { duration: 0.34, easing: EASE });
  });

  /* Review questions */
  inView(".review-q", ({ target }) => {
    once(target, { opacity: [0, 1], y: [10, 0] }, { duration: 0.3, easing: EASE });
  });

  /* Option cards (fiches overview) */
  inView(".options-grid .opt-card", ({ target }) => {
    once(target, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.36, easing: EASE });
  });

  /* Question cards in review mode */
  inView(".question-card", ({ target }) => {
    once(target, { opacity: [0, 1], y: [14, 0] }, { duration: 0.36, easing: EASE });
  }, { margin: "0px 0px -40px 0px" });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  RESULT HERO — exam completion screen                              *
 * ─────────────────────────────────────────────────────────────────── */
function animateResultHero() {
  const hero = q(".result-hero");
  if (!hero) return;

  animate(hero, { opacity: [0, 1], scale: [0.94, 1] }, { duration: 0.5, delay: 0.1, easing: EASE });

  const score = q(".result-score", hero);
  if (score) {
    animate(score, { opacity: [0, 1], y: [-12, 0] }, { duration: 0.45, delay: 0.22, easing: SPRING });
  }

  const verdict = q(".verdict-badge", hero);
  if (verdict) {
    animate(verdict, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.35, delay: 0.35, easing: SPRING });
  }

  /* Chapter breakdown stagger */
  animate(".chapter-row",
    { opacity: [0, 1], x: [-14, 0] },
    { delay: stagger(0.05, { start: 0.4 }), duration: 0.32, easing: EASE }
  );
}

/* ─────────────────────────────────────────────────────────────────── *
 *  FLASHCARD FLIP ENHANCEMENT                                        *
 * ─────────────────────────────────────────────────────────────────── */
function animateFlashcard() {
  const cardStage = q(".card-stage");
  if (!cardStage) return;

  /* Entrance pop for card stage */
  animate(cardStage, { opacity: [0, 1], y: [24, 0], scale: [0.97, 1] },
    { duration: 0.5, delay: 0.18, easing: EASE }
  );

  /* Review buttons stagger */
  animate(".review-buttons .review-btn",
    { opacity: [0, 1], y: [10, 0] },
    { delay: stagger(0.06, { start: 0.3 }), duration: 0.36, easing: EASE }
  );
}

/* ─────────────────────────────────────────────────────────────────── *
 *  CHECKBOX SPRING — satisfying check animation                      *
 * ─────────────────────────────────────────────────────────────────── */
function initCheckboxSpring() {
  document.addEventListener("change", (e) => {
    const cb = e.target;
    if (cb.type !== "checkbox") return;
    if (cb.checked) {
      animate(cb, { scale: [0.7, 1.3, 1] }, { duration: 0.32, easing: SPRING });
    } else {
      animate(cb, { scale: [1.1, 1] }, { duration: 0.2, easing: EASE });
    }
  });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  BUTTON PRESS MICRO-INTERACTION                                    *
 * ─────────────────────────────────────────────────────────────────── */
function initButtonPress() {
  document.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest("button.primary, .start-btn, .nav-btn.primary");
    if (!btn) return;
    animate(btn, { scale: [1, 0.97] }, { duration: 0.1, easing: MATERIAL });
  });

  document.addEventListener("pointerup", (e) => {
    const btn = e.target.closest("button.primary, .start-btn, .nav-btn.primary");
    if (!btn) return;
    animate(btn, { scale: [0.97, 1.02, 1] }, { duration: 0.28, easing: SPRING });
  });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  LESSON MODAL ENHANCEMENT                                          *
 * ─────────────────────────────────────────────────────────────────── */
function enhanceLessonModal() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.classList?.contains("lm-overlay")) {
          const modal = node.querySelector(".lm-modal");
          if (modal) {
            /* The overlay uses CSS opacity transition, but we can enhance
               the modal's entrance with a subtle spring pop */
            animate(modal, { scale: [0.94, 1], y: [16, 0] },
              { duration: 0.38, easing: SPRING }
            );
          }
        }
      });
    });
  });
  observer.observe(document.body, { childList: true });
}

/* ─────────────────────────────────────────────────────────────────── *
 *  INIT — fires after DOM + dynamic content is ready                 *
 * ─────────────────────────────────────────────────────────────────── */
function init() {
  /* Synchronous DOM elements */
  animateHeader();
  animateHeroStats();
  animateNavCards();
  animateSectionLabels();
  animatePageControls();
  animateProgressSection();
  animateResultHero();
  animateFlashcard();

  /* Dynamic content (day grid is rendered after DOMContentLoaded) */
  setTimeout(() => {
    animateOnScroll();
  }, 60);

  /* Interaction enhancements */
  initCheckboxSpring();
  initButtonPress();
  enhanceLessonModal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
