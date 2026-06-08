/* Daily Routines & Habits — main.js */

/* --- Nav scroll --- */
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  lastScroll = y;
}, { passive: true });

/* --- Hamburger menu --- */
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.nav-drawer a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* --- Language toggle --- */
const html = document.documentElement;
const langBtn = document.getElementById('langBtn');

const savedLang = localStorage.getItem('drh-lang') || 'en';
html.lang = savedLang;

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const next = html.lang === 'en' ? 'cs' : 'en';
    html.lang = next;
    localStorage.setItem('drh-lang', next);
    langBtn.textContent = next === 'en' ? 'CZ' : 'EN';
  });
  langBtn.textContent = savedLang === 'en' ? 'CZ' : 'EN';
}

/* --- Scroll reveal --- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px'
});

document.querySelectorAll('.reveal, .reveal-r').forEach(el => revealObserver.observe(el));

/* --- Drag-scroll on screenshot track --- */
const ssScrollEl = document.querySelector('.ss-scroll');
if (ssScrollEl) {
  let isDown = false;
  let startX, scrollLeft;

  ssScrollEl.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - ssScrollEl.offsetLeft;
    scrollLeft = ssScrollEl.scrollLeft;
  });
  ssScrollEl.addEventListener('mouseleave', () => { isDown = false; });
  ssScrollEl.addEventListener('mouseup', () => { isDown = false; });
  ssScrollEl.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ssScrollEl.offsetLeft;
    ssScrollEl.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
}

/* --- FAQ accordion --- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
