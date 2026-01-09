# ⏱️ Sınav Timer 2026

> **ÖSYM 2026 sınav takvimini takip eden modern, responsive tek sayfa web uygulaması.**

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Özellikler

- ✅ **Gerçek Zamanlı Geri Sayım** — Her sınava kalan gün sayısını dinamik olarak gösterir
- ✅ **Progress Bar** — 1 Ocak 2026'dan sınav tarihine kadar ilerlemeyi görselleştirir
- ✅ **Filtreleme & Sıralama** — 21 farklı sınav grubu, isim araması ve sıralama
- ✅ **Dark/Light Tema** — Göz yorgunluğunu azaltan tema desteği
- ✅ **Responsive Tasarım** — Mobil, tablet ve masaüstünde mükemmel görünüm
- ✅ **Glassmorphism UI** — Modern, şık ve profesyonel arayüz
- ✅ **LocalStorage Desteği** — Seçili sınav, filtreler ve tema tercihi kaydedilir
- ✅ **Backend Gerektirmez** — Tamamen statik, GitHub Pages'te çalışır

---

## 📅 Desteklenen Sınavlar (2026)

| Grup | Sınavlar |
|------|----------|
| **e-YDS** | 2026/1, 2026/2, 2026/3, 2026/4, 2026/11, 2026/12 |
| **e-TEP** | 2026/1, 2026/4 |
| **YDS** | 2026/1, 2026/2 |
| **YÖKDİL** | 2026/1, 2026/2 |
| **e-YÖKDİL** | 2026/3 |
| **ALES** | 2026/1, 2026/2, 2026/3 |
| **KPSS** | Lisans, Ön Lisans, Ortaöğretim, DHBT |
| **MSÜ** | 2026 |
| **GUY** | 2026 |
| **MEB-EKYS** | 2026 |
| **TUS** | 2026 1. Dönem |
| **STS** | Tıp Doktorluğu, Diş Hekimliği, Eczacılık |
| **DİB-MBSTS** | 2026 |
| **TR-YÖS** | 2026/1, 2026/2 |
| **EKPSS** | 2026 |
| **HMGS** | 2026/2 |
| **İYÖS** | 2026 |
| **BKUBTS** | 2026 |
| **DUS** | 2026 2. Dönem |
| **EUS** | 2026 |

**Toplam: 35+ Sınav**

---

## 🚀 Kurulum & Çalıştırma

### Yerel Çalıştırma (Windows)

1. **Dosyaları indirin** veya bu repoyu klonlayın:
   ```powershell
   git clone https://github.com/Atakan-Emre/sinav-timer.git
   cd sinav-timer
   ```

2. **Tarayıcıda açın:**
   - `index.html` dosyasına çift tıklayın
   - Veya VS Code'da Live Server eklentisi kullanın
   - Veya: `npx serve` komutuyla yerel sunucu başlatın

### GitHub Pages'te Yayınlama

1. **GitHub'da yeni repo oluşturun** (örn: `sinav-timer`)

2. **Dosyaları yükleyin:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Sinav Timer 2026"
   git branch -M main
   git remote add origin https://github.com/Atakan-Emre/sinav-timer.git
   git push -u origin main
   ```

3. **GitHub Pages'i etkinleştirin:**
   - Repo → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Save

4. **Birkaç dakika bekleyin**, siteniz şu adreste yayında olacak:
   ```
   https://atakan-emre.github.io/sinav-timer/
   ```

---

## 📁 Dosya Yapısı

```
sinav-timer/
├── index.html      # Ana HTML dosyası
├── styles.css      # Tüm stiller (tema, responsive, animasyonlar)
├── app.js          # Uygulama mantığı (veri, hesaplama, render)
├── 404.html        # GitHub Pages 404 sayfası
└── README.md       # Bu dosya
```

---

## 💾 LocalStorage Özellikleri

Uygulama aşağıdaki verileri tarayıcıda saklar:

| Anahtar | Açıklama |
|---------|----------|
| `exam-timer-theme` | Seçili tema (dark/light) |
| `exam-timer-selected-exam` | Son seçilen sınav ID'si |
| `exam-timer-filters` | Filtre ayarları (grup, sıralama, geçmiş göster) |

> Sayfa yenilendiğinde seçtiğiniz sınav ve filtreler korunur!

---

## 🎨 Teknik Detaylar

### Tarih Hesaplama Mantığı

```
Referans Tarihi: 1 Ocak 2026
Toplam Gün = Sınav Tarihi - 1 Ocak 2026
Kalan Gün = Sınav Tarihi - Bugün
İlerleme % = ((Toplam - Kalan) / Toplam) × 100
```

- UTC midnight yaklaşımı ile saat dilimi sorunları önlenir
- Her dakika otomatik güncelleme yapılır

### Tema Sistemi

- CSS değişkenleri (`--bg-base`, `--text-primary`, vb.)
- `data-theme` attribute ile tema değişimi
- LocalStorage'da tema tercihi saklanır

### Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 900px - 1200px
- **Mobile:** 640px altı

---

## 🛠️ Özelleştirme

### Yeni Sınav Eklemek

`app.js` dosyasındaki `exams` dizisine ekleyin:

```javascript
{
  id: 'yeni-sinav-2026',
  group: 'YENİ_GRUP',
  title: 'Yeni Sınav Adı',
  date: '2026-12-31'  // YYYY-MM-DD formatı
}
```

Yeni bir grup ekliyorsanız, `examGroups` dizisine de ekleyin:

```javascript
{ value: 'YENİ_GRUP', label: 'Yeni Grup' }
```

### Renkleri Değiştirmek

`styles.css` dosyasındaki `:root` ve `[data-theme='light']` bölümlerini düzenleyin.

---

## 📜 Lisans

MIT License — Dilediğiniz gibi kullanabilir, değiştirebilir ve dağıtabilirsiniz.

---

## 📚 Kaynak

Sınav tarihleri [ÖSYM 2026 Sınav Takvimi](https://www.osym.gov.tr) referans alınarak hazırlanmıştır.

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Yeni branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Push yapın (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

---

<p align="center">
  <b>⏱️ Sınavlarınızda başarılar! 📚</b>
</p>
