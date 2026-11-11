#!/usr/bin/env python3
"""Gera as 7 páginas HTML dos portais clonados a partir de um template."""
import os

LANGS = {
    'pt': 'pt-PT', 'es': 'es-ES', 'fr': 'fr-FR', 'de': 'de-DE',
    'it': 'it-IT', 'ie': 'en-IE', 'be': 'en-BE',
}
NOMES = {
    'pt': ('gov.pt', 'Portal do Cidadão'),
    'es': ('administracion.gob.es', 'Punto de Acceso General'),
    'fr': ('service-public.gouv.fr', "L'administration française"),
    'de': ('BundesPortal', 'verwaltung.bund.de'),
    'it': ('Governo Italiano', 'Presidenza del Consiglio dei Ministri'),
    'ie': ('gov.ie', 'Government of Ireland'),
    'be': ('belgium.be', 'Official portal of Belgium'),
}

TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}" data-country="{code}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="{cor}">
  <meta name="description" content="{portal} — {subtitulo}">
  <title>{portal} — {subtitulo}</title>
  <link rel="icon" href="../assets/logos/{favicon}">
  <link rel="stylesheet" href="../shared/style.css">
</head>
<body>
  <div id="app"></div>
  <script src="../shared/config.js"></script>
  <script src="../shared/app.js"></script>
  <script src="../shared/portal.js"></script>
</body>
</html>
"""

base = os.path.dirname(os.path.abspath(__file__))
for code, lang in LANGS.items():
    portal, sub = NOMES[code]
    cor = {'pt':'#034AD8','es':'#0B4EA2','fr':'#000091','de':'#1d1d1b','it':'#0066cc','ie':'#111827','be':'#1d1d1b'}[code]
    favicon = {'pt':'gov_pt.svg','es':'gob_es.png','fr':'gouv_fr_rf.svg','de':'bund_de.svg',
               'it':'governo_it.svg','ie':'gov_ie.svg','be':'belgium_be.svg'}[code]
    html = TEMPLATE.format(lang=lang, code=code, cor=cor, portal=portal,
                           subtitulo=sub, favicon=favicon)
    path = os.path.join(base, code, 'index.html')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('gerado:', path)
print('OK')
