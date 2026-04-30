/* Lesson Modal - Composant JS */

(function () {
  "use strict";

  var TABS = [
    { id: "lesson",    label: "📖 Leçon" },
    { id: "visual",    label: "🗺 Synthèse Visuelle" },
    { id: "cases",     label: "💼 Cas d'Usage" },
    { id: "mnemonics", label: "🧠 Mnémoniques" },
  ];
  var STORAGE_KEY = "lm_last_tab";
  var FIELD_MAP = {
    lesson: "lessonText",
    visual: "visualSummary",
    cases: "useCases",
    mnemonics: "mnemonics"
  };

  var currentChapter = 1;

  function buildDOM() {
    var overlay = mk("div", "lm-overlay");
    overlay.id = "lmOverlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.addEventListener("click", function(e) { if (e.target === overlay) LessonModal.close(); });

    var modal = mk("div", "lm-modal");

    var header = mk("div", "lm-header");
    var badge = mk("div", "lm-chapter-badge");
    badge.id = "lmBadge";
    var titleBlock = mk("div", "lm-title-block");
    var title = mk("h2", "lm-title");
    title.id = "lmTitle";
    var losDiv = mk("div", "lm-los");
    losDiv.id = "lmLos";
    var closeBtn = mk("button", "lm-close");
    closeBtn.id = "lmClose";
    closeBtn.textContent = "✕";
    closeBtn.title = "Fermer";
    closeBtn.addEventListener("click", function() { LessonModal.close(); });
    titleBlock.appendChild(title);
    titleBlock.appendChild(losDiv);
    header.appendChild(badge);
    header.appendChild(titleBlock);
    header.appendChild(closeBtn);

    var tabBar = mk("div", "lm-tabs");
    tabBar.id = "lmTabBar";
    tabBar.setAttribute("role", "tablist");
    TABS.forEach(function(t) {
      var btn = mk("button", "lm-tab");
      btn.textContent = t.label;
      btn.dataset.tab = t.id;
      btn.setAttribute("role", "tab");
      btn.addEventListener("click", (function(id){ return function() { switchTab(id); }; })(t.id));
      tabBar.appendChild(btn);
    });

    var contentArea = mk("div", "lm-content");
    contentArea.id = "lmContent";
    TABS.forEach(function(t) {
      var panel = mk("div", "lm-panel");
      panel.id = "lmPanel_" + t.id;
      panel.dataset.tab = t.id;
      panel.setAttribute("role", "tabpanel");
      contentArea.appendChild(panel);
    });

    var footer = mk("div", "lm-footer");
    var prevBtn = mk("button", "lm-nav-btn");
    prevBtn.id = "lmPrev";
    prevBtn.textContent = "← Chapitre précédent";
    prevBtn.addEventListener("click", function() { navigate(-1); });
    var counter = mk("span", "lm-chapter-counter");
    counter.id = "lmCounter";
    var nextBtn = mk("button", "lm-nav-btn");
    nextBtn.id = "lmNext";
    nextBtn.textContent = "Chapitre suivant →";
    nextBtn.addEventListener("click", function() { navigate(1); });
    footer.appendChild(prevBtn);
    footer.appendChild(counter);
    footer.appendChild(nextBtn);

    modal.appendChild(header);
    modal.appendChild(tabBar);
    modal.appendChild(contentArea);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") LessonModal.close();
    });
  }

  function render(chapterNum) {
    var lc = (typeof CTAI_DATA !== "undefined") ? CTAI_DATA.lessonsContent : null;
    var data = lc ? lc[chapterNum] : null;
    var chapters = (typeof CTAI_DATA !== "undefined") ? CTAI_DATA.chapters : null;
    var chapMeta = chapters ? chapters.find(function(c) { return c.num === chapterNum; }) : null;

    document.getElementById("lmBadge").textContent = "Chapitre " + chapterNum;
    document.getElementById("lmTitle").textContent = chapMeta ? chapMeta.title : "Chapitre " + chapterNum;

    var losContainer = document.getElementById("lmLos");
    losContainer.innerHTML = "";
    if (data && data.learningObjectives && data.learningObjectives.length) {
      data.learningObjectives.forEach(function(lo) {
        var tag = mk("span", "lm-lo-tag");
        tag.textContent = lo.id;
        tag.title = lo.text;
        losContainer.appendChild(tag);
      });
    }

    TABS.forEach(function(t) {
      var panel = document.getElementById("lmPanel_" + t.id);
      panel.innerHTML = "";
      var field = FIELD_MAP[t.id];
      var raw = data && data[field] ? data[field] : "";
      if (!raw || raw.trim() === "") {
        var empty = mk("div", "lm-empty");
        empty.textContent = "Contenu à venir.";
        panel.appendChild(empty);
      } else if (t.id === "visual") {
        var pre = mk("pre", "lm-pre");
        pre.textContent = raw;
        panel.appendChild(pre);
      } else {
        renderMarkdown(raw, panel);
      }
    });

    var total = lc ? Object.keys(lc).length : 11;
    document.getElementById("lmPrev").disabled = chapterNum <= 1;
    document.getElementById("lmNext").disabled = chapterNum >= total;
    document.getElementById("lmCounter").textContent = "Chapitre " + chapterNum + " / " + total;
  }

  function switchTab(tabId) {
    try { localStorage.setItem(STORAGE_KEY, tabId); } catch(e) {}
    document.querySelectorAll(".lm-tab").forEach(function(btn) {
      var active = btn.dataset.tab === tabId;
      btn.classList.toggle("lm-tab-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".lm-panel").forEach(function(p) {
      p.classList.toggle("lm-panel-active", p.dataset.tab === tabId);
    });
  }

  function navigate(delta) {
    var lc = (typeof CTAI_DATA !== "undefined") ? CTAI_DATA.lessonsContent : null;
    var total = lc ? Object.keys(lc).length : 11;
    var next = currentChapter + delta;
    if (next >= 1 && next <= total) LessonModal.open(next);
  }

  function renderMarkdown(md, container) {
    var lines = md.split("\n");
    var i = 0;

    while (i < lines.length) {
      var line = lines[i];

      if (line.slice(0,5) === "#### ") { container.appendChild(mkEl("h4", line.slice(5))); i++; continue; }
      if (line.slice(0,4) === "### ") { container.appendChild(mkEl("h3", line.slice(4))); i++; continue; }
      if (line.slice(0,3) === "## ") { container.appendChild(mkEl("h2", line.slice(3))); i++; continue; }
      if (line.slice(0,2) === "# ") { container.appendChild(mkEl("h2", line.slice(2))); i++; continue; }

      if (/^---+$/.test(line.trim())) {
        container.appendChild(mk("hr", "lm-hr")); i++; continue;
      }

      if (line.slice(0,4) === "    " || line.slice(0,1) === "\t") {
        var preLines = [];
        while (i < lines.length && (lines[i].slice(0,4) === "    " || lines[i].slice(0,1) === "\t" || lines[i].trim() === "")) {
          preLines.push(lines[i].replace(/^    /, "").replace(/^\t/, ""));
          i++;
        }
        var preEl = mk("pre", "lm-pre");
        preEl.textContent = preLines.join("\n").trimEnd();
        container.appendChild(preEl);
        continue;
      }

      var boxM = line.match(/^\*\*(Definition|Tip|Warning|Example|Note)[^:]*:\*\*\s*(.*)/i);
      if (boxM) {
        var typeMap = { definition:"definition", tip:"tip", warning:"warning", example:"example", note:"tip" };
        var box = mk("div", "lm-box lm-box-" + (typeMap[boxM[1].toLowerCase()] || "definition"));
        var lbl = mk("span", "lm-box-label");
        lbl.textContent = boxM[1];
        box.appendChild(lbl);
        var body = [boxM[2]];
        i++;
        while (i < lines.length && lines[i].trim() !== "" && !lines[i].match(/^\*\*(Definition|Tip|Warning|Example|Note)/i) && lines[i].slice(0,1) !== "#") {
          body.push(lines[i]); i++;
        }
        appendInline(box, body.join("\n"));
        container.appendChild(box);
        continue;
      }

      if (line.indexOf("|") >= 0 && line.trim().slice(0,1) === "|") {
        var tlines = [];
        while (i < lines.length && lines[i].indexOf("|") >= 0) { tlines.push(lines[i]); i++; }
        container.appendChild(buildTable(tlines));
        continue;
      }

      if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
        var ordered = /^\d+\. /.test(line);
        var list = document.createElement(ordered ? "ol" : "ul");
        while (i < lines.length && (/^[-*] /.test(lines[i]) || /^\d+\. /.test(lines[i]) || /^  /.test(lines[i]))) {
          var rawTxt = lines[i].replace(/^[-*] /, "").replace(/^\d+\. /, "").trim();
          if (rawTxt) {
            var li = document.createElement("li");
            appendInline(li, rawTxt);
            list.appendChild(li);
          }
          i++;
        }
        container.appendChild(list);
        continue;
      }

      if (line.trim() === "") { i++; continue; }

      var pLines = [];
      while (i < lines.length && lines[i].trim() !== "" && lines[i].slice(0,1) !== "#" && lines[i].indexOf("|") < 0 && !/^[-*] /.test(lines[i]) && !/^\d+\. /.test(lines[i]) && !/^---/.test(lines[i]) && lines[i].slice(0,4) !== "    ") {
        pLines.push(lines[i]); i++;
      }
      if (pLines.length) {
        var p = document.createElement("p");
        appendInline(p, pLines.join(" "));
        container.appendChild(p);
      }
    }
  }

  function mkEl(tag, text) {
    var node = document.createElement(tag);
    appendInline(node, text);
    return node;
  }

  function appendInline(parent, text) {
    var re = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
    var parts = text.split(re);
    parts.forEach(function(part) {
      if (!part) return;
      if (part.slice(0,2) === "**" && part.slice(-2) === "**") {
        var s = document.createElement("strong");
        s.textContent = part.slice(2, -2);
        parent.appendChild(s);
      } else if (part.slice(0,1) === "`" && part.slice(-1) === "`") {
        var c = document.createElement("code");
        c.className = "lm-code";
        c.textContent = part.slice(1, -1);
        parent.appendChild(c);
      } else if (part.slice(0,1) === "*" && part.slice(-1) === "*" && part.length > 2) {
        var em = document.createElement("em");
        em.textContent = part.slice(1, -1);
        parent.appendChild(em);
      } else {
        parent.appendChild(document.createTextNode(part));
      }
    });
  }

  function buildTable(lines) {
    var wrap = mk("div", "lm-table-wrap");
    var table = mk("table", "lm-table");
    var first = true;
    lines.forEach(function(line) {
      if (/^\|[-| :]+\|$/.test(line.trim())) return;
      var cells = line.split("|").map(function(c) { return c.trim(); }).filter(function(c, idx, arr) { return idx > 0 && idx < arr.length - 1; });
      if (!cells.length) return;
      if (first) {
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        cells.forEach(function(c) { var th = document.createElement("th"); appendInline(th, c); tr.appendChild(th); });
        thead.appendChild(tr); table.appendChild(thead); first = false;
      } else {
        var tbody = table.querySelector("tbody");
        if (!tbody) { tbody = document.createElement("tbody"); table.appendChild(tbody); }
        var tr2 = document.createElement("tr");
        cells.forEach(function(c) { var td = document.createElement("td"); appendInline(td, c); tr2.appendChild(td); });
        tbody.appendChild(tr2);
      }
    });
    wrap.appendChild(table);
    return wrap;
  }

  function mk(tag, cls) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  }

  var LessonModal = {
    open: function(chapterNum) {
      if (!document.getElementById("lmOverlay")) buildDOM();
      currentChapter = chapterNum;
      var saved = "lesson";
      try { saved = localStorage.getItem(STORAGE_KEY) || "lesson"; } catch(e) {}
      var tabId = TABS.find(function(t) { return t.id === saved; }) ? saved : "lesson";
      render(chapterNum);
      switchTab(tabId);
      var overlay = document.getElementById("lmOverlay");
      overlay.style.display = "flex";
      void overlay.offsetHeight;
      overlay.classList.add("lm-visible");
      document.body.style.overflow = "hidden";
      setTimeout(function() { var c = document.getElementById("lmClose"); if (c) c.focus(); }, 50);
    },
    close: function() {
      var overlay = document.getElementById("lmOverlay");
      if (!overlay) return;
      overlay.classList.remove("lm-visible");
      document.body.style.overflow = "";
      setTimeout(function() { overlay.style.display = "none"; }, 230);
    },
  };

  window.LessonModal = LessonModal;
})();