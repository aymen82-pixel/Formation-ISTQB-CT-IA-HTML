# Synthesis Lessons & ISTQB Learning Objectives Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add comprehensive synthesis lessons (3000-5000 words/chapter) with official ISTQB Learning Objectives to the Hub, accessible via "Maîtriser ce chapitre" cards that open an Apple Design System modal with tabbed content.

**Architecture:** Hub is enriched with chapter-specific "Maîtriser" cards that trigger a Lesson Modal. Modal displays LOs prominently (always visible), followed by tabbed content (Leçon | Synthèse Visuelle | Cas d'Usage | Mnémoniques). Bidirectional navigation links flashcards and QCM back to the lesson. All styling follows Apple Design System 100% (SF Pro, 24px spacing, 12px radius).

**Tech Stack:** Vanilla JavaScript (no frameworks), CSS Grid/Flexbox (Apple Design), HTML5 semantic markup, localStorage for optional tab state persistence

---

## Phase 1: Data Preparation

### Task 1: Create lessonsContent Structure in data.js

**Files:**
- Modify: `data.js` (add at end of `CTAI_DATA` object)

- [ ] **Step 1: Add lessonsContent skeleton**

Open `data.js` and locate the closing brace of `CTAI_DATA`. Before it, add:

```javascript
  lessonsContent: {
    1: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    2: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    3: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    4: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    5: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    6: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    7: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    8: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    9: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    10: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    },
    11: {
      learningObjectives: [],
      lessonText: "",
      visualSummary: "",
      useCases: "",
      mnemonics: ""
    }
  }
};
```

- [ ] **Step 2: Verify syntax**

Run in browser console: `console.log(CTAI_DATA.lessonsContent[1])` should return the empty object structure.

- [ ] **Step 3: Commit**

```bash
git add data.js
git commit -m "feat: add lessonsContent skeleton structure for 11 chapters"
```

---

### Task 2-5: Populate Lesson Content (Chapters 1-11)

**Files:**
- Modify: `data.js` (all 11 chapters)

For each chapter (1-11):

- [ ] **Populate learningObjectives array** with 4-5 LOs per chapter
  - Each LO: `{id, text, kLevel (K1-K4), explanation}`
  
- [ ] **Populate lessonText** (~3000-5000 words per chapter)
  - Use markdown-like format: H2 for sections, H3 for subsections, lists, tables
  - Reference existing keyword definitions from data.js
  
- [ ] **Populate visualSummary** (diagrams, matrices, visual references)
  - Include 1-2 visual aids per chapter (ASCII diagrams or table references)
  
- [ ] **Populate useCases** (2-3 real-world examples per chapter)
  - Business context, AI aspects, testing implications
  
- [ ] **Populate mnemonics** (memory aids, acronyms, quick reference)
  - Create 2-3 acronyms or visual associations per chapter

**Content Guidelines:**
- All content must be in `lessonsContent[N]` fields (strings)
- Render markdown-style text (h2/h3 as ## and ###)
- Include tables as pipe-delimited markdown
- Include info-boxes with prefixes: **Definition:** **Tip:** **Warning:** **Example:**

- [ ] **Commit each chapter after completion**

```bash
git add data.js
git commit -m "feat: add Chapter [N] lesson content (LOs, leçon, synthèse, cas, mnémoniques)"
```

**Chapter References:**
- Ch 1: Introduction to AI — 5 LOs (AI types, AIaaS, GDPR)
- Ch 2: Quality Characteristics — 4 LOs (bias, autonomy, explainability)
- Ch 3: ML Overview — 4 LOs (ML workflow, learning types, eval)
- Ch 4: ML Data — 4 LOs (data prep, labeling, sampling)
- Ch 5: ML Metrics — 4 LOs (confusion matrix, precision/recall, ROC)
- Ch 6: Neural Networks — 3 LOs (architecture, coverage, testing)
- Ch 7: AI Testing Overview — 3 LOs (concept drift, oracle problem)
- Ch 8: Quality Testing — 3 LOs (bias testing, explainability, autonomy)
- Ch 9: Testing Methods — 3 LOs (metamorphic, adversarial, pseudo-oracle)
- Ch 10: Test Environments — 2 LOs (processors, virtual environments)
- Ch 11: AI for Testing — 2 LOs (defect prediction, visual testing)

---

## Phase 2: Modal Component

### Task 6: Create lesson-modal.css

**Files:**
- Create: `lesson-modal.css`

[Full stylesheet: 350+ lines following Apple Design System — serif/monospace fonts, 24px spacing, 12px radius, dark mode support, responsive breakpoints]

- [ ] **Step 1: Create stylesheet with full content** (see specs document for exact CSS)

- [ ] **Step 2: Link stylesheet to index.html**

```html
<link rel="stylesheet" href="lesson-modal.css">
```

- [ ] **Step 3: Test styles load**

DevTools Network tab → `lesson-modal.css` should show Status 200.

- [ ] **Step 4: Commit**

```bash
git add lesson-modal.css index.html
git commit -m "feat: add lesson-modal.css with Apple Design System 100% styling"
```

---

### Task 7: Create lesson-modal.js

**Files:**
- Create: `lesson-modal.js`

- [ ] **Step 1: Create modal component**

```javascript
class LessonModal {
  constructor() {
    this.currentChapter = null;
    this.currentTab = null;
    this.init();
  }

  init() {
    if (!document.getElementById("lessonModalOverlay")) {
      this.createModalDOM();
    }
    this.attachEventListeners();
  }

  createModalDOM() {
    const html = `
      <div id="lessonModalOverlay" class="lesson-modal-overlay">
        <div class="lesson-modal">
          <div class="lesson-modal-header">
            <h1 class="lesson-modal-title" id="lessonModalTitle"></h1>
            <button class="lesson-modal-close" id="lessonModalClose">&times;</button>
          </div>
          <div class="lesson-modal-tabs" id="lessonModalTabs">
            <button class="lesson-modal-tab active" data-tab="objectives">Learning Objectives</button>
            <button class="lesson-modal-tab" data-tab="lesson">Leçon</button>
            <button class="lesson-modal-tab" data-tab="visual">Synthèse Visuelle</button>
            <button class="lesson-modal-tab" data-tab="usecases">Cas d'Usage</button>
            <button class="lesson-modal-tab" data-tab="mnemonics">Mnémoniques</button>
          </div>
          <div class="lesson-modal-content" id="lessonModalContent"></div>
          <div class="lesson-modal-footer">
            <button id="lessonOpenFlashcards">📇 Revoir flashcards</button>
            <button id="lessonOpenQCM">📝 Tester QCM</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", html);
  }

  attachEventListeners() {
    document.getElementById("lessonModalClose").addEventListener("click", () => this.close());
    document.getElementById("lessonModalOverlay").addEventListener("click", (e) => {
      if (e.target.id === "lessonModalOverlay") this.close();
    });
    
    document.querySelectorAll(".lesson-modal-tab").forEach(tab => {
      tab.addEventListener("click", (e) => this.switchTab(e.target.dataset.tab));
    });

    document.getElementById("lessonOpenFlashcards").addEventListener("click", () => {
      window.location.href = `keywords.html?ch=${this.currentChapter}`;
    });

    document.getElementById("lessonOpenQCM").addEventListener("click", () => {
      window.location.href = `questions.html?ch=${this.currentChapter}`;
    });
  }

  open(chapterNum) {
    this.currentChapter = chapterNum;
    const lesson = CTAI_DATA.lessonsContent[chapterNum];
    const chapter = CTAI_DATA.chapters[chapterNum - 1];

    if (!lesson) return;

    document.getElementById("lessonModalTitle").textContent = `Chapitre ${chapterNum}: ${chapter.title}`;
    
    document.querySelectorAll(".lesson-modal-tab").forEach(t => t.classList.remove("active"));
    document.querySelector('[data-tab="objectives"]').classList.add("active");
    this.currentTab = "objectives";

    this.renderObjectives(lesson.learningObjectives);
    document.getElementById("lessonModalOverlay").classList.add("active");
  }

  renderObjectives(objectives) {
    const content = document.getElementById("lessonModalContent");
    const kLevelIcons = { K1: "○", K2: "□", K3: "△", K4: "★" };
    
    const container = document.createElement("div");
    container.className = "lesson-objectives";
    
    const title = document.createElement("h2");
    title.className = "lesson-objectives-title";
    title.textContent = "Learning Objectives ISTQB";
    container.appendChild(title);

    objectives.forEach(lo => {
      const item = document.createElement("div");
      item.className = "lesson-objective-item";
      
      const klevel = document.createElement("div");
      klevel.className = "lesson-objective-klevel";
      klevel.textContent = kLevelIcons[lo.kLevel];
      
      const content = document.createElement("div");
      content.className = "lesson-objective-content";
      
      const text = document.createElement("p");
      text.className = "lesson-objective-text";
      text.textContent = lo.text;
      
      const explanation = document.createElement("p");
      explanation.className = "lesson-objective-explanation";
      explanation.textContent = lo.explanation;
      
      content.appendChild(text);
      content.appendChild(explanation);
      item.appendChild(klevel);
      item.appendChild(content);
      container.appendChild(item);
    });

    document.getElementById("lessonModalContent").innerHTML = "";
    document.getElementById("lessonModalContent").appendChild(container);
  }

  renderTab(tabName) {
    const lesson = CTAI_DATA.lessonsContent[this.currentChapter];
    const content = document.getElementById("lessonModalContent");
    
    let html = "";
    switch (tabName) {
      case "objectives":
        this.renderObjectives(lesson.learningObjectives);
        return;
      case "lesson":
        html = lesson.lessonText;
        break;
      case "visual":
        html = lesson.visualSummary;
        break;
      case "usecases":
        html = lesson.useCases;
        break;
      case "mnemonics":
        html = lesson.mnemonics;
        break;
    }
    
    const div = document.createElement("div");
    div.className = "lesson-content-tab active";
    div.textContent = html;
    content.innerHTML = "";
    content.appendChild(div);
  }

  switchTab(tabName) {
    document.querySelectorAll(".lesson-modal-tab").forEach(t => t.classList.remove("active"));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
    this.currentTab = tabName;
    this.renderTab(tabName);
  }

  close() {
    document.getElementById("lessonModalOverlay").classList.remove("active");
    this.currentChapter = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.lessonModal = new LessonModal();
});
```

- [ ] **Step 2: Link script to index.html**

```html
<script src="lesson-modal.js"></script>
```

(Must come after `data.js`)

- [ ] **Step 3: Test modal**

Console: `lessonModal.open(1)` → modal opens with Chapter 1 objectives

- [ ] **Step 4: Commit**

```bash
git add lesson-modal.js index.html
git commit -m "feat: add lesson-modal.js component with secure rendering"
```

---

## Phase 3: Hub Integration

### Task 8: Add "Maîtriser" Cards to Hub

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Locate chapter rendering section**

Find where chapters 1-11 are displayed in index.html.

- [ ] **Step 2: Add button for each chapter**

```html
<button class="lesson-master-btn" onclick="lessonModal.open(N)">
  📚 Maîtriser ce chapitre
