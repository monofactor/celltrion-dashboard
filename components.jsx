/* global React, window */
// Shared UI components — ribbon nav, KPI card, badges, pills, sparkbar, icons.

const { useState, useMemo } = React;

// Rapor dönemi: güncelleme her ayın 1'inde yapılır; rapor bir ÖNCEKİ ayı kapsar.
// window.LAST_UPDATED (ör. "3 Haziran 2026, Çarşamba") -> "Mayıs 2026".
const TR_MONTHS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
const REPORT_PERIOD = (() => {
  try {
    const m = String(window.LAST_UPDATED || "").match(/(\d{1,2})\s+(\S+)\s+(\d{4})/);
    if (!m) return "";
    let idx = TR_MONTHS.indexOf(m[2]);
    let year = parseInt(m[3], 10);
    if (idx === -1) return "";
    idx -= 1;
    if (idx < 0) { idx = 11; year -= 1; }
    return TR_MONTHS[idx] + " " + year;
  } catch (e) { return ""; }
})();

// ── Minimal inline icons (lucide-style 24×24 strokes) ───────────────────────
const I = {
  Home: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 3l9 9"/><path d="M5 10v10h14V10"/></svg>),
  Package: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>),
  Beaker: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>),
  Globe: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>),
  Newspaper: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>),
  Triangle: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
  Radar: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76a6 6 0 1 0-8.49 8.49"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="M13.41 10.59 22 2"/></svg>),
  TrendUp: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>),
  MsgSquare: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  Search: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
  CalendarDays: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>),
  ArrowUpRight: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>),
  ChevronRight: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>),
  ArrowRight: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>),
  Star: (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  ChevronDown: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>),
  Circle: (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>),
  Cloud: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m9 13 2 2 4-4"/></svg>),
  Lightbulb: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>),
  AlertTriangle: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
  Shuffle: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>),
  Factory: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>),
  Info: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>),
  Crosshair: (p) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/><circle cx="12" cy="12" r="2.5"/></svg>),
};

// ── Brand logo (Celltrion mark, embedded as data URL) ───────────────────────
function BrandLogo({ size = 28 }) {
  return (
    <img
      src={window.CELLTRION_LOGO}
      alt="Celltrion"
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
    />
  );
}

