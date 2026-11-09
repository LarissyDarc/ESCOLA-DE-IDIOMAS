const courses = [
  {
    flag: "💼",
    name: "Inglês Executivo",
    description:
      "A estrutura ideal para líderes e profissionais que precisam falar com clareza, presença e autoridade em reuniões, apresentações e negociações.",
    level: "Executivos e gestores",
  },
  {
    flag: "🌍",
    name: "Inglês para Internacionalização",
    description:
      "Desenvolvimento de comunicação estratégica para quem atua com clientes, parceiros e equipes em contexto global e multinacional.",
    level: "Intermediário ao avançado",
  },
  {
    flag: "🤝",
    name: "Inglês para Negócios",
    description:
      "Treinamento voltado para entrevistas, networking, pitches, gestão de relacionamento e presença premium em ambientes corporativos.",
    level: "Gestão e liderança",
  },
  {
    flag: "🇪🇸",
    name: "Espanhol para Atuação Global",
    description:
      "Uma comunicação mais fluida e segura para negócios, viagens, expansão internacional e relacionamento com mercados latinos.",
    level: "Profissionais e líderes",
  },
  {
    flag: "🇫🇷",
    name: "Francês para Contexto Corporativo",
    description:
      "Comunicação sofisticada para profissionais que atuam com clientes, parceiros e equipes em ambientes internacionais de alto nível.",
    level: "Executivos e equipes",
  },
  {
    flag: "🌐",
    name: "Diagnóstico Executivo",
    description:
      "Avaliação estratégica para identificar o idioma, o nível ideal e o caminho mais eficiente para acelerar sua presença internacional.",
    level: "Diagnóstico personalizado",
  },
];

function Courses() {
  return (
    <section className="section courses" id="cursos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Programas executivos</span>

          <h2>Programas de idioma para quem deseja liderar com presença internacional.</h2>

          <p>
            Soluções premium pensadas para executivos, gestores e profissionais que precisam ganhar
            confiança, clareza e influência em ambientes globais.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => (
            <article
              className="course-card reveal-card"
              key={course.name}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="course-top">
                <span className="course-flag">{course.flag}</span>
                <span className="course-level">{course.level}</span>
              </div>

              <h3>{course.name}</h3>
              <p>{course.description}</p>

              <a href="#contato">Quero esse programa →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;