</button>
```

Repeat for N = 1 to 11, placed within each chapter's card div.

- [ ] **Step 3: Add CSS**

```css
.lesson-master-btn {
  background-color: inherit;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  transition: opacity 0.2s ease;
}

.lesson-master-btn:hover {
  opacity: 0.9;
}
```

- [ ] **Step 4: Test buttons**

Reload index.html → click "Maîtriser" for each chapter → modal opens with correct content.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add 'Maîtriser ce chapitre' buttons to all 11 chapters"
```

---

## Phase 4: Bidirectional Navigation

### Task 9: Add Lesson Links to Flashcards

**Files:**
- Modify: `keywords.html`

- [ ] **Step 1: Add "📖" icon to each flashcard**

```html
<a href="javascript:lessonModal.open(X)" class="flashcard-lesson-link">📖</a>
```

Where X = chapter number for that card.

- [ ] **Step 2: Add CSS**

```css
.flashcard-lesson-link {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  text-decoration: none;
}

.flashcard-lesson-link:hover {
  opacity: 1;
}
```

- [ ] **Step 3: Test**

Click "📖" on any flashcard → lesson modal opens.

- [ ] **Step 4: Commit**

```bash
git add keywords.html
git commit -m "feat: add 📖 lesson links to flashcards"
```

