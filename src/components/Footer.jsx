function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <a href="#inicio" className="logo footer-logo">
            Viva<span>Língua</span>
            <span className="logo-pro">Pro</span>
          </a>

          <p>
            Conectando profissionais a oportunidades internacionais por meio de comunicação com clareza e influência.
          </p>
        </div>

        <div className="footer-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#metodologia">Metodologia</a>
          <a href="#cursos">Cursos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} VivaLíngua. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;