/* ==========================================================================
   ДЭВИД ПИЛИЯ — ЛОГИКА ИНТЕРАКТИВНОГО САЙТА-ПОРТФОЛИО
   Фон: Своды Парка Гуэль (Гауди) × Apple iOS Liquid Glass
   ========================================================================== */

const EXPERIENCE_PLAQUES = [
  {
    id: "vivarium-edu",
    title: "VIVARIUM® — 2 000+ студентов и корпоративные тренинги",
    text: "Сооснователь образовательной системы и автор исходной методики (Театр × Йога × Психология). Более 2 000 выпускников, офлайн-группы для взрослых и корпоративные тренинги по коммуникации, лидерству и голосу для команд Яндекса, Сбера, РЖД и World Fitness.",
    gallery: []
  },
  {
    id: "forum-natscentr",
    title: "Международный форум «Новая философия воспитания» — Национальный центр «Россия»",
    text: "Приглашённый спикер и ведущий интерактивного мастер-класса «Актёрское мастерство как метод воспитания лидерства и эмпатии» на полный зал Национального центра «Россия» (Москва, 2025).",
    gallery: [
      { src: "assets/cases/natscentr_01_stage.jpg", caption: "Выступление на сцене Национального центра «Россия»" },
      { src: "assets/cases/natscentr_03_hall.jpg", caption: "Полный зал Международного форума «Новая философия воспитания»" },
      { src: "assets/cases/natscentr_02_topic.jpg", caption: "Мастер-класс «Актёрское мастерство как метод воспитания лидерства и эмпатии»" },
      { src: "assets/cases/natscentr_05_interactive.jpg", caption: "Интерактивная практика с участниками в зале" }
    ]
  },
  {
    id: "forum-school-theatres",
    title: "Всероссийский форум руководителей школьных театров",
    text: "Приглашённый спикер, преподаватель-практик и эксперт образовательного видеокурса (ФГБУ «Росдетцентр» при Минпросвещения РФ, тема «Искусство постановки и импровизация», потоки по ~50 человек).",
    gallery: [
      { src: "assets/cases/schoolforum_03_speaker.jpg", caption: "Дэвид Пилия во время ведения практического потока" },
      { src: "assets/cases/schoolforum_01_walk.jpg", caption: "Актёрский тренинг с участниками Всероссийского форума" },
      { src: "assets/cases/schoolforum_02_mirror.jpg", caption: "Упражнение на партнёрское внимание и импровизацию" },
      { src: "assets/cases/schoolforum_04_screen.jpg", caption: "Разбор инструментов постановки" }
    ]
  },
  {
    id: "fest-kreativnykh",
    title: "Форум «ФестКреативных» № 2",
    text: "Соавтор концепции, спикер и ведущий интерактивного мастер-класса-перформанса о темпоритме мегаполиса (Москва, ГБУ г. Москвы «ОКЦ ЮАО»).",
    gallery: [
      { src: "assets/cases/fest_02_david1.jpg", caption: "Дэвид Пилия на форуме «ФестКреативных» № 2" },
      { src: "assets/cases/fest_03_david2.jpg", caption: "Общение с участниками на площадке форума" },
      { src: "assets/cases/fest_01_banner.jpg", caption: "Форум «ФестКреативных» № 2" }
    ]
  },
  {
    id: "stage-plays",
    title: "Спектакли на московских сценах и 8 лет в МХАТ им. М. Горького",
    text: "8 лет работы ведущим артистом МХАТ им. М. Горького (также ставил внутри театра капустник и променад по «Синей птице»). Режиссёр-постановщик спектаклей «Новая квартира» К. Гольдони, «Почтигород» Дж. Кариани (Малая сцена Театра на Таганке) и спектакля по рассказам В. Шукшина (Театр Современной Драматургии).",
    gallery: [
      { src: "assets/cases/plays_01_goldoni.jpg", caption: "«Новая квартира» К. Гольдони — Малая сцена Театра на Таганке" },
      { src: "assets/cases/plays_02_cariani1.jpg", caption: "«Почтигород» Дж. Кариани — Малая сцена Театра на Таганке" },
      { src: "assets/cases/plays_03_cariani2.jpg", caption: "Сцена из спектакля «Почтигород»" },
      { src: "assets/cases/plays_04_shukshin.jpg", caption: "Спектакль по рассказам В. Шукшина — Театр Современной Драматургии" }
    ]
  },
  {
    id: "inverted-rome",
    title: "Иммерсивный перформанс «Перевёрнутый Рим» — Галерея «Здесь на Таганке»",
    text: "Автор художественной концепции и режиссёр-постановщик пластическо-драматического перформанса в пространстве современной галереи (по мотивам Дона Нигро, 13 исполнителей, 5 показов).",
    gallery: [
      { src: "assets/cases/rome_02_director.jpg", caption: "Дэвид Пилия на репетиции в галерее «Здесь на Таганке»" },
      { src: "assets/cases/rome_04_clingfilm.jpg", caption: "Пластическая сцена перформанса «Перевёрнутый Рим»" },
      { src: "assets/cases/rome_03_ensemble.jpg", caption: "Ансамбль из 13 исполнителей перформанса" },
      { src: "assets/cases/rome_01_afisha.jpg", caption: "Афиша и маршрут перформанса" }
    ]
  },
  {
    id: "zoltan-puppets",
    title: "Иммерсивный квест-перформанс «Театр кукол Золтана»",
    text: "Соавтор концепции, сценарист и режиссёр-постановщик коммерческого иммерсивного спектакля-квеста («Мастер Панин Парк», м. Киевская) — более 4 лет в постоянном репертуаре.",
    gallery: [
      { src: "assets/cases/zoltan_01_ensemble.jpg", caption: "Ансамбль персонажей спектакля-квеста «Театр кукол Золтана»" },
      { src: "assets/cases/zoltan_02_mannequins.jpg", caption: "Мастерская кукольника" },
      { src: "assets/cases/zoltan_03_cage.jpg", caption: "Актёрское взаимодействие в пространстве квеста" },
      { src: "assets/cases/zoltan_04_corridor.jpg", caption: "Сценография коридора масок" }
    ]
  },
  {
    id: "italian-wedding",
    title: "Иммерсивный гастроспектакль «Итальянская свадьба» — Отель «Националь»",
    text: "Автор идеи, соавтор сценария и режиссёр-постановщик гастрономического шоу в формате «7 блюд — 7 сцен» с панорамными проекциями 360° для ресторана «Калейдоскоп».",
    gallery: [
      { src: "assets/cases/gastro_02_dinner.jpg", caption: "Концепт свадебного ужина в зале с проекциями 360°" },
      { src: "assets/cases/gastro_01_terrace.jpg", caption: "Побережье Апулии — визуальный мир начала шоу" },
      { src: "assets/cases/gastro_04_courtyard.jpg", caption: "Апулийский дворик и окно для серенады" },
      { src: "assets/cases/gastro_05_hall360.jpg", caption: "Зал ресторана «Калейдоскоп» под проекции 360°" }
    ]
  },
  {
    id: "podcast-ob-it",
    title: "Разговорное шоу «ОБ IT» и сценарный креатив",
    text: "Соавтор идеи, сценарист, режиссёр и соведущий разговорного видеошоу об ИИ, технологиях и человеке (снят пилотный выпуск); разработка комедийных рекламных спеков.",
    gallery: [
      { src: "assets/cases/obit_01_studio.jpg", caption: "В студии на съёмках пилотного выпуска шоу «ОБ IT»" },
      { src: "assets/cases/obit_02_logo3d.jpg", caption: "3D-заставка шоу «ОБ IT»" }
    ]
  }
];

