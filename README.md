# paineleuropa

Painel de verificação + 15 portais de governo clonados (visual, língua e fluxo de verificação próprios).

## Como funciona

1. Abra `index.html` (painel mãe). Há uma aba por país.
2. Cadastre o cliente com nome completo. O painel gera um link no formato
   `<país>/index.html?nome=<nome>&verificar=1` e copia para a área de transferência.
3. No portal, o fluxo é: nome → verificação (loader) → selfie → confirmação com referência.
   Só nomes cadastrados no painel são reconhecidos.
4. `admin.html` permite editar, copiar link, enviar e-mail, exportar/importar backup e excluir.

Os dados dos clientes ficam em `localStorage` do navegador. Todo botão fora do fluxo de
verificação abre um aviso de "disponível em breve" (cadeado).

## Estrutura

- `index.html` — painel mãe (abas por país, cadastro, link, pré-visualização de e-mail)
- `admin.html` — gestão de clientes
- `<país>/index.html` — portal clonado (gerado por `generate.py`)
- `shared/config.js` — dados e textos de cada portal
- `shared/mail.js` — modelos de e-mail por idioma
- `shared/portal.js` — monta a página do portal
- `shared/app.js` — motor do fluxo de verificação e armazenamento
- `shared/panel.js` / `shared/admin.js` — painel e gestão
- `shared/style.css` — estilos e temas por país
- `assets/logos/` — emblemas oficiais

## Portais

| Código | País | Portal | Idioma |
| --- | --- | --- | --- |
| pt | Portugal | gov.pt | pt |
| es | Espanha | administracion.gob.es | es |
| fr | França | service-public.gouv.fr | fr |
| de | Alemanha | BundesPortal | de |
| it | Itália | Governo Italiano | it |
| ie | Irlanda | gov.ie | en |
| be | Bélgica | belgium.be | en |
| at | Áustria | oesterreich.gv.at | de |
| ch | Suíça | ch.ch | de |
| nl | Países Baixos | Rijksoverheid.nl | nl |
| lu | Luxemburgo | Guichet.lu | fr |
| cz | Chéquia | gov.cz | cs |
| pl | Polônia | gov.pl | pl |
| si | Eslovênia | gov.si | sl |
| hr | Croácia | gov.hr | hr |

## Adicionar um país

1. Crie o bloco em `shared/config.js` (chave = código de 2 letras).
2. Adicione o tema em `shared/style.css` (`[data-country="xx"]`).
3. Adicione o modelo de e-mail em `shared/mail.js` e o mapeamento em `window.PVMAIL_LANG`.
4. Inclua código, idioma, nome do portal e favicon em `generate.py` e rode `python3 generate.py`.
5. Coloque o emblema em `assets/logos/`.
