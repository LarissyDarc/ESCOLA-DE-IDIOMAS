function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-content">
        <div className="about-image">
          <div className="about-box">
            <span>💬</span>
            <h3>Fale sem medo</h3>
            <p>
              Nossa metodologia prioriza situações reais de conversação.
            </p>
          </div>
        </div>

        <div className="about-text">
          <span className="section-label">Sobre nós</span>

          <h2>Idiomas que aproximam você do mundo.</h2>

          <p>
            A VivaLíngua nasceu para transformar o aprendizado de idiomas em
            uma experiência simples, prática e motivadora.
          </p>

          <p>
            Trabalhamos com aulas interativas, atividades de conversação e
            acompanhamento individual para ajudar cada aluno a desenvolver suas
            habilidades.
          </p>

          <div className="about-checks">
            <span>✓ Aulas práticas</span>
            <span>✓ Professores especializados</span>
            <span>✓ Material atualizado</span>
            <span>✓ Turmas reduzidas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;