// =============================================
// SINAV TIMER 2026 - Application Logic
// Kaynak: ÖSYM 2026 Sınav Takvimi
// =============================================

// -----------------------------
// Sınav Veri Modeli (PDF'den alındı)
// -----------------------------

const exams = [
  // ========== e-YDS ==========
  { id: 'e-yds-2026-1', group: 'e-YDS', title: 'e-YDS 2026/1 (İngilizce)', date: '2026-01-24' },
  { id: 'e-yds-2026-2', group: 'e-YDS', title: 'e-YDS 2026/2 (İngilizce)', date: '2026-02-14' },
  { id: 'e-yds-2026-3', group: 'e-YDS', title: 'e-YDS 2026/3 (Farsça/Yunanca/Bulgarca)', date: '2026-04-18' },
  { id: 'e-yds-2026-4', group: 'e-YDS', title: 'e-YDS 2026/4 (İngilizce)', date: '2026-05-02' },
  { id: 'e-yds-2026-11', group: 'e-YDS', title: 'e-YDS 2026/11 (Farsça/İngilizce)', date: '2026-10-17' },
  { id: 'e-yds-2026-12', group: 'e-YDS', title: 'e-YDS 2026/12 (İngilizce)', date: '2026-12-19' },

  // ========== e-TEP ==========
  { id: 'e-tep-2026-1', group: 'e-TEP', title: 'e-TEP 2026/1 (İngilizce)', date: '2026-01-31' },
  { id: 'e-tep-2026-4', group: 'e-TEP', title: 'e-TEP 2026/4 (İngilizce)', date: '2026-11-14' },

  // ========== YDS ==========
  { id: 'yds-2026-1', group: 'YDS', title: '2026-YDS/1', date: '2026-04-05' },
  { id: 'yds-2026-2', group: 'YDS', title: '2026-YDS/2', date: '2026-11-22' },

  // ========== YÖKDİL ==========
  { id: 'yokdil-2026-1', group: 'YÖKDİL', title: '2026-YÖKDİL/1', date: '2026-03-08' },
  { id: 'yokdil-2026-2', group: 'YÖKDİL', title: '2026-YÖKDİL/2', date: '2026-08-02' },

  // ========== e-YÖKDİL ==========
  { id: 'e-yokdil-2026-3', group: 'e-YÖKDİL', title: 'e-YÖKDİL 2026/3 (İngilizce-Fen)', date: '2026-06-06' },

  // ========== ALES ==========
  { id: 'ales-2026-1', group: 'ALES', title: '2026-ALES/1', date: '2026-05-10' },
  { id: 'ales-2026-2', group: 'ALES', title: '2026-ALES/2', date: '2026-07-26' },
  { id: 'ales-2026-3', group: 'ALES', title: '2026-ALES/3', date: '2026-11-29' },

  // ========== KPSS ==========
  { id: 'kpss-2026-lisans', group: 'KPSS', title: 'KPSS 2026 Lisans (GY-GK)', date: '2026-09-06' },
  { id: 'kpss-2026-onlisans', group: 'KPSS', title: 'KPSS 2026 Ön Lisans', date: '2026-10-04' },
  { id: 'kpss-2026-ortaogretim', group: 'KPSS', title: 'KPSS 2026 Ortaöğretim', date: '2026-10-25' },
  { id: 'kpss-2026-dhbt', group: 'KPSS', title: 'KPSS 2026 DHBT (Din Hizmetleri)', date: '2026-11-01' },

  // ========== MSÜ ==========
  { id: 'msu-2026', group: 'MSÜ', title: '2026-MSÜ (Askeri Öğrenci Aday Belirleme)', date: '2026-03-01' },

  // ========== GUY ==========
  { id: 'guy-2026', group: 'GUY', title: '2026-GUY (Gelir Uzman Yardımcılığı)', date: '2026-03-07' },

  // ========== MEB-EKYS ==========
  { id: 'meb-ekys-2026', group: 'MEB-EKYS', title: '2026-MEB-EKYS (Eğitim Kurumları Yönetici Seçme)', date: '2026-03-15' },

  // ========== TUS ==========
  { id: 'tus-2026-1', group: 'TUS', title: '2026-TUS 1. Dönem (Tıpta Uzmanlık)', date: '2026-03-15' },

  // ========== STS ==========
  { id: 'sts-tip-2026-1', group: 'STS', title: '2026-STS Tıp Doktorluğu 1. Dönem', date: '2026-03-15' },
  { id: 'sts-dis-2026-2', group: 'STS', title: '2026-STS Diş Hekimliği 2. Dönem', date: '2026-11-01' },
  { id: 'sts-eczacilik-2026', group: 'STS', title: '2026-STS Eczacılık', date: '2026-11-07' },

  // ========== DİB-MBSTS ==========
  { id: 'dib-mbsts-2026', group: 'DİB-MBSTS', title: '2026-DİB-MBSTS (Diyanet Mesleki Bilgiler)', date: '2026-03-29' },

  // ========== TR-YÖS ==========
  { id: 'tr-yos-2026-1', group: 'TR-YÖS', title: '2026-TR-YÖS/1', date: '2026-04-12' },
  { id: 'tr-yos-2026-2', group: 'TR-YÖS', title: '2026-TR-YÖS/2', date: '2026-10-11' },

  // ========== EKPSS ==========
  { id: 'ekpss-2026', group: 'EKPSS', title: '2026-EKPSS (Engelli Kamu Personeli Seçme)', date: '2026-04-19' },

  // ========== HMGS ==========
  { id: 'hmgs-2026-2', group: 'HMGS', title: '2026-HMGS/2 (Hukuk Mesleklerine Giriş)', date: '2026-09-27' },

  // ========== İYÖS ==========
  { id: 'iyos-2026', group: 'İYÖS', title: '2026-İYÖS (İdari Yargı Ön Sınavı)', date: '2026-09-27' },

  // ========== BKUBTS ==========
  { id: 'bkubts-2026', group: 'BKUBTS', title: '2026-BKUBTS (Bitki Koruma Ürünleri Bayi/Toptancılık)', date: '2026-10-18' },

  // ========== DUS ==========
  { id: 'dus-2026-2', group: 'DUS', title: '2026-DUS 2. Dönem (Diş Hekimliği Uzmanlık)', date: '2026-11-01' },

  // ========== EUS ==========
  { id: 'eus-2026', group: 'EUS', title: '2026-EUS (Eczacılıkta Uzmanlık)', date: '2026-11-07' },
];

