export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow"><span className="status-dot" /> SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</span>
            <h1>O mundo tem<br />muito a dizer.<br /><span>Faça parte<br className="desktop-break" /> da conversa.</span></h1>
            <p>Aprenda um novo idioma com quem entende de conexões. Aulas práticas para você ganhar confiança e ir mais longe.</p>
            <div className="hero-buttons">
              <a href="#contato" className="btn btn-primary">Quero uma aula experimental <span aria-hidden="true">↗</span></a>
              <a href="#cursos" className="hero-link">Explorar cursos <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span aria-hidden="true">✓</span> Do seu primeiro “hello” à sua próxima conquista.</div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <img className="hero-photo" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85" alt="Grupo de estudantes conversando e aprendendo juntos" fetchPriority="high" width="1000" height="1100" />
            </div>
            <div className="speech speech-hello">Hello! <span aria-hidden="true">✦</span></div>
            <div className="speech speech-hola">¡Hola!</div>
            <div className="photo-caption"><span className="caption-icon" aria-hidden="true">↗</span><div><strong>Mais confiança. Mais mundo.</strong><span>O próximo passo é seu.</span></div></div>
            <span className="hero-orbit" aria-hidden="true" />
          </div>
        </div>
      </section>
      <div className="learning-strip"><div className="container learning-strip-content">
        <p>Seu futuro não tem fronteiras.<br /><strong>Seu aprendizado também não.</strong></p>
        <div><strong>5 idiomas</strong><span>Um mundo de possibilidades</span></div>
        <div><strong>Presencial e online</strong><span>Aprenda do seu jeito</span></div>
        <div><strong>Conversa de verdade</strong><span>Prática desde o início</span></div>
      </div></div>
    </>
  );
}
