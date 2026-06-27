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
- **`build.py`** — Tek dosya HTML'e derleme script'i + data.jsx syntax check

> Tüm yönetim kuralları (DS/DP ayrımı, Gensenta GMP profili, KRW→EUR çevirisi, link doğrulama, tasarım standardı) tek merkezde — `celltrion-intelligence-dashboard` skill'inin içinde. Klasörde ayrı kural/handoff dosyası tutulmaz.

## Aylık güncelleme akışı (otomatik)

1. WebSearch ile son 30 günü tara, yeni haberleri topla.
2. Her **yeni** URL'i WebFetch ile doğrula (slug uydurma yasak — Pearce IP boş sayfa döner).
3. `data.jsx`'i düzenle (yeni haberler, finansallar, risk/fırsat değişiklikleri).
4. KRW değerlerini yayın tarihi kuruyla EUR'a çevir (skill'deki referans tablosuna bak).
5. `python3 build.py` çalıştır.
6. `dashboard.html`'i kontrol et.

> **Not:** Aylık akış mevcut linkleri yeniden taramaz. Toplu sağlık taraması manuel/on-demand çalıştırılır (aşağı bak).

## Manuel link sağlık taraması (kullanıcı talep ettiğinde)

Mevcut tüm linkleri WebFetch ile teste sok:

```bash
cd celltrion_dashboard
grep -oE 'https?://[^"'"'"' )]+' data.jsx | sort -u
# Her URL'i WebFetch ile test et
```

Bozulanlar için alternatif URL ara veya bulguyu "Doğrulanamadı" bölümüne taşı.

## Otomatik aylık job

Scheduled task: `celltrion-dashboard-monthly-update` — her ayın 1'inde 09:00 (cron `0 9 1 * *`).

> **Durum: PAUSED (enabled: false).** Dashboard 29 May 2026'da tam yenilendi, 1 Haz çalışması atlandı. 1 Temmuz öncesi yeniden etkinleştir: side panel → Scheduled → Enable, ya da Claude'a "celltrion job'ını aç" de.

Task akışı:
1. WebSearch ile son 30 gün
2. Yeni URL'leri WebFetch ile doğrula
3. KRW→EUR çeviri (yayın tarihi kuru)
4. Karşılaştırma etiketleri (Yeni / Revize / Risk arttı / vb.)
5. data.jsx güncelle + build.py çalıştır
6. 7-maddelik aylık özet rapor (yeni link doğrulama özeti dahil)

## Tasarım kuralları

- Linery Office stili (light theme, ribbon nav, max-w-page 1700px)
- Geist Variable font
- `.kpi-{tone}`, `.lpill`, `.ltable` CSS sınıfları
- Tailwind CDN

## Skill referansı

Skill: `celltrion-intelligence-dashboard`
- DS/DP ayrımı
- Gensenta GMP profili (FDA yok — Vial 4 PV hedef Q2 2027)
- KRW→EUR çevirisi (haberin yayın tarihindeki kur)
- Kaynak linki doğrulama (sadece yeni URL'ler, manuel toplu tarama opsiyonu)
