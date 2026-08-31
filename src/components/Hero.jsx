function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="tag">🌎 Aprenda. Conecte-se. Evolua.</span>

          <h1>
            Aprenda um novo idioma e descubra um
            <span> novo mundo.</span>
          </h1>

          <p>
            Aulas dinâmicas, professores qualificados e uma metodologia
            moderna para ajudar você a alcançar a fluência.
          </p>

          <div className="hero-buttons">
            <a href="#cursos" className="btn btn-primary">
              Conheça os cursos
            </a>

            <a href="#contato" className="btn btn-outline">
              Aula experimental
            </a>
          </div>

          <div className="hero-numbers">
            <div>
              <strong>+1.500</strong>
              <span>Alunos</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Idiomas</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Satisfação</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-main">
            <span className="world">🌍</span>

            <h2>Seu próximo idioma começa aqui.</h2>

            <p>
              Estude no seu ritmo e desenvolva conversação, escrita,
              compreensão e confiança.
            </p>

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