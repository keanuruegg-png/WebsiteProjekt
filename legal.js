// Language toggle for the legal pages (Impressum / Datenschutz).
// Shares the 'kii-lang' key with the main site so the choice carries over.
(function () {
  var KEY = 'kii-lang';

  function getLang() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === 'de' || s === 'en') return s;
    } catch (e) {}
    return 'en';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-content]').forEach(function (el) {
      el.style.display = (el.getAttribute('data-lang-content') === lang) ? 'block' : 'none';
    });
    document.querySelectorAll('.lang-opt').forEach(function (b) {
      var active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(getLang());
    document.querySelectorAll('.lang-opt').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
  });
})();
