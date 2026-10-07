/* Boot sequence: a one-off "self-check" terminal on first visit.
   The `is-booting` class is set by an inline <head> snippet, so the
   overlay paints instantly (no content flash). Skipped entirely when
   motion is reduced, when already seen this session, or without JS. */
(function () {
  var boot = document.getElementById('boot');
  var root = document.documentElement;
  if (!boot) return;

  var running = root.classList.contains('is-booting');
  var log = boot.querySelector('.boot__log');

  function finish() {
    if (!running) return;
    running = false;
    boot.classList.add('boot--done');
    root.classList.remove('is-booting');
    try {
      sessionStorage.setItem('booted', '1');
    } catch (e) {}
    window.setTimeout(function () {
      if (boot.parentNode) boot.parentNode.removeChild(boot);
    }, 500);
  }

  /* Not our turn: get out of the way. */
  if (!running || !log) {
    root.classList.remove('is-booting');
    if (boot.parentNode) boot.parentNode.removeChild(boot);
    return;
  }

  var lines = [
    'NIGHT CITY NET // SECURE TERMINAL v2.077',
    '> BOOT SEQUENCE INITIATED',
    '> LOADING KERNEL .............. [ OK ]',
    '> MOUNTING /dev/blog .......... [ OK ]',
    '> DECRYPTING CONTENT .......... [ OK ]',
    '> ESTABLISHING UPLINK ......... [ OK ]',
    '> FIREWALL / ICE .............. [ ACTIVE ]',
    '> ALL SYSTEMS NOMINAL'
  ];

  var text = '';
  var li = 0;
  var ci = 0;
  var timer = null;

  function step() {
    if (li >= lines.length) {
      timer = window.setTimeout(finish, 550);
      return;
    }
    var line = lines[li];
    if (ci < line.length) {
      ci += 1;
      log.textContent = text + line.slice(0, ci);
      var ch = line.charAt(ci - 1);
      var delay = ch === '>' ? 34 : ch === '.' ? 3 : 5;
      timer = window.setTimeout(step, delay);
    } else {
      text += line + '\n';
      ci = 0;
      li += 1;
      timer = window.setTimeout(step, 90);
    }
  }

  function skip(e) {
    if (e && e.type === 'keydown' && e.metaKey) return; /* let ⌘/ctrl shortcuts through */
    if (timer) window.clearTimeout(timer);
    finish();
  }

  boot.addEventListener('click', skip);
  window.addEventListener('keydown', skip);
  window.addEventListener('wheel', skip, { passive: true });
  window.addEventListener('touchstart', skip, { passive: true });

  timer = window.setTimeout(step, 260);
})();
