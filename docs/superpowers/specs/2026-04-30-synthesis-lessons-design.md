# Design Spec: Synthesis Lessons & ISTQB Learning Objectives Integration

**Date:** April 30, 2026  
**Status:** Design Phase  
**Scope:** Add synthesis lessons (3000-5000 words/chapter), integrate official ISTQB Learning Objectives, adapt design to Apple Design System 100%

---

## 1. Overview

Expand the existing ISTQB CT-AI study hub with comprehensive synthesis lessons integrated into the Hub experience. Each chapter will be accessible via a new "Maîtriser ce chapitre" (Master this chapter) card that opens an immersive Lesson Modal containing:
- Official ISTQB Learning Objectives with K-levels (K1/K2/K3/K4)
- Synthesis lesson content (~3000-5000 words)
- Tabbed interface: Leçon | Synthèse Visuelle | Cas d'Usage | Mnémoniques
- Bidirectional navigation to existing flashcards and QCM sections

**Nothing will be removed.** All existing content (flashcards, QCM, mock exam, fiches mémo, Hub) remains unchanged and functional.

---

## 2. Architecture

### 2.1 Data Model Extension

**File:** `data.js`

Add new top-level object to `CTAI_DATA`:

```javascript
lessonsContent: {
  1: {
    // Chapter 1: Introduction to AI
    learningObjectives: [
      {
        id: "lo1.1",
        text: "Define artificial intelligence and describe its types (narrow, general, super AI)",
        kLevel: "K1",
        explanation: "Foundation concept - understand what AI is"
      },
      {
        id: "lo1.2",
        text: "Distinguish between narrow AI and General AI with examples",
        kLevel: "K2",
        explanation: "Apply understanding to differentiate AI types"
      },
      // ... more LOs for chapter 1
    ],
    
    lessonText: "Full markdown/HTML content (~3000-5000 words)",
    visualSummary: "Diagrams, matrices, visual representations",
    useCases: "Concrete examples and real-world applications",
    mnemonics: "Memory aids, infographics, quick reference"
  },
  
  2: { /* ... */ },
  3: { /* ... */ },
  // ... through chapter 11
}
```

**Data validation:**
- Each chapter 1-11 must have `learningObjectives` array (non-empty)
- Each LO must have: `id`, `text`, `kLevel` (K1|K2|K3|K4), `explanation`
- `lessonText`, `visualSummary`, `useCases`, `mnemonics` must be strings (non-empty)
- Total added data: ~100-120 KB (uncompressed), compresses to ~20-25 KB

### 2.2 Hub Enhancement

**File:** `index.html`

For each of the 11 chapters, modify the chapter card to include:
- Existing chapter info (title, duration, color)
- **New:** Secondary card "📚 Maîtriser ce chapitre" with same chapter color
- Click handler → opens Lesson Modal with chapter content

**Navigation structure:**
```
Hub (index.html)
├─ Chapter 1 card
│  ├─ Existing: Title, duration, progress
│  └─ NEW: "📚 Maîtriser" → Lesson Modal
├─ Chapter 2 card
│  └─ NEW: "📚 Maîtriser" → Lesson Modal
...
└─ Chapter 11 card
   └─ NEW: "📚 Maîtriser" → Lesson Modal
```

### 2.3 Lesson Modal Component

**Structure:**

**Header (fixed):**
- Chapter title + number (e.g., "Chapitre 1: Introduction to AI")
- Tab controls: Leçon | Synthèse Visuelle | Cas d'Usage | Mnémoniques
- Close button (×)
- Apple Design: SF Pro Display Bold 34px, padding 24px

**Learning Objectives Section (always visible, below header):**
- Title: "Learning Objectives ISTQB" (SF Pro Semibold 20px)
- List of LOs with K-level icons:
  - K1: Circle (○)
  - K2: Square (□)
  - K3: Triangle (△)
  - K4: Star (★)
