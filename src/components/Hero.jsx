function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="tag">Executive English · para líderes que precisam falar com autoridade</span>

          <h1>
            A fluência que abre portas,
            <span className="hero-highlight"> acelera decisões e eleva sua presença internacional.</span>
          </h1>

          <p>
            Para executivos, gestores, especialistas e profissionais que precisam comunicar-se com
            clareza, confiança e impacto em reuniões, apresentações, negociações e ambientes globais.
          </p>

          <div className="hero-badges">
            <span>Comunicação executiva</span>
            <span>English for business</span>
            <span>Networking internacional</span>
          </div>

          <div className="hero-cta-row">
            <a href="#diagnostico" className="btn btn-primary">
              Reservar diagnóstico estratégico
            </a>

            <a href="#premium" className="btn btn-outline">
              Ver programa premium
            </a>
          </div>

          <div className="hero-trust">
            <span>⚡ Vagas limitadas para o próximo ciclo</span>
            <span>⭐ Método pensado para resultados reais</span>
            <span>🎯 Diagnóstico estratégico com foco em performance</span>
          </div>

          <div className="hero-numbers">
            <div>
              <strong>+1.500</strong>
              <span>profissionais atendidos</span>
            </div>

            <div>
              <strong>5</strong>
              <span>idiomas</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>alinhamento de objetivos</span>
            </div>
          </div>
        </div>

        <div className="hero-card floating-card">
          <div className="hero-card-main">
            <span className="world">🌐</span>

            <h2>Mais clareza. Mais presença. Mais resultados.</h2>

            <p>
              Aulas premium para quem precisa se comunicar com autoridade em contextos globais,
              profissionais e internacionais.
            </p>

            <div className="hero-highlight-list">
              <span>Reuniões e apresentações</span>
              <span>Negociação internacional</span>
              <span>Networking estratégico</span>
            </div>

            <div className="hero-offer">Executive program</div>

            <div className="language-icons">
              <span>🇺🇸</span>
              <span>🇪🇸</span>
              <span>🇫🇷</span>
              <span>🇮🇹</span>
              <span>🇩🇪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;