/* global window */
// All dashboard data — extracted from the original Celltrion dashboard bundle.
// Turkish copy preserved verbatim.

const KPIS = [
  { label: "2025 Yıllık Gelir",     value: "2,47 Mrd €",  delta: "+17%",      sub: "₩4,16T · Şub 2026 kuru 1.686", tone: "blue" },
  { label: "Faaliyet Karı 2025",    value: "694 Mn €",    delta: "+137,5%",   sub: "₩1,17T · Şub 2026 kuru 1.686", tone: "green" },
  { label: "Faaliyet Marjı",        value: "%28,1",       delta: "+14,3 puan",sub: "YoY · Q4: %35,7",            tone: "amber" },
  { label: "2026 Gelir Hedefi",     value: "3,14 Mrd €",  delta: "+27% hedef",sub: "₩5,3T hedef · Q1 actual 654 Mn €", tone: "purple" },
  { label: "Onaylı Biosimilar",     value: "11 Ürün",     delta: "Hedef 18",  sub: "2030 vizyonu · Küresel onay",tone: "sky" },
  { label: "CMO Birikim",           value: ">582 Mn €",   delta: "Mart 2026", sub: "₩>1T · Mar 2026 kuru 1.718",  tone: "rose", info: "Celltrion'un dış ilaç firmaları için üstlendiği fason üretim (CMO/CDMO) sözleşmelerinin birikmiş tutarı — taahhüt edilmiş ama henüz tamamlanmamış dış üretim iş hacmi. Başlıca Eli Lilly (Branchburg) + ikinci partner. Ağırlıkla DS (drug substance) odaklı; Gensenta için dolaylı sinyal: Celltrion'un iç kapasitesi dolarsa kendi biosimilar ürünlerinin DP / flakon dolumunu dış CMO'ya açma ihtimali artar." },
];

const STRATEGIC_DIRECTIONS = [
  "Biosimilar portföyünü 11'den 2030'a kadar 18'e, 2038'e kadar 41'e çıkarmak",
  "SC formülasyon platformunu genişletmek (Halozyme hyaluronidase 2027 patent bitişi sonrası 2. SC dalga)",
  "ABD'de doğrudan satış ağı + Branchburg NJ DS üretim üssü (tarife mitigation; DP hattı eklenip eklenmeyeceği izlenmeli)",
  "ADC/msAb ile yenilikçi ilaç alanına geçiş (2028'e kadar 16 IND hedefi)",
  "CDMO/CMO'yu orta-uzun vadeli büyüme motoru olarak konumlandırmak (CMO birikim >582 Mn € ≈ ₩>1T, Mar 2026; DS odaklı)",
  "Songdo + Yesan DP plant + Ochang PFS yatırımıyla küresel DP arzının %90'ını içerden karşılama hedefi (2027-2028 zirvesi)",
];

const RECENT_DEVELOPMENTS = [
  { date: "Haziran 2026", tag: "Regülasyon / Deregülasyon", title: "Küresel biyobenzer deregülasyonu (FDA/EMA/HC/MFDS) — Celltrion ana faydalanan", level: "Yüksek" },
  { date: "Haziran 2026", tag: "CT-P55 / Kanada+",       title: "CT-P55 (sekukinumab) Health Canada başvurusu; ABD/AB/Kore planlı", level: "Yüksek" },
  { date: "Mayıs 2026",  tag: "Herzuma SC (CT-P6 SC) / Kore",      title: "Herzuma SC (CT-P6 SC) Kore MFDS başvurusu (EMA'yı takiben)",         level: "Yüksek" },
  { date: "Mayıs 2026",  tag: "CT-G32 / Obezite",       title: "Obezite ilacı primat toksikolojisi başladı; IND 2027 H1", level: "Orta" },
  { date: "Mayıs 2026",  tag: "Pipeline / Strateji",    title: "Science & Innovation Day 2026: ADC/msAb next-gen portföy", level: "Orta" },
  { date: "Mayıs 2026",  tag: "Tüm portföy",            title: "Q1 2026: Gelir +36%, Faaliyet Karı +115,4% YoY",         level: "Kritik" },
];

const URGENT_SIGNALS = [
  { title: "Herzuma SC (CT-P6 SC) EMA + Kore MFDS Onayı", window: "2026 Q3-Q4 → 2027", detail: "EMA başvurusu Nis 2026, Kore MFDS başvurusu 28 May 2026'da yapıldı. CHMP pozitif görüş ~12-15 ay sonra bekleniyor. İlk SC trastuzumab biosimilar — first-mover. Gensenta EMA + MFDS onaylı — hem Avrupa hem Kore DP teklifi için kanal açık." },
  { title: "SteQeyma (CT-P43) Autoinjector AB Onayı",window: "2026 Q2",         detail: "CHMP pozitif görüş Aralık 2025. EC onayı 2-3 ay içinde bekleniyor. EMA-bound; Gensenta için izleme." },
  { title: "Vial 4 FDA PV Başlangıcı",      window: "2027 Q2 hedef",   detail: "Gensenta'nın FDA onayı yok. Vial 4 hattı için PV başlangıç hedefi Q2 2027. Bu tarih kayar veya onay süresi uzarsa ABD pazarına yönelik DP fırsat penceresi 2028+ ötelenir." },
];

// ── Portfolio ───────────────────────────────────────────────────────────────
const PORTFOLIO = [
  { name: "Remsima IV",           code: "CT-P13",     mol: "İnfliximab",            ref: "Remicade",          area: "Romatoloji, GI, Dermatoloji",      form: "IV flakon (lyophilized + liquid)", category: "İmmünoloji",
    markets: ["AB (100+ ülke)","Japonya","Kore","Kanada"], extraMarkets: ["Brezilya"],
    signal: "AB'de IV liquid formu Kasım 2025 onaylandı (dünya ilki). Japonya yeni onaylar.",
    status: "Flagship ürün — >640 Mn €/yıl satış (₩>1T, 2025 ort. kuru 1.565). AB infliximab pazarında %70 pay.",
    stars: 5 },
  { name: "Remsima SC / Zymfentra", code: "CT-P13 SC", mol: "İnfliximab SC",         ref: "Remicade",          area: "IBD (UC, CD), Romatoloji",         form: "SC PFS 120mg (+240mg EC onaylı)", category: "İmmünoloji",
    markets: ["AB","ABD (Zymfentra)","UK","Kanada"], extraMarkets: ["Avustralya","Tayvan","Singapur","Hong Kong"],
    signal: "ABD büyümesi hızlanıyor — PBM coverage %90+. Doz eskalasyon AB'de onaylı.",
    status: "ABD'de yeni ilaç statüsü. Patent 2037/2040. 10B$ IBD pazarı hedefi.",
    stars: 5 },
  { name: "Yuflyma",              code: "CT-P17",     mol: "Adalimumab HK CF",      ref: "Humira",            area: "RA, PsA, PsO, CD, UC, HS, UV",     form: "SC PFS/Otoenjektör 100mg/mL", category: "İmmünoloji",
    markets: ["AB","ABD (May 2023)","Kore","Kanada"], extraMarkets: ["Avustralya","Brezilya","Tayvan"],
    signal: "ABD'de Nisan 2025 interchangeable statüsü alındı. MENA genişleme sürüyor.",
    status: "Dünya ilk HK CF adalimumab biosimiları. ABD'de 2,4x büyüme (2024).",
    stars: 5 },
  { name: "SteQeyma",             code: "CT-P43",     mol: "Ustekinumab",           ref: "Stelara",           area: "PsO, PsA, CD, UC (ped dahil)",     form: "SC PFS (45mg, 90mg) + IV vial", category: "İmmünoloji",
    markets: ["ABD (Mar 2025)","AB","Kanada","Avustralya"],
    signal: "AB autoinjector CHMP pozitif görüş Aralık 2025. ABD autoinjector sırada.",
    status: "ABD lansmanı Mart 2025. WAC %85 Stelara altında. $9B referans pazar.",
    stars: 5 },
  { name: "Omlyclo",              code: "CT-P39",     mol: "Omalizumab",            ref: "Xolair",            area: "Astım, KSÜ, CRSwNP, Gıda Alerjisi",form: "SC PFS 75mg/150mg/300mg", category: "İmmünoloji",
    markets: ["ABD (Mar 2025, interchangeable)","AB (May 2024)","Kore","Avustralya"], extraMarkets: ["Japonya (Mar 2026)","Tayvan"],
    signal: "ABD'de 300mg Aralık 2025 genişletildi. Japonya Mart 2026 onaylandı.",
    status: "İlk FDA interchangeable omalizumab biosimiları. Küresel genişleme sürüyor.",
    stars: 5 },
  { name: "Avtozma",              code: "CT-P47",     mol: "Tocilizumab",           ref: "Actemra/RoActemra", area: "RA, sJIA, pJIA, GCA, CRS",         form: "IV vial + SC PFS (her ikisi ABD onaylı)", category: "İmmünoloji",
    markets: ["ABD (Oca 2025 FDA, Mart 2026 SC lansmanı)","AB (Şubat 2025 EC)"],
    signal: "Japonya, Kanada ve diğer pazarlar. SC form ABD'de first-mover avantajı.",
    status: "Hem IV hem SC ABD'de onaylı. Büyük RA pazarı. Mart 2026 SC lansmanı tamamlandı.",
    stars: 5 },
  { name: "Eydenzelt",            code: "CT-P42",     mol: "Aflibercept",           ref: "Eylea",             area: "AMD, DME, RVO, Diyabetik Ret.",    form: "IV enjeksiyon", category: "Oftalmoloji",
    markets: ["AB (Aralık 2025 lansmanı)","Kore (May 2024)","UK","Japonya (Mar 2026)"],
    signal: "ABD: Regeneron uzlaşması → 31 Aralık 2026 sonrası lansman. Avustralya PBS önerisi.",
    status: "ABD lansmanı ertelendi (patent uzlaşması). Avrupa & Asya Pasifik aktif büyüme.",
    stars: 5 },
  { name: "Truxima",              code: "CT-P10",     mol: "Rituximab",             ref: "Rituxan/MabThera",  area: "NHL, CLL, RA, GPA, MPA",           form: "IV vial", category: "Onkoloji",
    markets: ["AB","ABD (Teva)","Kore","Japonya"], extraMarkets: ["Tayvan","MENA (Hikma)"],
    signal: "ABD'de direkt satış geçişi sürmekte. MENA Hikma ortaklığı.",
    status: "Olgun ürün — fiyat baskısı mevcut. Dünya'nın ilk mAb biosimilarlarından.",
    stars: 3 },
  { name: "Herzuma",              code: "CT-P6",      mol: "Trastuzumab",           ref: "Herceptin",         area: "HER2+ Meme Ca, Gastrik Ca",        form: "IV vial", category: "Onkoloji",
    markets: ["AB (2018)","ABD (Mar 2020)","Kore","Japonya"], extraMarkets: ["Tayvan"],
    signal: "Herzuma SC (CT-P6 SC) EMA başvurusu Nisan 2026, Kore MFDS başvurusu Mayıs 2026. İlk SC trastuzumab biosimiları adayı.",
    status: "IV olgun; SC form ile yeniden büyüme hedefleniyor. Global trastuzumab pazar ~$3,3B.",
    stars: 4 },
  { name: "Vegzelma",             code: "CT-P16",     mol: "Bevacizumab",           ref: "Avastin",           area: "mCRC, NSCLC, GBM, RCC, Servikal, Over Ca", form: "IV vial", category: "Onkoloji",
    markets: ["ABD (Sep 2022)","AB (Aug 2022)","UK","Japonya"], extraMarkets: ["Kore"],
    signal: "ABD'de Ventegra formuleri (13M üye). MENA Hikma ortaklığı.",
    status: "Onkoloji portföyünü çeşitlendiriyor. Direkt satışa geçiş devam ediyor.",
    stars: 4 },
  { name: "Stoboclo / Osenvelt",  code: "CT-P41",     mol: "Denosumab",             ref: "Prolia / Xgeva",    area: "Osteoporoz, Kemik Met., GCTB",     form: "SC PFS", category: "Kemik",
    markets: ["ABD (Mar 2025 tam endikasyon)","Kore","AB"],
    signal: "CVS Caremark + ExpressScripts + BCBS formulerleri alındı. ABD %60+ market coverage.",
    status: "$6,6B referans pazar (%67 ABD). Hızlı formuler kazanımı devam ediyor.",
    stars: 5 },
];

