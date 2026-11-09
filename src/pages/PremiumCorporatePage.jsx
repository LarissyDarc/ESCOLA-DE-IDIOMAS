const pillars = [
  {
    title: "Executive communication",
    text: "Aulas focadas em reuniões, apresentações, negociações e presença profissional internacional.",
  },
  {
    title: "Global positioning",
    text: "Estratégia de idioma para líderes, gestores e equipes que operam em mercados globais.",
  },
  {
    title: "High-performance learning",
    text: "Metodologia premium com foco em fluência prática, clareza e impacto no ambiente corporativo.",
  },
];

const metrics = [
  { value: "+1.500", label: "executivos e profissionais" },
  { value: "5", label: "idiomas e opções de programa" },
  { value: "98%", label: "alinhamento com objetivos" },
];

function PremiumCorporatePage() {
  return (
    <div className="premium-corporate-page">
      <header className="premium-corporate-header">
        <div className="container premium-header-inner">
          <a href="/" className="logo" aria-label="VivaLíngua Pro - Início">
            Viva<span>Língua</span>
            <span className="logo-pro">Pro</span>
          </a>

          <div className="premium-header-actions">
            <a href="/#diagnostico" className="btn btn-outline btn-small">
              Diagnóstico
            </a>
            <a href="/#inicio" className="btn btn-primary btn-small">
              Voltar ao site
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="premium-hero">
          <div className="container premium-hero-grid">
            <div className="premium-copy">
              <span className="tag">Executive language strategy</span>
              <h1>
                A fluência que posiciona sua carreira no mercado internacional.
              </h1>
              <p>
                Para executivos, líderes e profissionais que precisam falar com confiança,
                clareza e autoridade em reuniões, negociações e contextos globais.
              </p>

              <div className="premium-actions">
                <a href="/#diagnostico" className="btn btn-primary">
                  Agendar diagnóstico executivo
                </a>
                <a href="#programas" className="btn btn-outline">
                  Ver programas
                </a>
              </div>

              <div className="premium-metrics">
                {metrics.map((item) => (
                  <div key={item.label} className="metric-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel reveal-card">
              <div className="premium-panel-top">
                <span>Executive program</span>
                <strong>VivaLíngua Pro</strong>
              </div>

              <h2>Comunicação que gera presença e confiança.</h2>

              <ul>
                <li>Reuniões e apresentações internacionais</li>
                <li>Negotiation and business conversations</li>
                <li>Networking e relacionamento com clientes</li>
              </ul>

              <div className="premium-badges">
                <span>English</span>
                <span>Spanish</span>
                <span>French</span>
                <span>Business</span>
              </div>
            </div>
          </div>
        </section>

        <section className="premium-pilares" id="programas">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Why it works</span>
              <h2>Uma experiência premium para quem quer escalar no ambiente global.</h2>
            </div>

            <div className="premium-grid">
              {pillars.map((item) => (
                <article className="premium-card reveal-card" key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PremiumCorporatePage;