- Each LO: SF Pro Text 17px, line-height 22px
- Hover → shows tooltip with `explanation` field
- Padding: 16px horizontal, 24px vertical, border-bottom 1px rgba(0,0,0,0.1)

**Tab Content (scrollable independently):**

1. **"Leçon" Tab** (default, ~3000-5000 words):
   - Body text: SF Pro Text Regular 17px
   - Sections: Use `<h2>` (SF Pro Semibold 20px) for major breaks
   - Subsections: Use `<h3>` (SF Pro Semibold 18px)
   - Spacing: 24px between sections
   - Info-boxes:
     - Background: #F5F5F7 (light gray)
     - Padding: 16px
     - Border-left: 4px solid (chapter color)
     - Border-radius: 12px
     - Types: Definition, Tip, Warning, Example
   - Tables:
     - Border: 1px #E5E5EA
     - Header: SF Pro Text Semibold 15px, background #F5F5F7
     - Cell padding: 12px
   - Lists: bullet, 16px indent, 8px spacing

2. **"Synthèse Visuelle" Tab**:
   - Collapsible sections (accordion)
   - Title + click to expand
   - Content: diagrams, matrices (confusion matrix, ML workflow, etc.)
   - Each visual with brief caption (SF Pro Text 13px)

3. **"Cas d'Usage" Tab**:
   - Real-world examples relevant to chapter
   - Format: Title (SF Pro Semibold 17px) + description (SF Pro Text 15px)
   - Collapsible sections

4. **"Mnémoniques" Tab**:
   - Memory aids, acronyms, visual mnemonics
   - Infographics, color-coded lists
   - Collapsible sections

**Footer (fixed):**
- Two action buttons:
  - "📇 Revoir flashcards du chapitre"
  - "📝 Tester QCM du chapitre"
- Style: SF Pro Medium 17px, 12px padding 24px, corner radius 12px, background #007AFF (Apple blue), text white
- Margin: 24px
- Click → navigates to `keywords.html?ch=X` or `questions.html?ch=X`

**Modal dimensions:**
- Desktop: max-width 900px, max-height 90vh, centered
- Mobile: width 100%, height 100vh, full-screen (no padding)
- Scrolling: each tab scrolls independently, header and footer fixed

---

## 3. Styling (Apple Design System 100%)

**Typography:**
- Display/Headers: SF Pro Display or -apple-system fallback
- Body: SF Pro Text or system-ui fallback
- Monospace (code): SF Mono or Monaco

**Spacing System:**
- Base unit: 8px
- Standard: 16px, 24px, 32px, 48px margins/padding
- No deviation from this scale