const DIPLOMAS_LIST = [
  {
    src: "assets/diplomas/diploma_01_shchuka.jpg",
    title: "Красный диплом с отличием — ТИ им. Бориса Щукина",
    desc: "Факультет актёрского искусства (2018). Председатель ГЭК — О. Е. Меньшиков, ректор — Е. В. Князев."
  },
  {
    src: "assets/diplomas/diploma_02_std_actor.jpg",
    title: "Лауреат СТД РФ «Лучшая мужская роль второго плана»",
    desc: "VII Московский театральный фестиваль СТД РФ «Московская обочина» (спектакль «Игроки» Н. В. Гоголя)."
  },
  {
    src: "assets/diplomas/diploma_03_std_ensemble.jpg",
    title: "Лауреат СТД РФ «Лучший актёрский ансамбль фестиваля»",
    desc: "VII Московский театральный фестиваль СТД РФ «Московская обочина»."
  },
  {
    src: "assets/diplomas/diploma_05_natscentr_russia.jpg",
    title: "Благодарственное письмо — Наццентр «Россия» / Росдетцентр",
    desc: "Международный форум «Новая философия воспитания» (2025)."
  },
  {
    src: "assets/diplomas/diploma_04_rosdetcentr_theatre.jpg",
    title: "Благодарственное письмо — Минпросвещения РФ / Росдетцентр",
    desc: "Всероссийский форум руководителей школьных театров (2025)."
  },
  {
    src: "assets/diplomas/diploma_06_fest_kreativnykh.jpg",
    title: "Благодарность — ГБУ г. Москвы «ОКЦ ЮАО»",
    desc: "Форум «ФестКреативных» № 2 (2026)."
  }
];

