const benefits = [
  {
    icon: "🗣️",
    title: "Conversação desde o início",
    description:
      "Pratique situações reais e desenvolva confiança para falar.",
  },
  {
    icon: "👩‍🏫",
    title: "Professores qualificados",
    description:
      "Profissionais preparados para acompanhar sua evolução.",
  },
  {
    icon: "💻",
    title: "Aulas presenciais e online",
    description:
      "Escolha a modalidade que melhor combina com sua rotina.",
  },
  {
    icon: "📚",
    title: "Material moderno",
    description:
      "Conteúdos atualizados para tornar seu aprendizado mais interessante.",
  },
];

function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Por que escolher a VivaLíngua?</span>

          <h2>Aprender pode ser simples e divertido.</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
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