export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-content">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85" alt="Pessoas trocando ideias em um ambiente de aprendizado" loading="lazy" width="900" height="1000" /><div className="about-box"><span aria-hidden="true">“</span><h3>Aprender é bom.<br />Se conectar é melhor.</h3><p>Um idioma faz toda a diferença.</p></div></div>
        <div className="about-text"><span className="section-label">MUITO ALÉM DAS PALAVRAS</span><h2>Aprendizado que faz sentido.<br /><span>Dentro e fora da sala.</span></h2><p>A VivaLíngua nasceu para aproximar pessoas do mundo. Aqui, cada aula é uma oportunidade de descobrir, experimentar e se expressar.</p><p>Com atividades práticas e acompanhamento próximo, você desenvolve a confiança para usar o idioma nas situações que realmente importam.</p><div className="about-checks"><span>✓ Turmas reduzidas</span><span>✓ Professores especializados</span><span>✓ Aulas interativas</span><span>✓ Acompanhamento individual</span></div><a href="#contato" className="btn btn-primary">Venha viver essa experiência <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}
