const testimonials = [
  {
    name: "Ana Souza",
    course: "Aluna de Inglês",
    text: "As aulas são muito dinâmicas. Hoje consigo conversar com muito mais confiança.",
    avatar: "AS",
  },
  {
    name: "Carlos Lima",
    course: "Aluno de Espanhol",
    text: "A metodologia tornou o aprendizado muito mais fácil e divertido.",
    avatar: "CL",
  },
  {
    name: "Mariana Alves",
    course: "Aluna de Francês",
    text: "Os professores acompanham cada etapa e sempre ajudam quando temos dúvidas.",
    avatar: "MA",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Depoimentos</span>

          <h2>Quem aprende com a gente recomenda.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
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