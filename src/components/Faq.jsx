const questions = [
  ["Preciso saber alguma coisa para começar?", "Não! Temos cursos a partir do nível básico. Se você já estudou o idioma, converse com a nossa equipe para encontrar uma turma adequada ao seu conhecimento."],
  ["Posso fazer aulas online?", "Sim. A VivaLíngua oferece aulas presenciais e online. Fale com a equipe para consultar as turmas e os horários disponíveis para o idioma escolhido."],
  ["Quais idiomas posso aprender?", "Você pode estudar inglês, espanhol, francês, italiano e alemão. Também temos inglês para negócios, com foco na comunicação profissional."],
  ["Como funciona a aula experimental?", "Entre em contato informando o idioma e a modalidade de interesse. Nossa equipe orientará você sobre a disponibilidade e os próximos passos para conhecer as aulas."],
  ["Como faço minha matrícula?", "O primeiro passo é conversar com a nossa equipe pelo formulário de contato. Você poderá tirar dúvidas sobre turmas, horários, valores e matrícula."],
];

export default function Faq() {
  return <section className="section faq" id="duvidas"><div className="container faq-content"><div><span className="section-label">PODE PERGUNTAR</span><h2>Grandes planos.<br /><span>Sem pequenas dúvidas.</span></h2><p>O que você precisa saber para começar sua próxima jornada.</p><a href="#contato" className="text-link">Ainda tem uma dúvida? Fale com a gente ↗</a></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