// ── SVG Flag (renders consistently across OS/browsers) ──────────────────────
function Flag({ code, size = 22 }) {
  const w = size, h = Math.round(size * 0.72);
  const triBar = (yc, broken, key) => broken
    ? [<rect key={key + "a"} x={-4} y={yc - 0.65} width={3.3} height={1.3}/>,
       <rect key={key + "b"} x={0.7} y={yc - 0.65} width={3.3} height={1.3}/>]
    : <rect key={key} x={-4} y={yc - 0.65} width={8} height={1.3}/>;
  const Trigram = ({ cx, cy, rot, pat }) => (
    <g transform={`translate(${cx} ${cy}) rotate(${rot})`} fill="#0A0A0A">
      {pat.map((b, i) => triBar((i - 1) * 2.6, b, "t" + i))}
    </g>
  );
  const flags = {
    US: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#B22234"/>
        {[1,3,5,7,9,11].map(i => <rect key={i} y={i * (40/13)} width="60" height={40/13} fill="white"/>)}
        <rect width="26" height={40*7/13} fill="#3C3B6E"/>
      </svg>
    ),
    EU: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#003399"/>
        <g fill="#FFCC00" transform="translate(30 20)">
          {Array.from({length: 12}).map((_, i) => {
            const ang = (i * 30 - 90) * Math.PI / 180;
            const r = 12;
            return <circle key={i} cx={Math.cos(ang) * r} cy={Math.sin(ang) * r} r="1.6"/>;
          })}
        </g>
      </svg>
    ),
    JP: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="white"/>
        <circle cx="30" cy="20" r="12" fill="#BC002D"/>
        <rect width="60" height="40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
      </svg>
    ),
    KR: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="white"/>
        {/* Taegeuk: kırmızı (yang) üst-sol, mavi (eum) alt-sağ */}
        <g transform="translate(30 20) rotate(33.69)">
          <path d="M0,-8 a4,4 0 0,1 0,8 a4,4 0 0,0 0,8 a8,8 0 0,1 0,-16 Z" fill="#CD2E3A"/>
          <path d="M0,-8 a4,4 0 0,0 0,8 a4,4 0 0,1 0,8 a8,8 0 0,0 0,-16 Z" fill="#0047A0"/>
        </g>
        {/* Dört trigram — köşeler: ☰ Geon(ÜS), ☵ Gam(ÜSağ), ☲ Ri(ASol), ☷ Gon(ASağ) */}
        <Trigram cx={15} cy={11} rot={-56.31} pat={[false, false, false]}/>
        <Trigram cx={45} cy={11} rot={56.31} pat={[true, false, true]}/>
        <Trigram cx={15} cy={29} rot={56.31} pat={[false, true, false]}/>
        <Trigram cx={45} cy={29} rot={-56.31} pat={[true, true, true]}/>
        <rect width="60" height="40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
      </svg>
    ),
    TR: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#E30A17"/>
        <circle cx="22" cy="20" r="8" fill="white"/>
        <circle cx="24" cy="20" r="6.4" fill="#E30A17"/>
        <polygon points="32,20 28.2,18.8 30.5,22 30.5,18 28.2,21.2" fill="white"/>
      </svg>
    ),
    AU: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#012169"/>
        {/* Union Jack canton (simplified) */}
        <g>
          <rect width="30" height="20" fill="#012169"/>
          <path d="M0 0 L30 20 M30 0 L0 20" stroke="white" strokeWidth="3"/>
          <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="1.5"/>
          <path d="M15 0 V20 M0 10 H30" stroke="white" strokeWidth="5"/>
          <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="2"/>
        </g>
        {/* Commonwealth star */}
        <polygon points="15,28 16,31 19,31 16.5,33 17.5,36 15,34 12.5,36 13.5,33 11,31 14,31" fill="white"/>
        {/* Southern Cross (simplified, 4 stars) */}
        <circle cx="46" cy="14" r="1.2" fill="white"/>
        <circle cx="52" cy="22" r="1.2" fill="white"/>
        <circle cx="44" cy="28" r="1.2" fill="white"/>
        <circle cx="50" cy="32" r="1.2" fill="white"/>
        <circle cx="48" cy="20" r="1.5" fill="white"/>
      </svg>
    ),
    MENA: (
      <svg width={w} height={h} viewBox="0 0 60 40">
        <rect width="60" height="40" rx="3" fill="#f1f5f9"/>
        <circle cx="30" cy="20" r="11" fill="none" stroke="#0f766e" strokeWidth="1.8"/>
        <ellipse cx="30" cy="20" rx="11" ry="4.5" fill="none" stroke="#0f766e" strokeWidth="1.8"/>
        <path d="M 19 20 Q 30 14 41 20 Q 30 26 19 20" fill="none" stroke="#0f766e" strokeWidth="1.5"/>
      </svg>
    ),
  };
  return (
    <span
      className="inline-block rounded-sm overflow-hidden ring-1 ring-gray-200"
      style={{ width: w, height: h, lineHeight: 0, flexShrink: 0 }}
      aria-label={code}
    >
      {flags[code] || <span className="text-[10px] text-gray-500 font-mono">{code}</span>}
    </span>
  );
}

// ── Sidebar nav items (Linery Office-style) ─────────────────────────────────
const NAV_ITEMS = [
  { id: "summary",   label: "Yönetici Özeti",      icon: I.Home },
  { id: "portfolio", label: "Ürün Portföyü",       icon: I.Package },
  { id: "pipeline",  label: "Pipeline & Launch Radar", icon: I.Beaker },
  { id: "markets",   label: "Market Haritası",     icon: I.Globe },
  { id: "news",      label: "Haber Akışı",         icon: I.Newspaper },
  { id: "risks",     label: "Fırsat / Risk Matrisi", icon: I.AlertTriangle },
  { id: "radar",     label: "Fırsat Radarı",        icon: I.Crosshair },
  { id: "signals",   label: "İzlenecek Sinyaller", icon: I.Radar },
  { id: "financial", label: "Finansal Sinyaller",    icon: I.TrendUp },
  { id: "cenk",      label: "Gensenta için Yorum",   icon: I.MsgSquare },
];