// Grup listesi (filtreleme için)
const examGroups = [
  { value: 'all', label: 'Tümü' },
  { value: 'e-YDS', label: 'e-YDS' },
  { value: 'e-TEP', label: 'e-TEP' },
  { value: 'YDS', label: 'YDS' },
  { value: 'YÖKDİL', label: 'YÖKDİL' },
  { value: 'e-YÖKDİL', label: 'e-YÖKDİL' },
  { value: 'ALES', label: 'ALES' },
  { value: 'KPSS', label: 'KPSS' },
  { value: 'MSÜ', label: 'MSÜ' },
  { value: 'GUY', label: 'GUY' },
  { value: 'MEB-EKYS', label: 'MEB-EKYS' },
  { value: 'TUS', label: 'TUS' },
  { value: 'STS', label: 'STS' },
  { value: 'DİB-MBSTS', label: 'DİB-MBSTS' },
  { value: 'TR-YÖS', label: 'TR-YÖS' },
  { value: 'EKPSS', label: 'EKPSS' },
  { value: 'HMGS', label: 'HMGS' },
  { value: 'İYÖS', label: 'İYÖS' },
  { value: 'BKUBTS', label: 'BKUBTS' },
  { value: 'DUS', label: 'DUS' },
  { value: 'EUS', label: 'EUS' },
];

// -----------------------------
// Tarih Yardımcıları (UTC-midnight)
// -----------------------------

function parseISOAsUtcMidnight(isoDate) {
  const [year, month, day] = isoDate.split('-').map((p) => Number(p));
  return new Date(Date.UTC(year, month - 1, day));
}

