import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    language: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      language: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }

  return (
    <section className="section contact" id="contato">
      <div className="container contact-content">
        <div className="contact-info">
          <span className="section-label">Entre em contato</span>

          <h2>Comece agora sua jornada para a fluência.</h2>

          <p>
            Preencha o formulário e nossa equipe entrará em contato com você.
          </p>

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
              <p>Segunda a sábado</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Agende uma aula experimental</h3>

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
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Idioma</label>

            <select
              id="language"
              name="language"
              value={form.language}
              onChange={handleChange}
              required
            >
              <option value="">Escolha um idioma</option>
              <option value="ingles">Inglês</option>
              <option value="espanhol">Espanhol</option>
              <option value="frances">Francês</option>
              <option value="italiano">Italiano</option>
              <option value="alemao">Alemão</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Conte um pouco sobre seu objetivo"
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-primary form-button">
            Enviar mensagem
          </button>

          {success && (
            <p className="success-message">
              ✓ Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;