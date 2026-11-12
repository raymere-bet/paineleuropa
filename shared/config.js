/* ============================================================
   Configuração dos 15 portais (dados + textos nativos)
   Cada portal clona a "cara" de um site oficial, em sua língua.
   ============================================================ */
window.PAISES = {
  pt: {
    code:'pt', bandeira:'\u{1F1F5}\u{1F1F9}', nome:'Portugal',
    site:'https://www.gov.pt/', oficial:'gov.pt · República Portuguesa',
    logo:'assets/logos/gov_pt.svg', cor:'#034AD8',
    barra:[ 'República Portuguesa', 'Serviços digitais', 'Acessibilidade' ],
    portal:'gov.pt', portalSub:'Portal do Cidadão',
    heroTitulo:'Bem-vindo ao gov.pt',
    heroSub:'O ponto de acesso único aos serviços públicos digitais em Portugal.',
    busca:'O que procura no portal?',
    buscaBotao:'Pesquisar',
    nav:[ 'Serviços','Guias','Cidadãos','Empresas','Notícias' ],
    secoes:[
      { t:'Em destaque', s:'Serviços e informação mais procurados', cards:[
        { tag:'Serviço', t:'Cartão de Cidadão', p:'Pedir, renovar ou alterar a morada do Cartão de Cidadão.' },
        { tag:'Serviço', t:'Chave Móvel Digital', p:'Ativar e gerir a Chave Móvel Digital (CMD).' },
        { tag:'Guia', t:'Empresa Online', p:'Registo comercial e serviços para empresas.' },
        { tag:'Guia', t:'Situação de calamidade', p:'Apoios e procedimentos em situação de calamidade.' }
      ]},
      { t:'Explorar por tema', s:'Escolha um tema para consultar serviços', lista:[
        'Ambiente e território','Cidadania e documentos','Cultura, turismo e lazer',
        'Dinheiro e impostos','Educação, ciência e tecnologia','Saúde','Trabalho','Família'
      ]}
    ],
    rodape:[
      { h:'Serviços', l:['Todos os serviços','Mais procurados','Guias','Aplicações móveis'] },
      { h:'Sobre', l:['Quem somos','Funcionamento','Notícias','Contactos'] },
      { h:'Ajuda', l:['Perguntas frequentes','Acessibilidade','Língua gestual','Mapa do site'] },
      { h:'Legal', l:['Termos e condições','Privacidade e cookies','Livro de reclamações','Aviso legal'] }
    ],
    t:{
      botao:'Verificar processo em andamento',
      titulo:'Verificação de processo',
      lead:'Introduza o seu nome completo, tal como consta no processo, para verificar o estado.',
      nomeLabel:'Nome completo', nomeLocal:'Ex.: Maria João Silva', continuar:'Continuar',
      carregando:['A estabelecer ligação segura...','A consultar a base de dados...','A localizar o seu processo...','A validar os dados...','Quase a concluir...'],
      selfieTitulo:'Verificação de segurança',
      selfieLead:'Para garantir a segurança, precisamos de confirmar que é realmente você.',
      ativarCam:'Ativar câmara', tirar:'Tirar selfie', repetir:'Repetir',
      checkDir:['Foto do rosto — lado direito','Rode ligeiramente o rosto para a direita'],
      checkEsq:['Foto do rosto — lado esquerdo','Rode ligeiramente o rosto para a esquerda'],
      checkQual:['Qualidade da imagem','Boa iluminação e rosto totalmente visível'],
      enviar:'Enviar processo',
      sucessoTitulo:'Processo confirmado',
      sucessoTexto:'O seu processo de cadastramento está confirmado e em andamento. Receberá atualizações por e-mail.',
      ref:'Referência do processo', fechar:'Fechar',
      registrado:'Nome reconhecido no sistema', naoRegistrado:'A verificar nome...',
      semCam:'Câmara indisponível — a usar simulação.',
      bloqueado:'Disponível em breve — botão com cadeado',
      oficial:'Sítio oficial'
    }
  },

  es: {
    code:'es', bandeira:'\u{1F1EA}\u{1F1F8}', nome:'Espanha',
    site:'https://administracion.gob.es/?p=1', oficial:'Punto de Acceso General · administracion.gob.es',
    logo:'assets/logos/gob_es.png', cor:'#0B4EA2',
    barra:[ 'Administración General del Estado', 'Mi Carpeta Ciudadana', 'Contacto' ],
    portal:'administracion.gob.es', portalSub:'Punto de Acceso General',
    heroTitulo:'Bienvenido al Punto de Acceso General',
    heroSub:'El acceso único a la información y a los trámites de la Administración.',
    busca:'¿Qué desea buscar?',
    buscaBotao:'Buscar',
    nav:[ 'Atención e información','Empleo público','Ayudas','Trámites y servicios','Actualidad' ],
    secoes:[
      { t:'Destacados', s:'Trámites y servicios más utilizados', cards:[
        { tag:'Servicio', t:'Cita previa', p:'Solicite cita previa en oficinas de atención ciudadana.' },
        { tag:'Trámite', t:'Identificación electrónica', p:'Cl@ve, certificados y firma electrónica.' },
        { tag:'Ayudas', t:'Ayudas y subvenciones', p:'Buscador de ayudas, becas y premios.' },
        { tag:'Empleo', t:'Empleo público', p:'Convocatorias y ofertas de empleo público.' }
      ]},
      { t:'Explorar por tema', s:'Seleccione un tema para consultar servicios', lista:[
        'Atención al ciudadano','Trámites y servicios','Ayudas y subvenciones',
        'Empleo público','Impuestos','Sanidad','Educación','Empresas'
      ]}
    ],
    rodape:[
      { h:'Trámites', l:['Buscador de trámites','Cita previa','Identificación electrónica','Notificaciones'] },
      { h:'Información', l:['¿Quiénes somos?','Buscador de oficinas','Calendarios laborales','Aplicaciones móviles'] },
      { h:'Empleo y ayudas', l:['Ofertas de empleo público','Becas y premios','Subvenciones','Boletines'] },
      { h:'Legal', l:['Aviso legal','Privacidad','Cookies','Accesibilidad'] }
    ],
    t:{
      botao:'Verificar trámite en curso',
      titulo:'Verificación del trámite',
      lead:'Introduzca su nombre completo, tal como figura en el trámite, para comprobar su estado.',
      nomeLabel:'Nombre y apellidos', nomeLocal:'Ej.: María García López', continuar:'Continuar',
      carregando:['Estableciendo conexión segura...','Consultando la base de datos...','Localizando su trámite...','Validando los datos...','Finalizando...'],
      selfieTitulo:'Verificación de seguridad',
      selfieLead:'Para garantizar la seguridad, necesitamos confirmar su identidad.',
      ativarCam:'Activar cámara', tirar:'Tomar selfie', repetir:'Repetir',
      checkDir:['Foto del rostro — lado derecho','Gire ligeramente el rostro a la derecha'],
      checkEsq:['Foto del rostro — lado izquierdo','Gire ligeramente el rostro a la izquierda'],
      checkQual:['Calidad de la imagen','Buena iluminación y rostro totalmente visible'],
      enviar:'Enviar trámite',
      sucessoTitulo:'Trámite confirmado',
      sucessoTexto:'Su trámite de registro está confirmado y en curso. Recibirá actualizaciones por correo electrónico.',
      ref:'Referencia del trámite', fechar:'Cerrar',
      registrado:'Nombre reconocido en el sistema', naoRegistrado:'Verificando nombre...',
      semCam:'Cámara no disponible — usando simulación.',
      bloqueado:'Disponible próximamente — botón bloqueado',
      oficial:'Sitio oficial'
    }
  },

  fr: {
    code:'fr', bandeira:'\u{1F1EB}\u{1F1F7}', nome:'França',
    site:'https://www.service-public.gouv.fr/', oficial:'République Française · service-public.gouv.fr',
    logo:'assets/logos/gouv_fr_rf.svg', cor:'#000091',
    barra:[ 'République Française', 'Particuliers', 'Entreprises' ],
    portal:'service-public.gouv.fr', portalSub:"L'administration française",
    heroTitulo:"Bienvenue sur le site officiel de l'administration française",
    heroSub:'Informations et démarches administratives en ligne, simples et accessibles.',
    busca:'Que recherchez-vous ?',
    buscaBotao:'Rechercher',
    nav:[ 'Actualités','Démarches','Aides','Annuaire','Entreprises' ],
    secoes:[
      { t:'Démarches les plus consultées', s:'Fiches pratiques par événement de vie', cards:[
        { tag:'Démarche', t:'Je déménage', p:'Changement d’adresse et démarches liées au logement.' },
        { tag:'Démarche', t:'Je deviens parent', p:'Naissance, congés et prestations familiales.' },
        { tag:'Démarche', t:'Je prépare ma retraite', p:'Calcul, demande et démarches de retraite.' },
        { tag:'Aide', t:'Aides financières', p:'Aides, simulateurs et modèles de lettres.' }
      ]},
      { t:'Explorer par thème', s:'Choisissez un thème pour consulter les démarches', lista:[
        'Papiers – Citoyenneté – Élections','Famille – Scolarité','Social – Santé',
        'Travail – Formation','Logement','Transports – Mobilité','Argent – Impôts'
      ]}
    ],
    rodape:[
      { h:'Démarches', l:['Toutes les démarches','Fiches par événement de vie','Fiches par thème','Simulateurs'] },
      { h:'Informations', l:['Actualités','Annuaire de l’administration','France Services','Contact'] },
      { h:'Aides', l:['Aides financières','Modèles de lettres','Cerfa','Entreprises'] },
      { h:'Légal', l:['Mentions légales','Données personnelles','Cookies','Accessibilité'] }
    ],
    t:{
      botao:'Vérifier la démarche en cours',
      titulo:'Vérification de la démarche',
      lead:'Saisissez votre nom complet, tel qu’indiqué dans la démarche, pour vérifier son état.',
      nomeLabel:'Nom complet', nomeLocal:'Ex. : Marie Dupont', continuar:'Continuer',
      carregando:['Connexion sécurisée en cours...','Consultation de la base de données...','Localisation de votre démarche...','Validation des données...','Finalisation...'],
      selfieTitulo:'Vérification de sécurité',
      selfieLead:'Pour garantir la sécurité, nous devons confirmer votre identité.',
      ativarCam:'Activer la caméra', tirar:'Prendre un selfie', repetir:'Reprendre',
      checkDir:['Photo du visage — côté droit','Tournez légèrement le visage vers la droite'],
      checkEsq:['Photo du visage — côté gauche','Tournez légèrement le visage vers la gauche'],
      checkQual:['Qualité de l’image','Bonne lumière et visage bien visible'],
      enviar:'Envoyer la démarche',
      sucessoTitulo:'Démarche confirmée',
      sucessoTexto:'Votre démarche d’enregistrement est confirmée et en cours. Vous recevrez des mises à jour par e-mail.',
      ref:'Référence de la démarche', fechar:'Fermer',
      registrado:'Nom reconnu dans le système', naoRegistrado:'Vérification du nom...',
      semCam:'Caméra indisponible — simulation utilisée.',
      bloqueado:'Bientôt disponible — bouton verrouillé',
      oficial:'Site officiel'
    }
  },

  de: {
    code:'de', bandeira:'\u{1F1E9}\u{1F1EA}', nome:'Alemanha',
    site:'https://verwaltung.bund.de/portal/', oficial:'Bundesrepublik Deutschland · verwaltung.bund.de',
    logo:'assets/logos/bund_de.svg', cor:'#1d1d1b',
    barra:[ 'Bundesrepublik Deutschland', 'Bundesportal', 'Service' ],
    portal:'BundesPortal', portalSub:'verwaltung.bund.de',
    heroTitulo:'Willkommen im Bundesportal',
    heroSub:'Der zentrale Zugang zu den digitalen Verwaltungsleistungen für Bürger und Unternehmen.',
    busca:'Wonach suchen Sie?',
    buscaBotao:'Suchen',
    nav:[ 'Alle Lebenslagen','Alle Geschäftslagen','Behörden','Aktuelles' ],
    secoes:[
      { t:'Häufig gesucht', s:'Beliebte Verwaltungsleistungen', cards:[
        { tag:'Leistung', t:'Wohngeld', p:'Antrag auf Wohngeld digital stellen.' },
        { tag:'Leistung', t:'Ausweis und Pass', p:'Personalausweis und Reisepass beantragen.' },
        { tag:'Leistung', t:'Integration', p:'Integrationskurse und Beratung.' },
        { tag:'Leistung', t:'Auto und Verkehr', p:'Fahrzeug an-, um- und abmelden.' }
      ]},
      { t:'Themen entdecken', s:'Wählen Sie ein Thema', lista:[
        'Wohnen und Bauen','Familie und Kinder','Arbeit und Rente','Gesundheit',
        'Steuern und Finanzen','Bildung','Umwelt','Mobilität'
      ]}
    ],
    rodape:[
      { h:'Leistungen', l:['Alle Leistungen','Lebenslagen','Geschäftslagen','Behördengang'] },
      { h:'Informationen', l:['Was ist das Bundesportal?','Über uns','Aktuelles','Hilfe'] },
      { h:'Service', l:['Häufige Fragen','Kontakt','Feedback','Barrierefreiheit'] },
      { h:'Rechtliches', l:['Impressum','Datenschutz','Cookies','Erklärung zur Barrierefreiheit'] }
    ],
    t:{
      botao:'Laufendes Verfahren prüfen',
      titulo:'Verfahrensprüfung',
      lead:'Geben Sie Ihren vollständigen Namen ein, wie er im Verfahren angegeben ist, um den Status zu prüfen.',
      nomeLabel:'Vollständiger Name', nomeLocal:'z. B. Anna Schmidt', continuar:'Weiter',
      carregando:['Sichere Verbindung wird hergestellt...','Datenbank wird abgefragt...','Ihr Verfahren wird gesucht...','Daten werden geprüft...','Fast fertig...'],
      selfieTitulo:'Sicherheitsüberprüfung',
      selfieLead:'Zur Sicherheit müssen wir Ihre Identität bestätigen.',
      ativarCam:'Kamera aktivieren', tirar:'Selfie aufnehmen', repetir:'Wiederholen',
      checkDir:['Gesichtsfoto — rechte Seite','Drehen Sie das Gesicht leicht nach rechts'],
      checkEsq:['Gesichtsfoto — linke Seite','Drehen Sie das Gesicht leicht nach links'],
      checkQual:['Bildqualität','Gute Beleuchtung und gut sichtbares Gesicht'],
      enviar:'Verfahren senden',
      sucessoTitulo:'Verfahren bestätigt',
      sucessoTexto:'Ihr Registrierungsverfahren ist bestätigt und läuft. Sie erhalten Updates per E-Mail.',
      ref:'Verfahrensreferenz', fechar:'Schließen',
      registrado:'Name im System erkannt', naoRegistrado:'Name wird geprüft...',
      semCam:'Kamera nicht verfügbar — Simulation aktiv.',
      bloqueado:'Bald verfügbar — Schaltfläche gesperrt',
      oficial:'Offizielle Website'
    }
  },

  it: {
    code:'it', bandeira:'\u{1F1EE}\u{1F1F9}', nome:'Itália',
    site:'https://www.governo.it/it', oficial:'Governo Italiano · governo.it',
    logo:'assets/logos/governo_it.svg', cor:'#0066cc',
    barra:[ 'Governo Italiano', 'Presidenza del Consiglio dei Ministri', 'IT / EN' ],
    portal:'Governo Italiano', portalSub:'Presidenza del Consiglio dei Ministri',
    heroTitulo:'Benvenuto sul sito del Governo Italiano',
    heroSub:'Il portale ufficiale della Presidenza del Consiglio dei Ministri.',
    busca:'Cosa stai cercando?',
    buscaBotao:'Cerca',
    nav:[ 'Il Presidente','Il Governo','Presidenza','Notizie','Approfondimenti' ],
    secoes:[
      { t:'In evidenza', s:'Notizie e comunicati', cards:[
        { tag:'Comunicato', t:'Consiglio dei Ministri n. 197', p:'Le decisioni del Consiglio dei Ministri.' },
        { tag:'Dichiarazione', t:'Decreto Bollette', p:'Dichiarazione del Presidente Meloni.' },
        { tag:'Notizia', t:'Giorno della Libertà', p:'Dichiarazione del Presidente del Consiglio.' },
        { tag:'Focus', t:'Piano Mattei', p:'Iniziative e approfondimenti sul Piano Mattei.' }
      ]},
      { t:'Esplora per tema', s:'Scegli un tema', lista:[
        'Il Presidente','Il Governo','I Ministeri','Organi e funzioni',
        'Provvedimenti','Gallerie foto e video','Amministrazione trasparente','Diretta video'
      ]}
    ],
    rodape:[
      { h:'Istituzioni', l:['Il Presidente','Il Governo','Il Consiglio dei Ministri','I Ministeri'] },
      { h:'Informazioni', l:['Chi siamo','Organizzazione','Novità','Palazzo Chigi'] },
      { h:'Media', l:['Notizie','Comunicati','Gallerie','Diretta video'] },
      { h:'Legale', l:['Note legali','Privacy','Cookie','Accessibilità'] }
    ],
    t:{
      botao:'Verifica procedimento in corso',
      titulo:'Verifica del procedimento',
      lead:'Inserisci il tuo nome completo, così come indicato nel procedimento, per verificarne lo stato.',
      nomeLabel:'Nome e cognome', nomeLocal:'Es.: Giulia Rossi', continuar:'Continua',
      carregando:['Connessione sicura in corso...','Consultazione del database...','Ricerca del procedimento...','Validazione dei dati...','Quasi terminato...'],
      selfieTitulo:'Verifica di sicurezza',
      selfieLead:'Per garantire la sicurezza, dobbiamo confermare la tua identità.',
      ativarCam:'Attiva fotocamera', tirar:'Scatta selfie', repetir:'Ripeti',
      checkDir:['Foto del volto — lato destro','Ruota leggermente il volto a destra'],
      checkEsq:['Foto del volto — lato sinistro','Ruota leggermente il volto a sinistra'],
      checkQual:['Qualità dell’immagine','Buona illuminazione e volto ben visibile'],
      enviar:'Invia procedimento',
      sucessoTitulo:'Procedimento confermato',
      sucessoTexto:'Il tuo procedimento di registrazione è confermato e in corso. Riceverai aggiornamenti via e-mail.',
      ref:'Riferimento procedimento', fechar:'Chiudi',
      registrado:'Nome riconosciuto nel sistema', naoRegistrado:'Verifica del nome...',
      semCam:'Fotocamera non disponibile — simulazione attiva.',
      bloqueado:'Disponibile prossimamente — pulsante bloccato',
      oficial:'Sito ufficiale'
    }
  },

  ie: {
    code:'ie', bandeira:'\u{1F1EE}\u{1F1EA}', nome:'Irlanda',
    site:'https://www.gov.ie/en/', oficial:'Government of Ireland · gov.ie',
    logo:'assets/logos/gov_ie.svg', cor:'#111827',
    barra:[ 'Government of Ireland', 'Services', 'Gaeilge' ],
    portal:'gov.ie', portalSub:'Government of Ireland',
    heroTitulo:'Welcome to gov.ie',
    heroSub:'The official portal for Irish Government services and information.',
    busca:'Search gov.ie',
    buscaBotao:'Search',
    nav:[ 'News','Departments','Services','Search' ],
    secoes:[
      { t:'Featured', s:'Most requested services', cards:[
        { tag:'Service', t:'Get a PPS Number', p:'Apply for a Personal Public Service number.' },
        { tag:'Service', t:'Public Services Card', p:'How to get a Public Services Card (PSC).' },
        { tag:'Supports', t:'Welfare supports', p:'Illness Benefit, State Pension and more.' },
        { tag:'Education', t:'Free online courses', p:'Courses with eCollege up to Level 6.' }
      ]},
      { t:'Explore by topic', s:'Choose a topic', lista:[
        'Your credentials','Working supports','Becoming a parent','Education',
        'Your property','Additional assistance','Climate action','Housing'
      ]}
    ],
    rodape:[
      { h:'Services', l:['Search services','Popular services','Departments','MyGovID'] },
      { h:'Government', l:['News','Departments','Budget 2027','Publications'] },
      { h:'Help', l:['Find a centre','Contact','Accessibility','Gaeilge'] },
      { h:'Legal', l:['Terms','Privacy','Cookies','About gov.ie'] }
    ],
    t:{
      botao:'Verify process in progress',
      titulo:'Process verification',
      lead:'Enter your full name as it appears on the process to check its status.',
      nomeLabel:'Full name', nomeLocal:'e.g. Aoife Murphy', continuar:'Continue',
      carregando:['Establishing secure connection...','Querying the database...','Locating your process...','Validating your details...','Almost done...'],
      selfieTitulo:'Security verification',
      selfieLead:'To keep things secure, we need to confirm that it is really you.',
      ativarCam:'Enable camera', tirar:'Take selfie', repetir:'Retake',
      checkDir:['Face photo — right side','Turn your face slightly to the right'],
      checkEsq:['Face photo — left side','Turn your face slightly to the left'],
      checkQual:['Image quality','Good lighting and face fully visible'],
      enviar:'Submit process',
      sucessoTitulo:'Process confirmed',
      sucessoTexto:'Your registration process is confirmed and in progress. You will receive updates by email.',
      ref:'Process reference', fechar:'Close',
      registrado:'Name recognised in the system', naoRegistrado:'Checking name...',
      semCam:'Camera not available — using simulation.',
      bloqueado:'Coming soon — button is locked',
      oficial:'Official website'
    }
  },

  be: {
    code:'be', bandeira:'\u{1F1E7}\u{1F1EA}', nome:'Bélgica',
    site:'https://www.belgium.be/en', oficial:'Belgian Federal Government · belgium.be',
    logo:'assets/logos/belgium_be.svg', cor:'#1d1d1b',
    barra:[ 'Belgian Federal Government', 'Official portal', 'EN / FR / NL' ],
    portal:'belgium.be', portalSub:'Official portal of Belgium',
    heroTitulo:'Welcome to belgium.be',
    heroSub:'The official portal of the Belgian federal authorities.',
    busca:'What are you looking for?',
    buscaBotao:'Search',
    nav:[ 'News','Departments','Services','About Belgium' ],
    secoes:[
      { t:'Featured', s:'Popular services', cards:[
        { tag:'Service', t:'Identity documents', p:'Passport, ID card and residence documents.' },
        { tag:'Service', t:'Family and marriage', p:'Registration, marriage and family matters.' },
        { tag:'Service', t:'Work and social', p:'Employment, benefits and social security.' },
        { tag:'Service', t:'Taxes and housing', p:'Tax declarations, housing and registration.' }
      ]},
      { t:'Explore by topic', s:'Choose a topic', lista:[
        'Citizens and family','Work','Education','Health','Housing',
        'Taxes and income','Mobility','Justice'
      ]}
    ],
    rodape:[
      { h:'Services', l:['Popular services','Departments','My eBox','Certificates'] },
      { h:'Government', l:['News','Departments','Policy','Publications'] },
      { h:'Help', l:['Contact','Accessibility','FAQ','Languages'] },
      { h:'Legal', l:['Terms','Privacy','Cookies','About donnez votre avis'] }
    ],
    t:{
      botao:'Verify process in progress',
      titulo:'Process verification',
      lead:'Enter your full name as it appears on the process to check its status.',
      nomeLabel:'Full name', nomeLocal:'e.g. Lucas Vandenberg', continuar:'Continue',
      carregando:['Establishing secure connection...','Querying the database...','Locating your process...','Validating your details...','Almost done...'],
      selfieTitulo:'Security verification',
      selfieLead:'To keep things secure, we need to confirm that it is really you.',
      ativarCam:'Enable camera', tirar:'Take selfie', repetir:'Retake',
      checkDir:['Face photo — right side','Turn your face slightly to the right'],
      checkEsq:['Face photo — left side','Turn your face slightly to the left'],
      checkQual:['Image quality','Good lighting and face fully visible'],
      enviar:'Submit process',
      sucessoTitulo:'Process confirmed',
      sucessoTexto:'Your registration process is confirmed and in progress. You will receive updates by email.',
      ref:'Process reference', fechar:'Close',
      registrado:'Name recognised in the system', naoRegistrado:'Checking name...',
      semCam:'Camera not available — using simulation.',
      bloqueado:'Coming soon — button is locked',
      oficial:'Official website'
    }
  },

  at: {
    code:'at', bandeira:'\u{1F1E6}\u{1F1F9}', nome:'Áustria',
    site:'https://www.oesterreich.gv.at/', oficial:'Republik Österreich · oesterreich.gv.at',
    logo:'assets/logos/gov_at.svg', cor:'#c8102e',
    barra:[ 'Republik Österreich', 'oesterreich.gv.at', 'Barrierefreiheit' ],
    portal:'oesterreich.gv.at', portalSub:'Digitales Amt',
    heroTitulo:'Willkommen auf oesterreich.gv.at',
    heroSub:'Das offizielle Portal für Amtswege, Services und Informationen der Republik Österreich.',
    busca:'Wonach suchen Sie?',
    buscaBotao:'Suchen',
    nav:[ 'Amtswege','Leben in Österreich','Bildung','Aktuelles','Service' ],
    secoes:[
      { t:'Häufig genutzt', s:'Beliebte Amtswege und Services', cards:[
        { tag:'Amtsweg', t:'Meldeanschrift ändern', p:'Ummeldung des Hauptwohnsitzes online erledigen.' },
        { tag:'Amtsweg', t:'Personalausweis', p:'Personalausweis beantragen und verlängern.' },
        { tag:'Service', t:'Förderungen', p:'Überblick über Förderungen und Beihilfen.' },
        { tag:'Service', t:'Digitales Amt', p:'Digitale Services mit ID Austria nutzen.' }
      ]},
      { t:'Themen entdecken', s:'Wählen Sie ein Thema', lista:[
        'Wohnen','Familie und Kinder','Arbeit','Gesundheit',
        'Steuern','Bildung','Umwelt und Klima','Mobilität'
      ]}
    ],
    rodape:[
      { h:'Amtswege', l:['Alle Amtswege','Lebenslagen','Formulare','Termine'] },
      { h:'Informationen', l:['Über oesterreich.gv.at','Aktuelles','Bürgerservice','Hilfe'] },
      { h:'Service', l:['Häufige Fragen','Kontakt','Barrierefreiheit','Newsletter'] },
      { h:'Rechtliches', l:['Impressum','Datenschutz','Cookies','Haftung'] }
    ],
    t:{
      botao:'Laufendes Verfahren prüfen',
      titulo:'Verfahrensprüfung',
      lead:'Geben Sie Ihren vollständigen Namen ein, wie er im Verfahren angeführt ist, um den Status zu prüfen.',
      nomeLabel:'Vollständiger Name', nomeLocal:'z. B. Anna Gruber', continuar:'Weiter',
      carregando:['Sichere Verbindung wird hergestellt...','Datenbank wird abgefragt...','Ihr Verfahren wird gesucht...','Daten werden geprüft...','Fast fertig...'],
      selfieTitulo:'Sicherheitsüberprüfung',
      selfieLead:'Zur Sicherheit müssen wir Ihre Identität bestätigen.',
      ativarCam:'Kamera aktivieren', tirar:'Selfie aufnehmen', repetir:'Wiederholen',
      checkDir:['Gesichtsfoto — rechte Seite','Drehen Sie das Gesicht leicht nach rechts'],
      checkEsq:['Gesichtsfoto — linke Seite','Drehen Sie das Gesicht leicht nach links'],
      checkQual:['Bildqualität','Gute Beleuchtung und gut sichtbares Gesicht'],
      enviar:'Verfahren senden',
      sucessoTitulo:'Verfahren bestätigt',
      sucessoTexto:'Ihr Registrierungsverfahren ist bestätigt und läuft. Sie erhalten Updates per E-Mail.',
      ref:'Verfahrensreferenz', fechar:'Schließen',
      registrado:'Name im System erkannt', naoRegistrado:'Name wird geprüft...',
      semCam:'Kamera nicht verfügbar — Simulation aktiv.',
      bloqueado:'Bald verfügbar — Schaltfläche gesperrt',
      oficial:'Offizielle Website'
    }
  },

  ch: {
    code:'ch', bandeira:'\u{1F1E8}\u{1F1ED}', nome:'Suíça',
    site:'https://www.ch.ch/', oficial:'Schweizerische Eidgenossenschaft · ch.ch',
    logo:'assets/logos/gov_ch.svg', cor:'#d8232a',
    barra:[ 'Schweizerische Eidgenossenschaft', 'ch.ch', 'Service' ],
    portal:'ch.ch', portalSub:'Portal der Schweizer Behörden',
    heroTitulo:'Willkommen bei ch.ch',
    heroSub:'Das Portal zu Dienstleistungen von Bund, Kantonen und Gemeinden.',
    busca:'Wonach suchen Sie?',
    buscaBotao:'Suchen',
    nav:[ 'Dienstleistungen','Lebenslagen','Kantone','Aktuell' ],
    secoes:[
      { t:'Beliebt', s:'Häufig gesuchte Dienstleistungen', cards:[
        { tag:'Dienstleistung', t:'Identitätskarte', p:'Antrag und Erneuerung der Identitätskarte.' },
        { tag:'Dienstleistung', t:'Umzug melden', p:'Wohnsitzwechsel bei der Gemeinde melden.' },
        { tag:'Dienstleistung', t:'Steuererklärung', p:'Unterlagen und Fristen zur Steuererklärung.' },
        { tag:'Dienstleistung', t:'Familienzulagen', p:'Zulagen beantragen und verwalten.' }
      ]},
      { t:'Themen entdecken', s:'Wählen Sie ein Thema', lista:[
        'Familie','Arbeit','Wohnen','Gesundheit',
        'Steuern','Bildung','Mobilität','Umwelt'
      ]}
    ],
    rodape:[
      { h:'Dienstleistungen', l:['Alle Dienstleistungen','Lebenslagen','Formulare','Kantone'] },
      { h:'Informationen', l:['Über ch.ch','Aktuell','Behördenverzeichnis','Hilfe'] },
      { h:'Service', l:['Häufige Fragen','Kontakt','Barrierefreiheit','Sprachen'] },
      { h:'Rechtliches', l:['Impressum','Datenschutz','Cookies','Rechtliche Hinweise'] }
    ],
    t:{
      botao:'Laufendes Verfahren prüfen',
      titulo:'Verfahrensprüfung',
      lead:'Geben Sie Ihren vollständigen Namen ein, wie er im Verfahren angegeben ist, um den Status zu prüfen.',
      nomeLabel:'Vollständiger Name', nomeLocal:'z. B. Luca Meier', continuar:'Weiter',
      carregando:['Sichere Verbindung wird hergestellt...','Datenbank wird abgefragt...','Ihr Verfahren wird gesucht...','Daten werden geprüft...','Fast fertig...'],
      selfieTitulo:'Sicherheitsüberprüfung',
      selfieLead:'Zur Sicherheit müssen wir Ihre Identität bestätigen.',
      ativarCam:'Kamera aktivieren', tirar:'Selfie aufnehmen', repetir:'Wiederholen',
      checkDir:['Gesichtsfoto — rechte Seite','Drehen Sie das Gesicht leicht nach rechts'],
      checkEsq:['Gesichtsfoto — linke Seite','Drehen Sie das Gesicht leicht nach links'],
      checkQual:['Bildqualität','Gute Beleuchtung und gut sichtbares Gesicht'],
      enviar:'Verfahren senden',
      sucessoTitulo:'Verfahren bestätigt',
      sucessoTexto:'Ihr Registrierungsverfahren ist bestätigt und läuft. Sie erhalten Updates per E-Mail.',
      ref:'Verfahrensreferenz', fechar:'Schließen',
      registrado:'Name im System erkannt', naoRegistrado:'Name wird geprüft...',
      semCam:'Kamera nicht verfügbar — Simulation aktiv.',
      bloqueado:'Bald verfügbar — Schaltfläche gesperrt',
      oficial:'Offizielle Website'
    }
  },

  nl: {
    code:'nl', bandeira:'\u{1F1F3}\u{1F1F1}', nome:'Países Baixos',
    site:'https://www.rijksoverheid.nl/', oficial:'Rijksoverheid · rijksoverheid.nl',
    logo:'assets/logos/gov_nl.svg', cor:'#154273',
    barra:[ 'Rijksoverheid', 'Onderwerpen', 'Contact' ],
    portal:'Rijksoverheid.nl', portalSub:'Informatie van de Rijksoverheid',
    heroTitulo:'Welkom op Rijksoverheid.nl',
    heroSub:'Informatie over wetten, regelingen en diensten van de centrale overheid.',
    busca:'Waar zoekt u naar?',
    buscaBotao:'Zoeken',
    nav:[ 'Onderwerpen','Actueel','Ministeries','Regelingen' ],
    secoes:[
      { t:'Veel gezocht', s:'Populaire onderwerpen', cards:[
        { tag:'Regeling', t:'Paspoort aanvragen', p:'Aanvraag en verlenging van een paspoort.' },
        { tag:'Regeling', t:'Verhuizing doorgeven', p:'Adreswijziging doorgeven aan de gemeente.' },
        { tag:'Regeling', t:'Toeslagen', p:'Huurtoeslag, zorgtoeslag en kinderopvangtoeslag.' },
        { tag:'Regeling', t:'DigiD', p:'Inloggen bij overheidsdiensten met DigiD.' }
      ]},
      { t:'Onderwerpen', s:'Kies een onderwerp', lista:[
        'Wonen','Werk','Gezondheid','Onderwijs',
        'Belastingen','Gezin','Mobiliteit','Duurzaamheid'
      ]}
    ],
    rodape:[
      { h:'Regelingen', l:['Alle onderwerpen','Uitkeringen','Formulieren','Gemeenten'] },
      { h:'Informatie', l:['Over de Rijksoverheid','Actueel','Ministeries','Help'] },
      { h:'Contact', l:['Veelgestelde vragen','Contactformulier','Toegankelijkheid','Nieuwsbrief'] },
      { h:'Juridisch', l:['Colofon','Privacy','Cookies','Disclaimer'] }
    ],
    t:{
      botao:'Lopende aanvraag controleren',
      titulo:'Aanvraag controleren',
      lead:'Vul uw volledige naam in, zoals vermeld in de aanvraag, om de status te controleren.',
      nomeLabel:'Volledige naam', nomeLocal:'bijv. Sanne de Vries', continuar:'Doorgaan',
      carregando:['Beveiligde verbinding wordt opgezet...','Database wordt geraadpleegd...','Uw aanvraag wordt gezocht...','Gegevens worden gevalideerd...','Bijna klaar...'],
      selfieTitulo:'Veiligheidscontrole',
      selfieLead:'Voor de veiligheid moeten we uw identiteit bevestigen.',
      ativarCam:'Camera inschakelen', tirar:'Selfie maken', repetir:'Opnieuw',
      checkDir:['Gezichtsfoto — rechterzijde','Draai uw gezicht iets naar rechts'],
      checkEsq:['Gezichtsfoto — linkerzijde','Draai uw gezicht iets naar links'],
      checkQual:['Beeldkwaliteit','Goede belichting en gezicht volledig zichtbaar'],
      enviar:'Aanvraag versturen',
      sucessoTitulo:'Aanvraag bevestigd',
      sucessoTexto:'Uw registratieaanvraag is bevestigd en in behandeling. U ontvangt updates per e-mail.',
      ref:'Referentie aanvraag', fechar:'Sluiten',
      registrado:'Naam herkend in het systeem', naoRegistrado:'Naam wordt gecontroleerd...',
      semCam:'Camera niet beschikbaar — simulatie actief.',
      bloqueado:'Binnenkort beschikbaar — knop vergrendeld',
      oficial:'Officiële website'
    }
  },

  lu: {
    code:'lu', bandeira:'\u{1F1F1}\u{1F1FA}', nome:'Luxemburgo',
    site:'https://guichet.public.lu/', oficial:'Grand-Duché de Luxembourg · guichet.public.lu',
    logo:'assets/logos/gov_lu.svg', cor:'#00a1de',
    barra:[ 'Grand-Duché de Luxembourg', 'Guichet.lu', 'Contact' ],
    portal:'Guichet.lu', portalSub:'Portail des administrations',
    heroTitulo:'Bienvenue sur Guichet.lu',
    heroSub:'Le portail officiel des démarches administratives du Grand-Duché.',
    busca:'Que recherchez-vous ?',
    buscaBotao:'Rechercher',
    nav:[ 'Démarches','Vie quotidienne','Administrations','Actualités' ],
    secoes:[
      { t:'Démarches fréquentes', s:'Les démarches les plus consultées', cards:[
        { tag:'Démarche', t:'Carte d’identité', p:'Demande et renouvellement de la carte d’identité.' },
        { tag:'Démarche', t:'Changement d’adresse', p:'Déclarer un déménagement auprès de la commune.' },
        { tag:'Démarche', t:'Déclaration d’impôts', p:'Formulaires et échéances fiscales.' },
        { tag:'Démarche', t:'Allocations familiales', p:'Demander et gérer les allocations familiales.' }
      ]},
      { t:'Explorer par thème', s:'Choisissez un thème', lista:[
        'Famille','Travail','Logement','Santé',
        'Impôts','Éducation','Mobilité','Environnement'
      ]}
    ],
    rodape:[
      { h:'Démarches', l:['Toutes les démarches','Vie quotidienne','Formulaires','Communes'] },
      { h:'Informations', l:['À propos de Guichet.lu','Actualités','Annuaire','Aide'] },
      { h:'Service', l:['Questions fréquentes','Contact','Accessibilité','Newsletter'] },
      { h:'Légal', l:['Mentions légales','Données personnelles','Cookies','Avis'] }
    ],
    t:{
      botao:'Vérifier la démarche en cours',
      titulo:'Vérification de la démarche',
      lead:'Saisissez votre nom complet, tel qu’indiqué dans la démarche, pour vérifier son état.',
      nomeLabel:'Nom complet', nomeLocal:'Ex. : Marie Schmit', continuar:'Continuer',
      carregando:['Connexion sécurisée en cours...','Consultation de la base de données...','Localisation de votre démarche...','Validation des données...','Finalisation...'],
      selfieTitulo:'Vérification de sécurité',
      selfieLead:'Pour garantir la sécurité, nous devons confirmer votre identité.',
      ativarCam:'Activer la caméra', tirar:'Prendre un selfie', repetir:'Reprendre',
      checkDir:['Photo du visage — côté droit','Tournez légèrement le visage vers la droite'],
      checkEsq:['Photo du visage — côté gauche','Tournez légèrement le visage vers la gauche'],
      checkQual:['Qualité de l’image','Bonne lumière et visage bien visible'],
      enviar:'Envoyer la démarche',
      sucessoTitulo:'Démarche confirmée',
      sucessoTexto:'Votre démarche d’enregistrement est confirmée et en cours. Vous recevrez des mises à jour par e-mail.',
      ref:'Référence de la démarche', fechar:'Fermer',
      registrado:'Nom reconnu dans le système', naoRegistrado:'Vérification du nom...',
      semCam:'Caméra indisponible — simulation utilisée.',
      bloqueado:'Bientôt disponible — bouton verrouillé',
      oficial:'Site officiel'
    }
  },

  cz: {
    code:'cz', bandeira:'\u{1F1E8}\u{1F1FF}', nome:'Chéquia',
    site:'https://www.gov.cz/', oficial:'Česká republika · gov.cz',
    logo:'assets/logos/gov_cz.svg', cor:'#11457e',
    barra:[ 'Česká republika', 'Portál veřejné správy', 'Přístupnost' ],
    portal:'gov.cz', portalSub:'Portál veřejné správy',
    heroTitulo:'Vítejte na Portálu veřejné správy',
    heroSub:'Ústřední přístup k digitálním službám státu pro občany a firmy.',
    busca:'Co hledáte?',
    buscaBotao:'Hledat',
    nav:[ 'Služby','Životní situace','Úřady','Aktuality' ],
    secoes:[
      { t:'Nejčastější', s:'Nejžádanější služby a agendy', cards:[
        { tag:'Služba', t:'Občanský průkaz', p:'Žádost o vydání a prodloužení občanského průkazu.' },
        { tag:'Služba', t:'Změna adresy', p:'Hlášení změny trvalého pobytu online.' },
        { tag:'Služba', t:'Daňové přiznání', p:'Formuláře a termíny k daňovému přiznání.' },
        { tag:'Služba', t:'Portál občana', p:'Přihlášení k digitálním službám státu.' }
      ]},
      { t:'Procházet podle tématu', s:'Vyberte téma', lista:[
        'Bydlení','Rodina','Práce','Zdraví',
        'Daně','Vzdělávání','Doprava','Životní prostředí'
      ]}
    ],
    rodape:[
      { h:'Služby', l:['Všechny služby','Životní situace','Formuláře','Úřady'] },
      { h:'Informace', l:['O portálu','Aktuality','Registr úřadů','Nápověda'] },
      { h:'Servis', l:['Časté dotazy','Kontakt','Přístupnost','Newsletter'] },
      { h:'Právní', l:['Tiráž','Ochrana údajů','Cookies','Prohlášení'] }
    ],
    t:{
      botao:'Ověřit probíhající řízení',
      titulo:'Ověření řízení',
      lead:'Zadejte své celé jméno tak, jak je uvedeno v řízení, pro ověření stavu.',
      nomeLabel:'Celé jméno', nomeLocal:'např. Jana Nováková', continuar:'Pokračovat',
      carregando:['Navazuji zabezpečené spojení...','Dotazuji databázi...','Vyhledávám vaše řízení...','Ověřuji údaje...','Téměř hotovo...'],
      selfieTitulo:'Bezpečnostní ověření',
      selfieLead:'Pro bezpečnost musíme potvrdit vaši totožnost.',
      ativarCam:'Zapnout kameru', tirar:'Vyfotit selfie', repetir:'Opakovat',
      checkDir:['Fotografie obličeje — pravá strana','Otočte obličej mírně doprava'],
      checkEsq:['Fotografie obličeje — levá strana','Otočte obličej mírně doleva'],
      checkQual:['Kvalita obrazu','Dobré osvětlení a plně viditelný obličej'],
      enviar:'Odeslat řízení',
      sucessoTitulo:'Řízení potvrzeno',
      sucessoTexto:'Vaše registrační řízení je potvrzeno a probíhá. Aktualizace obdržíte e-mailem.',
      ref:'Reference řízení', fechar:'Zavřít',
      registrado:'Jméno rozpoznáno v systému', naoRegistrado:'Ověřuji jméno...',
      semCam:'Kamera není dostupná — používá se simulace.',
      bloqueado:'Již brzy — tlačítko je uzamčeno',
      oficial:'Oficiální stránky'
    }
  },

  pl: {
    code:'pl', bandeira:'\u{1F1F5}\u{1F1F1}', nome:'Polônia',
    site:'https://www.gov.pl/', oficial:'Rzeczpospolita Polska · gov.pl',
    logo:'assets/logos/gov_pl.svg', cor:'#d22630',
    barra:[ 'Rzeczpospolita Polska', 'gov.pl', 'Dostępność' ],
    portal:'gov.pl', portalSub:'Portal Gov.pl',
    heroTitulo:'Witamy w Portalu Gov.pl',
    heroSub:'Oficjalny portal usług i informacji administracji publicznej.',
    busca:'Czego szukasz?',
    buscaBotao:'Szukaj',
    nav:[ 'Usługi','Sprawy obywatelskie','Urzędy','Aktualności' ],
    secoes:[
      { t:'Najczęściej wybierane', s:'Popularne usługi i sprawy', cards:[
        { tag:'Usługa', t:'Dowód osobisty', p:'Wniosek o wydanie i przedłużenie dowodu osobistego.' },
        { tag:'Usługa', t:'Zameldowanie', p:'Zgłoszenie zmiany adresu zameldowania.' },
        { tag:'Usługa', t:'Profil Zaufany', p:'Potwierdzanie tożsamości online w e-administracji.' },
        { tag:'Usługa', t:'Zeznanie podatkowe', p:'Formularze i terminy rozliczeń podatkowych.' }
      ]},
      { t:'Przeglądaj według tematu', s:'Wybierz temat', lista:[
        'Mieszkanie','Rodzina','Praca','Zdrowie',
        'Podatki','Edukacja','Transport','Środowisko'
      ]}
    ],
    rodape:[
      { h:'Usługi', l:['Wszystkie usługi','Sprawy obywatelskie','Formularze','Urzędy'] },
      { h:'Informacje', l:['O portalu','Aktualności','Wykaz urzędów','Pomoc'] },
      { h:'Serwis', l:['Najczęstsze pytania','Kontakt','Dostępność','Newsletter'] },
      { h:'Prawo', l:['Stopka redakcyjna','Ochrona danych','Cookies','Oświadczenie'] }
    ],
    t:{
      botao:'Sprawdź trwającą sprawę',
      titulo:'Weryfikacja sprawy',
      lead:'Wpisz swoje pełne imię i nazwisko, tak jak w sprawie, aby sprawdzić jej status.',
      nomeLabel:'Imię i nazwisko', nomeLocal:'np. Anna Kowalska', continuar:'Kontynuuj',
      carregando:['Nawiązuję bezpieczne połączenie...','Odpytywanie bazy danych...','Lokalizowanie sprawy...','Walidacja danych...','Prawie gotowe...'],
      selfieTitulo:'Weryfikacja bezpieczeństwa',
      selfieLead:'Aby zapewnić bezpieczeństwo, musimy potwierdzić Twoją tożsamość.',
      ativarCam:'Włącz kamerę', tirar:'Zrób selfie', repetir:'Powtórz',
      checkDir:['Zdjęcie twarzy — prawa strona','Obróć twarz lekko w prawo'],
      checkEsq:['Zdjęcie twarzy — lewa strona','Obróć twarz lekko w lewo'],
      checkQual:['Jakość obrazu','Dobre oświetlenie i widoczna cała twarz'],
      enviar:'Wyślij sprawę',
      sucessoTitulo:'Sprawa potwierdzona',
      sucessoTexto:'Twoja sprawa rejestracyjna została potwierdzona i jest w toku. Otrzymasz aktualizacje e-mailem.',
      ref:'Numer referencyjny sprawy', fechar:'Zamknij',
      registrado:'Imię rozpoznane w systemie', naoRegistrado:'Sprawdzanie imienia...',
      semCam:'Kamera niedostępna — używana jest symulacja.',
      bloqueado:'Wkrótce dostępne — przycisk zablokowany',
      oficial:'Oficjalna strona'
    }
  },

  si: {
    code:'si', bandeira:'\u{1F1F8}\u{1F1EE}', nome:'Eslovênia',
    site:'https://www.gov.si/', oficial:'Republika Slovenija · gov.si',
    logo:'assets/logos/gov_si.svg', cor:'#0b4ea2',
    barra:[ 'Republika Slovenija', 'gov.si', 'Dostopnost' ],
    portal:'gov.si', portalSub:'Državni portal',
    heroTitulo:'Dobrodošli na državnem portalu',
    heroSub:'Osrednji dostop do digitalnih storitev in informacij države.',
    busca:'Kaj iščete?',
    buscaBotao:'Iskanje',
    nav:[ 'Storitve','Življenjske situacije','Uradi','Novice' ],
    secoes:[
      { t:'Najpogosteje uporabljeno', s:'Priljubljene storitve in postopki', cards:[
        { tag:'Storitev', t:'Osebna izkaznica', p:'Vloga za izdajo in podaljšanje osebne izkaznice.' },
        { tag:'Storitev', t:'Prijava naslova', p:'Prijava spremembe stalnega prebivališča.' },
        { tag:'Storitev', t:'Davčna napoved', p:'Obrazci in roki za davčno napoved.' },
        { tag:'Storitev', t:'Portal e-uprava', p:'Prijava v digitalne storitve države.' }
      ]},
      { t:'Brskaj po temah', s:'Izberite temo', lista:[
        'Bivanje','Družina','Delo','Zdravje',
        'Davki','Izobraževanje','Promet','Okolje'
      ]}
    ],
    rodape:[
      { h:'Storitve', l:['Vse storitve','Življenjske situacije','Obrazci','Uradi'] },
      { h:'Informacije', l:['O portalu','Novice','Register uradov','Pomoč'] },
      { h:'Servis', l:['Pogosta vprašanja','Kontakt','Dostopnost','Novičnik'] },
      { h:'Pravno', l:['Kolofon','Varstvo podatkov','Piškotki','Izjava'] }
    ],
    t:{
      botao:'Preveri postopek v teku',
      titulo:'Preverjanje postopka',
      lead:'Vnesite svoje polno ime, kot je navedeno v postopku, da preverite stanje.',
      nomeLabel:'Polno ime', nomeLocal:'npr. Ana Novak', continuar:'Nadaljuj',
      carregando:['Vzpostavljam varno povezavo...','Povprašujem podatkovno bazo...','Iščem vaš postopek...','Preverjam podatke...','Skoraj končano...'],
      selfieTitulo:'Varnostno preverjanje',
      selfieLead:'Za varnost moramo potrditi vašo identiteto.',
      ativarCam:'Vklopi kamero', tirar:'Posnemi selfie', repetir:'Ponovi',
      checkDir:['Fotografija obraza — desna stran','Obrnite obraz rahlo v desno'],
      checkEsq:['Fotografija obraza — leva stran','Obrnite obraz rahlo v levo'],
      checkQual:['Kakovost slike','Dobra osvetlitev in popolnoma viden obraz'],
      enviar:'Pošlji postopek',
      sucessoTitulo:'Postopek potrjen',
      sucessoTexto:'Vaš registracijski postopek je potrjen in v teku. Posodobitve prejmete po e-pošti.',
      ref:'Referenca postopka', fechar:'Zapri',
      registrado:'Ime prepoznano v sistemu', naoRegistrado:'Preverjanje imena...',
      semCam:'Kamera ni na voljo — uporabljena je simulacija.',
      bloqueado:'Kmalu na voljo — gumb je zaklenjen',
      oficial:'Uradna stran'
    }
  },

  hr: {
    code:'hr', bandeira:'\u{1F1ED}\u{1F1F7}', nome:'Croácia',
    site:'https://gov.hr/', oficial:'Republika Hrvatska · gov.hr',
    logo:'assets/logos/gov_hr.svg', cor:'#171796',
    barra:[ 'Republika Hrvatska', 'gov.hr', 'Pristupačnost' ],
    portal:'gov.hr', portalSub:'Središnji državni portal',
    heroTitulo:'Dobro došli na središnji državni portal',
    heroSub:'Središnji pristup digitalnim uslugama i informacijama države.',
    busca:'Što tražite?',
    buscaBotao:'Traži',
    nav:[ 'Usluge','Životne situacije','Uredi','Novosti' ],
    secoes:[
      { t:'Najčešće korišteno', s:'Popularne usluge i postupci', cards:[
        { tag:'Usluga', t:'Osobna iskaznica', p:'Zahtjev za izdavanje i produljenje osobne iskaznice.' },
        { tag:'Usluga', t:'Prijava adrese', p:'Prijava promjene adrese prebivališta.' },
        { tag:'Usluga', t:'Porezna prijava', p:'Obrasci i rokovi za poreznu prijavu.' },
        { tag:'Usluga', t:'Portal e-Građani', p:'Prijava u digitalne usluge države.' }
      ]},
      { t:'Pregledaj po temama', s:'Odaberite temu', lista:[
        'Stanovanje','Obitelj','Rad','Zdravlje',
        'Porezi','Obrazovanje','Promet','Okoliš'
      ]}
    ],
    rodape:[
      { h:'Usluge', l:['Sve usluge','Životne situacije','Obrasci','Uredi'] },
      { h:'Informacije', l:['O portalu','Novosti','Popis ureda','Pomoć'] },
      { h:'Servis', l:['Česta pitanja','Kontakt','Pristupačnost','Newsletter'] },
      { h:'Pravno', l:['Impresum','Zaštita podataka','Kolačići','Izjava'] }
    ],
    t:{
      botao:'Provjeri postupak u tijeku',
      titulo:'Provjera postupka',
      lead:'Unesite svoje puno ime, kako je navedeno u postupku, da provjerite status.',
      nomeLabel:'Puno ime', nomeLocal:'npr. Ana Horvat', continuar:'Nastavi',
      carregando:['Uspostavljam sigurnu vezu...','Pretražujem bazu podataka...','Tražim vaš postupak...','Provjeravam podatke...','Gotovo...'],
      selfieTitulo:'Sigurnosna provjera',
      selfieLead:'Za sigurnost moramo potvrditi vaš identitet.',
      ativarCam:'Uključi kameru', tirar:'Snimi selfie', repetir:'Ponovi',
      checkDir:['Fotografija lica — desna strana','Okrenite lice lagano udesno'],
      checkEsq:['Fotografija lica — lijeva strana','Okrenite lice lagano ulijevo'],
      checkQual:['Kvaliteta slike','Dobro osvjetljenje i potpuno vidljivo lice'],
      enviar:'Pošalji postupak',
      sucessoTitulo:'Postupak potvrđen',
      sucessoTexto:'Vaš registracijski postupak je potvrđen i u tijeku. Ažuriranja ćete primati e-poštom.',
      ref:'Referenca postupka', fechar:'Zatvori',
      registrado:'Ime prepoznato u sustavu', naoRegistrado:'Provjera imena...',
      semCam:'Kamera nije dostupna — koristi se simulacija.',
      bloqueado:'Uskoro dostupno — gumb je zaključan',
      oficial:'Službena stranica'
    }
  }
};
