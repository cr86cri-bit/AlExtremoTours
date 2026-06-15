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
      "packages.kicker": "Paquetes",
      "packages.title": "Elige tu ruta",
      "packages.classic.label": "Full day",
      "packages.classic.title": "Salar Clasico",
      "packages.classic.copy": "Ideal para conocer los puntos principales en una jornada bien aprovechada.",
      "packages.classic.item1": "Cementerio de trenes",
      "packages.classic.item2": "Ojos de sal y monticulos",
      "packages.classic.item3": "Atardecer en el Salar",
      "packages.essential.label": "Recomendado",
      "packages.essential.title": "Salar Esencial",
      "packages.essential.copy": "Una ruta equilibrada para vivir paisaje, cultura local y tiempo suficiente para fotografias.",
      "packages.essential.item1": "Transporte 4x4",
      "packages.essential.item2": "Paradas fotograficas guiadas",
      "packages.essential.item3": "Asesoria antes del viaje",
      "packages.private.label": "Privado",
      "packages.private.title": "Ruta a Medida",
      "packages.private.copy": "Para parejas, familias o grupos que buscan un itinerario mas flexible.",
      "packages.private.item1": "Horarios coordinados",
      "packages.private.item2": "Paradas personalizadas",
      "packages.private.item3": "Soporte directo",
      "trust.kicker": "Por que elegirnos",
      "trust.title": "Atencion cercana, ruta clara y respeto por el territorio.",
      "stats.transport": "Transporte para terreno altoandino",
      "stats.response": "Respuesta por WhatsApp",
      "stats.photo": "Paisajes para fotografia",
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
      "packages.kicker": "Tours",
      "packages.title": "Choose your route",
      "packages.classic.label": "Full day",
      "packages.classic.title": "Classic Salt Flat",
      "packages.classic.copy": "Ideal for discovering the main highlights in one well-paced day.",
      "packages.classic.item1": "Train cemetery",
      "packages.classic.item2": "Salt eyes and mounds",
      "packages.classic.item3": "Sunset on the Salt Flat",
      "packages.essential.label": "Recommended",
      "packages.essential.title": "Essential Salt Flat",
      "packages.essential.copy": "A balanced route for scenery, local culture and enough time for photography.",
      "packages.essential.item1": "4x4 transport",
      "packages.essential.item2": "Guided photo stops",
      "packages.essential.item3": "Advice before the trip",
      "packages.private.label": "Private",
      "packages.private.title": "Custom Route",
      "packages.private.copy": "For couples, families or groups looking for a more flexible itinerary.",
      "packages.private.item1": "Coordinated schedules",
      "packages.private.item2": "Personalized stops",
      "packages.private.item3": "Direct support",
      "trust.kicker": "Why choose us",
      "trust.title": "Close attention, clear routes and respect for the territory.",
      "stats.transport": "Transport for highland terrain",
      "stats.response": "WhatsApp response",
      "stats.photo": "Landscapes for photography",
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
      "packages.kicker": "Pacotes",
      "packages.title": "Escolha sua rota",
      "packages.classic.label": "Dia inteiro",
      "packages.classic.title": "Salar Classico",
      "packages.classic.copy": "Ideal para conhecer os principais pontos em um dia bem aproveitado.",
      "packages.classic.item1": "Cemiterio de trens",
      "packages.classic.item2": "Olhos de sal e monticulos",
      "packages.classic.item3": "Por do sol no Salar",
      "packages.essential.label": "Recomendado",
      "packages.essential.title": "Salar Essencial",
      "packages.essential.copy": "Uma rota equilibrada para viver paisagem, cultura local e tempo suficiente para fotografias.",
      "packages.essential.item1": "Transporte 4x4",
      "packages.essential.item2": "Paradas fotograficas guiadas",
      "packages.essential.item3": "Assessoria antes da viagem",
      "packages.private.label": "Privado",
      "packages.private.title": "Rota Sob Medida",
      "packages.private.copy": "Para casais, familias ou grupos que procuram um itinerario mais flexivel.",
      "packages.private.item1": "Horarios coordenados",
      "packages.private.item2": "Paradas personalizadas",
      "packages.private.item3": "Suporte direto",
      "trust.kicker": "Por que nos escolher",
      "trust.title": "Atendimento proximo, rota clara e respeito pelo territorio.",
      "stats.transport": "Transporte para terreno altoandino",
      "stats.response": "Resposta por WhatsApp",
      "stats.photo": "Paisagens para fotografia",
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
