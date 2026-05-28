---

## Para Birimi Çevirisi (KRW → EUR)

Dashboard'da gösterilen tüm para birimleri **EUR cinsinden** olmalıdır. Celltrion finansalları KRW (Kore Wonu) cinsindendir ve mutlaka EUR'a çevrilmelidir.

### Temel kural

**Her KRW değeri, haberin/açıklamanın yayınlandığı tarihteki resmi EUR/KRW kuruyla EUR'a çevrilir.**

- Yıl-sonu kapanış kurunu değil, **yayın ayının ortalama kurunu** kullan.
- 12 aylık veya yıllık tutarlar için (FY gelir, FY kar, yıllık satış) → o **takvim yılının ortalama kurunu** kullan, son ay kurunu değil.
- Çeyrek tutarları için (Q1, Q2 vb.) → ilgili çeyreğin **bitiş ayının kurunu** veya o çeyreğin ortalamasını kullan.
- Geleceğe yönelik hedef tutarlar (örn. "2026 gelir hedefi 5,3T KRW") için → **hedefin açıklandığı tarihteki kuru** kullan.
- Geleceğe yönelik vizyon tutarları (örn. "2030 vizyonu 12T KRW") için → **mevcut/son kullanılabilir kuru** kullan ve "projeksiyon" notu ekle.
- Devam eden / kümülatif tutarlar (örn. "CMO birikim >1T KRW") için → **en son referans kuruyla** çevir; ay/dönem işaretle.

### Format

- Mrd € (milyar Euro) ve Mn € (milyon Euro) kullan.
- Her çevrilmiş değerin yanına orijinal KRW tutarı ve kullanılan kur parantez içinde belirtilmelidir:
  - Örnek: `2,47 Mrd € (₩4,16T · Şub 2026 kuru 1.686)`
  - Örnek: `694 Mn € (₩1,17T)`
- Tablo/KPI hücrelerinde alan dar ise: ana değer EUR, alt satır (sub) "₩XT · [tarih] kuru" formatında.

### USD tutarları

- Public kaynak doğrudan USD olarak açıkladıysa (örn. "$330M Branchburg acquisition", "$473M Eli Lilly CMO") **USD'de bırakılır**, EUR'a çevrilmez. Sadece KRW kaynakları çevrilir.
- Karışık tutarlarda (KRW + USD aynı haberde) her ikisi de orijinal birimde tutulur; sadece KRW olanı EUR'a çevrilir.

### Referans kur tablosu (Mayıs 2026 baseline)

Bu kurlar exchange-rates.org, freecurrencyrates.com ve ECB verilerinden derlenmiştir. Aylık güncellemelerde son kurları doğrulamak için web araması yap.

| Dönem | KRW per 1 EUR (orta kur) | Kullanım |
|-------|--------------------------|----------|
| 2023 ortalama | 1.395 | FY2023 tutarları |
| 2024 ortalama | 1.475 | FY2024 tutarları |
| 2024 Q4 / Aralık 2024 | 1.520 | Q4 2024 / yıl sonu açıklamalar |
| 2025 H1 ortalama | 1.540 | H1 2025 tutarları |
| 2025 H2 ortalama | 1.605 | H2 2025 tutarları |
| 2025 ortalama (yıl) | 1.565 | FY2025 tutarları (yıllık satış vb.) |
| Ekim 2025 | 1.615 | Eki 2025 haberleri |
| Kasım 2025 | 1.635 | Kas 2025 haberleri |
| Aralık 2025 | 1.650 | Ara 2025 haberleri |
| Ocak 2026 | 1.680 | Oca 2026 haberleri |
| Şubat 2026 | 1.686 | Şub 2026 haberleri (FY2025 açıklaması dahil) |
| Mart 2026 | 1.718 | Mar 2026 haberleri |
| Nisan 2026 | 1.750 | Nis 2026 haberleri |
| Mayıs 2026 | 1.750 | May 2026 haberleri (Q1 2026 açıklaması dahil) |
| 2026 YTD ortalama | 1.715 | Çok dönem ortalama gerektiğinde |