**Colors:**
- Light mode: White (#FFFFFF) background, black text (#000000)
- Dark mode: #000000 background, white text (#FFFFFF)
- Info-box backgrounds: #F5F5F7 (light) / #1C1C1E (dark)
- Accents: Use chapter colors from existing system (c-blue, c-purple, etc.)
- Primary action: Apple blue (#007AFF)
- Borders: 1px rgba(0,0,0,0.1) light mode / rgba(255,255,255,0.1) dark mode

**Corners:**
- Default radius: 12px
- Buttons/cards: 12px
- Info-boxes: 12px

**Shadows:**
- Modal: `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`
- Cards: `box-shadow: 0 1px 3px rgba(0,0,0,0.12)`

---

## 4. Bidirectional Navigation

### 4.1 From Hub
- Hub chapter card → "📚 Maîtriser" → opens Lesson Modal

### 4.2 From Flashcards (`keywords.html`)
- Add small "📖" icon on each flashcard
- Click → opens Lesson Modal + auto-scrolls to relevant section
- Modal remembers which tab user was on last

### 4.3 From QCM (`questions.html`)
- Add "📖 Relire la leçon" link in question footer
- Click → opens Lesson Modal + scrolls to relevant section

### 4.4 From Fiches (`fiches.html`)
- Where relevant, add link to Lesson Modal for more depth

---

## 5. Data Integration Strategy

**Load timing:**
- `lessonsContent` loaded once when `data.js` is parsed (already in memory)
- Modal content rendered only when user clicks "Maîtriser" (lazy load)
- No extra HTTP requests

**State management:**
- Track which modal is open (chapter number)
- Track which tab is active per chapter (localStorage optional)
- Handle multiple modal opens → close previous

**Performance:**
- Total addition to data.js: ~100 KB uncompressed
- With gzip: ~20-25 KB (negligible impact)
- Modal rendering: < 100ms on modern devices

---

## 6. Responsive Design

**Desktop (>768px):**
- Modal: 90vh height, centered, max-width 900px
- Tab content: scrollable within modal
- Two-column layout for tables (if needed)

**Tablet (768px - 1024px):**
- Modal: 85vh height
- Tab content: single column
- Buttons: full width

**Mobile (<768px):**
- Modal: full screen (width: 100vw, height: 100vh)
- Header/footer: sticky
- Tab content: scrollable with safe area
- Buttons: full width, stacked vertically
- Font sizes: slightly reduced but maintain hierarchy (title 28px, body 16px)

---

## 7. Learning Objectives Integration Points

**Location 1: Modal header section**
- Always visible, top of modal after header
- User sees LOs before reading lesson

**Location 2: Flashcard display**
- Each flashcard tagged with its parent LO id
- Optional: show LO reference on card (e.g., "LO 1.1: Define AI")

**Location 3: QCM display**
- Each question tagged with learning objective(s)
- Show on question page (e.g., "Tests: LO 1.2, LO 1.3")

**K-Level visual system:**
- K1 (Know): ○ gray
- K2 (Know, Understand): □ blue
- K3 (Apply): △ purple
- K4 (Analyze): ★ gold

---

## 8. Constraints & Non-Changes

**Must preserve:**
- All existing flashcards, questions, exam functionality
- Hub navigation and progression UI
- Fiches mémo content and styling
- Color system and chapter associations
- Exam timer and scoring logic

**Out of scope:**
- Rewriting existing flashcard/QCM content
- Redesigning other pages (only Hub gets "Maîtriser" cards)
- Offline mode beyond what data.js already supports

---

## 9. Success Criteria

- [ ] Hub displays 11 "Maîtriser" cards, one per chapter
- [ ] Clicking card opens modal with LO section + 4 tabs
- [ ] Modal styling 100% matches Apple Design System (SF Pro, 24px spacing, 12px radius)
- [ ] Can navigate between tabs without losing scroll position
- [ ] Buttons navigate correctly to flashcards/QCM by chapter
- [ ] Flashcards/QCM can open modal back to relevant section
- [ ] Mobile responsive (full-screen, touch-friendly)
- [ ] LOs visible in 3 locations (modal, flashcard reference, QCM reference)
- [ ] No existing content deleted or broken

---

## 10. File Structure

```
Formation ISTQB CT-IA HTML/
├── index.html (modified - add "Maîtriser" cards)
├── keywords.html (modified - add "📖" icon)
├── questions.html (modified - add "📖" link)
├── fiches.html (unchanged, optional enhancement)
├── exam.html (unchanged)
├── data.js (modified - add lessonsContent object)
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-30-synthesis-lessons-design.md (this file)
└── README.md (unchanged)
```

---

## 11. Implementation Order

1. Extend `data.js` with `lessonsContent` for all 11 chapters
2. Create Lesson Modal component (HTML/CSS/JS)
3. Update Hub with "Maîtriser" cards
4. Update keywords.html with "📖" navigation
5. Update questions.html with "📖" navigation
6. Responsive testing (desktop, tablet, mobile)
7. Cross-browser testing (Chrome, Safari, Firefox)
8. Commit all changes

---

**Design approved by:*Aymen Ismail* 

---

**Design approved by:** Aymen Ismail | April 30, 2026

---

*ISTQB CT-AI Synthesis Lessons Project — Designed & approved by Aymen Ismail*
