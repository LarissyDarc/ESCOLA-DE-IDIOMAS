const courses = [
  {
    flag: "🇺🇸",
    name: "Inglês",
    description:
      "Do nível básico ao avançado, desenvolvendo conversação e compreensão.",
    level: "Básico ao avançado",
  },
  {
    flag: "🇪🇸",
    name: "Espanhol",
    description:
      "Aprenda espanhol de forma prática para estudos, viagens e trabalho.",
    level: "Básico ao avançado",
  },
  {
    flag: "🇫🇷",
    name: "Francês",
    description:
      "Explore a língua francesa com aulas dinâmicas e foco em comunicação.",
    level: "Básico ao intermediário",
  },
  {
    flag: "🇮🇹",
    name: "Italiano",
    description:
      "Conheça o idioma e a cultura italiana com uma metodologia moderna.",
    level: "Básico ao intermediário",
  },
  {
    flag: "🇩🇪",
    name: "Alemão",
    description:
      "Aprenda estruturas, vocabulário e conversação de maneira progressiva.",
    level: "Básico ao intermediário",
  },
  {
    flag: "💼",
    name: "Inglês para Negócios",
    description:
      "Comunicação profissional para reuniões, entrevistas e apresentações.",
    level: "Intermediário ao avançado",
  },
];

function Courses() {
  return (
    <section className="section courses" id="cursos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nossos cursos</span>

          <h2>Escolha o idioma que vai transformar seu futuro</h2>

          <p>
            Cursos desenvolvidos para diferentes objetivos e níveis de
            conhecimento.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.name}>
              <div className="course-icon">{course.flag}</div>

              <h3>{course.name}</h3>

              <p>{course.description}</p>

              <span className="course-level">{course.level}</span>

              <a href="#contato">Quero aprender →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;