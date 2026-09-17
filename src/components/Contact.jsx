import { useState } from "react";

export default function Contact({ language, onLanguageChange }) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Olá! Tenho interesse em uma aula experimental na VivaLíngua.",
      "",
      `Nome: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Idioma: ${language}`,
      `Modalidade: ${data.get("modality")}`,
      `Objetivo: ${data.get("message") || "Gostaria de conhecer o curso."}`,
    ].join("\n");
    window.location.href = `mailto:contato@vivalingua.com?subject=${encodeURIComponent("Aula experimental — " + language)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <section className="section contact" id="contato">
      <div className="container contact-content">
        <div className="contact-info">
          <span className="eyebrow"><span className="status-dot" /> VAMOS DAR O PRIMEIRO PASSO?</span>
          <h2>Seu próximo<br />“eu consegui”<br /><span>começa aqui.</span></h2>
          <p>Conte para a gente o que você quer conquistar. Vamos ajudar você a encontrar o curso que combina com o seu momento.</p>
          <div className="contact-item"><span aria-hidden="true">↗</span><div><strong>Uma conversa abre caminhos</strong><a href="mailto:contato@vivalingua.com">contato@vivalingua.com</a></div></div>
          <div className="contact-item"><span aria-hidden="true">◷</span><div><strong>Estamos por aqui</strong><p>Atendimento de segunda a sábado</p></div></div>
          <div className="contact-signoff" aria-hidden="true">Hello. Hola. Bonjour. Ciao. Hallo.</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} onChange={() => setPrepared(false)}>
          <span className="section-label">QUE BOM TER VOCÊ AQUI</span><h3>Vamos conversar?</h3><p className="form-intro">Preencha seus dados para solicitar uma aula experimental por e-mail.</p>
          <div className="form-group"><label htmlFor="name">Seu nome</label><input id="name" name="name" autoComplete="name" placeholder="Como podemos chamar você?" required maxLength={100} /></div>
          <div className="form-group"><label htmlFor="email">E-mail</label><input id="email" type="email" name="email" autoComplete="email" placeholder="voce@exemplo.com" required maxLength={200} /></div>
          <div className="form-row">
            <div className="form-group"><label htmlFor="language">Quero aprender</label><select id="language" name="language" value={language} onChange={(event) => onLanguageChange(event.target.value)} required><option value="">Escolha o idioma</option>{["Inglês", "Espanhol", "Francês", "Italiano", "Alemão", "Inglês para Negócios"].map((item) => <option key={item}>{item}</option>)}</select></div>
            <div className="form-group"><label htmlFor="modality">Como prefere estudar?</label><select id="modality" name="modality" required defaultValue=""><option value="">Escolha a modalidade</option><option>Presencial</option><option>Online</option><option>Ainda não sei</option></select></div>
          </div>
          <div className="form-group"><label htmlFor="message">Qual é o seu objetivo? <span>(opcional)</span></label><textarea id="message" name="message" placeholder="Viajar, crescer na carreira, aprender algo novo..." rows={3} maxLength={1500} /></div>
          <button type="submit" className="btn btn-primary form-button">Preparar meu e-mail <span aria-hidden="true">↗</span></button>
          <p className="form-note">Seu aplicativo de e-mail será aberto com os dados preenchidos. Revise e envie a mensagem para concluir o contato.</p>
          {prepared && <p className="form-feedback" role="status">Mensagem preparada. Conclua o envio no seu aplicativo de e-mail. Se ele não abrir, escreva para <a href="mailto:contato@vivalingua.com">contato@vivalingua.com</a>.</p>}
        </form>
      </div>
    </section>
  );
}