// ── Pipeline ────────────────────────────────────────────────────────────────
const PIPELINE = [
  { name: "Herzuma SC",            code: "CT-P6 SC",  type: "Biosimilar", mol: "Trastuzumab SC", ref: "Herceptin SC",      area: "HER2+ Kanser",
    phase: "Klinik tamamlandı — EMA (Nis 2026) + Kore MFDS (28 May 2026) başvuruları yapıldı",
    submission: "EMA (Nisan 2026) + Kore MFDS (28 May 2026) yapıldı; diğer ülkeler planlı",
    launch: "2027-2028 (AB & Kore)",
    cmo: "SC PFS üretimi. Hyaluronidase platform yeni fırsat.", importance: "Yüksek",
    news: "Kore MFDS başvurusu 28 May 2026 (EMA Nis 2026'yı takiben). Tüm Herceptin SC endikasyonları. Hyaluronidase platform. İlk SC trastuzumab biosimilar — first-mover." },
  { name: "Eydenzelt ABD",         code: "CT-P42 US", type: "Biosimilar", mol: "Aflibercept",    ref: "Eylea",              area: "AMD, DME, RVO",
    phase: "FDA onaylı — patent uzlaşması Ekim 2025",
    submission: "FDA onaylı (mevcut)",
    launch: "1 Ocak 2027 (erken ihtimal mümkün)",
    cmo: "IV vial üretimi. ABD lansmanında kritik hacim artışı.", importance: "Yüksek",
    news: "Regeneron uzlaşması 31 Aralık 2026 sonrasını veriyor. Diğer şirketler 2026 H2'de giriyor." },
  { name: "SteQeyma Autoinjector", code: "CT-P43 AI", type: "Biosimilar", mol: "Ustekinumab",    ref: "Stelara",            area: "PsO, PsA, CD, UC",
    phase: "CHMP pozitif görüş (Aralık 2025)",
    submission: "AB EC onayı bekleniyor",
    launch: "2026 AB",
    cmo: "Autoinjector PFS üretim formü.", importance: "Orta",
    news: "CHMP pozitif görüş Aralık 2025. Avustralya pre-filled pen onayı Aralık 2025." },
  { name: "CT-P55",                code: "CT-P55",    type: "Biosimilar", mol: "Secukinumab",    ref: "Cosentyx",           area: "PsO, PsA, Ankilozan Spondilit",
    phase: "Faz III devam (153 hasta); Health Canada başvurusu yapıldı (1 Haz 2026)",
    submission: "Health Canada (1 Haz 2026) yapıldı; ABD, AB, Kore planlı",
    launch: "2027-2028",
    cmo: "SC PFS. Hızlanan regülasyon ortamında öncü ürün.", importance: "Yüksek",
    news: "1 Haz 2026 Health Canada başvurusu (Faz 1 verisiyle; 'pro-biosimilar' pazar). ABD/AB/Kore başvuruları planlı. AB+Kore Gensenta onaylı pazarlar." },
  { name: "CT-P51",                code: "CT-P51",    type: "Biosimilar", mol: "Pembrolizumab",  ref: "Keytruda",           area: "NSCLC, Melanoma, HNSCC, vb.",
    phase: "Faz III başladı (MFDS Nisan 2025, N=606)",
    submission: "MFDS (Faz III onaylı), FDA IND (Ağustos 2024)",
    launch: "~2032+ (ABD patent: 2029, AB: 2031)",
    cmo: "IV infüzyon. Dev pazar ($30B+) ama çok rekabetçi.", importance: "Yüksek",
    news: "MFDS Faz III onayı Nisan 2025. 606 NSCLC hastası çalışması. FDA IND Ağustos 2024." },
  { name: "CT-P53",                code: "CT-P53",    type: "Biosimilar", mol: "Ocrelizumab",    ref: "Ocrevus",            area: "Multiple Skleroz",
    phase: "IND hazırlık / erken klinik",
    submission: "IND hazırlanıyor",
    launch: "2029-2030 tahminen",
    cmo: "IV infüzyon vial. Büyük MS pazarı.", importance: "Orta",
    news: "Celltrion Şubat 2026 açıklamasında yer aldı." },
  { name: "CT-P70",                code: "CT-P70",    type: "Yeni İlaç",  mol: "ADC (NSCLC hedefi)", ref: "Yeni ilaç",      area: "Küçük Hücre Dışı Akciğer Ca.",
    phase: "Faz I (FDA IND onaylı 2025)",
    submission: "FDA IND onaylı 2025",
    launch: "2030+ (yeni ilaç süreci)",
    cmo: "ADC üretimi özel altyapı gerektirir.", importance: "Yüksek",
    news: "FDA Fast Track Designation alındı. Solid tümör hedefi." },
  { name: "CT-P72",                code: "CT-P72",    type: "Yeni İlaç",  mol: "HER2 x CD3 msAb",   ref: "Yeni ilaç",      area: "HER2+ Kanserler",
    phase: "Faz I (FDA IND onaylı)",
    submission: "FDA IND onaylı",
    launch: "2030+",
    cmo: "Multispecific antibody — özel üretim altyapısı.", importance: "Orta",
    news: "Tetravalent bispecific antibody. HER2/CD3 hedefi." },
];

// ── Markets ─────────────────────────────────────────────────────────────────
const MARKETS = [
  { code: "US", name: "ABD",
    active: "Inflectra (CT-P13), Zymfentra (CT-P13 SC), Yuflyma (CT-P17), SteQeyma (CT-P43), Omlyclo (CT-P39), Avtozma (CT-P47), Vegzelma (CT-P16), Truxima (CT-P10), Herzuma (CT-P6), Stoboclo (CT-P41), Osenvelt (CT-P41) (11 ürün)",
    approvals: "SteQeyma (CT-P43) (Ara 2024), Omlyclo (CT-P39) (Mar 2025), Avtozma (CT-P47) (Oca 2025), Yuflyma (CT-P17) Interchangeable (Nis 2025), Stoboclo/Osenvelt (CT-P41) tam endikasyon (Mar 2025)",
    upcoming: "Eydenzelt (CT-P42) (1 Oca 2027+), Herzuma SC (CT-P6 SC) (2027+)",
    strategy: "Doğrudan satış, Branchburg NJ üretim üssü. PBM coverage: Zymfentra (CT-P13 SC) %90+, Stoboclo/Osenvelt (CT-P41) %60+. Dual WAC fiyatlandırma.",
    risk: "Gensenta FDA onayı yok (Vial 4 PV hedefi Q2 2027). Kısa vadede ABD-bound DP fırsatı yok; tüm ABD lansmanları 'post-FDA potansiyeli' (2028+) olarak izlenmeli.",
    status: "post-fda" },
  { code: "EU", name: "Avrupa Birliği",
    active: "Remsima IV (CT-P13) (liquid & lyophilized), Remsima SC (CT-P13 SC), Yuflyma (CT-P17), SteQeyma (CT-P43), Omlyclo (CT-P39), Avtozma (CT-P47), Eydenzelt (CT-P42), Truxima (CT-P10), Herzuma (CT-P6), Vegzelma (CT-P16), Stoboclo/Osenvelt (CT-P41)",
    approvals: "Remsima IV (CT-P13) Liquid (Kas 2025 — dünya ilki), Eydenzelt (CT-P42) EC (2025), Avtozma (CT-P47) EC (Şubat 2025), SteQeyma (CT-P43) autoinjector CHMP (Aralık 2025)",
    upcoming: "Herzuma SC (CT-P6 SC) (EMA başvurusu Nisan 2026), SteQeyma (CT-P43) autoinjector EC, CT-P55 (2027-2028)",
    strategy: "Mayıs 2025'te doğrudan satışa geçiş tamamlandı. Remsima (CT-P13) AB infliximab pazarında %70 pay. Bundled bidding stratejisi.",
    risk: "Fırsat: Güçlü konumlanma, yeni lansmanlar. Risk: Tender fiyat baskısı.",
    status: "aktif" },
  { code: "JP", name: "Japonya",
    active: "Remsima (CT-P13), Yuflyma (CT-P17), Truxima (CT-P10), Herzuma (CT-P6), Vegzelma (CT-P16), Stoboclo/Osenvelt (CT-P41)",
    approvals: "Omlyclo (CT-P39) (Mar 2026), Eydenzelt (CT-P42) (Mar 2026)",
    upcoming: "Avtozma (CT-P47) Japonya onayı; CT-P55, CT-P52 ilerleyen süreçte",
    strategy: "Celltrion Healthcare Japan KK direkt satış. Yeni ürünlerle ivme kazanılıyor.",
    risk: "Fırsat: Büyüyen biosimilar politika desteği. Risk: Yavaş reçete dönüşümü.",
    status: "büyüme" },
  { code: "KR", name: "Güney Kore",
    active: "Remsima IV/SC (CT-P13), Yuflyma (CT-P17), SteQeyma (CT-P43), Omlyclo (CT-P39), Avtozma (CT-P47), Eydenzelt (CT-P42), Truxima (CT-P10), Herzuma (CT-P6), Vegzelma (CT-P16), Stoboclo/Osenvelt (CT-P41)",
    approvals: "Omlyclo (CT-P39) (Haziran 2024), Eydenzelt (CT-P42) (Mayıs 2024)",
    upcoming: "Herzuma SC (CT-P6 SC) (MFDS başvurusu 28 May 2026 — YAPILDI), CT-P55 (Kore başvurusu planlı), CT-P51 Faz III (Nis 2025 onayı)",
    strategy: "Ana üretim merkezi Songdo. MFDS onayları referans market olarak önce geliyor.",
    risk: "Fırsat: Hızlı regülasyon. Risk: İç piyasada fiyat baskısı.",
    status: "aktif" },
  { code: "MENA", name: "MENA",
    active: "Remsima (CT-P13), Remsima SC (CT-P13 SC), Truxima (CT-P10), Herzuma (CT-P6), Yuflyma (CT-P17), Vegzelma (CT-P16) (Hikma aracılığıyla)",
    approvals: "6 ek ürün için Hikma ortaklığı genişletildi (Ekim 2025)",
    upcoming: "Alerjik hastalık, oftalmoloji, iskelet, immün ve onkoloji alanında yeni ürünler",
    strategy: "Hikma tüm MENA'da tek yetkili dağıtımcı. Celltrion üretim + tedarikten sorumlu. Morocco'da Herzuma (CT-P6) %80 pay.",
    risk: "Fırsat: %19 CAGR büyüme, $1,15B pazar. Risk: Fiyat hassasiyeti, regülatör çeşitliliği.",
    status: "büyüme" },
  { code: "TR", name: "Türkiye",
    active: "Remsima (CT-P13) (onaylı), Truxima (CT-P10) (onaylı), lokal üretim referansı (PharmaBoardroom interview)",
    approvals: "Türkiye MoH GMP onayı — Gensenta için iç pazar tabanı",
    upcoming: "MENA genişleme stratejisi kapsamında yeni ürünler bekleniyor; Russia (Russian Health Authority Gensenta onaylı) opsiyonu da gündemde",
    strategy: "Türkiye Gensenta'nın ana üretim üssü. MENA coğrafyasına yakın; Hikma ortaklığı Türkiye'yi de etkileyebilir. SGK geri ödeme belirleyici.",
    risk: "Fırsat: Türkiye + Rusya GMP onayları aktif; Hikma MENA kapsamında lokal hub konumlanması güçlü. Risk: SGK fiyat müzakereleri, ürün kapsamı public kaynakta sınırlı doğrulamalı.",
    status: "aktif" },
  { code: "AU", name: "Avustralya",
    active: "Omlyclo (CT-P39) (Kas 2024), SteQeyma (CT-P43), Avtozma (CT-P47) (PBAC önerisi)",
    approvals: "Omlyclo (CT-P39) (Kas 2024), PBAC: Avtozma (CT-P47) + Eydenzelt (CT-P42) + denosumab önerisi (Ara 2025)",
    upcoming: "PBS listing'ler sırada; Eydenzelt (CT-P42) PBS onayı bekleniyor",
    strategy: "PBS sistemi ile hükümet geri ödemesi belirleyici. Biosimilar politikası aktif teşvik.",
    risk: "Fırsat: PBS biosimilar listesi büyüyor. Risk: PBS değerlendirme süreci uzun.",
    status: "büyüme" },
];