function truncateToUtcMidnight(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function daysBetween(start, end) {
  const oneDayMs = 24 * 60 * 60 * 1000;
  const startMid = truncateToUtcMidnight(start);
  const endMid = truncateToUtcMidnight(end);
  return Math.round((endMid.getTime() - startMid.getTime()) / oneDayMs);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatDateTr(date) {
  const d = typeof date === 'string' ? parseISOAsUtcMidnight(date) : date;
  return d.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function formatDateShort(date) {
  const d = typeof date === 'string' ? parseISOAsUtcMidnight(date) : date;
  return d.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
  });
}

// -----------------------------
// Hesaplama Mantığı
// -----------------------------

const START_DATE = parseISOAsUtcMidnight('2026-01-01');

function computeFields(exam, today) {
  const examDateUtc = parseISOAsUtcMidnight(exam.date);
  const totalDaysRaw = daysBetween(START_DATE, examDateUtc);
  const remainingDaysRaw = daysBetween(today, examDateUtc);

  const totalDays = totalDaysRaw <= 0 ? 0 : totalDaysRaw;
  const remainingDays = remainingDaysRaw;

  let percentElapsed = 0;

  if (totalDays <= 0) {
    percentElapsed = remainingDays >= 0 ? 0 : 100;
  } else {
    const elapsedDays = clamp(totalDays - remainingDays, 0, totalDays);
    percentElapsed = clamp((elapsedDays / totalDays) * 100, 0, 100);
  }

  const isPast = remainingDays < 0;
  const isToday = remainingDays === 0;

  // Hafta hesabı
  const weeksRemaining = Math.floor(remainingDays / 7);
  const daysAfterWeeks = remainingDays % 7;

  return {
    ...exam,
    examDateUtc,
    totalDays,
    remainingDays,
    percentElapsed,
    isPast,
    isToday,
    weeksRemaining,
    daysAfterWeeks,
  };
}

// -----------------------------
// Filtreleme / Sıralama
// -----------------------------

function applyFiltersAndSort(computedExams, filters) {
  const { group, query, showPast, sort } = filters;
  const q = query.trim().toLowerCase();

  let result = computedExams.filter((exam) => {
    if (group && group !== 'all' && exam.group !== group) return false;
    if (q && !exam.title.toLowerCase().includes(q)) return false;
    if (!showPast && exam.remainingDays < 0) return false;
    return true;
  });

  result.sort((a, b) => {
    if (sort === 'upcoming') {
      return a.remainingDays - b.remainingDays;
    }
    if (sort === 'date') {
      return a.examDateUtc - b.examDateUtc;
    }
    if (sort === 'group') {
      if (a.group === b.group) {
        return a.examDateUtc - b.examDateUtc;
      }
      return a.group.localeCompare(b.group, 'tr');
    }
    return 0;
  });

  return result;
}

function pickDefaultSelectedExamId(visibleExams) {
  if (visibleExams.length === 0) return null;

  const future = visibleExams.filter((e) => e.remainingDays >= 0);
  if (future.length === 0) {
    return visibleExams[0].id;
  }

  future.sort((a, b) => a.remainingDays - b.remainingDays);
  return future[0].id;
}

// -----------------------------
// LocalStorage Anahtarları
// -----------------------------

const STORAGE_KEYS = {
  theme: 'exam-timer-theme',
  selectedExam: 'exam-timer-selected-exam',
  filters: 'exam-timer-filters',
  currentView: 'exam-timer-current-view',
};

// -----------------------------
// Tema Mantığı
// -----------------------------

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function initTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
  const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
  applyTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  window.localStorage.setItem(STORAGE_KEYS.theme, next);
  applyTheme(next);
}

// -----------------------------
// LocalStorage: Seçili Sınav
// -----------------------------

function saveSelectedExam(examId) {
  if (examId) {
    window.localStorage.setItem(STORAGE_KEYS.selectedExam, examId);
  }
}

function loadSelectedExam() {
  return window.localStorage.getItem(STORAGE_KEYS.selectedExam);
}

// -----------------------------
// LocalStorage: Filtreler
// -----------------------------

function saveFilters(filters) {
  window.localStorage.setItem(STORAGE_KEYS.filters, JSON.stringify(filters));
}

function loadFilters() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.filters);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Filtreler yüklenemedi:', e);
  }
  return null;
}

// -----------------------------
// View Management
// -----------------------------