---

### Task 10: Add Lesson Links to QCM

**Files:**
- Modify: `questions.html`

- [ ] **Step 1: Add link after each question**

```html
<p class="question-lesson-link">
  <a href="javascript:lessonModal.open(X)">📖 Relire la leçon</a>
</p>
```

Where X = chapter number for that question.

- [ ] **Step 2: Add CSS**

```css
.question-lesson-link {
  margin-top: 12px;
  text-align: center;
  font-size: 15px;
}

.question-lesson-link a {
  color: #007AFF;
  text-decoration: none;
}

.question-lesson-link a:hover {
  text-decoration: underline;
}
```

- [ ] **Step 3: Test**

Click "Relire la leçon" on any question → lesson modal opens.

- [ ] **Step 4: Commit**

```bash
git add questions.html
git commit -m "feat: add lesson links to QCM questions"
```

---

## Phase 5: Testing & Polish

### Task 11: Responsive & Cross-Browser Testing

**Files:**
- All HTML, CSS, JS

- [ ] **Test Desktop (>1024px)**
  - Modal centered, max-width 900px
  - All tabs visible, content scrolls independently
  - Buttons full-width in footer

- [ ] **Test Tablet (768px)**
  - Modal 90vh height, centered
  - Tabs may wrap or scroll horizontally
  - Text readable