// ── News timeline ───────────────────────────────────────────────────────────
const NEWS = [
  { date: "Haziran 2026", level: "Yüksek", tag: "[Yeni] Regülasyon / Biyobenzer deregülasyonu", url: "https://www.thelec.net/news/articleView.html?idxno=10903", title: "Küresel biyobenzer deregülasyonu ivme kazandı — FDA/EMA/Health Canada/MFDS", detail: "1 Haz 2026: FDA, EMA, Health Canada ve MFDS biyobenzer onaylarında Faz 3 yükünü azaltıp PK/analitik temelli değerlendirmeye geçiyor (Health Canada 19 May 2026 kılavuz revizyonu; MFDS inceleme süresi 420→240 gün). Geliştirme maliyeti %70-90, süre ~4 yıla kadar düşebilir; Celltrion ana faydalanan. Gensenta lensi: daha hızlı ve daha çok lansman → orta-uzun vadede dolaylı DP talebi artışı (DS tarafı fayda da var). Sınıf: Karışık/dolaylı." },
  { date: "Haziran 2026", level: "Yüksek", tag: "CT-P55 / Kanada (+ABD, AB, Kore planlı)", url: "https://www.pearceip.law/2026/06/01/celltrion-files-canadian-application-for-biosimilar-secukinumab/", title: "CT-P55 (sekukinumab) Health Canada başvurusu yapıldı",         detail: "1 Haziran 2026: Cosentyx biosimiları CT-P55 için Health Canada ruhsat başvurusu (tüm referans endikasyonlar). Celltrion ABD, AB ve Kore başvurularını da planlıyor. Format doğrulandı: 150mg SC, prefilled syringe (PFS) (Faz 1 NCT07054970). AB + Kore Gensenta'nın onaylı pazarları — SC/PFS DP kapasite teyidine bağlı ileride DP sinyali." },
  { date: "Mayıs 2026",  level: "Orta",   tag: "CT-G32 / Obezite (yeni ilaç)",  url: "https://www.koreaherald.com/article/10758867",                                                              title: "CT-G32 obezite ilacı — primat toksikoloji çalışması başladı",   detail: "29 Mayıs 2026: Dörtlü etkili (quadruple-agonist) GLP-1 bazlı first-in-class obezite adayı. 252 sıçan + 48 maymun toksikoloji; IND başvurusu 2027 H1 hedefi. Yeni ilaç / peptid platformu — DP vial fason yakın vadede değil, dolaylı uzun vade sinyali." },
  { date: "Mayıs 2026",  level: "Yüksek", tag: "Herzuma SC (CT-P6 SC) / Kore",        url: "https://www.pearceip.law/2026/05/28/celltrion-submits-korean-application-for-biosimilar-trastuzumab-sc/", title: "Herzuma SC (CT-P6 SC) için Kore MFDS başvurusu yapıldı",                    detail: "28 Mayıs 2026: Nisan 2026 EMA başvurusunun ardından Kore MFDS başvurusu. Tüm Herceptin SC endikasyonları (erken/metastatik meme + metastatik gastrik). İlk SC trastuzumab biosimilar adayı — first-mover. Kore Gensenta MFDS onaylı; SC PFS formatı." },
  { date: "Mayıs 2026",  level: "Orta",   tag: "Pipeline / Strateji",      url: "https://en.sedaily.com/finance/2026/05/27/celltrion-unveils-next-generation-drug-pipeline-at-science", title: "Celltrion Science & Innovation Day 2026 — next-gen pipeline",   detail: "27 Mayıs 2026: ADC, multispesifik antikor, novel antikor/füzyon protein, peptid ve mikrobiyom terapötikleri tanıtıldı. Open innovation programları ABD, Japonya, Çin'e genişletiliyor. Çoğunlukla DS/yeni ilaç odaklı — Gensenta için dolaylı." },
  { date: "Mayıs 2026",  level: "Orta",   tag: "Hisse / Kurumsal",        url: "https://www.koreatimes.co.kr/business/companies/20260521/celltrion-to-issue-bonus-shares-repurchase-stocks-to-boost-shareholder-value", title: "Hissedar Değeri Planı: bedelsiz hisse + ₩100 milyar geri alım",  detail: "21 Mayıs 2026: 0,05 bedelsiz hisse/adet (~10,92M hisse), ~57 Mn € (₩100 milyar · Haz 2026 kuru 1.752) hisse geri alımı, Celltrion Holdings ek ₩100 milyar alım. Kurumsal/finansal — DP etkisi yok." },
  { date: "Mayıs 2026",  level: "Kritik", tag: "Tüm portföy",             url: "https://www.celltrion.com/en-us/company/media-center/press-release/4458",                                                              title: "Q1 2026: Gelir +36%, Faaliyet Karı +115,4% YoY",                detail: "Q1 2026 konsolide gelir 654 Mn € (₩1,145T, May 2026 kuru 1.750). Remsima (CT-P13) AB infliximab pazarında %70 paya ulaştı." },
  { date: "Nisan 2026",  level: "Kritik", tag: "Herzuma SC (CT-P6 SC) / AB",         url: "https://www.pearceip.law/2026/04/30/celltrion-submits-ema-application-for-trastuzumab-sc-biosimilar/", title: "Herzuma SC (CT-P6 SC) için EMA başvurusu yapıldı",                          detail: "İlk SC trastuzumab biosimilar adayı. Hyaluronidase platform kullanıyor. EMA süreci başladı." },
  { date: "Mart 2026",   level: "Kritik", tag: "Üretim Kapasitesi",       url: "https://www.koreaherald.com/article/10701575",                                                                title: "716 Mn € (₩1,23T) Songdo Fabrika 4 & 5 yatırımı açıklandı",       detail: "TAMAMEN DS (biyoreaktör) kapasitesi: 316K → 571K litre/yıl. Bu yatırım DP (steril dolum) kapasitesi değildir. Ayrı bir Songdo Yeni DP Plant 2027'de devreye alınacak (6,5M vial/yıl). Gensenta açısından: DS artışı → DP dolum ihtiyacı artar = Fırsat." },
  { date: "Mart 2026",   level: "Yüksek", tag: "Avtozma (CT-P47) / ABD",           url: "https://www.pearceip.law/2026/03/17/celltrions-tocilizumab-biosimilar-sc-formulation-launched-in-us/",          title: "Avtozma (CT-P47) SC ABD lansmanı — IV+SC çift formülasyon",               detail: "ABD'de hem IV hem SC onaylı ilk tocilizumab biosimilarlarından biri oldu." },
  { date: "Mart 2026",   level: "Yüksek", tag: "CMO",                     url: "https://www.koreaherald.com/article/10696294",                                                                title: "Ek 172 Mn € (₩294,9 milyar) CMO anlaşması — kümülatif 582 Mn € (₩1T) geçti",   detail: "Gizli global ilaç şirketiyle 3 yıllık (2027-2029) DS tedarik anlaşması imzalandı." },
  { date: "Mart 2026",   level: "Yüksek", tag: "Omlyclo (CT-P39), Eydenzelt (CT-P42) / Japonya", url: "https://www.pearceip.law/2026/04/28/celltrion-first-to-launch-biosimilar-tocilizumab-in-japan/",        title: "Omlyclo (CT-P39) & Eydenzelt (CT-P42) Japonya onayı",                              detail: "İki ürün Japonya'da aynı anda onaylandı. Japonya artık çok ürünlü büyüme marketi." },
  { date: "Şubat 2026",  level: "Kritik", tag: "Tüm portföy",             url: "https://www.celltrion.com/en-us/company/media-center/press-release/4458",                                                              title: "FY2025 Rekor: 2,47 Mrd € (₩4,16T) gelir, 694 Mn € (₩1,17T) kar",                detail: "İlk kez ₩4T (≈2,47 Mrd €) gelir ve ₩1T (≈594 Mn €) faaliyet karı eşiği aşıldı. Ürün marjları yükseldi." },
  { date: "Şubat 2026",  level: "Kritik", tag: "Herzuma SC (CT-P6 SC) / AB, Kore",   url: "https://www.pearceip.law/2025/12/08/celltrion-to-expand-use-of-sc-formulation-technology-including-to-develop-sc-trastuzumab-biosimilar/",    title: "Herzuma SC (CT-P6 SC) klinik çalışması tamamlandı",                         detail: "PK eşdeğerlik, güvenlik ve immunogenicity verileri tamamlandı. 3 ay içinde başvuru planlandı." },
  { date: "Ocak 2026",   level: "Kritik", tag: "ADC Pipeline / ABD Üretim", url: "https://www.celltrion.com/en-us/company/media-center/press-release/4460",                                  title: "JP Morgan HC: ADC pipeline + Branchburg NJ tesis devri tamamlandı", detail: "CT-P70 Fast Track, 2028'e kadar 16 IND hedefi. Eli Lilly tesisi devir tamamlandı." },
  { date: "Aralık 2025", level: "Kritik", tag: "CMO / ABD",               url: "https://www.koreabiomed.com/news/articleView.html?idxno=30155",                                               title: "Eli Lilly NJ tesis devri + 411 Mn € (₩678,7 milyar) CMO sözleşmesi",            detail: "$330M yatırımla Branchburg tesisi alındı. Lilly ile $473M CMO sözleşmesi imzalandı (USD kalır — public kaynak doğrudan USD olarak açıkladı)." },
  { date: "Kasım 2025",  level: "Yüksek", tag: "Remsima IV (CT-P13) / AB",         url: "https://www.pearceip.law/2026/03/11/celltrion-launches-iv-formulation-of-biosimilar-infliximab-in-europe/", title: "Remsima IV (CT-P13) Liquid Formu AB onayı — Dünya İlki",               detail: "Dünyanın ilk IV liquid infliximab formülasyonu. Lyophilized'a alternatif sunan formülasyon." },
  { date: "Ekim 2025",   level: "Yüksek", tag: "MENA / 6 ürün",           url: "https://www.pearceip.law/2025/10/06/celltrion-hikma-expand-mena-partnership-to-include-6-additional-biosimilars/",        title: "Celltrion-Hikma MENA ortaklığı 6 yeni ürünle genişletildi",      detail: "Alerjik hastalık, oftalmoloji, iskelet, immün ve onkoloji alanında 6 yeni lisans anlaşması." },
  { date: "Ekim 2025",   level: "Yüksek", tag: "Eydenzelt (CT-P42) / ABD",         url: "https://www.bigmoleculewatch.com/2025/10/14/fda-approves-celltrions-aflibercept-biosimilar/",               title: "Eydenzelt (CT-P42)-Regeneron patent uzlaşması; ABD lansmanı 31 Ara 2026 sonrası", detail: "Ön ihtiyati tedbir kararı ortadan kalktı. ABD lansmanı 31 Aralık 2026 veya sonrasına ayarlandı." },
  { date: "Eylül 2025",  level: "Yüksek", tag: "Omlyclo (CT-P39) / AB",            url: "https://www.pearceip.law/2025/09/10/celltrion-set-for-2025-eu-launch-of-biosimilar-omalizumab/",           title: "Omlyclo (CT-P39) Avrupa'da piyasaya çıktı (Norveç başladı, AB ülkeleri sırada)", detail: "AB'nin ilk omalizumab biosimiları ticarileşti. Deratoloji portföyü 5 ürüne ulaştı." },
  { date: "Mayıs 2025",  level: "Yüksek", tag: "Tüm AB portföyü",         url: "https://www.celltrion.com/en-us/company/media-center/press-release/4460",                                   title: "Avrupa'da tüm büyük marketlerde doğrudan satışa geçiş tamamlandı", detail: "Eski distribütörlerle ilişki sonlandırıldı. Direkt satış %15-20 marj artışı sağlıyor." },
  { date: "Nisan 2025",  level: "Yüksek", tag: "Yuflyma (CT-P17) / ABD",           url: "https://www.pearceip.law/2025/04/14/celltrion-secures-us-interchangeability-for-biosimilar-adalimumab-yuflyma/", title: "Yuflyma (CT-P17) ABD'de interchangeable biosimilar statüsü aldı",     detail: "PFS formunda interchangeable desgnation. Eczanede doğrudan ikame imkânı tanıyor." },
  { date: "Mart 2025",   level: "Kritik", tag: "SteQeyma (CT-P43) / ABD",          url: "https://www.pearceip.law/2025/03/13/sixth-us-biosimilar-ustekinumab-launched-by-celltrion/",              title: "SteQeyma (CT-P43) ABD'de piyasaya çıktı — Stelara'nın %85 altında fiyat",  detail: "7. ustekinumab biosimiları. WAC listesi Stelara'nın %15'i. Costco program dahil." },
  { date: "Mart 2025",   level: "Kritik", tag: "Omlyclo (CT-P39) / ABD",           url: "https://www.pearceip.law/2025/03/07/approval-alert-fda-approves-celltrions-omlyclo-as-first-interchangeable-omalizumab-biosimilar/",                  title: "Omlyclo (CT-P39) FDA onayı + ilk ve tek interchangeable omalizumab statüsü", detail: "75mg ve 150mg PFS formunda FDA onayı + interchangeable. Mart 2025 lansmanı." },
  { date: "Ocak 2025",   level: "Yüksek", tag: "Avtozma (CT-P47) / ABD",           url: "https://www.pearceip.law/2025/01/31/approval-alert-celltrions-biosimilar-tocilizumab-third-to-be-approved-in-us/",                title: "Avtozma (CT-P47) (tocilizumab) FDA onayı aldı",                            detail: "RA, sJIA, pJIA, GCA endikasyonları için FDA onayı. Temmuz 2025'te CRS endikasyonu eklendi." },
  { date: "Ocak 2025",   level: "Yüksek", tag: "Stoboclo/Osenvelt (CT-P41) / ABD", url: "https://www.pearceip.law/2025/01/24/amgen-and-celltrion-settle-us-denosumab-litigation/",                            title: "Celltrion-Amgen denosumab BPCIA uzlaşması — ABD lansmanı Haziran 2025", detail: "Dava uzlaşmayla kapandı. Haziran 2025'ten itibaren ABD lansmanı onaylandı." },
  { date: "Aralık 2024", level: "Kritik", tag: "SteQeyma (CT-P43) / ABD",          url: "https://www.celltrion.com/en-us/company/media-center/press-release/3629",               title: "SteQeyma (CT-P43) ABD FDA onayı aldı",                                    detail: "7. ustekinumab biosimiları FDA onayı. Psoriasis, PsA, CD, UC tüm endikasyonlar." },
  { date: "Mart 2024",   level: "Kritik", tag: "Zymfentra (CT-P13 SC) / ABD",         url: "https://www.pearceip.law/2024/03/18/celltrions-sub-cutaneous-zymfentra-infliximab-dyyb-us-launched/",            title: "Zymfentra (CT-P13 SC) ABD'de ticari lansmanı yapıldı",                       detail: "FDA'nın ilk ve tek SC infliximabı. PBM coverage başladı; Ekim 2024'te %80+, Şubat 2025'te %90+ ulaşıldı." },
];