function showView(viewName) {
  const views = document.querySelectorAll('.view');
  const tabs = document.querySelectorAll('.nav-tab');

  views.forEach((v) => v.classList.remove('active'));
  tabs.forEach((t) => t.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  const targetTab = document.querySelector(`.nav-tab[data-view="${viewName}"]`);

  if (targetView) targetView.classList.add('active');
  if (targetTab) targetTab.classList.add('active');

  state.currentView = viewName;
  window.localStorage.setItem(STORAGE_KEYS.currentView, viewName);
}

function showListView() {
  showView('list');
  document.getElementById('nav-detail-tab').style.display = 'none';
}

function showDetailView(examId) {
  const exam = state.computedExams.find((e) => e.id === examId);
  if (!exam) return;

  state.selectedExamId = examId;
  saveSelectedExam(examId);

  // Update nav tab
  const detailTab = document.getElementById('nav-detail-tab');
  const detailTitle = document.getElementById('nav-detail-title');
  detailTab.style.display = 'flex';
  detailTitle.textContent = exam.title;

  // Render detail view
  renderDetailView(exam);

  showView('detail');
}

// -----------------------------
// Grup Filtresi Populate
// -----------------------------

function populateGroupFilter() {
  const groupFilterEl = document.getElementById('group-filter');
  groupFilterEl.innerHTML = '';

  examGroups.forEach((grp) => {
    const option = document.createElement('option');
    option.value = grp.value;
    option.textContent = grp.label;
    groupFilterEl.appendChild(option);
  });
}

// -----------------------------
// Render Fonksiyonları
// -----------------------------

function renderList(visibleExams, selectedExamId) {
  const listEl = document.getElementById('exam-list');
  listEl.innerHTML = '';

  if (visibleExams.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <div class="empty-icon">📭</div>
      <div class="empty-text">Filtrelere uygun sınav bulunamadı.</div>
    `;
    listEl.appendChild(empty);
    return;
  }

  visibleExams.forEach((exam, index) => {
    const card = document.createElement('article');
    card.className = 'exam-card';
    if (exam.id === selectedExamId) {
      card.classList.add('exam-card-selected');
    }
    card.dataset.examId = exam.id;
    card.style.animationDelay = `${index * 0.05}s`;

    // Karta tıklanınca detay sayfasına git
    card.addEventListener('click', () => {
      showDetailView(exam.id);
    });

    // Header
    const header = document.createElement('div');
    header.className = 'exam-card-header';

    const titleEl = document.createElement('h3');
    titleEl.className = 'exam-title';
    titleEl.textContent = exam.title;

    const groupEl = document.createElement('span');
    groupEl.className = 'exam-group';
    groupEl.textContent = exam.group;

    header.appendChild(titleEl);
    header.appendChild(groupEl);

    // Countdown display
    const countdown = document.createElement('div');
    countdown.className = 'exam-countdown';
    
    if (exam.isPast) {
      countdown.classList.add('countdown-past');
    } else if (exam.isToday) {
      countdown.classList.add('countdown-today');
    }

    const countdownNumber = document.createElement('div');
    countdownNumber.className = 'countdown-number';

    const countdownLabel = document.createElement('div');
    countdownLabel.className = 'countdown-label';

    if (exam.remainingDays < 0) {
      countdownNumber.textContent = Math.abs(exam.remainingDays);
      countdownLabel.textContent = 'gün önce geçti';
    } else if (exam.remainingDays === 0) {
      countdownNumber.textContent = '🎯';
      countdownLabel.textContent = 'bugün!';
    } else {
      countdownNumber.textContent = exam.remainingDays;
      countdownLabel.textContent = 'gün kaldı';
    }

    countdown.appendChild(countdownNumber);
    countdown.appendChild(countdownLabel);

    // Meta info
    const meta = document.createElement('div');
    meta.className = 'exam-meta';

    const datePill = document.createElement('span');
    datePill.className = 'meta-pill';
    datePill.innerHTML = `<span class="meta-pill-icon">📅</span> ${formatDateTr(exam.date)}`;

    meta.appendChild(datePill);

    // Progress bar
    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'progress-wrapper';

    const progressHeader = document.createElement('div');
    progressHeader.className = 'progress-header';

    const progressLabel = document.createElement('span');
    progressLabel.className = 'progress-label';
    progressLabel.textContent = 'İlerleme';

    const progressPercent = document.createElement('span');
    progressPercent.className = 'progress-percent';
    progressPercent.textContent = `%${exam.percentElapsed.toFixed(0)}`;

    progressHeader.appendChild(progressLabel);
    progressHeader.appendChild(progressPercent);

    const progressTrack = document.createElement('div');
    progressTrack.className = 'progress-track';

    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.width = `${exam.percentElapsed.toFixed(2)}%`;

    progressTrack.appendChild(progressFill);

    progressWrapper.appendChild(progressHeader);
    progressWrapper.appendChild(progressTrack);

    // Assemble card
    card.appendChild(header);
    card.appendChild(countdown);
    card.appendChild(meta);
    card.appendChild(progressWrapper);

    listEl.appendChild(card);
  });
}

// -----------------------------
// Detail View Render
// -----------------------------

function renderDetailView(exam) {
  const container = document.getElementById('detail-container');

  let countdownClass = '';
  if (exam.isPast) countdownClass = 'countdown-past';
  else if (exam.isToday) countdownClass = 'countdown-today';

  let countdownNumberText = '';
  let countdownLabelText = '';

  if (exam.remainingDays < 0) {
    countdownNumberText = Math.abs(exam.remainingDays);
    countdownLabelText = 'GÜN ÖNCE GEÇTİ';
  } else if (exam.remainingDays === 0) {
    countdownNumberText = '🎯';
    countdownLabelText = 'BUGÜN SINAV VAR!';
  } else {
    countdownNumberText = exam.remainingDays;
    countdownLabelText = 'GÜN KALDI';
  }

  // Hafta bilgisi
  let weekInfo = '';
  if (exam.remainingDays > 0 && exam.weeksRemaining > 0) {
    weekInfo = `${exam.weeksRemaining} hafta ${exam.daysAfterWeeks} gün`;
  }

  container.innerHTML = `
    <div class="detail-header">
      <h1 class="detail-title">${exam.title}</h1>
      <span class="detail-group">${exam.group}</span>
    </div>

    <div class="detail-countdown ${countdownClass}">
      <div class="detail-countdown-number">${countdownNumberText}</div>
      <div class="detail-countdown-label">${countdownLabelText}</div>
    </div>

    <div class="detail-info-grid">
      <div class="detail-info-card">
        <div class="detail-info-icon">📅</div>
        <div class="detail-info-value">${formatDateTr(exam.date)}</div>
        <div class="detail-info-label">Sınav Tarihi</div>
      </div>

      <div class="detail-info-card">
        <div class="detail-info-icon">📊</div>
        <div class="detail-info-value">${exam.totalDays}</div>
        <div class="detail-info-label">Toplam Gün (1 Ocak'tan)</div>
      </div>

      ${weekInfo ? `
      <div class="detail-info-card">
        <div class="detail-info-icon">📆</div>
        <div class="detail-info-value">${weekInfo}</div>
        <div class="detail-info-label">Hafta Bazında</div>
      </div>
      ` : ''}

      <div class="detail-info-card">
        <div class="detail-info-icon">⏱️</div>
        <div class="detail-info-value">%${exam.percentElapsed.toFixed(1)}</div>
        <div class="detail-info-label">Tamamlanan</div>
      </div>
    </div>

    <div class="detail-progress">
      <div class="detail-progress-header">
        <span class="detail-progress-label">İlerleme Durumu</span>
        <span class="detail-progress-percent">%${exam.percentElapsed.toFixed(0)}</span>
      </div>
      <div class="detail-progress-track">
        <div class="detail-progress-fill" style="width: ${exam.percentElapsed.toFixed(2)}%"></div>
      </div>
      <div class="detail-progress-status">
        <span>1 Ocak 2026</span>
        <span>${exam.isPast ? '✅ Tamamlandı' : formatDateTr(exam.date)}</span>
      </div>
    </div>
  `;
}

// -----------------------------
// Uygulama Durumu
// -----------------------------

const state = {
  today: truncateToUtcMidnight(new Date()),
  computedExams: [],
  visibleExams: [],
  selectedExamId: null,
  currentView: 'list',
  filters: {
    group: 'all',
    query: '',
    sort: 'upcoming',
    showPast: false,
  },
};

// -----------------------------
// Güncelleme Akışları
// -----------------------------

function recomputeAll() {
  state.computedExams = exams.map((exam) => computeFields(exam, state.today));
  state.visibleExams = applyFiltersAndSort(state.computedExams, state.filters);

  // Seçili sınav hala görünürde mi kontrol et
  const selectedStillVisible = state.visibleExams.some((e) => e.id === state.selectedExamId);
  
  if (!state.selectedExamId || !selectedStillVisible) {
    const savedExamId = loadSelectedExam();
    const savedStillVisible = savedExamId && state.visibleExams.some((e) => e.id === savedExamId);
    
    if (savedStillVisible) {
      state.selectedExamId = savedExamId;
    } else {
      state.selectedExamId = pickDefaultSelectedExamId(state.visibleExams);
    }
  }

  renderList(state.visibleExams, state.selectedExamId);

  // Eğer detail view açıksa, onu da güncelle
  if (state.currentView === 'detail' && state.selectedExamId) {
    const exam = state.computedExams.find((e) => e.id === state.selectedExamId);
    if (exam) {
      renderDetailView(exam);
    }
  }
}

function updateTodayAndRecompute() {
  state.today = truncateToUtcMidnight(new Date());
  recomputeAll();
  updateTodayLabel();
}

// -----------------------------
// UI State Sync
// -----------------------------

function syncUIWithFilters() {
  const groupFilterEl = document.getElementById('group-filter');
  const searchInputEl = document.getElementById('search-input');
  const sortSelectEl = document.getElementById('sort-select');
  const showPastEl = document.getElementById('show-past-toggle');

  groupFilterEl.value = state.filters.group;
  searchInputEl.value = state.filters.query;
  sortSelectEl.value = state.filters.sort;
  showPastEl.checked = state.filters.showPast;
}

// -----------------------------
// Event Handlers
// -----------------------------

function bindEvents() {
  const groupFilterEl = document.getElementById('group-filter');
  const searchInputEl = document.getElementById('search-input');
  const sortSelectEl = document.getElementById('sort-select');
  const showPastEl = document.getElementById('show-past-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const backBtn = document.getElementById('back-to-list');
  const navTabs = document.querySelectorAll('.nav-tab[data-view]');

  // Navigation tabs
  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      if (view === 'list') {
        showListView();
      } else if (view === 'detail' && state.selectedExamId) {
        showDetailView(state.selectedExamId);
      }
    });
  });

  // Back button
  backBtn.addEventListener('click', () => {
    showListView();
  });

  // Filters
  groupFilterEl.addEventListener('change', (e) => {
    state.filters.group = e.target.value;
    saveFilters(state.filters);
    recomputeAll();
  });

  searchInputEl.addEventListener('input', (e) => {
    state.filters.query = e.target.value;
    saveFilters(state.filters);
    recomputeAll();
  });

  sortSelectEl.addEventListener('change', (e) => {
    state.filters.sort = e.target.value;
    saveFilters(state.filters);
    recomputeAll();
  });

  showPastEl.addEventListener('change', (e) => {
    state.filters.showPast = e.target.checked;
    saveFilters(state.filters);
    recomputeAll();
  });

  // Theme toggle
  themeToggleBtn.addEventListener('click', () => {
    toggleTheme();
  });
}

function updateTodayLabel() {
  const el = document.getElementById('today-label');
  const today = state.today;
  el.textContent = today.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// -----------------------------
// Başlangıç
// -----------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Tema yükle
  initTheme();
  
  // Bugünü ayarla
  state.today = truncateToUtcMidnight(new Date());
  
  // Kaydedilmiş filtreleri yükle
  const savedFilters = loadFilters();
  if (savedFilters) {
    state.filters = { ...state.filters, ...savedFilters };
  }
  
  // Kaydedilmiş sınavı yükle
  const savedExamId = loadSelectedExam();
  if (savedExamId) {
    state.selectedExamId = savedExamId;
  }
  
  // Grup filtresi seçeneklerini doldur
  populateGroupFilter();
  
  // UI'ı filtrelerle senkronize et
  syncUIWithFilters();
  
  // Event'leri bağla
  bindEvents();
  
  // İlk hesaplama ve render
  recomputeAll();
  updateTodayLabel();

  // Periyodik güncelleme (her dakika)
  setInterval(updateTodayAndRecompute, 60_000);
});