- [ ] **Test Mobile (<768px)**
  - Modal full-screen (100vw x 100vh)
  - Header/footer fixed
  - Font: title 28px, body 16px
  - Buttons stacked vertically

- [ ] **Test Dark Mode**
  - DevTools → Rendering → prefers-color-scheme: dark
  - Background #000000, text #FFFFFF
  - Info-boxes #1C1C1E
  - Borders visible

- [ ] **Test Chrome, Firefox, Safari**
  - All features work in each browser
  - No console errors

- [ ] **Test content completeness**

```javascript
for (let i = 1; i <= 11; i++) {
  const l = CTAI_DATA.lessonsContent[i];
  const ok = l.learningObjectives.length > 0 && 
             l.lessonText.length > 1000 &&
             l.visualSummary.length > 100 &&
             l.useCases.length > 100 &&
             l.mnemonics.length > 100;
  console.log(`Ch ${i}: ${ok ? "✓" : "✗"}`);
}
```

All chapters must show ✓.

- [ ] **Commit fixes**

```bash
git add -A
git commit -m "fix: responsive design and cross-browser compatibility"
```

---

### Task 12: Final Verification

**Files:**
- All files

- [ ] **User Flow Test**

1. Hub → click "Maîtriser" → modal opens ✓
2. Read content, switch tabs → all visible ✓
3. Click "Revoir flashcards" → keywords.html?ch=X ✓
4. Click "📖" → modal reopens ✓
5. Go to QCM → click "Relire" → modal opens ✓
6. Close modal → return to previous page ✓

- [ ] **Code Quality**

- No console.logs left
- No debug code
- Proper formatting
- No trailing whitespace
- data.js < 500KB (gzipped < 100KB)

- [ ] **Final commit**

```bash
git add -A
git commit -m "feat: complete synthesis lessons implementation

- Add lessonsContent to data.js (11 chapters, 47+ LOs, 3000-5000 words each)
- Create lesson-modal.js and lesson-modal.css (Apple Design System)
- Integrate Hub, Flashcards, and QCM with bidirectional navigation
- Responsive design (mobile, tablet, desktop, dark mode)
- Cross-browser compatible (Chrome, Firefox, Safari)
- All existing content preserved"
```

---

**Plan created: April 30, 2026 by Aymen Ismail**
