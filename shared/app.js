/* ============================================================
   app.js — motor compartilhado
   - bloqueio de botões (cadeado)
   - fluxo de verificação: nome -> carregando -> selfie -> envio
   - base de clientes (localStorage)
   ============================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     Armazenamento de clientes / preferências
     --------------------------------------------------------- */
  var STORE_KEY = 'pv_clients_v1';
  var SET_KEY = 'pv_settings_v1';

  function readJSON(key, fb) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fb : v; }
    catch (e) { return fb; }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  function yoga(codes) {
    if (typeof String.prototype.normalize === 'function') {
      return codes.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return codes;
  }
  function norm(s) {
    return yoga(String(s || '')).toUpperCase().replace(/\s+/g, ' ').trim();
  }

  var Store = {
    all: function () { return readJSON(STORE_KEY, {}); },
    list: function (code) { return this.all()[code] || []; },
    add: function (code, nome, email, ref) {
      var db = this.all();
      db[code] = db[code] || [];
      var item = { id: uid(), nome: nome, email: email || '', ref: ref || '', at: Date.now() };
      db[code].push(item);
      writeJSON(STORE_KEY, db);
      return item;
    },
    update: function (code, id, patch) {
      var db = this.all(); var a = db[code] || [];
      for (var i = 0; i < a.length; i++) { if (a[i].id === id) { for (var k in patch) a[i][k] = patch[k]; } }
      writeJSON(STORE_KEY, db);
    },
    remove: function (code, id) {
      var db = this.all();
      db[code] = (db[code] || []).filter(function (x) { return x.id !== id; });
      writeJSON(STORE_KEY, db);
    },
    findByName: function (code, nome) {
      var n = norm(nome), a = this.list(code);
      for (var i = 0; i < a.length; i++) { if (norm(a[i].nome) === n) return a[i]; }
      return null;
    }
  };

  /* ---------------------------------------------------------
     Utilidades
     --------------------------------------------------------- */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function P(code) { return (window.PAISES || {})[code] || null; }
  function baseUrl() { return location.origin + location.pathname.replace(/[^/]*$/, ''); }

  function portalUrl(code, nome) {
    var u = new URL('../' + code + '/index.html', location.href);
    if (nome) u.searchParams.set('nome', nome);
    return u.href;
  }

  function makeRef(code) {
    var y = new Date().getFullYear();
    var n = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
    return code.toUpperCase() + '-' + y + '-' + n;
  }

  /* ---------------------------------------------------------
     Toast (cadeado)
     --------------------------------------------------------- */
  var toastEl = null, toastT = null;
  function toast(msg, ico) {
    var p = P(document.documentElement.getAttribute('data-country'));
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.innerHTML = (ico || '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>') + '<span></span>';
    qs('span', toastEl).textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }

  /* ---------------------------------------------------------
     Sistema de bloqueio: todo botão/link não essencial
     --------------------------------------------------------- */
  function initLocks() {
    qsa('[data-lock]').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        var code = document.documentElement.getAttribute('data-country');
        var p = P(code);
        var txt = (p && p.t.bloqueado) || 'Disponível em breve — botão com cadeado';
        toast(txt);
      });
    });
  }

  /* ---------------------------------------------------------
     Modal genérico
     --------------------------------------------------------- */
  function modal(html, opts) {
    opts = opts || {};
    var existing = qs('.modal');
    if (existing) existing.remove();
    var p = P(document.documentElement.getAttribute('data-country'));
    var wrap = document.createElement('div');
    wrap.className = 'modal';
    wrap.innerHTML =
      '<div class="modal-bg"></div>' +
      '<div class="modal-box" role="dialog" aria-modal="true">' +
        '<div class="modal-head">' +
          (p ? '<img src="' + rel(p.logo) + '" alt="" onerror="this.style.display=\'none\'">' : '') +
          '<div class="mh-txt"><strong>' + (p ? esc(p.portal) : 'Portal') + '</strong><span>' + (p ? esc(p.oficial) : '') + '</span></div>' +
          '<button class="modal-close" aria-label="Fechar">&times;</button>' +
        '</div>' +
        '<div class="modal-body"></div>' +
      '</div>';
    document.body.appendChild(wrap);
    document.documentElement.style.overflow = 'hidden';
    qs('.modal-body', wrap).innerHTML = html;
    function close() { wrap.remove(); document.documentElement.style.overflow = ''; if (opts.onClose) opts.onClose(); }
    qs('.modal-close', wrap).addEventListener('click', close);
    qs('.modal-bg', wrap).addEventListener('click', function () { if (!opts.persistent) close(); });
    return { root: wrap, body: qs('.modal-body', wrap), close: close };
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  /* caminho do logo relativo à pasta do portal */
  function rel(x) { return '../' + x; }

  /* ---------------------------------------------------------
     Fluxo de verificação
     --------------------------------------------------------- */
  function openVerify(code) {
    var p = P(code);
    if (!p) return;
    var prefill = new URLSearchParams(location.search).get('nome') || '';
    var m = modal(stepName(p, prefill));
    bindName(m, p);
  }

  function stepsBar(p, n, total) {
    var out = '<div class="steps">';
    for (var i = 0; i < total; i++) out += '<div class="st' + (i <= n ? ' on' : '') + '"></div>';
    return out + '</div>';
  }

  function stepName(p, prefill) {
    var t = p.t;
    return stepsBar(p, 0, 3) +
      '<h3>' + esc(t.titulo) + '</h3>' +
      '<p class="lead">' + esc(t.lead) + '</p>' +
      '<label class="field" for="pv-nome">' + esc(t.nomeLabel) + '</label>' +
      '<input id="pv-nome" class="input" autocomplete="name" placeholder="' + esc(t.nomeLocal) + '" value="' + esc(prefill) + '">' +
      '<p class="hint" id="pv-hint">' + esc(t.naoRegistrado) + '</p>' +
      '<div style="margin-top:16px"><button class="btn btn-primary" id="pv-go">' + esc(t.continuar) + '</button></div>' +
      '<div class="note">' + '<strong>' + esc(p.portal) + '</strong> · ' + esc(t.oficial) + '</div>';
  }

  function bindName(m, p) {
    var inp = qs('#pv-nome', m.root);
    var hint = qs('#pv-hint', m.root);
    var go = qs('#pv-go', m.root);

    function refresh() {
      var v = inp.value.trim();
      if (v.length < 3) { hint.textContent = p.t.naoRegistrado; return; }
      var found = Store.findByName(p.code, v);
      var hasList = Store.list(p.code).length > 0;
      if (found) hint.textContent = '\u2713 ' + p.t.registrado;
      else if (hasList) hint.textContent = p.t.naoRegistrado;
      else hint.textContent = p.t.naoRegistrado;
    }
    inp.addEventListener('input', refresh);
    refresh();
    go.addEventListener('click', function () {
      var v = inp.value.trim();
      if (v.length < 3) { inp.focus(); inp.style.borderColor = 'var(--err)'; return; }
      runLoader(m, p, v);
    });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go.click(); });
    setTimeout(function () { inp.focus(); }, 60);
  }

  function runLoader(m, p, nome) {
    var t = p.t;
    var msgs = t.carregando;
    m.body.innerHTML = stepsBar(p, 1, 3) +
      '<div class="loader-wrap">' +
        '<div class="spinner"></div>' +
        '<div class="loader-msgs" id="pv-msg">' + esc(msgs[0]) + '</div>' +
        '<div class="progress"><i id="pv-bar"></i></div>' +
        '<div class="loader-pct"><span id="pv-pct">0</span>% · ' + esc(t.titulo) + '</div>' +
      '</div>' +
      '<p class="hint" style="text-align:center">' + esc(nome) + '</p>';

    var total = 10000, start = Date.now();
    var bar = qs('#pv-bar', m.root), pct = qs('#pv-pct', m.root), msg = qs('#pv-msg', m.root);
    var tick = setInterval(function () {
      var el = Date.now() - start;
      var pr = Math.min(100, Math.round(el / total * 100));
      bar.style.width = pr + '%'; pct.textContent = pr;
      var mi = Math.min(msgs.length - 1, Math.floor(el / (total / msgs.length)));
      if (msg.textContent !== msgs[mi]) msg.textContent = msgs[mi];
      if (el >= total) { clearInterval(tick); stepSelfie(m, p, nome); }
    }, 120);
  }

  function stepSelfie(m, p, nome) {
    var t = p.t;
    m.body.innerHTML = stepsBar(p, 2, 3) +
      '<h3>' + esc(t.selfieTitulo) + '</h3>' +
      '<p class="lead">' + esc(t.selfieLead) + '</p>' +
      '<div class="cam" id="pv-cam"><div class="placeholder">' + esc(t.ativarCam) + '</div></div>' +
      '<div class="side-btns">' +
        '<button class="btn btn-ghost" id="pv-cam-on">' + esc(t.ativarCam) + '</button>' +
        '<button class="btn btn-primary" id="pv-shot">' + esc(t.tirar) + '</button>' +
      '</div>' +
      '<ul class="checks">' +
        checkLi('c1', t.checkDir) + checkLi('c2', t.checkEsq) + checkLi('c3', t.checkQual) +
      '</ul>' +
      '<button class="btn btn-primary" id="pv-send" disabled>' + esc(t.enviar) + '</button>';

    var video = null, stream = null, shotData = null;
    var cam = qs('#pv-cam', m.root);

    qs('#pv-cam-on', m.root).addEventListener('click', function () {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { toast(p.t.semCam); return; }
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
        .then(function (s) {
          stream = s;
          cam.innerHTML = '<video autoplay playsinline muted></video><div class="frame"></div>';
          video = qs('video', cam);
          video.srcObject = s;
        })
        .catch(function () { toast(p.t.semCam); simulate(); });
    });

    function simulate() {
      cam.innerHTML = '<canvas width="480" height="360"></canvas><div class="frame"></div>';
      var c = qs('canvas', cam), ctx = c.getContext('2d');
      var g = ctx.createLinearGradient(0, 0, 0, 360); g.addColorStop(0, '#22303c'); g.addColorStop(1, '#0c0f12');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 480, 360);
      ctx.fillStyle = '#c9ced4'; ctx.font = '16px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('SIMULAÇÃO DE CÂMERA', 240, 190);
      shotData = c.toDataURL('image/png');
    }

    qs('#pv-shot', m.root).addEventListener('click', function () {
      if (video) {
        var c = document.createElement('canvas');
        c.width = video.videoWidth || 480; c.height = video.videoHeight || 360;
        c.getContext('2d').drawImage(video, 0, 0, c.width, c.height);
        shotData = c.toDataURL('image/png');
      } else if (!shotData) { simulate(); }
      cam.innerHTML = '<img alt="selfie" src="' + shotData + '">';
      markAll();
    });

    function markAll() {
      ['c1', 'c2', 'c3'].forEach(function (id, i) {
        setTimeout(function () { var li = qs('#' + id, m.root); if (li) { li.classList.add('done'); qs('.tick', li).innerHTML = '\u2713'; } }, i * 520);
      });
      setTimeout(function () { qs('#pv-send', m.root).disabled = false; }, 1700);
    }

    qs('#pv-send', m.root).addEventListener('click', function () { stepDone(m, p, nome, shotData); });
  }

  function checkLi(id, arr) {
    return '<li id="' + id + '"><span class="tick"></span><span class="txt">' + esc(arr[0]) + '<small>' + esc(arr[1]) + '</small></span></li>';
  }

  function stepDone(m, p, nome, shot) {
    var t = p.t;
    var ref = makeRef(p.code);
    var existing = Store.findByName(p.code, nome);
    if (existing) { ref = existing.ref || ref; Store.update(p.code, existing.id, { ref: ref }); }
    else { Store.add(p.code, nome, '', ref); }

    m.body.innerHTML = stepsBar(p, 3, 3) +
      '<div class="success">' +
        '<div class="badge">\u2713</div>' +
        '<h3>' + esc(t.sucessoTitulo) + '</h3>' +
        '<p class="lead" style="margin:0 auto 6px;max-width:380px">' + esc(t.sucessoTexto) + '</p>' +
        '<div class="proto">' + esc(t.ref) + ': ' + esc(ref) + '</div>' +
        (shot ? '<div><img src="' + shot + '" alt="" style="width:88px;height:88px;object-fit:cover;border-radius:50%;border:1px solid var(--line)"></div>' : '') +
        '<div class="note" style="text-align:left"><strong>' + esc(nome) + '</strong><br>' + esc(p.oficial) + '</div>' +
        '<div style="margin-top:18px"><button class="btn btn-primary" id="pv-close">' + esc(t.fechar) + '</button></div>' +
      '</div>';
    qs('#pv-close', m.root).addEventListener('click', m.close);
  }

  /* ---------------------------------------------------------
     API pública
     --------------------------------------------------------- */
  window.PV = {
    open: openVerify,
    Store: Store,
    norm: norm,
    uid: uid,
    modal: modal,
    toast: toast,
    esc: esc,
    portalUrl: portalUrl,
    makeRef: makeRef,
    P: P,
    init: function () {
      initLocks();
      var code = document.documentElement.getAttribute('data-country');
      qsa('[data-verify]').forEach(function (b) {
        b.addEventListener('click', function (e) { e.preventDefault(); openVerify(code || b.getAttribute('data-verify')); });
      });
      var auto = new URLSearchParams(location.search).get('verificar');
      if (auto === '1') setTimeout(function () { openVerify(code); }, 500);
    }
  };

  function boot() { window.PV.init(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 0); });
  else setTimeout(boot, 0);
})();
