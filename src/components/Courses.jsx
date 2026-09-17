const courses = [
  { name: "Inglês", code: "EN", greeting: "Hello, world.", photo: "photo-1513635269975-59663e0ac1ad", alt: "Big Ben e Parlamento em Londres", description: "Abra portas para novas viagens, conexões e oportunidades profissionais.", level: "Básico ao avançado" },
  { name: "Espanhol", code: "ES", greeting: "¡Hola, mundo!", photo: "photo-1539037116277-4db20889f2d4", alt: "Arquitetura de Barcelona", description: "Aproxime-se de novas culturas e transforme cada viagem em uma boa conversa.", level: "Básico ao avançado" },
  { name: "Francês", code: "FR", greeting: "Bonjour, le monde.", photo: "photo-1502602898657-3e91760cbb34", alt: "Torre Eiffel em Paris", description: "Descubra novas perspectivas através da arte, da cultura e da língua francesa.", level: "Básico ao intermediário" },
  { name: "Italiano", code: "IT", greeting: "Ciao, mondo.", photo: "photo-1515542622106-78bda8ba0e5b", alt: "Vista da cidade de Roma", description: "Viva a cultura italiana e aprenda a se comunicar com naturalidade.", level: "Básico ao intermediário" },
  { name: "Alemão", code: "DE", greeting: "Hallo, Welt.", photo: "photo-1560969184-10fe8719e047", alt: "Vista de Berlim", description: "Amplie seus horizontes nos estudos e no trabalho, um aprendizado de cada vez.", level: "Básico ao intermediário" },
  { name: "Inglês para Negócios", code: "EN+", greeting: "Your next opportunity.", photo: "photo-1521737711867-e3b97375f902", alt: "Profissionais colaborando em uma reunião", description: "Ganhe segurança para reuniões, entrevistas e apresentações profissionais.", level: "Intermediário ao avançado" },
];

export default function Courses({ onSelectCourse }) {
  return (
    <section className="section courses" id="cursos">
      <div className="container">
        <div className="section-header section-header-split"><div><span className="section-label">UM IDIOMA, NOVOS CAMINHOS</span><h2>Qual vai ser a sua<br /><span>próxima conversa?</span></h2></div><p>Para viajar, crescer na carreira ou se conectar.<br />Encontre o curso que combina com o seu próximo passo.</p></div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.name}>
              <div className="course-image"><img src={`https://images.unsplash.com/${course.photo}?auto=format&fit=crop&w=650&q=80`} alt={course.alt} loading="lazy" width="650" height="400" /><span className="course-code">{course.code}</span><span className="course-greeting">{course.greeting}</span></div>
              <div className="course-body"><span className="course-level">{course.level}</span><h3>{course.name}</h3><p>{course.description}</p><a href="#contato" onClick={() => onSelectCourse(course.name)} aria-label={`Conhecer o curso de ${course.name}`}>Quero conhecer <span aria-hidden="true">↗</span></a></div>
            </article>
          ))}
        </div>
        <div className="course-help"><span>Seu primeiro idioma ou um novo desafio? <strong>A gente ajuda você a começar.</strong></span><a href="#contato">Fale com a nossa equipe <span aria-hidden="true">→</span></a></div>
      </div>
    </section>
  );
}
