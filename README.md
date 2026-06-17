# KIIFRAMES — Website

Sportfotografie, Matchday-Design und Football Presets aus Basel.

## Was ist drin?

- `index.html` — die ganze Seite (Struktur & Inhalt)
- `styles.css` — Design, Farben, Glass-/Blur-Hover-Effekte
- `script.js` — Modals, Lightbox, Navbar, Mobile-Menü, Kontaktformular
- `images/` — alle Fotos

## Diese Version (von Grund auf neu) — was verbessert wurde

- **SEO & Social-Vorschau:** Open-Graph- & Twitter-Tags (Link-Vorschau auf Insta/TikTok/WhatsApp), Favicon, `ProfessionalService`-Structured-Data für lokale Google-Sichtbarkeit in Basel.
- **Accessibility:** Skip-Link, `role="dialog"` + Focus-Trap in Modals & Lightbox, `aria-expanded` am Menü-Button, Touch-Targets ≥ 44px.
- **Performance:** Hero-Bild mit `preload` + `fetchpriority`, `loading="lazy"` und `decoding="async"` auf allen weiteren Bildern.
- **Konsistenz:** Sektionen durchnummeriert 01–05.
- **Kontakt:** Schlankes Formular, das das Mail-Programm vorausgefüllt öffnet (kein Backend nötig) — plus direkter `mailto:`-Link.

## Anpassen

**E-Mail-Adresse:** Überall steht `hello@kiiframes.ch`. Suche & ersetze es in `index.html`
(auch in den `<meta>`-Tags und im Structured-Data-Block oben).

**Domain in den Meta-Tags:** Die OG-/Canonical-URLs zeigen auf `https://kiiframes.ch/`.
Sobald du deine echte Domain hast, dort anpassen.

**Texte/Preise:** Alles steht direkt lesbar in `index.html` — Text ändern, speichern, fertig.

**Football Presets Checkout:** Der „Jetzt sichern"-Button öffnet ein Modal mit Mail-Bestellung.
Sobald du einen Anbieter hast (Gumroad, Lemon Squeezy, Stripe Payment Links), ersetzt du im
Modal `modal-presets-buy` den Mail-Link durch den Checkout-Link.

## Hosting (kostenlos)

**Netlify:** Account erstellen → Ordner per Drag & Drop auf netlify.com ziehen → Live-URL.

**GitHub Pages:** Dateien in ein Repo laden → Settings → Pages → Branch wählen → Speichern.

**Eigener Hoster:** Alle Dateien per FTP in `public_html` hochladen.

## Optional: nächster Performance-Schritt

Die Fotos sind JPGs (~7 MB gesamt). Für noch schnelleres Laden könntest du sie zusätzlich
als WebP exportieren — das spart oft 60–70 % Dateigrösse bei gleicher Qualität.
