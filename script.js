// ============================================
// KIIFRAMES — Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- i18n: English default, German toggle ----------
     English lives inline in the HTML (captured on load); only German
     is defined here. Choice is remembered in localStorage. */
  const TRANSLATIONS_DE = {
    skip: 'Zum Inhalt springen',
    nav_services: 'Leistungen',
    nav_presets: 'Football Presets',
    nav_gallery: 'Galerie',
    nav_contact: 'Kontakt',
    hero_eyebrow: 'Basel · Sportfotografie &amp; Design',
    hero_title: 'Der Moment,<br><span class="hero-title-outline">bevor er</span><br>Geschichte wird.',
    hero_sub: 'Ich halte fest, was den Bruchteil einer Sekunde zählt — auf dem Platz, im Käfig, im Schnitt. Sportfotografie, Matchday-Design und fertige Presets für deinen eigenen Look.',
    hero_btn1: 'Leistungen ansehen',
    hero_btn2: 'Football Presets · CHF 29.90',
    m_football: 'FUSSBALL',
    svc_eyebrow: '01 — Leistungen',
    svc_title: 'Was ich für dich festhalte',
    svc_desc: 'Vier Bereiche, ein Anspruch: Bilder und Designs, die nach mehr aussehen als nur ein Foto vom Spieltag.',
    card1_h3: 'Sportfotografie<br>Fussball',
    card1_price: 'ab CHF 25.– / Spieler',
    card2_h3: 'MMA<br>Fotografie',
    card2_price: 'CHF 250.– / Event',
    card3_h3: 'Matchday<br>Design',
    card3_price: 'CHF 15.– / Poster',
    card4_h3: 'Video',
    card4_price: 'Individuelle Anfrage',
    about_eyebrow: '02 — Über mich',
    about_title: 'Hinter der Linse.',
    about_p1: 'Seit August 2025 bin ich mit der Kamera am Spielfeldrand und im Käfig unterwegs — der Einstieg kam durch einen glücklichen Zufall über Radio Rotblau. Seither fotografiere ich regelmässig für den FC Basel, die Schweizer Nationalmannschaft und die Swiss MMA Championship (SMMAC).',
    about_p2: 'Mich interessiert nicht das perfekt gestellte Foto, sondern der Moment kurz davor — die Anspannung, der Schrei, der Bruchteil einer Sekunde, der über Sieg oder Niederlage entscheidet.',
    about_logo1: 'FC Basel',
    about_logo2: 'Schweizer Nationalmannschaft',
    about_logo3: 'SMMAC',
    pre_eyebrow: '03 — Lightroom Presets',
    pre_title: 'Football<br>Presets',
    pre_desc: 'Die vier Farbprofile, die ich selbst bei jedem Spieltag einsetze. Satte Grüntöne für den Rasen, kontrastreiches Flutlicht, true-to-life Trikotfarben. Einmal kaufen, für immer dein eigener Look — egal ob Smartphone-Klick oder Vollformat.',
    pre_f1: '4 Lightroom-Presets (Desktop &amp; Mobile)',
    pre_f2: 'Optimiert für Floodlight &amp; Tageslicht-Spiele',
    pre_f3: 'Sofortiger Download nach Kauf',
    pre_f4: 'Anleitung zur Installation inklusive',
    pre_note: 'Einmalig · Sofort-Download',
    pre_btn: 'Jetzt sichern',
    gal_eyebrow: '04 — Galerie',
    gal_title: 'Ausgewählte Aufnahmen',
    con_eyebrow: '05 — Kontakt',
    con_title: 'Lust auf Bilder,<br>die hängen bleiben?',
    con_desc: 'Schreib mir kurz, worum es geht — Matchday, Einzelshooting, Event oder Design. Ich melde mich innert 24h zurück.',
    form_name: 'Name',
    form_topic: "Worum geht's?",
    form_msg: 'Nachricht',
    btn_send: 'Anfrage senden',
    btn_order: 'Per Mail bestellen',
    form_hint: 'Öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht. Lieber direkt? <a href="mailto:info@kiiframes.ch">info@kiiframes.ch</a>',
    opt1: 'Sportfotografie Fussball',
    opt2: 'MMA Fotografie',
    opt3: 'Matchday Design',
    opt4: 'Video',
    opt5: 'Football Presets',
    opt6: 'Etwas anderes',
    footer_copy: '© 2026 KIIFRAMES · Basel, Schweiz',
    footer_imprint: 'Impressum',
    footer_privacy: 'Datenschutz',
    mf_title: 'Sportfotografie Fussball',
    mf_price: 'CHF 25.– pro Spieler',
    mf_text: 'Ich begleite dein Team an einem Spieltag und liefere dir starke, individuelle Aufnahmen jedes Spielers — Action, Emotion, Portraitmomente. Perfekt für Social Media, Sponsoren oder als Erinnerung an die Saison.',
    mf_li1: 'Mindestens 5 Spieler aus dem Team müssen Interesse haben',
    mf_li2: 'Bearbeitete, druckreife Bilder pro Spieler',
    mf_li3: 'Lieferung digital innert wenigen Tagen',
    mf_li4: 'Einsatz innerhalb BL/BS inklusive — ausserhalb gegen Aufpreis (Anfahrt)',
    mm_title: 'MMA Fotografie',
    mm_price: 'CHF 250.– pro Event',
    mm_text: 'Cage-Action lebt von Timing und Licht — genau da setze ich an. Ich begleite dein Event oder dein Gym und liefere dir die intensivsten Momente des Abends, von Walkout bis Siegerpose.',
    mm_li1: 'Tagespauschale, unabhängig von der Kämpferzahl',
    mm_li2: 'Deckt Walkouts, Kämpfe und Siegerfeiern ab',
    mm_li3: 'Bearbeitete Auswahl als digitale Galerie',
    mm_li4: 'Einsatz innerhalb BS/BL inklusive — bei weiteren Strecken ausserhalb gegen Aufpreis (Anfahrt)',
    md_title: 'Matchday Design',
    md_price: 'CHF 15.– pro Poster',
    md_text: 'Ein starkes Matchday-Poster macht aus einem guten Foto einen Aushängeposten für Social Media. Ich gestalte dir Pro-Matchday-Poster oder andere individuelle Designs rund um euer Spiel.',
    md_li1: 'Matchday-Poster im Vereins- oder Eventlook',
    md_li2: 'Sonstige Designs auf Anfrage (Story-Templates, Ankündigungen)',
    md_li3: 'CHF 15.– pro Poster',
    md_li4: 'Lieferung als druckfertige Datei',
    mv_title: 'Video',
    mv_price: 'Individuelle Anfrage',
    mv_text: 'Jeder Video-Auftrag ist anders — Aufwand, Schnitt und Lieferformat hängen stark vom Projekt ab. Schreib mir kurz, was du dir vorstellst, dann erhältst du eine passende Offerte.',
    mv_li1: 'Highlight-Clips, Aftermovies oder Social-Content',
    mv_li2: 'Preis nach Aufwand, Länge und Schnittumfang',
    mv_li3: 'Unverbindliche Erstanfrage per Mail',
    mp_h3: 'Fast geschafft',
    mp_text: 'Hier kommt später dein Checkout-Anbieter rein (z.B. Gumroad, Lemon Squeezy oder Stripe). Bis dahin kannst du Bestellungen direkt per Mail entgegennehmen.'
  };
  const TITLE_DE = 'KIIFRAMES — Sportfotografie & Design aus Basel';

  const i18nEls = document.querySelectorAll('[data-i18n]');
  const originalEN = new Map();
  i18nEls.forEach(el => originalEN.set(el, el.innerHTML));
  const titleEN = document.title;
  const langButtons = document.querySelectorAll('.lang-opt');

  function applyLang(lang) {
    const de = lang === 'de';
    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = de ? (TRANSLATIONS_DE[key] != null ? TRANSLATIONS_DE[key] : originalEN.get(el)) : originalEN.get(el);
    });
    document.documentElement.lang = lang;
    document.title = de ? TITLE_DE : titleEN;
    langButtons.forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('kii-lang', lang); } catch (e) {}
  }

  let initialLang = 'en';
  try { const s = localStorage.getItem('kii-lang'); if (s === 'de' || s === 'en') initialLang = s; } catch (e) {}
  applyLang(initialLang);
  langButtons.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

  /* ---------- Helpers: focus trap ---------- */
  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(container, e) {
    const items = container.querySelectorAll(FOCUSABLE);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  function setMenu(open) {
    burger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

  /* ---------- Cursor glow (desktop only) ---------- */
  const glow = document.getElementById('cursorGlow');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('active'));
  }

  /* ---------- Modal system ---------- */
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal-overlay');
  let lastFocusedTrigger = null;

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close, .btn');
    if (closeBtn) closeBtn.focus();
  }
  function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocusedTrigger) lastFocusedTrigger.focus();
  }
  function anyOpenModal() {
    return Array.from(modals).find(m => m.classList.contains('open'));
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastFocusedTrigger = trigger;
      openModal(trigger.dataset.modal);
    });
  });
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-blur-bg')) closeModal(modal);
    });
    modal.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => closeModal(modal)));
  });

  /* ---------- Football Presets buy button -> modal ---------- */
  const buyBtn = document.getElementById('buyPresetsBtn');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      lastFocusedTrigger = buyBtn;
      openModal('modal-presets-buy');
    });
  }

  /* ---------- Lightbox (gallery + presets) ---------- */
  const galleryItems = Array.from(document.querySelectorAll('[data-lightbox-index]'));
  const presetItems = Array.from(document.querySelectorAll('[data-preset-lightbox-index]'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  let currentLightboxIndex = 0;
  let activeLightboxSet = galleryItems;
  let lastGalleryTrigger = null;

  function showLightboxImage(index) {
    currentLightboxIndex = (index + activeLightboxSet.length) % activeLightboxSet.length;
    const img = activeLightboxSet[currentLightboxIndex].querySelector('img');
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.getAttribute('src');
      lightboxImg.alt = img.getAttribute('alt') || '';
      lightboxImg.style.opacity = '1';
    }, 120);
    lightboxCounter.textContent = (currentLightboxIndex + 1) + ' / ' + activeLightboxSet.length;
  }
  function openLightbox(index, set) {
    activeLightboxSet = set || galleryItems;
    showLightboxImage(index);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lastGalleryTrigger) lastGalleryTrigger.focus();
  }

  galleryItems.forEach((item, idx) => item.addEventListener('click', () => {
    lastGalleryTrigger = item;
    openLightbox(idx, galleryItems);
  }));
  presetItems.forEach((item, idx) => item.addEventListener('click', () => {
    lastGalleryTrigger = item;
    openLightbox(idx, presetItems);
  }));

  document.querySelector('[data-lightbox-close]').addEventListener('click', closeLightbox);
  document.querySelector('[data-lightbox-prev]').addEventListener('click', () => showLightboxImage(currentLightboxIndex - 1));
  document.querySelector('[data-lightbox-next]').addEventListener('click', () => showLightboxImage(currentLightboxIndex + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-blur-bg')) closeLightbox();
  });

  /* ---------- Unified keyboard handling ---------- */
  document.addEventListener('keydown', (e) => {
    // Lightbox takes priority (highest layer)
    if (lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showLightboxImage(currentLightboxIndex - 1);
      else if (e.key === 'ArrowRight') showLightboxImage(currentLightboxIndex + 1);
      else if (e.key === 'Tab') trapFocus(lightbox, e);
      return;
    }
    const openMod = anyOpenModal();
    if (openMod) {
      if (e.key === 'Escape') closeModal(openMod);
      else if (e.key === 'Tab') trapFocus(openMod, e);
      return;
    }
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) setMenu(false);
  });

  /* ---------- Contact form -> opens mail client prefilled ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const name = form.elements.name.value.trim();
      const topic = form.elements.topic.value;
      const message = form.elements.message.value.trim();
      const subject = encodeURIComponent('Anfrage: ' + topic + (name ? ' — ' + name : ''));
      const body = encodeURIComponent(message + '\n\n—\n' + name);
      window.location.href = `mailto:info@kiiframes.ch?subject=${subject}&body=${body}`;
    });
  }

  /* ---------- Reveal-on-scroll for cards & gallery ---------- */
  const revealTargets = document.querySelectorAll('.service-card, .gallery-item');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  }

});
