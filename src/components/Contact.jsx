import { useState } from "react";
import { validarCadastro } from "../js/validacao.js";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    language: "",
    goal: "",
    level: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setValidationMessage("");
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationError = validarCadastro(
      form.name,
      form.email,
      form.language || form.goal,
    );

    if (!form.goal || !form.level) {
      setValidationMessage("Selecione seu objetivo e nível para continuar.");
      setSuccess(false);
      return;
    }

    if (validationError) {
      setValidationMessage(validationError);
      setSuccess(false);
      return;
    }

    setValidationMessage("");
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      language: "",
      goal: "",
      level: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  return (
    <section className="section contact" id="diagnostico">
      <div className="container contact-content">
        <div className="contact-info">
          <span className="section-label">Diagnóstico gratuito</span>

          <h2>Descubra o melhor caminho para sua comunicação internacional.</h2>

          <p>
            Preencha o formulário e nossa equipe irá mapear sua trajetória profissional,
            seu nível atual e o idioma ideal para fortalecer sua presença global com mais clareza, autoridade e resultado.
          </p>

          <div className="sales-points">
            <div className="sales-point">
              <span>✅</span>
              <p>Diagnóstico estratégico para sua rotina profissional</p>
            </div>
            <div className="sales-point">
              <span>✅</span>
              <p>Recomendação do idioma, nível e plano ideal para sua meta</p>
            </div>
            <div className="sales-point">
              <span>✅</span>
              <p>Orientação premium para posicionamento internacional</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>

            <div>
              <strong>E-mail</strong>
              <p>contato@vivalingua.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>

            <div>
              <strong>Telefone</strong>
              <p>(61) 99999-9999</p>
            </div>
          </div>

          <div className="contact-item">
            <span>🕐</span>

            <div>
              <strong>Atendimento</strong>
              <p>Segunda a sábado · 8h às 18h</p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-card" onSubmit={handleSubmit}>
          <h3>Solicite seu diagnóstico executivo</h3>

          <div className="form-group">
            <label htmlFor="name">Nome</label>

            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu melhor e-mail"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="language">Idioma</label>

              <select
                id="language"
                name="language"
                value={form.language}
                onChange={handleChange}
                required
              >
                <option value="">Escolha</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
                <option value="frances">Francês</option>
                <option value="italiano">Italiano</option>
                <option value="alemao">Alemão</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="level">Nível atual</label>

              <select
                id="level"
                name="level"
                value={form.level}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="goal">Objetivo principal</label>

            <select
              id="goal"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
            >
              <option value="">Selecione seu objetivo</option>
              <option value="carreira">Carreira</option>
              <option value="estudo">Estudo</option>
              <option value="viagem">Viagem</option>
              <option value="networking">Networking / comunicação</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Conte um pouco sobre sua meta</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ex.: quero melhorar meu inglês para entrevista e reuniões profissionais."
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-primary form-button">
            Agendar meu diagnóstico
          </button>

          {validationMessage && (
            <p className="error-message" role="alert">
              {validationMessage}
            </p>
          )}

          {success && (
            <p className="success-message">
              ✓ Diagnóstico solicitado com sucesso! Nossa equipe entrará em contato em breve.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
