/* ============================================================
   portal.js — monta a "cara" clonada do portal de governo
   a partir de window.PAISES[data-country]. Todos os botões
   fora do fluxo de verificação recebem o cadeado ([data-lock]).
   ============================================================ */
(function () {
  'use strict';
  var code = document.documentElement.getAttribute('data-country');
  var p = (window.PAISES || {})[code];
  if (!p) return;
  var rel = function (x) { return '../' + x; };

  var lockIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  var chev = '<span class="chev" aria-hidden="true">&rsaquo;</span>';

  function header() {
    return '' +
    '<div class="gov-bar"><div class="wrap">' +
      '<div class="gov-bar-left">' +
        '<span>' + esc(p.barra[0]) + '</span><span class="dot"></span><span>' + esc(p.barra[1]) + '</span>' +
      '</div>' +
      '<div class="gov-bar-left"><a href="#" data-lock>' + esc(p.barra[2] || '') + '</a><span class="dot"></span><a href="#" data-lock>' + esc(p.t.oficial) + '</a></div>' +
    '</div></div>' +
    '<header class="header"><div class="wrap">' +
      '<a class="brand" href="#" data-lock>' +
        '<img src="' + rel(p.logo) + '" alt="' + esc(p.portal) + '" onerror="this.style.visibility=\'hidden\'">' +
        '<span class="brand-txt"><strong>' + esc(p.portal) + '</strong><span>' + esc(p.portalSub) + '</span></span>' +
      '</a>' +
      '<nav class="nav">' + p.nav.map(function (n) { return '<a href="#" data-lock>' + esc(n) + '</a>'; }).join('') + '</nav>' +
      '<div class="search-min" data-lock><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg><span>' + esc(p.busca) + '</span></div>' +
      '<button class="menu-btn" data-lock aria-label="Menu">&#9776;</button>' +
    '</div></header>';
  }

  function hero() {
    return '' +
    '<section class="hero hero-light">' +
      '<div class="wrap">' +
        '<span class="eyebrow">' + esc(p.barra[0]) + '</span>' +
        '<h1>' + esc(p.heroTitulo) + '</h1>' +
        '<p>' + esc(p.heroSub) + '</p>' +
        '<div class="searchbox" data-lock><input readonly placeholder="' + esc(p.busca) + '"><button tabindex="-1">' + esc(p.nav[2] || 'Pesquisar') + '</button></div>' +
        '<button class="hero-verify" data-verify>' + lockIcon + '<span>' + esc(p.t.botao) + '</span></button>' +
      '</div>' +
    '</section>' +
    '<div class="lock-strip"><div class="wrap">' + lockIcon +
      '<span>' + esc(p.t.bloqueado) + '</span>' +
      '<span style="margin-left:auto">' + esc(p.oficial) + '</span>' +
    '</div></div>';
  }

  function sections() {
    return p.secoes.map(function (s) {
      if (s.cards) {
        return '<section class="section"><div class="wrap">' +
          '<h2>' + esc(s.t) + '</h2><p class="sub">' + esc(s.s) + '</p>' +
          '<div class="grid c4">' + s.cards.map(function (c) {
            return '<article class="card" data-lock><span class="tag">' + esc(c.tag) + '</span><h3>' + esc(c.t) + '</h3><p>' + esc(c.p) + '</p></article>';
          }).join('') + '</div>' +
        '</div></section>';
      }
      return '<section class="section tight"><div class="wrap">' +
        '<h2>' + esc(s.t) + '</h2><p class="sub">' + esc(s.s) + '</p>' +
        '<div class="grid c2"><ul class="links-list">' + s.lista.slice(0, Math.ceil(s.lista.length / 2)).map(function (l) {
          return '<li><a href="#" data-lock>' + esc(l) + chev + '</a></li>';
        }).join('') + '</ul><ul class="links-list">' + s.lista.slice(Math.ceil(s.lista.length / 2)).map(function (l) {
          return '<li><a href="#" data-lock>' + esc(l) + chev + '</a></li>';
        }).join('') + '</ul></div>' +
      '</div></section>';
    }).join('');
  }

  function footer() {
    return '<footer class="footer"><div class="wrap">' +
      '<div class="foot-logos"><img src="' + rel(p.logo) + '" alt="" onerror="this.style.display=\'none\'"><strong>' + esc(p.portal) + '</strong></div>' +
      '<div class="cols">' + p.rodape.map(function (c) {
        return '<div><h4>' + esc(c.h) + '</h4><ul>' + c.l.map(function (l) { return '<li><a href="#" data-lock>' + esc(l) + '</a></li>'; }).join('') + '</ul></div>';
      }).join('') + '</div>' +
      '<div class="foot-bottom"><span>&copy; ' + new Date().getFullYear() + ' ' + esc(p.oficial) + '</span><span>' + esc(p.t.oficial) + '</span></div>' +
    '</div></footer>';
  }

  function cta() {
    return '<div class="verify-cta">' +
      '<button class="verify-btn" data-verify>' + lockIcon + '<span class="pulse"></span><span>' + esc(p.t.botao) + '</span></button>' +
    '</div>';
  }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  function render() {
    var mount = document.getElementById('app');
    if (!mount) return;
    mount.innerHTML = header() + '<main id="conteudo">' + hero() + sections() + '</main>' + footer() + cta();
    document.title = p.portal + ' — ' + p.oficial;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