// ── Risks ───────────────────────────────────────────────────────────────────
const RISKS = [
  { topic: "Celltrion DP (dolum-kapatma) kapasitesi yetersiz kalıyor", type: "Fırsat", impact: "Çok Yüksek", likelihood: "Yüksek",
    meaning: "Songdo Fabrika 4&5 yatırımı DS (biyoreaktör) içindir, DP için değil. Celltrion'un mevcut DP hattı (Yesan + Songdo) hızla büyüyen portföyü ve CMO iş yükünü karşılamakta zorlanıyor. Harici DP fason kapasitesine ihtiyaç kalıcı.",
    action: "FIRSAT: Celltrion'un büyüyen DP açığı, Gensenta için uzun vadeli bir tedarik ortaklığı zemini oluşturuyor. Mevcut ilişkiyi genişletmek için 2026 içinde müzakere başlatılmalı.",
    sources: [{label:"Celltrion — Songdo Fabrika 4&5 Yatırımı DS kapasitesi (Mar 2026)", url:"https://www.koreaherald.com/article/10701575"},{label:"KED Global — Celltrion CDMO stratejisi", url:"https://www.koreaherald.com/article/10696294"}] },
  { topic: "Eydenzelt ABD (CT-P42) lansmanı — IV vial DP talebi (Ocak 2027)", type: "İzleme", impact: "Yüksek", likelihood: "Yüksek",
    meaning: "Regeneron patent uzlaşması 31 Aralık 2026 sonrasını açıyor. Aflibercept IV vial büyük hacimli bir DP lansmanı. Ancak Gensenta'nın FDA onayı henüz yok (Vial 4 PV hedefi Q2 2027). ABD lansman penceresi Gensenta'nın FDA onayı timeline'ı ile uyumlu değil — kısa vadede fiili DP fırsatına dönüşmüyor.",
    action: "İZLEME: Eydenzelt (CT-P42) için kısa vadeli ABD DP teklifi mümkün değil. Doğru yorum: 'FDA onayı sonrası potansiyel fırsat'. Vial 4 FDA PV süreci (Q2 2027+) tamamlandığında re-değerlendirilecek; bu arada Celltrion'un ABD DP tedarikçi tercihini izle.",
    sources: [{label:"Big Molecule Watch — Regeneron patent uzlaşması (Eki 2025)", url:"https://www.bigmoleculewatch.com/2025/10/14/fda-approves-celltrions-aflibercept-biosimilar/"},{label:"Pearce IP — Eydenzelt AB & UK lansmanı (Ara 2025)", url:"https://www.pearceip.law/2025/12/16/celltrion-launches-biosimilar-aflibercept-in-eu-uk/"},{label:"Gensenta GMP Profili — FDA PV hedefi Q2 2027", url:""}] },
  { topic: "SC/PFS formülasyon dalgası — Herzuma SC (CT-P6 SC), CT-P55, Avtozma (CT-P47) SC", type: "Fırsat", impact: "Çok Yüksek", likelihood: "Yüksek",
    meaning: "[Fırsat seviyesi arttı] Herzuma SC (CT-P6 SC) (EMA Nis 2026 + Kore MFDS 28 May 2026 başvuruları), CT-P55 (Health Canada başvurusu 1 Haz 2026; ABD/AB/Kore planlı), Avtozma (CT-P47) SC (ABD lansmanı Mar 2026) ile SC/PFS formatı çok-bölge başvurularla hız kazanıyor. Celltrion bu formatlarda DP dolum kapasitesini dışarıdan temin etmeye devam edecek.",
    action: "FIRSAT: Gensenta'nın PFS veya SC vial dolum kabiliyeti varsa Celltrion'un SC CDMO ekibiyle temas önceliklendirilmeli. Herzuma SC (CT-P6 SC) + CT-P55'in AB/Kore başvuruları Gensenta'nın onaylı pazarlarında — hazırlık penceresi dar.",
    sources: [{label:"Pearce IP — Herzuma SC Kore MFDS başvurusu (May 2026)", url:"https://www.pearceip.law/2026/05/28/celltrion-submits-korean-application-for-biosimilar-trastuzumab-sc/"},{label:"Pearce IP — CT-P55 Health Canada başvurusu (Haz 2026)", url:"https://www.pearceip.law/2026/06/01/celltrion-files-canadian-application-for-biosimilar-secukinumab/"},{label:"Pearce IP — Herzuma SC EMA başvurusu (Nis 2026)", url:"https://www.pearceip.law/2026/04/30/celltrion-submits-ema-application-for-trastuzumab-sc-biosimilar/"}] },
  { topic: "CT-P51 (Keytruda biosimilar) — Uzun Vade DP Fırsatı", type: "Fırsat", impact: "Çok Yüksek", likelihood: "Düşük",
    meaning: "$30B+ referans pazar; başarılı olursa tarihin en büyük biosimilar lansmanı. IV infüzyon vial formatı Gensenta'nın uzmanlık alanı. ABD patenti 2029, AB 2031.",
    action: "TAKİP: 2029-2030'da olgunlaşacak. Klinik veri ve patent gelişmelerini izle; DP kapasitesi planlamasına şimdi dahil et.",
    sources: [{label:"Celltrion — Biosimilar portföy genişleme (Mar 2026)", url:"https://www.celltrion.com/en-us/company/media-center/press-release/4460"}] },
  { topic: "Stoboclo / Osenvelt (CT-P41) SC PFS — ABD hızlı büyümesi", type: "İzleme", impact: "Orta", likelihood: "Yüksek",
    meaning: "Denosumab SC PFS ABD'de PBM %60+ coverage ile hızla büyüyor. Ancak Gensenta'nın FDA onayı yok ve PFS formatı yüksek öncelikli kabiliyet alanı değil. ABD-bound PFS dolum kapasitesi yorumu kısa vadede uygulanabilir değil.",
    action: "İZLEME: ABD denosumab hacim büyümesi FDA onayı sonrası (2028+) değerlendirilebilir. AB ve diğer onaylı pazarlardaki denosumab hacim sinyalleri ayrı izlenmeli.",
    sources: [{label:"Celltrion — Stoboclo CVS Caremark + ExpressScripts formuleri (Şub 2026)", url:"https://www.celltrion.com/en-us/company/media-center/press-release/4458"},{label:"Gensenta GMP Profili — FDA PV hedefi Q2 2027", url:""}] },
  { topic: "CMO backlog taşması — DP dolum ihtiyacı dışarıya kayıyor", type: "Fırsat", impact: "Yüksek", likelihood: "Yüksek",
    meaning: "Celltrion'un Eli Lilly ve gizli partner ile toplamda >582 Mn € (₩>1T, Mar 2026) CMO birikimi var. Bu anlaşmalar DS ve DP kapasitesini kısıtlıyor; kendi biosimilar ürünleri için DP dolumunu dışarıdan temin zorunluluğu artıyor.",
    action: "FIRSAT: CMO iş yükü altında kalan Celltrion'un kendi ürün DP ihtiyacı için spot veya çerçeve anlaşma fırsatı. 2026-2027 en kritik dönem.",
    sources: [{label:"Celltrion — 172 Mn € (₩294,9 milyar) CMO anlaşması (Mar 2026)", url:"https://www.koreaherald.com/article/10696294"},{label:"Korea Biomedical Review — Eli Lilly NJ CMO Anlaşması (Ara 2025)", url:"https://www.koreabiomed.com/news/articleView.html?idxno=30155"}] },
  { topic: "Türkiye & MENA — Hikma ortaklığı ve lokal DP üretim hubs", type: "Fırsat", impact: "Yüksek", likelihood: "Yüksek",
    meaning: "Celltrion-Hikma MENA ortaklığı 6 yeni ürünle genişledi. MENA biosimilar pazarı %19 CAGR büyüyor. Celltrion bölgede 'lokal üretim hubs' stratejisi izliyor; Türkiye AB-GMP standartlarında steril dolum üretici olarak bu modele tam uyuyor.",
    action: "FIRSAT: Hikma veya Celltrion BioSolutions ile MENA tedarik zinciri görüşmesi önceliklendirilmeli. Türkiye'nin coğrafi ve regülasyonel konumu güçlü bir argüman.",
    sources: [{label:"Pearce IP — Celltrion-Hikma MENA ortaklığı (Eki 2025)", url:"https://www.pearceip.law/2025/10/06/celltrion-hikma-expand-mena-partnership-to-include-6-additional-biosimilars/"}] },
  { topic: "Songdo Yeni DP Plant (2027) + Yesan — DP İçselleştirme Riski", type: "Risk", impact: "Orta", likelihood: "Yüksek",
    meaning: "Celltrion'un ayrı bir Songdo Yeni DP Plant'ı 2027'de ticari üretime giriyor (6,5M vial/yıl). Yesan tesisi ile birlikte DP içselleştirme oranı artıyor. Gensenta'nın DS artışından kaynaklanan DP dolum fırsatları devam ederken, Yeni DP Plant devreye girdikçe bazı vial formatlarında CMO payı azalabilir.",
    action: "TAKİP: Yesan ve Songdo DP hattı yatırım duyurularını izle. Mevcut sözleşme kapsamını uzun vadeye bağla; spot değil, çerçeve anlaşma tercih et.",
    sources: [{label:"Celltrion — Songdo Fabrika 4&5 Yatırımı (Mar 2026)", url:"https://www.koreaherald.com/article/10701575"}] },
  { topic: "Rekabet: Diğer steril flakon CMO'ları", type: "Risk", impact: "Orta", likelihood: "Yüksek",
    meaning: "Celltrion'un DP fason ihtiyaçları için Avrupa ve Asya'dan rakip CMO'lar da teklif veriyor. Fiyat, kapasite esnekliği ve regülasyonel sertifikasyon belirleyici.",
    action: "RİSK: Gensenta'nın AB-GMP sertifikasyonu (EMA/AIFA + AEMPS), PMDA, MFDS, ANVISA, SFDA, Russia ve Türkiye onayları öne çıkarılmalı. Tekliflerde teslimat hızı ve esneklik vurgulanmalı.",
    sources: [] },
  { topic: "EMA pazarı — Gensenta'nın en güçlü GMP onay tabanı", type: "Fırsat", impact: "Çok Yüksek", likelihood: "Yüksek",
    meaning: "Gensenta'nın EMA onaylı GMP sertifikası (AIFA İtalya + AEMPS İspanya) Avrupa-bound Celltrion DP'si için en güçlü argüman. Remsima IV (CT-P13) liquid (Mart 2026 AB lansman), Avtozma IV (CT-P47) (Oca 2026 AB), SteQeyma (CT-P43) autoinjector (CHMP olumlu Ara 2025), Eydenzelt (CT-P42) AB lansmanı (Ara 2025), Herzuma SC (CT-P6 SC) (EMA başvurusu Nis 2026) — hepsi EMA-bound. Bu, kısa vadede en somut Gensenta fırsatı.",
    action: "FIRSAT: AB pazarına yönelik DP teklifi Celltrion ile en öncelikli görüşme konusu olmalı. Vegzelma (CT-P16), Truxima (CT-P10), Avtozma IV (CT-P47), Steqeyma IV (CT-P43), Eydenzelt (CT-P42) — Gensenta'nın liquid/lyo vial kabiliyetiyle birebir uyumlu, EMA onaylı.",
    sources: [{label:"Gensenta GMP Profili — EMA/AIFA Italy + AEMPS Spain onayları", url:""},{label:"Pearce IP — Remsima IV liquid AB lansmanı (Mar 2026)", url:"https://www.pearceip.law/2026/03/11/celltrion-launches-iv-formulation-of-biosimilar-infliximab-in-europe/"}] },
  { topic: "Japonya (PMDA) ve Kore (MFDS) — onaylı pazarda agresif Celltrion büyümesi", type: "Fırsat", impact: "Yüksek", likelihood: "Yüksek",
    meaning: "Gensenta PMDA + MFDS GMP onaylı. Celltrion Japonya'da 2025-2026'da Steqeyma (CT-P43) SC/IV, Avtozma (CT-P47), Omlyclo (CT-P39), Eydenzelt (CT-P42) onayları aldı; Vegzelma (CT-P16) %50, Remsima (CT-P13) %43, Herzuma (CT-P6) %72 pazar payı. MFDS yeni biyobenzer onay süresi 420→295 güne kısalıyor. Bu iki pazarda Celltrion'un DP arz tarafı kritik.",
    action: "FIRSAT: PMDA ve MFDS onaylı Gensenta için Japonya/Kore'ye yönelik DP teklifi mümkün. Vegzelma (CT-P16), Steqeyma IV (CT-P43), Avtozma IV (CT-P47) gibi vial-formatlı ürünler için somut görüşme açılabilir.",
    sources: [{label:"Gensenta GMP Profili — PMDA + MFDS onayları", url:""},{label:"Pearce IP — Avtozma JP lansmanı (Nis 2026)", url:"https://www.pearceip.law/2026/04/28/celltrion-first-to-launch-biosimilar-tocilizumab-in-japan/"}] },
  { topic: "MENA / Suudi Arabistan (SFDA) — Hikma ortaklığı tedarik zinciri", type: "Fırsat", impact: "Yüksek", likelihood: "Orta",
    meaning: "Gensenta SFDA GMP onaylı. Celltrion-Hikma MENA ortaklığı 6 yeni ürünle genişledi. Suudi Arabistan'a yönelik DP'de Gensenta doğrudan uyumlu üretici konumunda.",
    action: "FIRSAT: Hikma veya Celltrion BioSolutions ile MENA tedarik zinciri görüşmesi — SFDA onayını öne çıkararak başlatılabilir.",
    sources: [{label:"Gensenta GMP Profili — SFDA onayı", url:""},{label:"Pearce IP — Celltrion-Hikma MENA ortaklığı (Eki 2025)", url:"https://www.pearceip.law/2025/10/06/celltrion-hikma-expand-mena-partnership-to-include-6-additional-biosimilars/"}] },
  { topic: "Brezilya (ANVISA) — LATAM kapısı", type: "Fırsat", impact: "Orta", likelihood: "Orta",
    meaning: "Gensenta ANVISA GMP onaylı. Celltrion Brezilya'yı LATAM bridgehead olarak kullanıyor; Omriclo (Kas 2025-Mar 2026 lansman), Herzuma (CT-P6) 5 yıl üst üste tender, Remsima SC (CT-P13 SC) + Yuflyma (CT-P17) rollout planlı.",
    action: "FIRSAT: Brezilya'ya yönelik DP teklifi ANVISA onayı argümanıyla iletilebilir. Omriclo PFS hariç IV vial ürünler için somut potansiyel.",
    sources: [{label:"Gensenta GMP Profili — ANVISA onayı", url:""},{label:"Pearce IP — Omlyclo Brezilya ANVISA (Kas 2025)", url:"https://www.pearceip.law/2025/11/27/celltrion-launches-first-omalizumab-biosimilar-in-brazil-completes-launch-in-major-eu-countries/"}] },
  { topic: "ABD pazarı — Gensenta FDA onayı yok, kısa vadede fiili fırsat yok", type: "İzleme", impact: "Yüksek", likelihood: "Orta",
    meaning: "Gensenta'nın FDA onayı henüz yok. Vial 4 hattı için FDA PV hedef başlangıcı Q2 2027; onay sonrası süreç de zaman alıyor. Bu nedenle ABD-bound tüm Celltrion lansmanları (Eydenzelt (CT-P42) 31 Ara 2026, Avtozma (CT-P47) SC, Stoboclo/Osenvelt (CT-P41), Zymfentra (CT-P13 SC) hacim artışı, vb.) kısa vadede Gensenta için fiili DP fırsatına dönüşmüyor.",
    action: "İZLEME: ABD lansmanlarını 'post-FDA potansiyeli' olarak takip et. Vial 4 FDA PV başlangıcı Q2 2027; en erken fiili ABD DP fırsatı 2028+. Bu süreçte Celltrion ABD DP tedarikçi tercihlerini izle (Branchburg'a DP hattı eklenip eklenmediği kritik).",
    sources: [{label:"Gensenta GMP Profili — Vial 4 FDA PV hedefi Q2 2027", url:""}] },
];

