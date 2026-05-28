/* global React, window */
// 9 page components — light-theme Linery style.

const { useState: usePS, useMemo: useM } = React;

// ────────────────────────────────────────────────────────────────────────────
// 1. Yönetici Özeti (Executive Summary)
// ────────────────────────────────────────────────────────────────────────────
function PageSummary() {
  return (
    <PageShell
      title="Yönetici Özeti"
      subtitle="Celltrion ürün, market ve stratejik gelişmeler · Mayıs 2026"
    >
      {/* KPI strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {KPIS.map((k) => <KPI key={k.label} {...k}/>)}
      </div>

      {/* Strategic directions + recent developments */}
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 xl:col-span-7" title="Celltrion'un mevcut stratejik yönü" subtitle="2026-2030 yol haritası">
          <ol className="divide-y divide-gray-100">
            {STRATEGIC_DIRECTIONS.map((dir, i) => (
              <li key={i} className="px-5 py-3.5 flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-md bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center border border-blue-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-gray-800 pt-0.5">{dir}</p>
              </li>
            ))}
          </ol>
        </Card>
        <Card className="col-span-12 xl:col-span-5" title="Son kritik gelişmeler" subtitle="Mayıs 2026 itibariyle">
          <ul className="divide-y divide-gray-100">
            {RECENT_DEVELOPMENTS.map((d, i) => (
              <li key={i} className="px-5 py-3.5 flex items-start gap-4">
                <div className="shrink-0 text-right w-24 pt-0.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">{d.date}</div>
                  <div className="mt-1 inline-flex"><Pill tone="red" className="!text-[10px]">{d.level}</Pill></div>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">{d.tag}</div>
                  <p className="text-sm font-medium text-gray-900 mt-0.5 leading-snug">{d.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Critical insights (Gensenta açısından kritik sinyaller) — light card variant */}
      <Card
        title="Gensenta açısından kritik sinyaller"
        subtitle="CMO / fason üretici perspektifinden 5 stratejik çıkarım"
        action={<Pill tone="green">{CENK_INSIGHTS.filter(c => c.tag === "Fırsat").length} fırsat · {CENK_INSIGHTS.filter(c => c.tag === "Karma").length} karma</Pill>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-3">
          {CENK_INSIGHTS.map((c, i) => (
            <div
              key={i}
              className={`bg-white border-l-4 border-y border-r border-gray-200 rounded-lg p-4 space-y-2 ${
                c.tag === "Karma" ? "!border-l-amber-500" : "!border-l-emerald-500"
              }`}
            >
              <div className="flex items-center gap-2">
                <I.Lightbulb className={`w-4 h-4 ${c.tag === "Karma" ? "text-amber-600" : "text-emerald-600"}`}/>
                <Pill tone={c.tag === "Karma" ? "amber" : "green"}>{c.tag}</Pill>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</h3>
              <p className="text-[12.5px] text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Urgent signals — next 3 months */}
      <Card
        title={<><I.AlertTriangle className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5 text-red-600"/>Önümüzdeki 3 ayda takip edilecek acil sinyaller</>}
        action={<Pill tone="red">{URGENT_SIGNALS.length} sinyal</Pill>}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {URGENT_SIGNALS.map((s, i) => (
            <div key={i} className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <Pill tone="red">Acil</Pill>
                <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                  <I.CalendarDays className="w-3.5 h-3.5"/>{s.window}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{s.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}

// ── Expandable market list pill row ─────────────────────────────────────────
function MarketList({ markets = [], extra = [] }) {
  const [open, setOpen] = usePS(false);
  const hasExtra = extra && extra.length > 0;
  return (
    <div className="flex flex-wrap gap-1 max-w-[240px]">
      {markets.map((m, i) => (
        <Pill key={"m" + i} tone="blue" className="!text-[10px]">{m}</Pill>
      ))}
      {open && extra.map((m, i) => (
        <Pill key={"x" + i} tone="blue" className="!text-[10px]">{m}</Pill>
      ))}
      {hasExtra && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="lpill bg-white text-gray-500 border-dashed border-gray-300 hover:bg-gray-50 hover:text-blue-700 hover:border-blue-300 !text-[10px] cursor-pointer transition-colors"
        >
          {open ? "− daha az" : `+${extra.length} daha`}
        </button>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 2. Ürün Portföyü
function PagePortfolio() {
  const [filter, setFilter] = usePS("Tümü");
  const [q, setQ] = usePS("");
  const cats = useM(() => {
    const counts = { Tümü: PORTFOLIO.length };
    for (const p of PORTFOLIO) counts[p.category] = (counts[p.category] || 0) + 1;
    return counts;
  }, []);
  const opts = ["Tümü", "İmmünoloji", "Onkoloji", "Oftalmoloji", "Kemik"].map(v => ({ value: v, label: v, count: cats[v] || 0 }));
  const rows = useM(() => PORTFOLIO.filter(p => {
    if (filter !== "Tümü" && p.category !== filter) return false;
    if (q && !(p.name + p.code + p.mol + p.ref).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [filter, q]);

  return (
    <PageShell title="Ürün Portföyü" subtitle="Mevcut ticari biosimilar portföyü">
      <FilterBar>
        <div className="relative w-full md:w-72">
          <I.Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ürün, molekül, referans…"
            className="w-full h-9 pl-9 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-md outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>
        <div className="h-6 w-px bg-gray-200 hidden md:block"/>
        <FilterChips options={opts} value={filter} onChange={setFilter}/>
        <div className="ml-auto text-xs text-gray-500 font-medium">{rows.length} / {PORTFOLIO.length} ürün</div>
      </FilterBar>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="ltable">
            <thead>
              <tr>
                <th>Ürün / Kod</th>
                <th>Molekül / Referans</th>
                <th>Alan</th>
                <th>Form</th>
                <th>Mevcut Marketler</th>
                <th>Yeni Market Sinyali</th>
                <th>Son Durum</th>
                <th>Önem</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.code}>
                  <td>
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className="text-[11px] text-gray-500 font-mono mt-0.5">{p.code}</div>
                    <div className="mt-1.5"><Pill tone="gray" className="!text-[10px]">{p.category}</Pill></div>
                  </td>
                  <td className="text-sm">
                    <div className="font-medium text-gray-800">{p.mol}</div>
                    <div className="text-xs text-gray-500 mt-0.5">→ {p.ref}</div>
                  </td>
                  <td className="text-[13px] text-gray-700 whitespace-normal max-w-[180px]">{p.area}</td>
                  <td className="text-[13px] text-gray-700 whitespace-normal max-w-[180px]">{p.form}</td>
                  <td>
                    <MarketList markets={p.markets} extra={p.extraMarkets}/>
                  </td>
                  <td className="text-[12px] text-gray-700 whitespace-normal leading-relaxed max-w-[260px]">{p.signal}</td>
                  <td className="text-[12px] text-gray-700 whitespace-normal leading-relaxed max-w-[260px]">{p.status}</td>
                  <td><Stars count={p.stars}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Category footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "İmmünoloji", count: 6, tone: "blue" },
          { label: "Onkoloji",   count: 3, tone: "purple" },
          { label: "Oftalmoloji",count: 1, tone: "amber" },
          { label: "Kemik",      count: 1, tone: "green" },
        ].map((c) => (
          <div key={c.label} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">{c.label}</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{c.count}<span className="text-sm font-medium text-gray-400 ml-1">ürün</span></div>
            </div>
            <Pill tone={c.tone}>Aktif</Pill>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 3. Pipeline & Launch Radar
// ────────────────────────────────────────────────────────────────────────────
function PagePipeline() {
  const [filter, setFilter] = usePS("Tümü");
  const opts = [
    { value: "Tümü",        label: "Tümü",                          count: PIPELINE.length },
    { value: "Biosimilar",  label: "Biosimilar",                    count: PIPELINE.filter(p => p.type === "Biosimilar").length },
    { value: "Yeni İlaç",   label: "Yenilikçi İlaç (ADC/msAb)",     count: PIPELINE.filter(p => p.type === "Yeni İlaç").length },
  ];
  const rows = filter === "Tümü" ? PIPELINE : PIPELINE.filter(p => p.type === filter);

  return (
    <PageShell title="Pipeline & Launch Radar" subtitle="Klinik aşamadan ticari lansmana">
      <FilterBar>
        <FilterChips options={opts} value={filter} onChange={setFilter}/>
        <div className="ml-auto text-xs text-gray-500 font-medium">{rows.length} program</div>
      </FilterBar>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="ltable">
            <thead>
              <tr>
                <th>Ürün / Kod</th>
                <th>Molekül / Ref.</th>
                <th>Alan</th>
                <th>Aşama</th>
                <th>Başvuru / Onay</th>
                <th>Beklenen Lansman</th>
                <th>CMO Perspektifi</th>
                <th>Stratejik Önem</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.code}>
                  <td>
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className="text-[11px] text-gray-500 font-mono mt-0.5">{p.code}</div>
                    <div className="mt-1.5"><Pill tone={p.type === "Biosimilar" ? "blue" : "purple"} className="!text-[10px]">{p.type}</Pill></div>
                  </td>
                  <td className="text-sm">
                    <div className="font-medium text-gray-800">{p.mol}</div>
                    <div className="text-xs text-gray-500 mt-0.5">→ {p.ref}</div>
                  </td>
                  <td className="text-[13px] text-gray-700 whitespace-normal max-w-[160px]">{p.area}</td>
                  <td className="text-[12px] text-gray-700 whitespace-normal max-w-[200px] leading-relaxed">{p.phase}</td>
                  <td className="text-[12px] text-gray-700 whitespace-normal max-w-[180px] leading-relaxed">{p.submission}</td>
                  <td className="text-[12px] font-medium text-gray-900 whitespace-normal max-w-[160px] leading-relaxed">{p.launch}</td>
                  <td className="text-[12px] text-gray-600 whitespace-normal max-w-[220px] leading-relaxed italic">{p.cmo}</td>
                  <td><Pill tone={p.importance === "Yüksek" ? "red" : "amber"}>{p.importance}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Launch radar — horizontal timeline */}
      <Card title="Lansman radarı" subtitle="Beklenen pazara giriş takvimi">
        <div className="p-5">
          <div className="relative">
            <div className="absolute left-0 right-0 h-px bg-gray-200" style={{ top: 7 }}/>
            <div className="grid grid-cols-4 gap-4 relative">
              {[
                { period: "2026", items: ["SteQeyma AI (AB)"] },
                { period: "2027", items: ["Eydenzelt ABD", "Herzuma SC (AB & Kore)", "CT-P55"] },
                { period: "2028", items: ["CT-P55 (devam)"] },
                { period: "2029-2030+", items: ["CT-P53 (Ocrelizumab)", "CT-P70 (ADC)", "CT-P72 (msAb)", "CT-P51 (Pembro)"] },
              ].map((c, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-2 relative">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-white relative z-10"/>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 bg-white pr-2 relative z-10">{c.period}</span>
                  </div>
                  <div className="space-y-1.5 pl-6 pt-1">
                    {c.items.map((it, j) => (
                      <div key={j} className="text-[13px] text-gray-700 flex items-center gap-2">
                        <I.ChevronRight className="w-3 h-3 text-gray-400"/>{it}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      {/* Pipeline son haberler */}
      <Card title="Pipeline son haberler" subtitle="Programa özel son güncellemeler ve CMO notları">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-3">
          {PIPELINE.map((p) => (
            <div key={p.code} className="bg-white border border-gray-200 rounded-lg p-4 space-y-2 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">{p.name}</h3>
                  <div className="text-[11px] text-gray-500 mt-0.5 font-mono">{p.code} · <span className="font-sans not-italic">{p.mol}</span></div>
                </div>
                <Pill tone={p.importance === "Yüksek" ? "red" : "amber"}>{p.importance}</Pill>
              </div>
              <p className="text-[12.5px] text-gray-700 leading-relaxed">{p.news || p.phase}</p>
              <div className="mt-auto pt-2 border-t border-gray-100 flex items-start gap-2 text-[11.5px] text-blue-700">
                <I.Factory className="w-3.5 h-3.5 mt-0.5 shrink-0"/>
                <span className="leading-relaxed">{p.cmo}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}
// ────────────────────────────────────────────────────────────────────────────
function PageMarkets() {
  const [view, setView] = usePS("Tablo");
  return (
    <PageShell title="Market Haritası" subtitle="Bölgesel ticari konumlanma ve genişleme planları">
      <FilterBar>
        <FilterChips options={["Tablo", "Kartlar"]} value={view} onChange={setView}/>
        <div className="ml-auto text-xs text-gray-500 font-medium">{MARKETS.length} pazar</div>
      </FilterBar>

      {view === "Tablo" ? (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="ltable">
              <thead>
                <tr>
                  <th>Bölge / Ülke</th>
                  <th>Aktif Ürünler</th>
                  <th>Yeni Onaylar (2024-26)</th>
                  <th>Beklenen Girişler</th>
                  <th>Ticari Strateji</th>
                  <th>Risk / Fırsat</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {MARKETS.map((m) => (
                  <tr key={m.name}>
                    <td>
                      <div className="flex items-center gap-2.5">
                        <Flag code={m.code}/>
                        <span className="font-semibold text-gray-900">{m.name}</span>
                      </div>
                    </td>
                    <td className="text-[12px] text-gray-700 whitespace-normal max-w-[220px] leading-relaxed">{m.active}</td>
                    <td className="text-[12px] text-emerald-700 whitespace-normal max-w-[220px] leading-relaxed">{m.approvals}</td>
                    <td className="text-[12px] text-blue-700 whitespace-normal max-w-[180px] leading-relaxed">{m.upcoming}</td>
                    <td className="text-[12px] text-gray-700 whitespace-normal max-w-[240px] leading-relaxed">{m.strategy}</td>
                    <td className="text-[12px] text-gray-700 whitespace-normal max-w-[220px] leading-relaxed">{m.risk}</td>
                    <td>
                      <Pill tone={m.status === "aktif" ? "green" : m.status === "büyüme" ? "blue" : "amber"}>
                        {m.status}
                      </Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {MARKETS.map((m) => (
            <div key={m.name} className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Flag code={m.code} size={26}/>
                  <h3 className="text-base font-semibold text-gray-900">{m.name}</h3>
                </div>
                <Pill tone={m.status === "aktif" ? "green" : m.status === "büyüme" ? "blue" : "amber"}>{m.status}</Pill>
              </div>
              <dl className="grid grid-cols-1 gap-2 text-[13px]">
                <div>
                  <dt className="text-[10px] uppercase tracking-wider font-medium text-gray-500 mb-0.5">Aktif Ürünler</dt>
                  <dd className="text-gray-800 leading-relaxed">{m.active}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider font-medium text-gray-500 mb-0.5">Yeni Onaylar</dt>
                  <dd className="text-emerald-700 leading-relaxed">{m.approvals}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider font-medium text-gray-500 mb-0.5">Beklenen Girişler</dt>
                  <dd className="text-blue-700 leading-relaxed">{m.upcoming}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-wider font-medium text-gray-500 mb-0.5">Risk / Fırsat</dt>
                  <dd className="text-gray-700 leading-relaxed">{m.risk}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 5. Haber Akışı
// ────────────────────────────────────────────────────────────────────────────
function PageNews() {
  const [level, setLevel] = usePS("Tümü");
  const counts = useM(() => {
    const c = { Tümü: NEWS.length, Kritik: 0, Yüksek: 0, Orta: 0 };
    NEWS.forEach(n => { c[n.level] = (c[n.level] || 0) + 1; });
    return c;
  }, []);
  const opts = [
    { value: "Tümü",   label: "Tümü",   count: counts["Tümü"] },
    { value: "Kritik", label: "Kritik", count: counts["Kritik"] },
    { value: "Yüksek", label: "Yüksek", count: counts["Yüksek"] },
    { value: "Orta",   label: "Orta",   count: counts["Orta"] },
  ];
  const rows = level === "Tümü" ? NEWS : NEWS.filter(n => n.level === level);

  return (
    <PageShell title="Haber Akışı" subtitle="Celltrion stratejik gelişme zaman çizelgesi">
      <FilterBar>
        <FilterChips options={opts} value={level} onChange={setLevel}/>
        <div className="ml-auto text-xs text-gray-500 font-medium">{rows.length} haber</div>
      </FilterBar>

      <Card>
        <ol className="divide-y divide-gray-100">
          {rows.map((n, i) => (
            <li key={i} className="px-5 py-4 flex items-start gap-5">
              <div className="shrink-0 w-28 pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-700">{n.date}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{n.tag}</div>
              </div>
              <div className="shrink-0 pt-2">
                <span className={`block w-2.5 h-2.5 rounded-full ${
                  n.level === "Kritik" ? "bg-red-500 ring-4 ring-red-100" :
                  n.level === "Yüksek" ? "bg-amber-500 ring-4 ring-amber-100" :
                  "bg-blue-500 ring-4 ring-blue-100"
                }`}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Pill tone={n.level === "Kritik" ? "red" : n.level === "Yüksek" ? "amber" : "blue"}>{n.level}</Pill>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">{n.title}</h3>
                <p className="text-[13px] text-gray-600 mt-1 leading-relaxed max-w-[80ch]">{n.detail}</p>
              </div>
              {n.url
                ? <a href={n.url} target="_blank" rel="noopener noreferrer" className="shrink-0 p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                    <I.ArrowUpRight className="w-4 h-4"/>
                  </a>
                : <span className="shrink-0 p-2 text-gray-200">
                    <I.ArrowUpRight className="w-4 h-4"/>
                  </span>
              }
            </li>
          ))}
        </ol>
      </Card>
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 6. Fırsat / Risk Matrisi
// ────────────────────────────────────────────────────────────────────────────
function PageRisks() {
  const opp = RISKS.filter(r => r.type === "Fırsat").length;
  const risk = RISKS.filter(r => r.type === "Risk").length;

  return (
    <PageShell title="Fırsat / Risk Matrisi" subtitle="Stratejik etki × olasılık değerlendirmesi">
      {/* Stat strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/30 border-y border-r border-emerald-100 p-4 flex items-center gap-4">
          <I.Lightbulb className="w-7 h-7 text-emerald-600"/>
          <div>
            <div className="text-3xl font-bold text-emerald-700">{opp}</div>
            <div className="text-xs uppercase tracking-wider font-medium text-emerald-700">Fırsat</div>
          </div>
        </div>
        <div className="rounded-xl border-l-4 border-red-500 bg-red-50/30 border-y border-r border-red-100 p-4 flex items-center gap-4">
          <I.AlertTriangle className="w-7 h-7 text-red-600"/>
          <div>
            <div className="text-3xl font-bold text-red-700">{risk}</div>
            <div className="text-xs uppercase tracking-wider font-medium text-red-700">Risk</div>
          </div>
        </div>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/30 border-y border-r border-amber-100 p-4 flex items-center gap-4">
          <I.Shuffle className="w-7 h-7 text-amber-600"/>
          <div>
            <div className="text-3xl font-bold text-amber-700">0</div>
            <div className="text-xs uppercase tracking-wider font-medium text-amber-700">Karma</div>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="ltable">
            <thead>
              <tr>
                <th>Konu</th>
                <th>Tür</th>
                <th>Etki</th>
                <th>Olasılık</th>
                <th>Gensenta Açısından Anlamı</th>
                <th>Takip Aksiyonu &amp; Kaynaklar</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map((r, i) => (
                <tr key={i}>
                  <td className="font-semibold text-gray-900 whitespace-normal max-w-[220px] leading-snug">{r.topic}</td>
                  <td><Pill tone={r.type === "Fırsat" ? "green" : "red"}>{r.type}</Pill></td>
                  <td>
                    <Pill tone={r.impact === "Çok Yüksek" ? "red" : r.impact === "Yüksek" ? "amber" : "blue"}>{r.impact}</Pill>
                  </td>
                  <td>
                    <Pill tone={r.likelihood === "Yüksek" ? "amber" : r.likelihood === "Orta" ? "blue" : "gray"}>{r.likelihood}</Pill>
                  </td>
                  <td className="text-[12px] text-gray-700 whitespace-normal max-w-[340px] leading-relaxed">{r.meaning}</td>
                  <td className="whitespace-normal max-w-[300px]">
                    <p className={`text-[12px] leading-relaxed ${r.type === "Fırsat" ? "text-emerald-800" : "text-red-800"} font-medium`}>{r.action}</p>
                    {r.sources.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {r.sources.map((s, j) => {
                          const label = typeof s === "string" ? s : s.label;
                          const url   = typeof s === "object" && s.url ? s.url : null;
                          return (
                            <li key={j} className="text-[11px] text-blue-700 flex items-start gap-1">
                              <I.ArrowUpRight className="w-3 h-3 mt-0.5 shrink-0"/>
                              {url
                                ? <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">{label}</a>
                                : <span className="text-gray-500">{label}</span>
                              }
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 7. İzlenecek Sinyaller
// ────────────────────────────────────────────────────────────────────────────
function PageSignals() {
  const groups = ["Acil", "Yakın Dönem", "Orta Vade"];
  const counts = Object.fromEntries(groups.map(g => [g, SIGNALS.filter(s => s.urgency === g).length]));

  return (
    <PageShell title="İzlenecek Sinyaller" subtitle="Önceliklendirilmiş aksiyon ufku">
      {/* Legend */}
      <div className="flex items-center gap-5 text-xs text-gray-600">
        <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red-500"/>Acil</span>
        <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"/>Yakın Dönem</span>
        <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"/>Orta Vade</span>
      </div>

      {groups.map((g) => {
        const tone = g === "Acil" ? "red" : g === "Yakın Dönem" ? "amber" : "blue";
        const items = SIGNALS.filter(s => s.urgency === g);
        return (
          <div key={g} className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${tone === "red" ? "bg-red-500" : tone === "amber" ? "bg-amber-500" : "bg-blue-500"}`}/>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{g}</h2>
              <Pill tone={tone}>{counts[g]} sinyal</Pill>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {items.map((s, i) => (
                <div
                  key={i}
                  className={`bg-white border-l-4 border-y border-r border-gray-200 rounded-xl p-4 space-y-2 ${
                    tone === "red" ? "!border-l-red-500" : tone === "amber" ? "!border-l-amber-500" : "!border-l-blue-500"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">{s.title}</h3>
                    <Pill tone={tone}>{s.urgency}</Pill>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{s.detail}</p>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 pt-1 border-t border-gray-100">
                    <I.CalendarDays className="w-3.5 h-3.5"/>{s.window}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Summary table */}
      <Card title="Tüm sinyaller — özet tablo">
        <div className="overflow-x-auto">
          <table className="ltable">
            <thead><tr><th>Sinyal</th><th>Aciliyet</th><th>Zaman Dilimi</th><th>Açıklama</th></tr></thead>
            <tbody>
              {SIGNALS.map((s, i) => (
                <tr key={i}>
                  <td className="font-medium text-gray-900 whitespace-normal max-w-[260px]">{s.title}</td>
                  <td><Pill tone={s.urgency === "Acil" ? "red" : s.urgency === "Yakın Dönem" ? "amber" : "blue"}>{s.urgency}</Pill></td>
                  <td className="text-[13px] text-gray-700">{s.window}</td>
                  <td className="text-[12px] text-gray-600 whitespace-normal leading-relaxed max-w-[520px]">{s.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 8. Finansal Sinyaller
// ────────────────────────────────────────────────────────────────────────────
function HBar({ data, accent = "#2563eb", plannedAccent = "#a855f7" }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="space-y-2.5">
      {data.map((d) => (
        <div key={d.year} className="grid grid-cols-[48px_1fr_72px] items-center gap-3">
          <div className="text-xs text-gray-600 font-medium">{d.year}</div>
          <div className="relative h-6 bg-gray-100 rounded-md overflow-hidden">
            <div
              className="h-full rounded-md"
              style={{ width: `${(d.value / max) * 100}%`, background: d.planned ? plannedAccent : accent, opacity: d.planned ? 0.8 : 1 }}
            />
            <span className="absolute inset-y-0 left-2 inline-flex items-center text-[11px] font-semibold text-white drop-shadow">
              {d.label}
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{d.planned ? "Hedef" : "Fiili"}</div>
        </div>
      ))}
    </div>
  );
}
function DonutMix({ data }) {
  const total = data.reduce((s, d) => s + d.pct, 0);
  let acc = 0;
  const r = 60, cx = 80, cy = 80, stroke = 18;
  const C = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <svg width="160" height="160" viewBox="0 0 160 160" className="shrink-0">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth={stroke}/>
        {data.map((d, i) => {
          const seg = (d.pct / total) * C;
          const dasharray = `${seg} ${C - seg}`;
          const offset = -acc;
          acc += seg;
          return (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={stroke}
              strokeDasharray={dasharray} strokeDashoffset={offset}
              transform={`rotate(-90 ${cx} ${cy})`}/>
          );
        })}
        <text x={cx} y={cy - 4} textAnchor="middle" className="fill-gray-900" style={{ fontWeight: 700, fontSize: 16 }}>2025</text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="fill-gray-500" style={{ fontSize: 10 }}>Ürün Karması</text>
      </svg>
      <ul className="grid grid-cols-1 gap-1.5 text-xs flex-1">
        {data.map((d) => (
          <li key={d.name} className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-gray-700">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ background: d.color }}/>
              {d.name}
            </span>
            <span className="font-semibold text-gray-900">{d.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PageFinancial() {
  return (
    <PageShell title="Finansal &amp; Ticari Sinyaller" subtitle="Konsolide finansal trend ve ürün karması">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Card title="Yıllık gelir trendi" subtitle="TL KRW · Konsolide">
          <div className="p-5"><HBar data={REVENUE_SERIES} accent="#2563eb" plannedAccent="#9333ea"/></div>
        </Card>
        <Card title="Faaliyet karı trendi" subtitle="TL KRW · Yıllık">
          <div className="p-5"><HBar data={OPPROFIT_SERIES} accent="#f59e0b" plannedAccent="#9333ea"/></div>
        </Card>
        <Card title="2025 tahmini ürün karması" subtitle="Konsolide gelir kompozisyonu">
          <div className="p-5"><DonutMix data={PRODUCT_MIX}/></div>
        </Card>
      </div>

      <Card title="Ürün grubu bazlı büyüme sinyalleri">
        <div className="overflow-x-auto">
          <table className="ltable">
            <thead><tr><th>Ürün</th><th>Satış Sinyali</th><th>Trend</th></tr></thead>
            <tbody>
              {GROWTH_SIGNALS.map((g) => (
                <tr key={g.name}>
                  <td className="font-medium text-gray-900">{g.name}</td>
                  <td className="text-[13px] text-gray-700 whitespace-normal max-w-[640px]">{g.signal}</td>
                  <td><Pill tone={g.tone}>{g.trend}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Gelecek dönem beklentileri" subtitle="Yönetim taahhütleri ve sayısal hedefler">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 p-3">
          {EXPECTATIONS.map((e, i) => (
            <div key={i} className="flex items-start gap-3 px-3 py-3 border-b border-gray-100 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
              <span className="shrink-0 w-5 h-5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold inline-flex items-center justify-center mt-0.5">{i + 1}</span>
              <p className="text-[13px] text-gray-800 leading-relaxed">{e}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// 9. Gensenta için Yorum
// ────────────────────────────────────────────────────────────────────────────
function PageCenk() {
  return (
    <PageShell title="Gensenta için Yorum" subtitle="CMO / fason üretici perspektifinden en kritik çıkarımlar">
      <Card>
        <div className="p-5 flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-700 inline-flex items-center justify-center">
            <I.MsgSquare className="w-5 h-5"/>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Genel değerlendirme</h2>
            <p className="text-[13px] text-gray-600 mt-1 leading-relaxed max-w-[90ch]">
              Aşağıdaki analizler, Celltrion'un güncel stratejik hamlelerini Gensenta gibi steril flakon üreten bir CMO/fason üretici perspektifinden değerlendirmektedir.
              Kaynaklar: Celltrion IR, FDA, EMA, Pearce IP, Korea Herald — Mayıs 2026.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {CENK_INSIGHTS.map((c, i) => (
          <div
            key={i}
            className={`bg-white border-l-4 border-y border-r border-gray-200 rounded-xl px-5 py-4 ${
              c.tag === "Risk & Fırsat" ? "!border-l-amber-500" : "!border-l-emerald-500"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className={`shrink-0 w-9 h-9 rounded-lg inline-flex items-center justify-center font-bold text-sm ${
                c.tag === "Risk & Fırsat" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
              }`}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <Pill tone={c.tag === "Risk & Fırsat" ? "amber" : "green"}>{c.tag}</Pill>
                  <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                </div>
                <p className="text-[13px] text-gray-700 mt-2 leading-relaxed">{c.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card title="Gensenta için öncelikli aksiyon listesi" subtitle="Önümüzdeki çeyrek hazırlık planı">
        <ol className="divide-y divide-gray-100">
          {CENK_ACTIONS.map((a, i) => {
            const tone = a.when === "Acil" ? "red" : a.when === "Yakın" ? "amber" : a.when === "Orta" ? "blue" : "gray";
            return (
              <li key={i} className="px-5 py-3.5 flex items-center gap-4">
                <span className="shrink-0 w-7 h-7 rounded-md bg-gray-50 text-gray-700 text-xs font-bold inline-flex items-center justify-center border border-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-gray-800 flex-1">{a.text}</p>
                <Pill tone={tone}>{a.when}</Pill>
              </li>
            );
          })}
        </ol>
      </Card>
    </PageShell>
  );
}

Object.assign(window, {
  PageSummary, PagePortfolio, PagePipeline, PageMarkets, PageNews, PageRisks, PageSignals, PageFinancial, PageCenk,
});