// ── Left vertical sidebar (Linery Office-style) ─────────────────────────────
function Sidebar({ active, onChange }) {
  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 sticky top-0 h-screen flex flex-col z-30">
      {/* Brand block */}
      <div className="px-4 h-16 flex items-center gap-3 border-b border-gray-200 shrink-0">
        <BrandLogo size={26} />
        <div className="leading-tight min-w-0">
          <div className="text-[13px] font-semibold text-gray-900 truncate">Celltrion Dashboard</div>
          <div className="text-[11px] text-gray-500 truncate">Gensenta · 2026 Stratejik İzleme</div>
        </div>
      </div>
      {/* Vertical nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onChange(it.id)}
              aria-current={isActive ? "page" : undefined}
              className={`group relative w-full flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-blue-600" />
              )}
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`} />
              <span className="truncate">{it.label}</span>
            </button>
          );
        })}
      </nav>
      {/* Sidebar footer: meta (son güncelleme + kaynak) + brand */}
      <div className="px-4 py-4 border-t border-gray-200 shrink-0 space-y-3">
        <div className="space-y-2 text-[11px] leading-snug">
          <div>
            <div className="inline-flex items-center gap-1.5 text-gray-400">
              <I.Cloud className="w-3.5 h-3.5 text-teal-600"/>Son güncelleme
            </div>
            <div className="font-semibold text-gray-900 mt-0.5">{window.LAST_UPDATED || "\u2014"}</div>
          </div>
          <div>
            <div className="text-gray-400">Kaynak</div>
            <div className="font-medium text-gray-700 mt-0.5">
              {(window.SOURCES_USED && window.SOURCES_USED.length > 0)
                ? window.SOURCES_USED.join(" \u00b7 ")
                : "\u2014"}
            </div>
          </div>
        </div>
        <img src={window.LINERY_LOGO} alt="Linery" style={{ height: 42, width: "auto", display: "block", opacity: 0.85 }} />
      </div>
    </aside>
  );
}

// ── Page shell ──────────────────────────────────────────────────────────────
function PageShell({ title, subtitle, actions, children }) {
  return (
    <div className="max-w-page mx-auto px-6 py-6 space-y-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      {children}
    </div>
  );
}

// ── KPI card ────────────────────────────────────────────────────────────────
function KPI({ label, value, delta, sub, tone = "blue", info }) {
  return (
    <div className={`kpi kpi-${tone}${info ? " kpi-tip" : ""}`}>
      <div className="kpi-label">
        {info ? (
          <span className="tip-wrap" tabIndex={0}>
            <span className="tip-label">{label}</span>
            <span className="tip-bubble" role="tooltip">{info}</span>
          </span>
        ) : label}
      </div>
      <div className="kpi-value">{value}</div>
      <div className="mt-2 space-y-0.5">
        {delta && (
          <div className={`text-xs font-semibold inline-flex items-center gap-0.5 ${tone === "rose" ? "text-rose-700" : "text-emerald-700"}`}>
            <I.ArrowUpRight className="w-3 h-3"/>{delta}
          </div>
        )}
        <div className="text-xs text-slate-500">{sub}</div>
      </div>
    </div>
  );
}

// ── Pill / badge ────────────────────────────────────────────────────────────
const PILL_TONES = {
  blue:    "bg-blue-50 text-blue-700 border-blue-200",
  amber:   "bg-amber-50 text-amber-700 border-amber-200",
  sky:     "bg-sky-50 text-sky-700 border-sky-200",
  green:   "bg-emerald-50 text-emerald-700 border-emerald-200",
  red:     "bg-red-50 text-red-700 border-red-200",
  purple:  "bg-purple-50 text-purple-700 border-purple-200",
  gray:    "bg-gray-100 text-gray-700 border-gray-200",
  orange:  "bg-orange-50 text-orange-700 border-orange-200",
  dashed:  "bg-white text-gray-500 border-dashed border-gray-300",
};
function Pill({ tone = "blue", children, className = "" }) {
  return <span className={`lpill ${PILL_TONES[tone]} ${className}`}>{children}</span>;
}

// ── Stars ───────────────────────────────────────────────────────────────────
function Stars({ count = 5, total = 5 }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <I.Star key={i} className={`w-3.5 h-3.5 ${i < count ? "star" : "star-off"}`}/>
      ))}
    </span>
  );
}

// ── Filter chips (segmented) ────────────────────────────────────────────────
function FilterChips({ options, value, onChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {options.map((opt) => {
        const v = typeof opt === "string" ? opt : opt.value;
        const label = typeof opt === "string" ? opt : opt.label;
        const count = typeof opt === "object" ? opt.count : undefined;
        const isActive = value === v;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={`h-8 px-3.5 rounded-full text-xs font-medium border transition-colors ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {label}{count !== undefined && <span className={`ml-1 ${isActive ? "text-blue-100" : "text-gray-400"}`}>({count})</span>}
          </button>
        );
      })}
    </div>
  );
}

// ── Filter bar wrapper (Linery card style) ──────────────────────────────────
function FilterBar({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 flex-wrap">
      {children}
    </div>
  );
}

// ── Section card ────────────────────────────────────────────────────────────
function Card({ children, className = "", title, subtitle, action }) {
  return (
    <section className={`bg-white border border-gray-200 rounded-xl ${className}`}>
      {(title || action) && (
        <header className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between gap-4">
          <div>
            {title && <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center">{title}</h2>}
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

Object.assign(window, {
  I, BrandLogo, Flag, Sidebar, NAV_ITEMS, PageShell, KPI, Pill, Stars, FilterChips, FilterBar, Card,
});
