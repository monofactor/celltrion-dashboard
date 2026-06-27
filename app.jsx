/* global React, ReactDOM, window */
// Entry point — routes sidebar nav to page components, hash-routed.

const { useState: useAppState, useEffect: useAppEffect } = React;

function readHash() {
  const h = (location.hash || "#summary").replace(/^#\/?/, "").split("/")[0];
  return NAV_ITEMS.find((n) => n.id === h) ? h : "summary";
}

function App() {
  const [page, setPage] = useAppState(readHash);

  useAppEffect(() => {
    const onHash = () => setPage(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (id) => {
    location.hash = "#" + id;
    setPage(id);
    window.scrollTo({ top: 0 });
  };

  const Page = {
    summary: PageSummary,
    portfolio: PagePortfolio,
    pipeline: PagePipeline,
    markets: PageMarkets,
    news: PageNews,
    risks: PageRisks,
    radar: PageRadar,
    signals: PageSignals,
    financial: PageFinancial,
    cenk: PageCenk
  }[page] || PageSummary;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar active={page} onChange={navigate} />
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <main data-screen-label={page} className="flex-1">
          <Page />
        </main>
        <footer className="max-w-page mx-auto w-full px-6 py-8 text-[11px] text-gray-400 border-t border-gray-200 mt-12 flex items-center justify-between">
          <span>Celltrion Dashboard · Gensenta Stratejik İzleme</span>
        </footer>
      </div>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