// ── Signals ─────────────────────────────────────────────────────────────────
const SIGNALS = [
  { title: "Vial 4 FDA PV Başlangıcı (Gensenta)", urgency: "Acil",   window: "2027 Q2 hedef",     detail: "Gensenta'nın FDA onayı yok. Vial 4 hattı için PV başlangıç hedefi Q2 2027. Bu tarihteki sapma veya onay süresinin uzaması ABD-bound DP fırsatlarının (Eydenzelt ABD (CT-P42), vb.) tüm timeline'ını öteleyecek. En kritik iç sinyal." },
  { title: "Herzuma SC (CT-P6 SC) EMA + Kore MFDS Onayı", urgency: "Acil",      window: "2026 Q3-Q4 → 2027",  detail: "EMA başvurusu Nis 2026 + Kore MFDS başvurusu 28 May 2026 yapıldı. CHMP pozitif görüş ~12-15 ay sonra. İlk SC trastuzumab biosimilar — first-mover. Gensenta EMA + MFDS onaylı (İtalya + İspanya + Kore) — AB ve Kore DP teklifi için kanal açık." },
  { title: "CT-P55 Çok-Bölge Başvuru Dalgası", urgency: "Yakın Dönem", window: "2026-2027",        detail: "[Revize] Health Canada başvurusu 1 Haz 2026 (Pearce IP teyitli). ABD/AB/Kore başvuruları planlı; Faz 3 hasta sayısı 375→153 (Şub 2026) → hızlı timeline. Secukinumab (Cosentyx) ağırlıklı SC/PFS → Gensenta orta öncelik; olası liyofilize flakon sunumu → yüksek öncelik. AB + Kore Gensenta onaylı pazarlar — erken aşama DP fırsat sinyali; format teyidine kadar izleme." },
  { title: "Biyobenzer Deregülasyonu (Küresel)", urgency: "Orta Vade", window: "2026-2027", detail: "[Yeni] FDA/EMA/Health Canada/MFDS Faz 3'ü hafifletip PK/analitik değerlendirmeye geçiyor (Haz 2026, The Elec). Celltrion pipeline'ını hızlandırıyor. Gensenta lensi: daha hızlı ve daha çok lansman → orta-uzun vadede dolaylı DP talebi; özellikle AB/Japonya onaylı vial molekülleri için fırsat penceresi genişler." },
  { title: "SteQeyma (CT-P43) Autoinjector AB Onayı",urgency: "Acil",         window: "2026 Q2",           detail: "CHMP pozitif görüş Aralık 2025. EC onayı 2-3 ay içinde bekleniyor. EMA-bound." },
  { title: "Eydenzelt ABD (CT-P42) Lansmanı",        urgency: "İzleme",       window: "2026 Q4 — 2027 H1", detail: "Regeneron uzlaşması 31 Aralık 2026 sonrasını veriyor. Gensenta FDA onayı olmadan kısa vadede fiili DP teklifi mümkün değil; Vial 4 PV (Q2 2027+) sonrası re-değerlendirme. Bu arada Celltrion'un seçtiği ABD DP tedarikçisini izle." },
  { title: "CT-G32 Obezite/Metabolik Platform", urgency: "Orta Vade", window: "IND 2027 H1",     detail: "Quadruple-agonist GLP-1 obezite adayı, primat toksikoloji başladı (29 May 2026). Oral obezite adayı IND 2028 H2. Yeni ilaç/peptid — DP vial fason yakın vadede değil; uzun vadede yeni format/hacim sinyali. Scohia Pharma (Japonya) iş birliği." },
  { title: "Songdo Fabrika 4-5 İnşaat Takvimi", urgency: "Yakın Dönem", window: "2026-2030",     detail: "2030'a kadar fazlı inşaat. DS yatırımı — Gensenta için doğrudan risk değil, dolaylı hacim sinyali. Her aşama haberi kapasite tahsisi konusunda sinyal verir." },
  { title: "Songdo Yeni DP Plant Devreye Alma", urgency: "Yakın Dönem", window: "2027 ticari üretim", detail: "6.5M vial/yıl DP kapasitesi. Hangi ürünlerin ilk içselleştirileceği (Truxima (CT-P10), Vegzelma (CT-P16), Eydenzelt (CT-P42), Steqeyma IV (CT-P43), Avtozma IV (CT-P47)) Gensenta için doğrudan hacim sinyali." },
  { title: "CT-P55 (Cosentyx) Faz III",     urgency: "Yakın Dönem",  window: "2026-2027",         detail: "Hasta sayısı 375→153 indirildi. Hız ivmesi Celltrion pipeline süreçleri hızlanacağına işaret ediyor." },
  { title: "CMO Anlaşma Akışı",             urgency: "Yakın Dönem",  window: "Her çeyrek",        detail: "Kümülatif CMO backlog 582 Mn € (₩1T) geçti. Yeni anlaşmalar her çeyrekte açıklanıyor — DS odaklı ama DP iç kapasiteyi de meşgul ediyor." },
  { title: "Q2 2026 Finansal Sonuçları",    urgency: "Yakın Dönem",  window: "Ağustos 2026",      detail: "Q1 2026 +36% gelir büyümesi. 3,14 Mrd € (₩5,3T) yıl hedefine ilerleme. Ürün bazlı satış kırılımı." },
  { title: "Branchburg NJ — DP Hattı?",     urgency: "Yakın Dönem",  window: "Çeyreklik IR'lar",  detail: "Şu an sadece DS. Tarife rejimi nedeniyle Celltrion'un Branchburg'a DP/fill-finish hattı eklemesi muhtemel; eklerse ABD-bound iş için Türkiye/AB'den ABD'ye kayma başlar. CapEx breakdown'larda izle." },
  { title: "Japonya Yeni Lansmanlar (PMDA)",urgency: "Orta Vade",    window: "2026 yıl boyu",     detail: "Omlyclo (CT-P39), Eydenzelt (CT-P42), Avtozma (CT-P47), Steqeyma IV (CT-P43) onayları. Gensenta PMDA onaylı — Japonya DP teklifleri somutlaştırılabilir; özellikle vial-formatlı trastuzumab/infliximab Gensenta için AB'den sonra en somut PMDA DP tabanı." },
  { title: "Halozyme Hyaluronidase Patent Bitişi", urgency: "Orta Vade", window: "2027",          detail: "Patent bitişi sonrası ikinci SC dönüşüm dalgası bekleniyor. Herzuma SC (CT-P6 SC) sonrası Avtozma (CT-P47) SC, Yuflyma (CT-P17) SC, Vegzelma (CT-P16) SC gibi ek SC formülasyonlar gelebilir — IV hacmi aşınma riski." },
];

