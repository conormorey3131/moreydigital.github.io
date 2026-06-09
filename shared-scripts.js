// =====================================================================
// Morey Digital — shared scripts
// Nav toggle · sticky-header state · scroll reveal · footer year
// =====================================================================
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile nav toggle ---
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open && window.innerWidth < 860 ? 'hidden' : '';
      });
      // Close menu when a link is tapped
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
      // Reset on resize to desktop
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 860) {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }

    // --- Sticky-header shadow on scroll ---
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // --- Scroll reveal ---
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(function (el) { io.observe(el); });
      } else {
        reveals.forEach(function (el) { el.classList.add('in'); });
      }
    }

    // --- Auto-update footer year ---
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