/* ==========================================================================
   1. RENDER SEPARATE LIQUID GLASS PLAQUES FOR EACH EXPERIENCE CASE
   ========================================================================== */
const experienceStack = document.getElementById("experienceStack");

if (experienceStack) {
  experienceStack.innerHTML = EXPERIENCE_PLAQUES.map(item => {
    const hasPhotos = item.gallery && item.gallery.length > 0;
    const isThree = item.gallery.length === 3;
    const colsClass =
      item.gallery.length === 2
        ? "grid-cols-2"
        : isThree
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2 lg:grid-cols-4";

    const photosHtml = hasPhotos
      ? `<div class="grid ${colsClass} gap-2.5 sm:gap-3.5 mt-4 sm:mt-5">
          ${item.gallery
            .map((g, idx) => {
              const spanAspect =
                isThree && idx === 2
                  ? "col-span-2 sm:col-span-1 aspect-[16/9] sm:aspect-[4/3]"
                  : "aspect-[4/3]";
              return `
              <button
                type="button"
                onclick="openCaseGallery('${item.id}', ${idx})"
                class="ios-photo ${spanAspect} w-full cursor-pointer block text-left"
                title="${g.caption}"
              >
                <img src="${g.src}" alt="${g.caption}" loading="lazy" class="w-full h-full object-cover" />
              </button>
            `;
            })
            .join("")}
        </div>`
      : "";

    return `
      <article class="liquid-capsule p-5 sm:p-8">
        <h3 class="text-lg sm:text-2xl font-bold tracking-tight leading-snug" style="color: var(--text-primary);">
          ${item.title}
        </h3>
        <p class="text-sm sm:text-base leading-relaxed mt-2 max-w-4xl" style="color: var(--text-secondary);">
          ${item.text}
        </p>
        ${photosHtml}
      </article>
    `;
  }).join("");
}

/* ==========================================================================
   2. RENDER DIPLOMAS GALLERY
   ========================================================================== */
const diplomasGrid = document.getElementById("diplomasGrid");
if (diplomasGrid) {
  diplomasGrid.innerHTML = DIPLOMAS_LIST.map(
    (d, i) => `
    <div onclick="openDiplomaLightbox(${i})" class="liquid-card p-3 sm:p-4 flex flex-col justify-between cursor-pointer group">
      <div class="ios-photo aspect-[4/3] mb-2.5 sm:mb-3.5 bg-black/20">
        <img src="${d.src}" alt="${d.title}" loading="lazy" class="w-full h-full object-cover" />
      </div>
      <div>
        <h4 class="text-xs sm:text-base lg:text-lg font-bold leading-snug mb-1" style="color: var(--text-primary);">${d.title}</h4>
        <p class="text-[11px] sm:text-sm leading-relaxed" style="color: var(--text-secondary);">${d.desc}</p>
      </div>
    </div>
  `
  ).join("");
}