// ── Financial ───────────────────────────────────────────────────────────────
const REVENUE_SERIES = [
  { year: "2023",  value: 1.58, label: "1,58 Mrd €", planned: false },  // ₩2,20T @ 2023 avg 1.395
  { year: "2024",  value: 2.41, label: "2,41 Mrd €", planned: false },  // ₩3,56T @ 2024 avg 1.475
  { year: "2025",  value: 2.66, label: "2,66 Mrd €", planned: false },  // ₩4,16T @ 2025 avg 1.565
  { year: "2026H", value: 3.09, label: "3,09 Mrd €", planned: true },  // ₩5,30T hedef @ 2026 YTD 1.715
];
const OPPROFIT_SERIES = [
  { year: "2023",  value: 0.35, label: "351 Mn €",  planned: false },  // ₩0,49T @ 1.395
  { year: "2024",  value: 0.33, label: "332 Mn €",  planned: false },  // ₩0,49T @ 1.475
  { year: "2025",  value: 0.75, label: "748 Mn €",  planned: false },  // ₩1,17T @ 1.565
  { year: "2026H", value: 0.93, label: "933 Mn €",  planned: true },   // ₩1,60T hedef @ 1.715
];
const PRODUCT_MIX = [
  { name: "Remsima IV/SC (CT-P13)", pct: 28, color: "#2563eb" },
  { name: "Zymfentra (CT-P13 SC)",  pct: 16, color: "#0ea5e9" },
  { name: "1. nesil onkoloji ürünleri", pct: 16, color: "#94a3b8", tip: { title: "1. nesil onkoloji ürünleri", subtitle: "Olgun mAb biyobenzerleri — büyüme zirvesini geçmiş kalemler", items: [ { code: "CT-P10", name: "Truxima (rituximab)" }, { code: "CT-P6", name: "Herzuma IV (trastuzumab)" }, { code: "CT-P16", name: "Vegzelma (bevacizumab)" } ], note: "Fiyat ve tender baskısı altında; yeni ürünlerden ayrı izlenir." } },
  { name: "Yuflyma (CT-P17)",       pct: 14, color: "#22c55e" },
  { name: "Diğer yeni ürünler", pct: 12, color: "#a855f7" },
  { name: "SteQeyma (CT-P43)",      pct: 8,  color: "#f59e0b" },
  { name: "Omlyclo (CT-P39)",       pct: 6,  color: "#ef4444" },
];
const GROWTH_SIGNALS = [
  { name: "Remsima IV/SC (CT-P13)",      signal: ">640 Mn €/yıl satış (₩>1T, 2025 avg 1.565); AB'de %70 pazar payı",                              trend: "Stabil, Büyük",  tone: "blue" },
  { name: "Zymfentra (ABD) (CT-P13 SC)",    signal: "447 Mn € (₩700+ milyar) 2025 hedefi; PBM %90+ coverage",                            trend: "Hızlı Büyüme",   tone: "green" },
  { name: "Yuflyma (CT-P17)",            signal: "ABD'de 2,4x büyüme; interchangeable ile ivme artıyor",                   trend: "Yüksek Büyüme",  tone: "green" },
  { name: "SteQeyma (CT-P43)",           signal: "ABD lansmanı Mart 2025; yeni ürün katkısı %54→%70 hedefi",               trend: "Yeni, Büyüme",   tone: "purple" },
  { name: "Omlyclo (CT-P39)",            signal: "Küresel genişleme; ABD interchangeable; Japonya yeni onay",              trend: "Yeni, Büyüme",   tone: "purple" },
  { name: "Avtozma (CT-P47)",            signal: "Ocak-Mart 2026 çift formülasyon; büyüme erken fazda",                    trend: "Yeni, Büyüme",   tone: "purple" },
  { name: "Stoboclo/Osenvelt (CT-P41)",  signal: "PBM %60+ coverage; açık piyasa penetrasyonu büyüyor",                    trend: "Yeni, Büyüme",   tone: "purple" },
  { name: "Eydenzelt (CT-P42) (AB)",     signal: "AB lansmanı Ara 2025; ABD 2027 sonrası",                                 trend: "AB Büyüme",      tone: "sky" },
  { name: "Truxima (CT-P10)",            signal: "Olgun ürün; fiyat baskısı var, hacim korunuyor",                         trend: "Stabil-Düşüş",   tone: "amber" },
  { name: "Herzuma (CT-P6)",            signal: "Olgun IV; SC form stratejisiyle yeniden büyüme hedefleniyor",            trend: "SC ile İvme",    tone: "blue" },
  { name: "Vegzelma (CT-P16)",           signal: "ABD formuler kazanımları (Ventegra); global genişleme",                  trend: "Orta Büyüme",    tone: "blue" },
];
const EXPECTATIONS = [
  "2026 Gelir Hedefi: 3,14 Mrd € (₩5,3T) — Q1 2026 654 Mn € (₩1,145T) ile başlandı (+36% YoY)",
  "2030 Vizyonu: 6,86 Mrd € (₩12T, mevcut kur projeksiyonu) satış, 18 onaylı ürün, ADC/msAb klinik veri",
  "Yeni ürünlerin toplam satış içindeki payı: 2025'te %54, 2026'da %70 hedefi",
  "Zymfentra (CT-P13 SC) ABD PBM penetrasyonu: 2025'te %90+ → 2026'da daha geniş hasta tabanı",
  "DS üretimi: 316.000 L → 571.000 L (2030 sonrası); %100 DS internalizasyonu 2031 hedefi",
  "DP üretimi: Songdo yeni hat + Yesan tesisi ile %90 internalizasyon",
  "CMO geliri: Eli Lilly ($473M) + ikinci anonim partner ($199M) + CDMO büyümesi",
  "Next-gen pipeline (Science & Innovation Day 2026): ADC, multispesifik antikor, novel antikor/füzyon protein, peptid, mikrobiyom; open innovation ABD/Japonya/Çin'e genişliyor",
  "R&D yatırımı 2025'te gelirin ~%19'u; ADC ve msAb platformlarına öncelik",
];