**Önemli:** Bu kurlar Mayıs 2026 referansıdır. Sonraki aylık güncellemelerde son kurlar webden tekrar doğrulanmalı ve tablo güncellenmelidir.

### Çeviri örnekleri

| Orijinal (KRW) | Yayın Tarihi | Kullanılan Kur | Çevrilmiş (EUR) |
|----------------|--------------|----------------|------------------|
| FY2025 gelir ₩4,16T | Şub 2026 | 1.686 | 2,47 Mrd € |
| FY2025 op kar ₩1,17T | Şub 2026 | 1.686 | 694 Mn € |
| 2026 gelir hedefi ₩5,3T | Şub 2026 (hedef ilan) | 1.686 | 3,14 Mrd € |
| Q1 2026 gelir ₩1,145T | May 2026 | 1.750 | 654 Mn € |
| Q1 2026 op kar ₩321,9 milyar | May 2026 | 1.750 | 184 Mn € |
| Songdo Plant 4&5 yatırımı ₩1,23T | Mar 2026 | 1.718 | 716 Mn € |
| CMO ek anlaşma ₩294,9 milyar | Mar 2026 | 1.718 | 172 Mn € |
| Eli Lilly NJ CMO ₩678,7 milyar | Ara 2025 | 1.650 | 411 Mn € |
| Remsima 2025 yıllık ₩>1T | 2025 ortalama | 1.565 | >640 Mn €/yıl |
| Zymfentra 2025 hedefi ₩700 milyar | 2025 ortalama | 1.565 | 447 Mn € |
| 2030 vizyonu ₩12T | Mevcut projeksiyon | 1.750 | 6,86 Mrd € (projeksiyon) |
| 3-yıllık Kore yatırım ₩4T | Kas 2025 | 1.635 | 2,45 Mrd € |

### Aylık güncelleme akışı (kur tarafı)

1. Ay başında ilgili haber tarih(leri) için EUR/KRW kuru webden doğrula (exchange-rates.org, ECB, Wise).
2. Yeni KRW tutarları gelirse, bu tablo formatına uygun çevir.
3. Önceki ayda kullanılan kurlar **değiştirilmez** — geçmiş kayıtlar yayın tarihi kuruyla sabit kalır.
4. "Referans kur tablosu" bölümüne yeni ay satırı eklenir.
5. Yeni dönem (sonraki ay/çeyrek) hedefleri/finansalları için en güncel kur kullanılır.

### Kaçınılacak hatalar

- KRW tutarını mevcut/son kurla çevirip "FY2025 geliri" demek (yıllık ortalama kullan).
- Kur tablosunu güncellemeden eski kurlarla yeni haberler çevirmek.
- USD tutarları gereksiz yere EUR'a çevirmek (orijinal kaynak USD verdiyse bırakılır).
- Kaynağı belirsiz veya tahmini kurları "doğrulanmış" gibi sunmak — kullanılan kur ve tarihi her zaman yanına yazılmalı.
- "1 trilyon won = X dolar" gibi USD üzerinden ikinci çeviri yapmak; doğrudan KRW → EUR yapılmalı.

---

## ⚠️ Son Güncelleme Tarihi — Zorunlu Adım

**Her aylık güncellemede `components.jsx` içindeki tarih satırı mutlaka değiştirilmelidir.**

### Nerede?

`components.jsx`, ~164. satır:

```jsx
<span className="font-semibold text-gray-900 ml-1">GG Ay YYYY, GünAdı</span>
```

### Format

Türkçe, tam tarih: `28 Mayıs 2026, Perşembe`

Türkçe gün adları: Pazartesi · Salı · Çarşamba · Perşembe · Cuma · Cumartesi · Pazar  
Türkçe ay adları: Ocak · Şubat · Mart · Nisan · Mayıs · Haziran · Temmuz · Ağustos · Eylül · Ekim · Kasım · Aralık

### Kural

- Tarihi güncelleme yapılan **gerçek günün** tarihi ile yaz (güncelleme gününü, araştırılan dönemi değil).
- `build.py` çalıştırılmadan önce bu adım tamamlanmış olmalı.
- Bu adım atlanırsa dashboard eski tarih gösterir.