/* ==========================================================================
   3. LIGHTBOX FOR PHOTOS & DIPLOMAS (WITH TOUCH SWIPE FOR MOBILE)
   ========================================================================== */
let currentGallery = [];
let currentPhotoIndex = 0;

const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
const lightboxNextBtn = document.getElementById("lightboxNextBtn");
const lightboxTouchArea = document.getElementById("lightboxTouchArea");

function updateLightboxView() {
  if (!currentGallery.length) return;
  const item = currentGallery[currentPhotoIndex];
  lightboxImg.src = item.src;
  lightboxCaption.textContent = item.caption || "";
  lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${currentGallery.length}`;
  const showNav = currentGallery.length > 1;
  if (lightboxPrevBtn) lightboxPrevBtn.style.display = showNav ? "flex" : "none";
  if (lightboxNextBtn) lightboxNextBtn.style.display = showNav ? "flex" : "none";
}

if (lightboxTouchArea) {
  let swipeStartX = 0;
  let swipeStartY = 0;
  lightboxTouchArea.addEventListener(
    "touchstart",
    e => {
      if (!e.touches.length) return;
      swipeStartX = e.touches[0].clientX;
      swipeStartY = e.touches[0].clientY;
    },
    { passive: true }
  );
  lightboxTouchArea.addEventListener(
    "touchend",
    e => {
      if (!e.changedTouches.length || currentGallery.length <= 1) return;
      const dx = e.changedTouches[0].clientX - swipeStartX;
      const dy = e.changedTouches[0].clientY - swipeStartY;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
        stepLightbox(dx < 0 ? 1 : -1);
      }
    },
    { passive: true }
  );
}

window.openCaseGallery = function (caseId, index) {
  const found = EXPERIENCE_PLAQUES.find(c => c.id === caseId);
  if (!found || !found.gallery.length) return;
  currentGallery = found.gallery;
  currentPhotoIndex = index;
  updateLightboxView();
  lightboxModal.classList.remove("hidden");
  lightboxModal.classList.add("flex");
};

window.openDiplomaLightbox = function (index) {
  currentGallery = DIPLOMAS_LIST.map(d => ({ src: d.src, caption: `${d.title} — ${d.desc}` }));
  currentPhotoIndex = index;
  updateLightboxView();
  lightboxModal.classList.remove("hidden");
  lightboxModal.classList.add("flex");
};

window.openPortraitLightbox = function (src, caption) {
  currentGallery = [{ src, caption }];
  currentPhotoIndex = 0;
  updateLightboxView();
  lightboxModal.classList.remove("hidden");
  lightboxModal.classList.add("flex");
};

window.closeLightbox = function () {
  lightboxModal.classList.add("hidden");
  lightboxModal.classList.remove("flex");
};

window.stepLightbox = function (dir) {
  if (!currentGallery.length) return;
  currentPhotoIndex = (currentPhotoIndex + dir + currentGallery.length) % currentGallery.length;
  updateLightboxView();
};

/* ==========================================================================
   4. VIDEO MODAL & INLINE VIDEO COORDINATION
   ========================================================================== */
const videoModal = document.getElementById("videoModal");
const modalVideoPlayer = document.getElementById("modalVideoPlayer");
const modalVideoTitle = document.getElementById("modalVideoTitle");

function pauseAllInlineVideos(exceptVideo = null) {
  document.querySelectorAll("video").forEach(v => {
    if (v !== exceptVideo && !v.paused) {
      v.pause();
    }
  });
}

document.querySelectorAll("video").forEach(v => {
  v.addEventListener("play", () => pauseAllInlineVideos(v));
});

window.openVideoModal = function (src, title) {
  pauseAllInlineVideos();
  modalVideoTitle.textContent = title;
  modalVideoPlayer.src = src;
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
  modalVideoPlayer.play().catch(() => {});
};

window.closeVideoModal = function () {
  modalVideoPlayer.pause();
  modalVideoPlayer.removeAttribute("src");
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeLightbox();
    closeVideoModal();
  } else if (!lightboxModal.classList.contains("hidden")) {
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  }
});

/* ==========================================================================
   5. FLOATING THEME SWITCHER (ТЁМНОЕ СТЕКЛО / СВЕТЛОЕ СТЕКЛО)
   ========================================================================== */
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggleLabel = document.getElementById("themeToggleLabel");

if (themeToggleBtn && themeToggleLabel) {
  themeToggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const isLight = html.getAttribute("data-theme") === "light";
    if (isLight) {
      html.removeAttribute("data-theme");
      themeToggleLabel.textContent = "Светлое стекло";
    } else {
      html.setAttribute("data-theme", "light");
      themeToggleLabel.textContent = "Тёмное стекло";
    }
  });
}

/* ==========================================================================
   6. EMBEDDED INTERACTIVE 3D RESUME SPINNER ("КРУТИЛКА" 360°)
   ========================================================================== */
(function initKrutilka() {
  const stage = document.getElementById("krutilkaStage");
  const rig = document.getElementById("krutilkaRig");
  if (!stage || !rig) return;

  let rotY = -16;
  let rotX = 5;
  let velY = 0;
  let velX = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoSpin = true;

  function render3D() {
    rig.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    const glareX = 50 + Math.sin((rotY * Math.PI) / 180) * 42;
    const glareY = 45 - Math.sin((rotX * Math.PI) / 180) * 38;
    const holoAngle = 115 + rotY * 0.85;

    rig.style.setProperty("--glare-x", `${glareX.toFixed(1)}%`);
    rig.style.setProperty("--glare-y", `${glareY.toFixed(1)}%`);
    rig.style.setProperty("--holo-angle", `${holoAngle.toFixed(1)}deg`);
  }

  function tick() {
    if (!dragging) {
      if (autoSpin) {
        rotY += 0.48;
        rotX = Math.sin(Date.now() * 0.0015) * 5.5;
      } else {
        rotY += velY;
        rotX += velX;
        velY *= 0.94;
        velX *= 0.9;
        rotX = Math.max(-26, Math.min(26, rotX));
      }
    }
    render3D();
    requestAnimationFrame(tick);
  }

  stage.addEventListener("pointerdown", e => {
    dragging = true;
    autoSpin = false;
    lastX = e.clientX;
    lastY = e.clientY;
    velX = 0;
    velY = 0;
    if (e.pointerType === "mouse") {
      stage.setPointerCapture(e.pointerId);
    }
  });

  stage.addEventListener("pointermove", e => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;

    if (e.pointerType === "mouse") {
      velY = dx * 0.48;
      velX = -dy * 0.32;
      rotY += velY;
      rotX = Math.max(-26, Math.min(26, rotX + velX));
    } else {
      /* На телефоне вращаем по горизонтали легко одним пальцем, не мешая вертикальному скроллу */
      velY = dx * 0.65;
      rotY += velY;
    }
  });

  const stopDrag = () => {
    dragging = false;
  };
  stage.addEventListener("pointerup", stopDrag);
  stage.addEventListener("pointercancel", stopDrag);

  requestAnimationFrame(tick);
})();

/* ==========================================================================
   7. COPY PHONE HELPER (+7 916 532-64-24)
   ========================================================================== */
window.copyPhone = function () {
  navigator.clipboard.writeText("+79165326424").then(() => {
    const toast = document.getElementById("copyToast");
    if (toast) {
      toast.classList.remove("opacity-0", "pointer-events-none");
      setTimeout(() => toast.classList.add("opacity-0", "pointer-events-none"), 2400);
    }
  });
};