// ── Cenk (Gensenta yorumu) ──────────────────────────────────────────────────
const CENK_INSIGHTS = [
  { tag: "Fırsat", title: "EMA Pazarı — Gensenta'nın en güçlü kısa vadeli kanalı",
    body: "Gensenta'nın EMA onaylı GMP tabanı (AIFA İtalya + AEMPS İspanya) Avrupa-bound Celltrion DP'si için en güçlü argüman. 2025-2026 dalgası tam bu kanala bakıyor: Remsima IV (CT-P13) liquid AB lansmanı (Mart 2026), Avtozma IV (CT-P47) (Oca 2026 AB), SteQeyma (CT-P43) autoinjector (CHMP Ara 2025), Eydenzelt (CT-P42) AB lansmanı (Ara 2025), Herzuma SC (CT-P6 SC) EMA başvurusu (Nis 2026). Bu, kısa vadede sunulabilecek en somut DP fırsatları kümesidir. Vegzelma (CT-P16), Truxima (CT-P10), Avtozma IV (CT-P47), Steqeyma IV (CT-P43) — Gensenta'nın liquid/lyo vial kabiliyetiyle birebir uyumlu. Bevacizumab (CT-P16), rituximab (CT-P10), denosumab (CT-P41), aflibercept (CT-P42) likit flakon ve trastuzumab (CT-P6) liyofilize flakon gibi AB-bound vial molekülleri, EMA onaylı (İtalya+İspanya) hatlarla en somut yakın vadeli DP zeminini oluşturur." },
  { tag: "Fırsat", title: "DP Kapasitesi Yetmiyor — Yapısal arz açığı 2026-2027 zirvesinde",
    body: "Celltrion'un Songdo Fabrika 4&5 yatırımı tamamen DS (etken madde / biyoreaktör) için; DP (steril dolum-kapatma) kapasitesini artırmıyor. Aynı zamanda Celltrion'un CMO iş birikimi (>582 Mn € ≈ ₩>1T, Mar 2026) ilave DP kapasitesini de meşgul ediyor. 11 ürün portföyü + yeni lansmanlar + CMO yükü = Gensenta gibi harici DP fasoncu ihtiyacı kalıcı ve büyüyor. Songdo yeni DP plant tam kapasiteye 2027-2028'de ulaşacak; bu pencere harici fasoncu için kritik." },
  { tag: "İzleme", title: "ABD Lansmanları — Gensenta FDA Onayı Sonrası (2028+) Re-değerlendirme",
    body: "Gensenta'nın FDA onayı henüz yok. Vial 4 hattı için FDA PV hedef başlangıcı Q2 2027; onay süreci PV başlangıcından sonra da zaman alıyor. Bu yüzden ABD'ye yönelik tüm Celltrion lansmanları — Eydenzelt (CT-P42) (31 Ara 2026), Avtozma (CT-P47) SC (Mart 2026), Stoboclo/Osenvelt (CT-P41) ABD büyümesi, Zymfentra (CT-P13 SC) ABD hacim artışı — kısa vadede Gensenta için fiili DP fırsatı oluşturmuyor. Doğru çerçeveleme: 'FDA onayı sonrası potansiyel fırsat'. En erken fiili senaryo 2028+. Bu süreçte Celltrion'un Branchburg'a DP hattı eklenip eklenmediği yakından izlenmeli." },
  { tag: "Fırsat", title: "Japonya (PMDA) + Kore (MFDS) + Brezilya (ANVISA) + Suudi (SFDA) — Onaylı pazar çoğul kanal",
    body: "Gensenta'nın GMP onay portföyü Türkiye + EMA (İtalya + İspanya) + PMDA + MFDS + ANVISA + SFDA + Rusya'yı kapsıyor. Celltrion'un büyüme stratejisi bu pazarların hepsinde aktif: Japonya'da Vegzelma (CT-P16) %50, Remsima (CT-P13) %43, Herzuma (CT-P6) %72 pazar payı; Kore MFDS onay süresi 420→295 güne kısalıyor; Brezilya LATAM bridgehead'i; Suudi/MENA Hikma ortaklığı. Bu pazarlara yönelik vial-formatlı DP teklifleri (Vegzelma (CT-P16), Truxima (CT-P10), Avtozma IV (CT-P47), Steqeyma IV (CT-P43), Eydenzelt (CT-P42)) somut görüşme açabilir." },
  { tag: "Karma", title: "Format kayması — SC/PFS dalgası çok-bölge başvurularla hızlanıyor",
    body: "Celltrion SC stratejisi çok-bölge başvurularla hızlanıyor: Herzuma SC (CT-P6 SC) (EMA Nis 2026 + Kore MFDS 28 May 2026), CT-P55 (Health Canada 1 Haz 2026; ABD/AB/Kore planlı), Avtozma (CT-P47) SC (ABD Mar 2026), Halozyme hyaluronidase patenti 2027'de bitiyor. SC/PFS formatları Gensenta'nın yüksek öncelikli kabiliyet alanı dışında ise: (a) IV vial hacmi SC'ye kaydıkça mevcut Herzuma (CT-P6)/Avtozma IV (CT-P47) iş hacmi aşınabilir; (b) yeni SC/PFS fırsatları paralel rakiplere kayıyor olabilir. Önemli not: Herzuma SC (CT-P6 SC) ve CT-P55'in AB + Kore başvuruları Gensenta'nın onaylı pazarlarında — PFS/SC dolum kabiliyeti kazanılırsa bunlar somut fırsata döner. Halozyme patent bitişi (2027) sonrası ikinci SC dönüşüm dalgasına hazırlık şart." },
];
const CENK_ACTIONS = [
  { text: "EMA pazarı (İtalya + İspanya GMP) için Avtozma IV (CT-P47), Vegzelma (CT-P16), Steqeyma IV (CT-P43), Eydenzelt (CT-P42) AB DP teklif paketi hazırla", when: "Acil" },
  { text: "Mevcut Celltrion DS/DP sözleşme kapsamını ve vade tarihlerini gözden geçir", when: "Acil" },
  { text: "Japonya (PMDA) + Kore (MFDS) Celltrion DP tedarik görüşmesi aç — vial-formatlı ürünlere odaklan", when: "Acil" },
  { text: "CT-P55 (sekukinumab) AB + Kore başvurularını izle — Gensenta onaylı pazarlarda SC/PFS DP fırsatı adayı", when: "Yakın" },
  { text: "Hikma MENA tedarik zinciri görüşmesi — SFDA onayını öne çıkararak", when: "Yakın" },
  { text: "Brezilya (ANVISA) Celltrion DP fırsatı — Herzuma (CT-P6), Vegzelma (CT-P16), Truxima (CT-P10) için araştır", when: "Yakın" },
  { text: "Vial 4 FDA PV (Q2 2027 hedef) timeline'ını sıkı takip et — ABD fırsat penceresi PV sonrası açılır", when: "Yakın" },
  { text: "Branchburg NJ tesisinde DP/fill-finish hattı eklenip eklenmediğini IR sunumlarından izle", when: "Yakın" },
  { text: "Songdo yeni DP plant (2027 ticari üretim) ürün taşıma sırası — hangi ürünler ilk içselleştirilecek", when: "Orta" },
  { text: "Halozyme hyaluronidase patent bitişi (2027) sonrası SC dönüşüm dalgasına PFS/SC kabiliyet hazırlığı", when: "Orta" },
  { text: "CT-P51 (Keytruda) IV vial 2029-2030 DP üretim hazırlığı için takip listesine al", when: "Uzun Vade" },
  { text: "Vial 4 FDA onayı sonrası (2028+) ABD'ye yönelik Celltrion DP teklif paketi hazırla", when: "Uzun Vade" },
];

