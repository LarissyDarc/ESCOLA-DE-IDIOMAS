import { useState } from "react";
import { validarCadastro } from "../js/validacao.js";

const audiencia = [
  {
    title: "Executivos",
    text: "Comunicar-se com clareza, presença e autoridade em reuniões, apresentações e negociações internacionais.",
  },
  {
    title: "Universitários",
    text: "Preparar-se para estudos, intercâmbios e oportunidades globais com mais confiança e performance acadêmica.",
  },
  {
    title: "Viajantes",
    text: "Viajar com liberdade, segurança e naturalidade em encontros, hotéis, restaurantes e conversas do dia a dia.",
  },
];

const passos = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    text: "Entendemos sua meta, seu nível e seu contexto profissional para definir o caminho mais eficiente.",
  },
  {
    number: "02",
    title: "Plano personalizado",
    text: "Definimos o idioma, o ritmo e as prioridades mais relevantes para sua realidade e objetivos.",
  },
  {
    number: "03",
    title: "Aceleração real",
    text: "Você recebe a direção certa para avançar com segurança, clareza e resultados mensuráveis.",
  },
];

function DiagnosticoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    audience: "",
    language: "",
    level: "",
    goal: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setValidationMessage("");
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.audience || !form.language || !form.level || !form.goal) {
      setValidationMessage("Preencha seu público, idioma, nível e objetivo para continuar.");
      setSuccess(false);
      return;
    }

    const validationError = validarCadastro(form.name, form.email, form.language);
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
      audience: "",
      language: "",
      level: "",
      goal: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <div className="diagnostico-page">
      <header className="diagnostico-header">
        <div className="container diagnostico-header-inner">
          <a href="/" className="logo" aria-label="VivaLíngua Pro - Início">
            <span className="brand-primary">Viva</span>
            <span className="brand-accent">Língua</span>
            <span className="logo-pro">Pro</span>
          </a>

          <a href="/" className="btn btn-outline btn-small">
            Voltar ao início
          </a>
        </div>
      </header>

      <main>
        <section className="diagnostico-hero">
          <div className="container diagnostico-hero-grid">
            <div className="diagnostico-copy">
              <span className="tag">Diagnóstico gratuito</span>
              <h1>
                Descubra o caminho certo para falar outro idioma com
                <span> clareza, presença e confiança real.</span>
              </h1>
              <p>
                Seja para carreira, estudos ou viagens, nossa equipe vai identificar o idioma ideal,
                o nível certo e a estratégia mais eficiente para você evoluir com segurança.
              </p>

              <div className="hero-badges">
                <span>Sem compromisso</span>
                <span>Orientação personalizada</span>
                <span>Foco em performance</span>
              </div>

              <div className="diagnostico-benefits">
                <div>
                  <strong>+1.500</strong>
                  <span>alunos atendidos</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>idiomas</span>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>resultado</span>
                </div>
              </div>
            </div>

            <div className="diagnostico-form-box reveal-card">
              <h2>Solicite seu diagnóstico executivo</h2>
              <form className="diagnostico-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="audience">Perfil</label>
                    <select id="audience" name="audience" value={form.audience} onChange={handleChange} required>
                      <option value="">Selecione</option>
                      <option value="executivo">Executivo</option>
                      <option value="universitario">Universitário</option>
                      <option value="viajante">Viajante</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="level">Nível</label>
                    <select id="level" name="level" value={form.level} onChange={handleChange} required>
                      <option value="">Selecione</option>
                      <option value="iniciante">Iniciante</option>
                      <option value="intermediario">Intermediário</option>
                      <option value="avancado">Avançado</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="language">Idioma</label>
                    <select id="language" name="language" value={form.language} onChange={handleChange} required>
                      <option value="">Escolha</option>
                      <option value="ingles">Inglês</option>
                      <option value="espanhol">Espanhol</option>
                      <option value="frances">Francês</option>
                      <option value="italiano">Italiano</option>
                      <option value="alemao">Alemão</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goal">Objetivo</label>
                    <select id="goal" name="goal" value={form.goal} onChange={handleChange} required>
                      <option value="">Selecione</option>
                      <option value="carreira">Carreira</option>
                      <option value="estudo">Estudos</option>
                      <option value="viagem">Viagem</option>
                      <option value="networking">Networking</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Meta</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Conte um pouco sobre sua meta com o idioma"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-wide">
                  Quero meu diagnóstico estratégico
                </button>

                {validationMessage && <p className="error-message">{validationMessage}</p>}
                {success && (
                  <p className="success-message">
                    ✓ Diagnóstico solicitado com sucesso! Em breve nossa equipe entrará em contato.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="diagnostico-audiences">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Para quem é</span>
              <h2>Um caminho pensado para cada perfil de crescimento.</h2>
            </div>

            <div className="audience-grid">
              {audiencia.map((item) => (
                <article className="audience-card reveal-card" key={item.title}>
                  <span className="audience-badge">{item.title}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section diagnostico-process">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Como funciona</span>
              <h2>Seu progresso começa com um diagnóstico claro e estratégico.</h2>
            </div>

            <div className="process-grid">
              {passos.map((passo) => (
                <article className="process-step" key={passo.number}>
                  <span className="process-number">{passo.number}</span>
                  <h3>{passo.title}</h3>
                  <p>{passo.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DiagnosticoPage;
