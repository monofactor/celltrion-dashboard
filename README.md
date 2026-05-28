# Celltrion Intelligence Dashboard

Gensenta DP / Fill-Finish CMO perspektifiyle aylık Celltrion intelligence raporu.

## Klasör yapısı

- **`dashboard.html`** — Açılır tek dosya. Tüm JSX + fontlar inline. Çift tıklayıp tarayıcıda aç.
- **`template.html`** — Build template'i (script src + font URL referansları ile)
- **`app.jsx`** — React entry point, hash routing
- **`data.jsx`** — TÜM dashboard içeriği (KPIS, PORTFOLIO, PIPELINE, NEWS, RISKS, vb.) — aylık güncellenecek ana dosya
- **`components.jsx`** — Ribbon nav, KPI, Pill, Card, Stars, Flag, ikonlar
- **`pages.jsx`** — Page bileşenleri (Summary, Portfolio, Pipeline, Markets, News, Risks, Signals, Financial, Cenk)
- **`logo.jsx`** — Celltrion + Linery logoları (base64)
- **`fonts/`** — Geist Variable woff2 (light + italic)
- **`build.py`** — Tek dosya HTML'e derleme script'i
- **`SKILL_currency_section.md`** — Skill dosyasına eklenecek "Para Birimi Çevirisi (KRW → EUR)" bölümü

## Aylık güncelleme akışı

1. `data.jsx`'i düzenle (yeni haberler, finansallar, risk/fırsat değişiklikleri).
2. KRW değerlerini yayın tarihi kuruyla EUR'a çevir (skill'deki referans tablosuna bak).
3. `python3 build.py` çalıştır.
4. `dashboard.html`'i kontrol et.

## Otomatik aylık job

Her ayın 1'inde 09:00'da çalışan scheduled task: `celltrion-dashboard-monthly-update`.
Task son 30 günü tarar, `data.jsx`'i günceller, `build.py`'yi çalıştırır.

## Tasarım kuralları

- Linery Office stili (light theme, ribbon nav, max-w-page 1700px)
- Geist Variable font
- `.kpi-{tone}`, `.lpill`, `.ltable` CSS sınıfları
- Tailwind CDN

## Skill referansı

Skill: `celltrion-intelligence-dashboard`
DS/DP ayrımı, Gensenta GMP profili (FDA yok — Vial 4 PV hedef Q2 2027), KRW→EUR çevirisi kuralları skill'de tanımlı.