// ── Sources used in this update ─────────────────────────────────────────────
// Bu liste her aylık güncellemede o ay kullanılan kaynaklara göre yenilenir.
// Sıralama önem sırasına göre: resmi şirket / regülatör / sektör yayını / haber.
const SOURCES_USED = [
  "Celltrion IR",
  "Pearce IP",
  "Seoul Economic Daily",
  "Korea Herald",
  "Korea Times",
  "The Elec",
];

// ── Last update timestamp ───────────────────────────────────────────────────
const LAST_UPDATED = "27 Haziran 2026, Cumartesi";

// ── Gensenta DP Fırsat Radarı — kamuya açık gelişmelerin Gensenta DP lensiyle skorlanması.
// NOT: Gizli tahsis/sözleşme/hacim verisi İÇERMEZ; her satır halka açık + doğrulanmış kaynağa dayanır.
const RADAR_MARKETS = [
  { rank: 1, market: "AB (EMA)",            gmp: "AIFA İtalya + AEMPS İspanya", note: "En güçlü onay tabanı; vial molekül kümesi", weight: 100, tone: "green" },
  { rank: 2, market: "Japonya (PMDA)",      gmp: "PMDA onaylı",                 note: "Onaylı, büyüyen vial pazarı",              weight: 78,  tone: "sky" },
  { rank: 3, market: "Kore (MFDS)",         gmp: "MFDS onaylı",                 note: "Üretim merkezi yakını; SC/PFS dalgası",    weight: 60,  tone: "blue" },
  { rank: 4, market: "Brezilya (ANVISA)",   gmp: "ANVISA onaylı",               note: "LATAM kapısı",                            weight: 42,  tone: "amber" },
  { rank: 5, market: "MENA / Suudi (SFDA)", gmp: "SFDA onaylı",                 note: "Hikma ortaklığı bölgesi",                 weight: 32,  tone: "orange" },
  { rank: 6, market: "ABD (FDA)",           gmp: "FDA onayı YOK — Vial 4 PV Q2 2027+", note: "İzleme — FDA'ya bağlı",            weight: 15,  tone: "red" },
];

const RADAR = [
  // GRUP — Celltrion'dan üretim teklifi gelenler (iç bilgi; Cenk sağlar)
  { code: "CT-P55", mol: "secukinumab", ref: "Cosentyx", format: "SC — PFS (150mg/1mL)", fit: "Orta (SC/PFS)", phase: "Faz 3; Health Canada başvurusu (1 Haz 2026)", offer: "Celltrion'dan klinik seri teklifi geldi", markets: "AB / Kore / Kanada · ABD planlı", assessment: "Aktif klinik seri teklifi — SC/PFS DP kapasite teyidine bağlı; en somut fırsat", priority: "Orta", conf: "Doğrulanmış", url: "https://www.pearceip.law/2026/06/01/celltrion-files-canadian-application-for-biosimilar-secukinumab/" },

  // GRUP — Talep adayları (teklif yok); varsayılan etiket
  { code: "CT-P47", mol: "tocilizumab", ref: "Avtozma (Actemra)", format: "IV flakon (+SC)", fit: "Yüksek (IV)", phase: "Ticari/onaylı (2025); AB EC Şub 2025, Japonya lansman", offer: "Talep adayı — teklif yok", markets: "AB / Japonya · ABD", assessment: "Ticari IV flakon — en yüksek uyumlu proaktif talep adayı", priority: "Yüksek", conf: "Doğrulanmış", url: "https://www.pearceip.law/2026/04/28/celltrion-first-to-launch-biosimilar-tocilizumab-in-japan/" },
  { code: "CT-P53", mol: "ocrelizumab", ref: "Ocrevus", format: "IV flakon", fit: "Yüksek (IV)", phase: "Faz 3 (MS); FDA + EMA IND (kısmi)", offer: "Talep adayı — teklif yok", markets: "AB / ABD (klinik)", assessment: "IV flakon yüksek uyum; Faz 3 — orta vadeli güçlü aday", priority: "Yüksek", conf: "Doğrulanmış", url: "https://www.pearceip.law/2026/02/26/celltrion-update-on-biosimilar-pipeline/" },
  { code: "CT-P51", mol: "pembrolizumab", ref: "Keytruda", format: "IV flakon (100mg/4mL)", fit: "Yüksek (IV)", phase: "Faz 3 (mNSCLC, 606 hasta; FDA Ağu 2024)", offer: "Talep adayı — teklif yok", markets: "AB / ABD / Kore (klinik)", assessment: "Dev onkoloji pazarı; IV flakon yüksek uyum; Faz 3", priority: "Yüksek", conf: "Doğrulanmış", url: "https://www.pearceip.law/2024/08/12/celltrions-pembrolizumab-biosimilar-to-enter-global-ph-3-trial/" },
  { code: "CT-P44", mol: "daratumumab", ref: "Darzalex (Faspro)", format: "IV flakon (+SC)", fit: "Yüksek (IV)", phase: "Faz 3 (r/r multiple myeloma); EMA IND Kas 2024", offer: "Talep adayı — teklif yok", markets: "AB / ABD (klinik)", assessment: "IV flakon yüksek uyum; SC (Faspro) varyantı izleme; Faz 3", priority: "Yüksek", conf: "Doğrulanmış", url: "https://www.pearceip.law/2024/11/28/celltrion-phase-3-clinical-trials-for-daratumumab-biosimilar-to-janssens-darzalex/" },
  { code: "CT-P52", mol: "ixekizumab", ref: "Taltz", format: "SC — PFS / AI", fit: "Orta (SC/PFS)", phase: "Faz 1 (PFS vs AI PK; NCT07367958)", offer: "Talep adayı — teklif yok", markets: "Global (erken)", assessment: "SC PFS/AI — Gensenta SC kapasite teyidi; erken faz", priority: "Orta", conf: "Güçlü sinyal", url: "https://clinicaltrials.gov/study/NCT07367958" },
  { code: "CT-P70", mol: "anti-cMET ADC (yeni ilaç)", ref: "özgün", format: "IV (liyofilize flakon)", fit: "Yüksek (lyo) / erken", phase: "Faz 1; FDA Fast Track (Ara 2025); dozlama Nis 2026", offer: "Talep adayı — teklif yok", markets: "ABD / global (klinik)", assessment: "Yeni ilaç ADC; lyo flakon yüksek uyum ama erken/uzun ufuk", priority: "Orta", conf: "Doğrulanmış", url: "https://www.koreaherald.com/article/10629763" },
  { code: "CT-P71", mol: "ADC (yeni ilaç, ürotelyal)", ref: "özgün", format: "IV (ADC, liyofilize)", fit: "Yüksek (lyo) / erken", phase: "Faz 1; FDA Fast Track (Nis 2026)", offer: "Talep adayı — teklif yok", markets: "ABD / global (klinik)", assessment: "Yeni ilaç ADC; erken faz, izleme", priority: "Orta", conf: "Doğrulanmış", url: "https://www.koreabiomed.com/news/articleView.html?idxno=31242" },
  { code: "CT-P73", mol: "ADC (yeni ilaç)", ref: "özgün", format: "IV (ADC)", fit: "Yüksek (ADC) / erken", phase: "Faz 1; dozlama Nis 2026", offer: "Talep adayı — teklif yok", markets: "Global (klinik)", assessment: "Yeni ilaç ADC; erken faz, izleme", priority: "İzleme", conf: "Güçlü sinyal", url: "https://en.sedaily.com/finance/2026/04/23/celltrion-begins-patient-dosing-for-three-adc-cancer" },
  { code: "CT-P72 (ABP-102)", mol: "multispesifik antikor (HER2 TCE)", ref: "özgün (Abpro ortak)", format: "IV", fit: "Orta-Yüksek / erken", phase: "Faz 1 (FDA IND Oca 2026; Abpro)", offer: "Talep adayı — teklif yok", markets: "ABD / global (klinik)", assessment: "Yeni ilaç msAb (HER2 TCE); erken faz, izleme", priority: "İzleme", conf: "Doğrulanmış", url: "https://www.thebionews.net/news/articleView.html?idxno=21147" },
  { code: "CT-P45 / CT-P68", mol: "açıklanmadı", ref: "—", format: "belirsiz", fit: "Belirsiz", phase: "IND hazırlığı / planlı", offer: "Talep adayı — teklif yok", markets: "—", assessment: "Molekül/format açıklanmadı; teyit bekleniyor", priority: "İzleme", conf: "Zayıf sinyal", url: "https://www.celltrion.com/en-us/company/media-center/press-release" },
];

Object.assign(window, {
  KPIS, STRATEGIC_DIRECTIONS, RECENT_DEVELOPMENTS, URGENT_SIGNALS,
  PORTFOLIO, PIPELINE, MARKETS, NEWS, RISKS, SIGNALS,
  REVENUE_SERIES, OPPROFIT_SERIES, PRODUCT_MIX, GROWTH_SIGNALS, EXPECTATIONS,
  CENK_INSIGHTS, CENK_ACTIONS,
  RADAR, RADAR_MARKETS,
  SOURCES_USED, LAST_UPDATED,
});
