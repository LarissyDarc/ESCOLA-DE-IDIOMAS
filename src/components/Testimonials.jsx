const testimonials = [
  {
    name: "Ana Souza",
    course: "Aluna de Inglês",
    text: "As aulas me ajudaram a ganhar confiança para falar em reuniões e entrevistas. Foi um passo importante na minha carreira.",
    avatar: "AS",
  },
  {
    name: "Carlos Lima",
    course: "Aluno de Espanhol",
    text: "A metodologia é clara, prática e muito inspiradora. Hoje consigo me comunicar com muito mais naturalidade em viagens e negociações.",
    avatar: "CL",
  },
  {
    name: "Mariana Alves",
    course: "Aluna de Francês",
    text: "Os professores acompanham cada etapa com atenção e incentivo. O resultado foi muito além do que eu esperava.",
    avatar: "MA",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Avaliações</span>

          <h2>Quem escolhe a VivaLíngua conquista mais visibilidade, confiança e oportunidades.</h2>
        </div>

        <div className="hero-trust" style={{ marginBottom: "2rem" }}>
          <span>📈 +1.500 profissionais atendidos</span>
          <span>🏆 Resultados reais em comunicação e carreira</span>
          <span>⏳ Próximo ciclo com vagas limitadas</span>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card reveal-card"
              key={testimonial.name}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="stars">★★★★★</div>

              <p>"{testimonial.text}"</p>

              <div className="student">
                <div className="avatar">{testimonial.avatar}</div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.course}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;