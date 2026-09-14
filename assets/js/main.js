/* ============================================================
   START AMÉRICA — interações da landing page
   Menu mobile · FAQ accordion · footer accordion · carrosséis
   · seletor de idioma · reveal on scroll · validação de formulário
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Vídeo de fundo: respeita prefers-reduced-motion ---------- */
  if (reduceMotion) {
    document.querySelectorAll('video[autoplay]').forEach(function (v) {
      v.removeAttribute('autoplay');
      v.addEventListener('loadedmetadata', function () { try { v.pause(); } catch (e) {} });
      try { v.pause(); } catch (e) {}
    });
  }

  /* ---------- Fallback de imagens ausentes (somente até anexar os arquivos) ---------- */
  function markBroken(img) {
    if (img.classList.contains('photo-section__bg')) return; // esse se auto-remove
    if (img.getAttribute('src') && img.complete && img.naturalWidth === 0) {
      img.classList.add('img-fallback');
    }
  }
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () { markBroken(img); });
    markBroken(img);
  });
  window.addEventListener('load', function () {
    document.querySelectorAll('img').forEach(markBroken);
  });

  /* ---------- Ano do rodapé ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: transparente sobre o hero, sólido após passar dele ---------- */
  var header = document.querySelector('.site-header');
  var heroEl = document.querySelector('.hero');
  var menuForcesSolid = false;
  function updateHeader() {
    if (!header) return;
    var solid;
    if (menuForcesSolid) {
      solid = true;
    } else if (heroEl && header.classList.contains('site-header--overlay')) {
      solid = heroEl.getBoundingClientRect().bottom <= header.offsetHeight + 1;
    } else {
      solid = window.scrollY > 8;
    }
    header.classList.toggle('is-scrolled', solid);
  }
  if (header) {
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);
  }

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !open);
      document.body.style.overflow = !open && window.matchMedia('(max-width: 1119px)').matches ? 'hidden' : '';
      menuForcesSolid = !open;
      updateHeader();
    });

    // fecha ao clicar num link ou fora
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1119) closeNav();
    });
  }
  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
    menuForcesSolid = false;
    updateHeader();
  }

  /* ---------- Seletor de idioma: tratado em assets/js/i18n.js ---------- */
  var tr = function (s) { return (typeof window.saT === 'function') ? window.saT(s) : s; };

  /* ---------- FAQ accordion (acessível) ---------- */
  var faq = document.querySelector('[data-faq]');
  if (faq) {
    var triggers = faq.querySelectorAll('.faq__trigger');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.hidden = open;
      });
    });
  }

  /* ---------- Footer accordion (somente mobile) ---------- */
  var footerToggles = document.querySelectorAll('.footer-col__toggle');
  footerToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!window.matchMedia('(max-width: 767px)').matches) return;
      var list = btn.parentElement.querySelector('ul');
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (list) list.classList.toggle('is-open', !open);
    });
  });

  /* ---------- Carrosséis mobile: aplica classe .snap-scroller ---------- */
  var snapGroups = document.querySelectorAll('[data-snap-mobile]');
  var mqMobile = window.matchMedia('(max-width: 767px)');
  function applySnap() {
    snapGroups.forEach(function (group) {
      group.classList.toggle('snap-scroller', mqMobile.matches);
    });
  }
  applySnap();
  mqMobile.addEventListener('change', applySnap);

  /* ---------- Carrossel de imagens (setas laterais, loop opcional) ---------- */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var viewport = root.querySelector('[data-carousel-viewport]');
    var track = root.querySelector('[data-carousel-track]');
    var prevBtn = root.querySelector('[data-carousel-prev]');
    var nextBtn = root.querySelector('[data-carousel-next]');
    if (!viewport || !track || !prevBtn || !nextBtn) return;

    var loop = root.hasAttribute('data-carousel-loop');
    var autoplayDelay = parseInt(root.getAttribute('data-carousel-autoplay'), 10);
    var autoplayTimer = null;

    function slideStep() {
      var slide = track.querySelector('.location-carousel__slide');
      if (!slide) return viewport.clientWidth;
      var style = window.getComputedStyle(track);
      var gap = parseFloat(style.columnGap || style.gap || '0') || 0;
      return slide.getBoundingClientRect().width + gap;
    }

    var EDGE_TOLERANCE = 4; // margem p/ evitar travar por arredondamento sub-pixel

    function maxScroll() {
      return viewport.scrollWidth - viewport.clientWidth;
    }

    function goNext() {
      if (viewport.scrollLeft >= maxScroll() - EDGE_TOLERANCE) {
        viewport.scrollTo({ left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      } else {
        viewport.scrollBy({ left: slideStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
    function goPrev() {
      if (viewport.scrollLeft <= EDGE_TOLERANCE) {
        viewport.scrollTo({ left: maxScroll(), behavior: reduceMotion ? 'auto' : 'smooth' });
      } else {
        viewport.scrollBy({ left: -slideStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }

    function updateArrows() {
      if (loop) return; // setas sempre ativas — o carrossel dá a volta
      var max = maxScroll();
      prevBtn.disabled = viewport.scrollLeft <= 0;
      nextBtn.disabled = viewport.scrollLeft >= max;
    }

    function stopAutoplay() { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }
    function startAutoplay() {
      if (!autoplayDelay || reduceMotion) return;
      stopAutoplay();
      autoplayTimer = setInterval(goNext, autoplayDelay);
    }

    prevBtn.addEventListener('click', function () { goPrev(); startAutoplay(); });
    nextBtn.addEventListener('click', function () { goNext(); startAutoplay(); });

    if (autoplayDelay) {
      root.addEventListener('mouseenter', stopAutoplay);
      root.addEventListener('mouseleave', startAutoplay);
      root.addEventListener('focusin', stopAutoplay);
      root.addEventListener('focusout', startAutoplay);
      startAutoplay();
    }

    viewport.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Validação do formulário de contato ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var statusEl = document.getElementById('form-status');
    var submitBtn = document.getElementById('contact-submit');

    var validators = {
      nome: function (v) { return v.trim().length >= 2 || tr('Informe seu nome completo.'); },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || tr('Informe um e-mail válido.'); },
      telefone: function (v) { return v.replace(/\D/g, '').length >= 10 || tr('Informe um telefone válido com DDD.'); }
    };

    function validateField(input) {
      var name = input.name;
      var fieldWrap = input.closest('.field');
      var errEl = form.querySelector('[data-error-for="' + input.id + '"]');
      var result = true;

      if (input.hasAttribute('required') && !input.value.trim()) {
        result = tr('Campo obrigatório.');
      } else if (validators[name] && input.value.trim()) {
        result = validators[name](input.value);
      }

      if (result === true) {
        fieldWrap.classList.remove('has-error');
        if (errEl) errEl.textContent = '';
        input.removeAttribute('aria-invalid');
        return true;
      }
      fieldWrap.classList.add('has-error');
      if (errEl) errEl.textContent = result;
      input.setAttribute('aria-invalid', 'true');
      return false;
    }

    form.querySelectorAll('input, select').forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('has-error')) validateField(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      statusEl.className = 'form-status';
      statusEl.textContent = '';

      var fields = Array.prototype.slice.call(form.querySelectorAll('input, select'));
      var firstInvalid = null;
      var allValid = true;
      fields.forEach(function (input) {
        var ok = validateField(input);
        if (!ok && !firstInvalid) firstInvalid = input;
        if (!ok) allValid = false;
      });

      if (!allValid) {
        statusEl.className = 'form-status is-error';
        statusEl.textContent = tr('Revise os campos destacados e tente novamente.');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Estado de carregamento
      submitBtn.setAttribute('data-loading', 'true');
      submitBtn.disabled = true;
      statusEl.textContent = tr('Enviando…');

      // Simulação de envio — integrar com o endpoint real depois
      setTimeout(function () {
        submitBtn.removeAttribute('data-loading');
        submitBtn.disabled = false;
        form.reset();
        statusEl.className = 'form-status is-success';
        statusEl.textContent = tr('Recebemos seu contato. Um especialista falará com você em breve.');
      }, 1400);
    });
  }
})();
