(function () {
  var THEME_KEY = 'ctai_theme';

  function getPreferredTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.add('theme-transitioning');
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
    setTimeout(function () {
      document.documentElement.classList.remove('theme-transitioning');
    }, 350);
  }

  function makeSvg(paths, viewBox) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', viewBox || '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    paths.forEach(function (def) {
      var el = document.createElementNS(ns, def.tag);
      Object.keys(def.attrs).forEach(function (k) { el.setAttribute(k, def.attrs[k]); });
      svg.appendChild(el);
    });
    return svg;
  }

  function createButton() {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer le thème clair / sombre');
    btn.title = 'Changer le thème';

    var sunSvg = makeSvg([
      { tag: 'circle', attrs: { cx: '12', cy: '12', r: '5' } },
      { tag: 'line', attrs: { x1: '12', y1: '1', x2: '12', y2: '3' } },
      { tag: 'line', attrs: { x1: '12', y1: '21', x2: '12', y2: '23' } },
      { tag: 'line', attrs: { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' } },
      { tag: 'line', attrs: { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' } },
      { tag: 'line', attrs: { x1: '1', y1: '12', x2: '3', y2: '12' } },
      { tag: 'line', attrs: { x1: '21', y1: '12', x2: '23', y2: '12' } },
      { tag: 'line', attrs: { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' } },
      { tag: 'line', attrs: { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' } }
    ]);
    sunSvg.classList.add('theme-icon', 'theme-icon--sun');

    var moonSvg = makeSvg([
      { tag: 'path', attrs: { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' } }
    ]);
    moonSvg.classList.add('theme-icon', 'theme-icon--moon');

    btn.appendChild(sunSvg);
    btn.appendChild(moonSvg);
    btn.addEventListener('click', toggleTheme);
    document.body.appendChild(btn);
  }

  // Apply immediately — prevents flash of wrong theme
  applyTheme(getPreferredTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createButton);
  } else {
    createButton();
  }

  // Sync with OS preference when user hasn't manually chosen a theme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
