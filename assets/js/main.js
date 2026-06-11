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

/* --- Screenshot lightbox --- */
const ssItems = Array.from(document.querySelectorAll('.ss-item'));
if (ssItems.length) {
  const slides = ssItems.map(item => ({
    light: item.querySelector('img').getAttribute('src'),
    dark: (item.querySelector('source') || {}).srcset || '',
    alt: item.querySelector('img').alt,
    label: item.querySelector('.ss-label').innerHTML
  }));

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close preview">
      <svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
    </button>
    <button class="lightbox-arrow lightbox-arrow--prev" aria-label="Previous screenshot">
      <svg viewBox="0 0 24 24"><polyline points="14 6 8 12 14 18"/></svg>
    </button>
    <button class="lightbox-arrow lightbox-arrow--next" aria-label="Next screenshot">
      <svg viewBox="0 0 24 24"><polyline points="10 6 16 12 10 18"/></svg>
    </button>
    <div class="phone phone--zoom">
      <div class="phone-screen">
        <picture>
          <source srcset="" media="(prefers-color-scheme: dark)">
          <img src="" alt="">
        </picture>
      </div>
      <div class="phone-btn phone-btn--vu"></div>
      <div class="phone-btn phone-btn--vd"></div>
      <div class="phone-btn phone-btn--pw"></div>
    </div>
    <p class="lightbox-label"></p>`;
  document.body.appendChild(lb);

  const lbSource = lb.querySelector('source');
  const lbImg = lb.querySelector('img');
  const lbLabel = lb.querySelector('.lightbox-label');
  let current = 0;

  function showSlide(i) {
    current = (i + slides.length) % slides.length;
    const s = slides[current];
    lbSource.srcset = s.dark;
    lbImg.src = s.light;
    lbImg.alt = s.alt;
    lbLabel.innerHTML = s.label;
  }
  function openLightbox(i) {
    showSlide(i);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox-arrow--prev').addEventListener('click', () => showSlide(current - 1));
  lb.querySelector('.lightbox-arrow--next').addEventListener('click', () => showSlide(current + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });

  /* Gallery phones open the lightbox — but not when drag-scrolling the track */
  let downX = 0, downY = 0;
  ssItems.forEach((item, i) => {
    const phone = item.querySelector('.phone');
    phone.classList.add('phone--clickable');
    phone.setAttribute('role', 'button');
    phone.setAttribute('tabindex', '0');
    phone.setAttribute('aria-label', 'Enlarge screenshot');
    phone.addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; });
    phone.addEventListener('click', e => {
      if (Math.abs(e.clientX - downX) > 8 || Math.abs(e.clientY - downY) > 8) return;
      openLightbox(i);
    });
    phone.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
  });

  const heroPhone = document.querySelector('.phone--hero');
  if (heroPhone) {
    heroPhone.classList.add('phone--clickable');
    heroPhone.setAttribute('role', 'button');
    heroPhone.setAttribute('tabindex', '0');
    heroPhone.setAttribute('aria-label', 'Enlarge screenshot');
    heroPhone.addEventListener('click', () => openLightbox(0));
    heroPhone.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(0); }
    });
  }
}
