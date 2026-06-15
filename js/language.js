window.initLanguageSelector = function initLanguageSelector() {
  const root = document.documentElement;
  const picker = document.querySelector("[data-language-picker]");
  const trigger = document.querySelector("[data-language-button]");
  const currentLabel = document.querySelector("[data-language-current]");
  const currentFlag = document.querySelector("[data-language-flag]");
  const menu = document.querySelector("[data-language-menu]");
  const options = Array.from(document.querySelectorAll("[data-language-option]"));
  const fallbackLanguage = "es";
  const supportedLanguages = ["es", "en", "pt"];
  const whatsappBase = "https://wa.me/59163066882?text=";
  const languageLabels = {
    es: "ES",
    en: "EN",
    pt: "PT"
  };
  const languageFlags = {
    es: "flag-es",
    en: "flag-us",
    pt: "flag-br"
  };

  const translations = {
    es: {
      "meta.title": "Extremo Tours | Salar de Uyuni",
      "brand.location": "Uyuni, Bolivia",
      "nav.experiences": "Experiencias",
      "nav.packages": "Paquetes",
      "nav.location": "Ubicacion",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Uyuni, altiplano y memoria andina",
      "hero.title": "Salar de Uyuni con alma de los Andes.",
      "hero.copy": "Recorridos privados y compartidos entre espejos de sal, tejidos de color, rutas altoandinas y atardeceres que nacen en el corazon de Uyuni.",
      "buttons.whatsapp": "WhatsApp",
      "buttons.packages": "Ver paquetes",
      "intro.kicker": "Viajes con identidad",
      "intro.title": "Una ruta andina, organizada con detalle.",
      "intro.copy": "Desde la primera consulta hasta el retorno, coordinamos horarios, transporte, paradas fotograficas y recomendaciones para que el Salar se sienta inmenso, cercano y profundamente uyunense.",
      "experiences.kicker": "Experiencias",
      "experiences.title": "Momentos esenciales del altiplano",
      "features.mirror.title": "Espejo de sal",
      "features.mirror.copy": "Temporada de reflejos con paradas cuidadas para fotografia, caminatas suaves y cielo abierto.",
      "features.incahuasi.title": "Isla Incahuasi",
      "features.incahuasi.copy": "Cactus centenarios, senderos panoramicos y una vista completa del blanco infinito del altiplano.",
      "features.sunset.title": "Atardecer andino",
      "features.sunset.copy": "Una pausa final para ver como la luz cambia el Salar y pinta el horizonte con tonos de aguayo.",
      "features.train.title": "Cementerio de trenes",
      "features.train.copy": "Historia ferroviaria, estructuras antiguas y una parada clasica para comenzar la ruta por Uyuni.",
      "packages.kicker": "Paquetes",
      "packages.title": "Elige tu ruta",
      "packages.classic.label": "Ruta Uyuni",
      "packages.classic.title": "Plan 1 dia",
      "packages.classic.copy": "Incluye alimentacion durante el tour: 1 almuerzo.",
      "packages.classic.item1": "Comida vegetariana si el cliente lo desea.",
      "packages.classic.item2": "Transporte compartido en vagonetas 4x4.",
      "packages.classic.item3": "Equipo de primeros auxilios.",
      "packages.classic.item4": "Chofer/guia en espanol.",
      "packages.classic.item5": "Botas de agua en epoca de lluvia.",
      "packages.essential.label": "Ruta Uyuni",
      "packages.essential.title": "Plan 2 dias",
      "packages.essential.copy": "Incluye alimentacion durante el tour: 2 almuerzos, 1 cena y 1 desayuno.",
      "packages.essential.item1": "Comida vegetariana si el cliente lo desea.",
      "packages.essential.item2": "Transporte compartido en vagonetas 4x4.",
      "packages.essential.item3": "Equipo de primeros auxilios.",
      "packages.essential.item4": "Chofer/guia en espanol.",
      "packages.essential.item5": "Botas de agua en epoca de lluvia.",
      "packages.private.label": "Ruta Uyuni",
      "packages.private.title": "Plan 3 dias / 2 noches",
      "packages.private.copy": "Incluye alimentacion durante el tour: 3 almuerzos, 2 cenas y 2 desayunos.",
      "packages.private.item1": "Comida vegetariana si el cliente lo desea.",
      "packages.private.item2": "Transporte compartido en vagonetas 4x4.",
      "packages.private.item3": "Equipo de primeros auxilios.",
      "packages.private.item4": "Chofer/guia en espanol.",
      "packages.private.item5": "Botas de agua en epoca de lluvia.",
      "packages.sanpedro.label": "Ruta Uyuni",
      "packages.sanpedro.title": "Plan 4 dias",
      "packages.sanpedro.copy": "Incluye alimentacion durante el tour: 4 almuerzos, 3 cenas y 3 desayunos.",
      "packages.sanpedro.item1": "Comida vegetariana si el cliente lo desea.",
      "packages.sanpedro.item2": "Transporte compartido en vagonetas 4x4.",
      "packages.sanpedro.item3": "Equipo de primeros auxilios.",
      "packages.sanpedro.item4": "Chofer/guia en espanol.",
      "packages.sanpedro.item5": "Botas de agua en epoca de lluvia.",
      "trust.kicker": "Por que elegirnos",
      "trust.title": "Atencion cercana, ruta clara y respeto por el territorio.",
      "stats.transport": "Transporte para terreno altoandino",
      "stats.response": "Respuesta por WhatsApp",
      "stats.photo": "Paisajes para fotografia",
      "location.kicker": "Ubicacion",
      "location.title": "Al Extremo Oficina de Tours.",
      "location.copy": "Nos encuentras en Av. Ferroviaria, entre Sucre y Av. Potosi, un punto practico para coordinar salidas y encuentros antes del tour.",
      "location.link": "Abrir en Google Maps",
      "location.pin": "Al Extremo Oficina de Tours",
      "location.address": "Av. Ferroviaria, Sucre y Av. Potosi",
      "contact.kicker": "Reserva directa",
      "contact.title": "Hablemos de tu viaje por el Salar de Uyuni.",
      "contact.copy": "Escribenos para consultar disponibilidad, horarios y recomendaciones de temporada. Te respondera el encargado para coordinar los detalles con trato cercano.",
      "contact.whatsapp": "WhatsApp",
      "contact.cta": "Contactar ahora",
      "footer.copy": "\u00a9 2026 Extremo Tours. Salar de Uyuni, Bolivia."
    },
    en: {
      "meta.title": "Extremo Tours | Uyuni Salt Flat",
      "brand.location": "Uyuni, Bolivia",
      "nav.experiences": "Experiences",
      "nav.packages": "Tours",
      "nav.location": "Location",
      "nav.contact": "Contact",
      "hero.eyebrow": "Uyuni, highlands and Andean memory",
      "hero.title": "Uyuni Salt Flat with the soul of the Andes.",
      "hero.copy": "Private and shared journeys across salt mirrors, woven colors, highland routes and sunsets born in the heart of Uyuni.",
      "buttons.whatsapp": "WhatsApp",
      "buttons.packages": "View tours",
      "intro.kicker": "Travel with identity",
      "intro.title": "An Andean route, planned with care.",
      "intro.copy": "From the first message to the return, we coordinate schedules, transport, photo stops and seasonal advice so the Salt Flat feels vast, close and deeply connected to Uyuni.",
      "experiences.kicker": "Experiences",
      "experiences.title": "Essential moments of the highlands",
      "features.mirror.title": "Salt mirror",
      "features.mirror.copy": "Reflection season with thoughtful photo stops, gentle walks and open skies.",
      "features.incahuasi.title": "Incahuasi Island",
      "features.incahuasi.copy": "Ancient cacti, panoramic paths and a complete view of the endless white highland.",
      "features.sunset.title": "Andean sunset",
      "features.sunset.copy": "A final pause to watch the light shift across the Salt Flat and paint the horizon with aguayo tones.",
      "features.train.title": "Train cemetery",
      "features.train.copy": "Railway history, old structures and a classic stop to begin the route through Uyuni.",
      "packages.kicker": "Tours",
      "packages.title": "Choose your route",
      "packages.classic.label": "Uyuni route",
      "packages.classic.title": "1-day plan",
      "packages.classic.copy": "Includes meals during the tour: 1 lunch.",
      "packages.classic.item1": "Vegetarian food if requested by the client.",
      "packages.classic.item2": "Shared transport in 4x4 vehicles.",
      "packages.classic.item3": "First-aid kit.",
      "packages.classic.item4": "Spanish-speaking driver/guide.",
      "packages.classic.item5": "Water boots during rainy season.",
      "packages.essential.label": "Uyuni route",
      "packages.essential.title": "2-day plan",
      "packages.essential.copy": "Includes meals during the tour: 2 lunches, 1 dinner and 1 breakfast.",
      "packages.essential.item1": "Vegetarian food if requested by the client.",
      "packages.essential.item2": "Shared transport in 4x4 vehicles.",
      "packages.essential.item3": "First-aid kit.",
      "packages.essential.item4": "Spanish-speaking driver/guide.",
      "packages.essential.item5": "Water boots during rainy season.",
      "packages.private.label": "Uyuni route",
      "packages.private.title": "3-day / 2-night plan",
      "packages.private.copy": "Includes meals during the tour: 3 lunches, 2 dinners and 2 breakfasts.",
      "packages.private.item1": "Vegetarian food if requested by the client.",
      "packages.private.item2": "Shared transport in 4x4 vehicles.",
      "packages.private.item3": "First-aid kit.",
      "packages.private.item4": "Spanish-speaking driver/guide.",
      "packages.private.item5": "Water boots during rainy season.",
      "packages.sanpedro.label": "Uyuni route",
      "packages.sanpedro.title": "4-day plan",
      "packages.sanpedro.copy": "Includes meals during the tour: 4 lunches, 3 dinners and 3 breakfasts.",
      "packages.sanpedro.item1": "Vegetarian food if requested by the client.",
      "packages.sanpedro.item2": "Shared transport in 4x4 vehicles.",
      "packages.sanpedro.item3": "First-aid kit.",
      "packages.sanpedro.item4": "Spanish-speaking driver/guide.",
      "packages.sanpedro.item5": "Water boots during rainy season.",
      "trust.kicker": "Why choose us",
      "trust.title": "Close attention, clear routes and respect for the territory.",
      "stats.transport": "Transport for highland terrain",
      "stats.response": "WhatsApp response",
      "stats.photo": "Landscapes for photography",
      "location.kicker": "Location",
      "location.title": "Al Extremo Tours Office.",
      "location.copy": "Find us on Av. Ferroviaria, between Sucre and Av. Potosi, a practical point to coordinate departures and meetings before the tour.",
      "location.link": "Open in Google Maps",
      "location.pin": "Al Extremo Tours Office",
      "location.address": "Av. Ferroviaria, Sucre and Av. Potosi",
      "contact.kicker": "Direct booking",
      "contact.title": "Let us talk about your Uyuni Salt Flat trip.",
      "contact.copy": "Write to check availability, schedules and seasonal recommendations. The manager will reply to coordinate the details with friendly support.",
      "contact.whatsapp": "WhatsApp",
      "contact.cta": "Contact now",
      "footer.copy": "\u00a9 2026 Extremo Tours. Uyuni Salt Flat, Bolivia."
    },
    pt: {
      "meta.title": "Extremo Tours | Salar de Uyuni",
      "brand.location": "Uyuni, Bolivia",
      "nav.experiences": "Experiencias",
      "nav.packages": "Pacotes",
      "nav.location": "Localizacao",
      "nav.contact": "Contato",
      "hero.eyebrow": "Uyuni, altiplano e memoria andina",
      "hero.title": "Salar de Uyuni com alma dos Andes.",
      "hero.copy": "Passeios privados e compartilhados entre espelhos de sal, tecidos coloridos, rotas altoandinas e pores do sol que nascem no coracao de Uyuni.",
      "buttons.whatsapp": "WhatsApp",
      "buttons.packages": "Ver pacotes",
      "intro.kicker": "Viagens com identidade",
      "intro.title": "Uma rota andina, organizada com cuidado.",
      "intro.copy": "Desde a primeira consulta ate o retorno, coordenamos horarios, transporte, paradas fotograficas e recomendacoes de temporada para que o Salar pareca imenso, proximo e profundamente uyunense.",
      "experiences.kicker": "Experiencias",
      "experiences.title": "Momentos essenciais do altiplano",
      "features.mirror.title": "Espelho de sal",
      "features.mirror.copy": "Temporada de reflexos com paradas cuidadas para fotografia, caminhadas leves e ceu aberto.",
      "features.incahuasi.title": "Ilha Incahuasi",
      "features.incahuasi.copy": "Cactos centenarios, trilhas panoramicas e uma vista completa do branco infinito do altiplano.",
      "features.sunset.title": "Por do sol andino",
      "features.sunset.copy": "Uma pausa final para ver como a luz muda o Salar e pinta o horizonte com tons de aguayo.",
      "features.train.title": "Cemiterio de trens",
      "features.train.copy": "Historia ferroviaria, estruturas antigas e uma parada classica para comecar a rota por Uyuni.",
      "packages.kicker": "Pacotes",
      "packages.title": "Escolha sua rota",
      "packages.classic.label": "Rota Uyuni",
      "packages.classic.title": "Plano 1 dia",
      "packages.classic.copy": "Inclui alimentacao durante o tour: 1 almoco.",
      "packages.classic.item1": "Comida vegetariana se o cliente desejar.",
      "packages.classic.item2": "Transporte compartilhado em veiculos 4x4.",
      "packages.classic.item3": "Kit de primeiros socorros.",
      "packages.classic.item4": "Motorista/guia em espanhol.",
      "packages.classic.item5": "Botas de agua na epoca de chuva.",
      "packages.essential.label": "Rota Uyuni",
      "packages.essential.title": "Plano 2 dias",
      "packages.essential.copy": "Inclui alimentacao durante o tour: 2 almocos, 1 jantar e 1 cafe da manha.",
      "packages.essential.item1": "Comida vegetariana se o cliente desejar.",
      "packages.essential.item2": "Transporte compartilhado em veiculos 4x4.",
      "packages.essential.item3": "Kit de primeiros socorros.",
      "packages.essential.item4": "Motorista/guia em espanhol.",
      "packages.essential.item5": "Botas de agua na epoca de chuva.",
      "packages.private.label": "Rota Uyuni",
      "packages.private.title": "Plano 3 dias / 2 noites",
      "packages.private.copy": "Inclui alimentacao durante o tour: 3 almocos, 2 jantares e 2 cafes da manha.",
      "packages.private.item1": "Comida vegetariana se o cliente desejar.",
      "packages.private.item2": "Transporte compartilhado em veiculos 4x4.",
      "packages.private.item3": "Kit de primeiros socorros.",
      "packages.private.item4": "Motorista/guia em espanhol.",
      "packages.private.item5": "Botas de agua na epoca de chuva.",
      "packages.sanpedro.label": "Rota Uyuni",
      "packages.sanpedro.title": "Plano 4 dias",
      "packages.sanpedro.copy": "Inclui alimentacao durante o tour: 4 almocos, 3 jantares e 3 cafes da manha.",
      "packages.sanpedro.item1": "Comida vegetariana se o cliente desejar.",
      "packages.sanpedro.item2": "Transporte compartilhado em veiculos 4x4.",
      "packages.sanpedro.item3": "Kit de primeiros socorros.",
      "packages.sanpedro.item4": "Motorista/guia em espanhol.",
      "packages.sanpedro.item5": "Botas de agua na epoca de chuva.",
      "trust.kicker": "Por que nos escolher",
      "trust.title": "Atendimento proximo, rota clara e respeito pelo territorio.",
      "stats.transport": "Transporte para terreno altoandino",
      "stats.response": "Resposta por WhatsApp",
      "stats.photo": "Paisagens para fotografia",
      "location.kicker": "Localizacao",
      "location.title": "Al Extremo Escritorio de Tours.",
      "location.copy": "Estamos na Av. Ferroviaria, entre Sucre e Av. Potosi, um ponto pratico para coordenar saidas e encontros antes do tour.",
      "location.link": "Abrir no Google Maps",
      "location.pin": "Al Extremo Escritorio de Tours",
      "location.address": "Av. Ferroviaria, Sucre e Av. Potosi",
      "contact.kicker": "Reserva direta",
      "contact.title": "Vamos falar da sua viagem pelo Salar de Uyuni.",
      "contact.copy": "Escreva para consultar disponibilidade, horarios e recomendacoes de temporada. O encarregado respondera para coordenar os detalhes com atendimento proximo.",
      "contact.whatsapp": "WhatsApp",
      "contact.cta": "Entrar em contato",
      "footer.copy": "\u00a9 2026 Extremo Tours. Salar de Uyuni, Bolivia."
    }
  };

  const whatsappMessages = {
    es: {
      info: "Hola, quiero informacion sobre tours al Salar de Uyuni",
      booking: "Hola, quiero reservar un tour al Salar de Uyuni",
      floating: "Hola, necesito informacion sobre tours al Salar de Uyuni"
    },
    en: {
      info: "Hello, I would like information about Uyuni Salt Flat tours",
      booking: "Hello, I would like to book a Uyuni Salt Flat tour",
      floating: "Hello, I need information about Uyuni Salt Flat tours"
    },
    pt: {
      info: "Ola, gostaria de informacoes sobre passeios ao Salar de Uyuni",
      booking: "Ola, gostaria de reservar um passeio ao Salar de Uyuni",
      floating: "Ola, preciso de informacoes sobre passeios ao Salar de Uyuni"
    }
  };

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function resolveLanguage(language) {
    return supportedLanguages.includes(language) ? language : fallbackLanguage;
  }

  function applyLanguage(language) {
    const activeLanguage = resolveLanguage(language);
    const activeTranslations = translations[activeLanguage];

    root.lang = activeLanguage;
    document.title = activeTranslations["meta.title"];

    currentLabel.textContent = languageLabels[activeLanguage];
    currentFlag.className = `flag ${languageFlags[activeLanguage]}`;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = activeTranslations[key];
      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-whatsapp-link]").forEach((element) => {
      const messageKey = element.dataset.whatsappLink;
      const message = whatsappMessages[activeLanguage][messageKey];
      if (message) {
        element.href = `${whatsappBase}${encodeURIComponent(message)}`;
      }
    });

    safeStorageSet("extremo-language", activeLanguage);

    options.forEach((option) => {
      option.setAttribute("aria-selected", String(option.dataset.languageOption === activeLanguage));
    });
  }

  function closeMenu() {
    picker.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const shouldOpen = !picker.classList.contains("is-open");
    picker.classList.toggle("is-open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
  }

  if (!picker || !trigger || !currentLabel || !currentFlag || !menu || options.length === 0) {
    return;
  }

  const savedLanguage = safeStorageGet("extremo-language");
  const browserLanguage = navigator.language?.slice(0, 2);
  const initialLanguage = resolveLanguage(savedLanguage || browserLanguage || fallbackLanguage);

  applyLanguage(initialLanguage);

  trigger.addEventListener("click", () => {
    toggleMenu();
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.languageOption);
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      trigger.focus();
    }
  });
};
