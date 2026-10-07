/* Theme toggle: light / dark, persisted in localStorage,
   falls back to the system preference when no explicit choice. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  } else {
    /* cyberpunk default: always start in the dark */
    root.setAttribute('data-theme', 'dark');
  }

  function current() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return mql && mql.matches ? 'dark' : 'light';
  }

  function updateIcon() {
    if (!btn) return;
    btn.classList.toggle('is-dark', current() === 'dark');
  }

  updateIcon();

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      updateIcon();
    });
  }

  if (mql) {
    mql.addEventListener
      ? mql.addEventListener('change', function () {
          if (!root.getAttribute('data-theme')) updateIcon();
        })
      : mql.addListener(function () { /* ignore */ });
  }
})();
