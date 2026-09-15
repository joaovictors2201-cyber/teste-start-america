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

  /* ---------- Linha do tempo: a linha "cresce" conforme a seção passa pela tela ---------- */
  var timelineEl = document.querySelector('[data-timeline]');
  if (timelineEl) {
    var timelineFill = timelineEl.querySelector('[data-timeline-fill]');
    if (reduceMotion) {
      timelineFill.style.height = '100%';
    } else {
      var timelineTicking = false;
      var updateTimelineFill = function () {
        timelineTicking = false;
        var rect = timelineEl.getBoundingClientRect();
        var triggerStart = window.innerHeight * 0.75;
        var pct = (triggerStart - rect.top) / rect.height;
        pct = Math.max(0, Math.min(1, pct));
        timelineFill.style.height = (pct * 100) + '%';
      };
      var requestTimelineUpdate = function () {
        if (!timelineTicking) {
          timelineTicking = true;
          window.requestAnimationFrame(updateTimelineFill);
        }
      };
      updateTimelineFill();
      window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
      window.addEventListener('resize', requestTimelineUpdate);
    }
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

  /* ---------- Modal genérico (usado pela calculadora e outros pop-ups) ---------- */
  function openModal(modal) {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var firstField = modal.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', function () { closeModal(modal); });
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal:not([hidden])').forEach(function (m) { closeModal(m); });
    }
  });

  /* ---------- Calculadora de impacto tributário ---------- */
  function formatBRNumber(n) { return Math.round(n).toLocaleString('pt-BR'); }
  function formatBRCurrency(n) { return 'R$ ' + formatBRNumber(n); }

  var taxCalc = document.querySelector('[data-tax-calc]');
  if (taxCalc) {
    var regimeBtns = taxCalc.querySelectorAll('[data-regime]');
    var segmentoSel = taxCalc.querySelector('[data-segmento]');
    var faturamentoInput = taxCalc.querySelector('[data-faturamento]');
    var faturamentoOut = taxCalc.querySelector('[data-faturamento-out]');
    var estimarBtn = taxCalc.querySelector('[data-tax-calc-submit]');
    var resultBox = taxCalc.querySelector('[data-tax-calc-result]');
    var resultValue = taxCalc.querySelector('[data-result-value]');
    var taxEmailBtn = taxCalc.querySelector('[data-tax-calc-email]');
    var currentRegime = 'real';

    // Taxas indicativas de impacto (fração do faturamento anual) por segmento,
    // ajustadas pelo regime tributário — apenas para a estimativa do pré-diagnóstico.
    var baseRates = { industria: 0.0076, comercio: 0.009, servicos: 0.014, tecnologia: 0.012 };
    var regimeMultiplier = { real: 1, presumido: 1.22 };

    function hideResult() { if (resultBox) resultBox.hidden = true; }

    function updateRangeProgress() {
      if (!faturamentoInput) return;
      var min = parseFloat(faturamentoInput.min) || 0;
      var max = parseFloat(faturamentoInput.max) || 100;
      var val = parseFloat(faturamentoInput.value) || 0;
      var pct = ((val - min) / (max - min)) * 100;
      faturamentoInput.style.setProperty('--range-progress', pct + '%');
    }
    function updateFaturamentoOut() {
      if (!faturamentoInput || !faturamentoOut) return;
      faturamentoOut.textContent = formatBRNumber(faturamentoInput.value);
      updateRangeProgress();
    }

    regimeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        regimeBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        currentRegime = btn.getAttribute('data-regime');
        hideResult();
      });
    });

    if (faturamentoInput) {
      faturamentoInput.addEventListener('input', function () { updateFaturamentoOut(); hideResult(); });
      updateFaturamentoOut();
    }
    if (segmentoSel) {
      segmentoSel.addEventListener('change', hideResult);
    }

    if (estimarBtn) {
      estimarBtn.addEventListener('click', function () {
        var faturamento = parseFloat(faturamentoInput.value) || 0;
        var segmento = segmentoSel.value;
        var rate = (baseRates[segmento] || 0.01) * (regimeMultiplier[currentRegime] || 1);
        var impact = faturamento * rate;
        if (resultValue) resultValue.textContent = formatBRCurrency(impact) + ' / ano';
        if (resultBox) resultBox.hidden = false;
      });
    }

    if (taxEmailBtn) {
      taxEmailBtn.addEventListener('click', function () {
        openModal(document.getElementById('tax-calc-modal'));
      });
    }
  }

  /* ---------- Pop-up: receber resultado da calculadora por e-mail ---------- */
  var taxEmailForm = document.getElementById('tax-calc-email-form');
  if (taxEmailForm) {
    var taxEmailStatus = document.getElementById('tc-email-status');
    var taxEmailSubmitBtn = document.getElementById('tax-calc-email-submit');
    var taxEmailValidators = {
      nome: function (v) { return v.trim().length >= 2 || tr('Informe seu nome completo.'); },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || tr('Informe um e-mail válido.'); }
    };
    function validateTaxEmailField(input) {
      var fieldWrap = input.closest('.field');
      var errEl = taxEmailForm.querySelector('[data-error-for="' + input.id + '"]');
      var result = true;
      if (input.hasAttribute('required') && !input.value.trim()) {
        result = tr('Campo obrigatório.');
      } else if (taxEmailValidators[input.name] && input.value.trim()) {
        result = taxEmailValidators[input.name](input.value);
      }
      if (result === true) {
        fieldWrap.classList.remove('has-error');
        if (errEl) errEl.textContent = '';
        return true;
      }
      fieldWrap.classList.add('has-error');
      if (errEl) errEl.textContent = result;
      return false;
    }
    taxEmailForm.querySelectorAll('input').forEach(function (input) {
      input.addEventListener('blur', function () { validateTaxEmailField(input); });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('has-error')) validateTaxEmailField(input);
      });
    });
    taxEmailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = Array.prototype.slice.call(taxEmailForm.querySelectorAll('input'));
      var allValid = true, firstInvalid = null;
      fields.forEach(function (input) {
        var ok = validateTaxEmailField(input);
        if (!ok && !firstInvalid) firstInvalid = input;
        if (!ok) allValid = false;
      });
      if (!allValid) {
        taxEmailStatus.className = 'form-status is-error';
        taxEmailStatus.textContent = tr('Revise os campos destacados e tente novamente.');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      taxEmailSubmitBtn.setAttribute('data-loading', 'true');
      taxEmailSubmitBtn.disabled = true;
      taxEmailStatus.className = 'form-status';
      taxEmailStatus.textContent = tr('Enviando…');
      setTimeout(function () {
        taxEmailSubmitBtn.removeAttribute('data-loading');
        taxEmailSubmitBtn.disabled = false;
        taxEmailForm.reset();
        taxEmailStatus.className = 'form-status is-success';
        taxEmailStatus.textContent = tr('Pronto! Enviamos o resultado para o seu e-mail.');
        setTimeout(function () { closeModal(document.getElementById('tax-calc-modal')); }, 1600);
      }, 1200);
    });
  }

  /* ---------- Formulário Seja Parceiro / Indique ---------- */
  var partnerFormRoot = document.querySelector('[data-partner-form]');
  if (partnerFormRoot) {
    var partnerModeBtns = partnerFormRoot.querySelectorAll('[data-partner-mode]');
    var partnerFields = document.querySelectorAll('[data-partner-field]');
    var partnerSubmitLabel = partnerFormRoot.querySelector('[data-partner-submit-label]');
    var indicadoNomeInput = document.getElementById('pf-ind-nome');

    var partnerLabels = {
      parceiro: 'Quero me tornar um Parceiro Oficial',
      indicar: 'Quero enviar minha indicação'
    };

    function setPartnerMode(mode) {
      partnerModeBtns.forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-partner-mode') === mode);
      });
      partnerFields.forEach(function (field) {
        var isMatch = field.getAttribute('data-partner-field') === mode;
        field.hidden = !isMatch;
      });
      if (indicadoNomeInput) {
        if (mode === 'indicar') indicadoNomeInput.setAttribute('required', 'required');
        else indicadoNomeInput.removeAttribute('required');
      }
      if (partnerSubmitLabel) partnerSubmitLabel.textContent = partnerLabels[mode] || partnerLabels.parceiro;
    }

    partnerModeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { setPartnerMode(btn.getAttribute('data-partner-mode')); });
    });

    // Botões espalhados pela página que já chegam com um modo pré-selecionado
    // (ex.: "Indicação Bronze" abre no modo indicar; "Seja um Parceiro Oficial" no modo parceiro)
    document.querySelectorAll('[data-partner-preset]').forEach(function (link) {
      link.addEventListener('click', function () { setPartnerMode(link.getAttribute('data-partner-preset')); });
    });

    setPartnerMode('parceiro');

    var partnerForm = document.getElementById('partner-form-fields');
    if (partnerForm) {
      var partnerStatus = document.getElementById('partner-form-status');
      var partnerSubmitBtn = document.getElementById('partner-form-submit');
      var partnerValidators = {
        nome: function (v) { return v.trim().length >= 2 || tr('Informe seu nome completo.'); },
        email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || tr('Informe um e-mail válido.'); },
        telefone: function (v) { return v.replace(/\D/g, '').length >= 10 || tr('Informe um telefone válido com DDD.'); },
        indicado_nome: function (v) { return v.trim().length >= 2 || tr('Informe o nome do indicado.'); }
      };
      function validatePartnerField(input) {
        var fieldWrap = input.closest('.field');
        if (fieldWrap.hidden) return true;
        var errEl = partnerForm.querySelector('[data-error-for="' + input.id + '"]');
        var result = true;
        if (input.hasAttribute('required') && !input.value.trim()) {
          result = tr('Campo obrigatório.');
        } else if (partnerValidators[input.name] && input.value.trim()) {
          result = partnerValidators[input.name](input.value);
        }
        if (result === true) {
          fieldWrap.classList.remove('has-error');
          if (errEl) errEl.textContent = '';
          return true;
        }
        fieldWrap.classList.add('has-error');
        if (errEl) errEl.textContent = result;
        return false;
      }
      partnerForm.querySelectorAll('input, select').forEach(function (input) {
        input.addEventListener('blur', function () { validatePartnerField(input); });
        input.addEventListener('input', function () {
          if (input.closest('.field').classList.contains('has-error')) validatePartnerField(input);
        });
      });
      partnerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        partnerStatus.className = 'form-status';
        partnerStatus.textContent = '';
        var fields = Array.prototype.slice.call(partnerForm.querySelectorAll('input, select')).filter(function (input) {
          return !input.closest('.field').hidden;
        });
        var allValid = true, firstInvalid = null;
        fields.forEach(function (input) {
          var ok = validatePartnerField(input);
          if (!ok && !firstInvalid) firstInvalid = input;
          if (!ok) allValid = false;
        });
        if (!allValid) {
          partnerStatus.className = 'form-status is-error';
          partnerStatus.textContent = tr('Revise os campos destacados e tente novamente.');
          if (firstInvalid) firstInvalid.focus();
          return;
        }
        partnerSubmitBtn.setAttribute('data-loading', 'true');
        partnerSubmitBtn.disabled = true;
        partnerStatus.textContent = tr('Enviando…');
        setTimeout(function () {
          partnerSubmitBtn.removeAttribute('data-loading');
          partnerSubmitBtn.disabled = false;
          var modeToKeep = partnerFormRoot.querySelector('.tax-calc__toggle-btn.is-active').getAttribute('data-partner-mode');
          partnerForm.reset();
          setPartnerMode(modeToKeep);
          partnerStatus.className = 'form-status is-success';
          partnerStatus.textContent = tr('Recebemos sua solicitação. Nosso time falará com você em breve.');
        }, 1400);
      });
    }
  }
})();
