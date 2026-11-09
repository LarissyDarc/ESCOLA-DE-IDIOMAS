const steps = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    description:
      "Entendemos sua meta, seu nível e seu contexto profissional para criar um caminho realista e de alto impacto.",
  },
  {
    number: "02",
    title: "Aulas focadas em resultado",
    description:
      "Aprendizado prático com conversação, feedback direto e estratégias aplicadas ao seu dia a dia profissional.",
  },
  {
    number: "03",
    title: "Progresso mensurável",
    description:
      "Você acompanha sua evolução, fortalece sua presença e avança com clareza em cada etapa da sua carreira.",
  },
];

function Process() {
  return (
    <section className="section process" id="metodologia">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Como funciona</span>
          <h2>Uma metodologia pensada para acelerar sua fluência e fortalecer sua presença global.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
