// ============================================
// KIIFRAMES — Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

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
      window.location.href = `mailto:hello@kiiframes.ch?subject=${subject}&body=${body}`;
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
