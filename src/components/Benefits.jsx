const benefits = [
  {
    icon: "🗣️",
    title: "Comunicação executiva",
    description:
      "Treinamento focado em reuniões, apresentações, pitchs, negociações e presença profissional em contextos internacionais.",
  },
  {
    icon: "👩‍🏫",
    title: "Mentoria estratégica",
    description:
      "Orientação personalizada para quem precisa evoluir com clareza, velocidade e impacto em decisões e relacionamentos globais.",
  },
  {
    icon: "💼",
    title: "Resultados reais",
    description:
      "Estrutura pensada para transformar sua comunicação no trabalho, na carreira e nas oportunidades de crescimento internacional.",
  },
  {
    icon: "📚",
    title: "Currículo premium",
    description:
      "Conteúdo aplicado ao seu contexto real: negócios, negociação, liderança, viagens e comunicação profissional de alto nível.",
  },
];

function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Impacto executivo</span>

          <h2>Um programa de idiomas pensado para quem precisa liderar com clareza, presença e impacto global.</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <article
              className="benefit-card reveal-card"
              key={benefit.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;