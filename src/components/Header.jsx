import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleGoHome(event) {
    event.preventDefault();
    window.location.hash = "inicio";
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  }

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="logo" aria-label="VivaLíngua Pro - Início" onClick={handleGoHome}>
          <span className="brand-primary">Viva</span>
          <span className="brand-accent">Língua</span>
          <span className="logo-pro">Pro</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav id="main-navigation" className={`nav ${menuOpen ? "nav-open" : ""}`} role="navigation" aria-label="Menu principal">
          <a href="#inicio" onClick={handleGoHome}>
            Início
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#metodologia" onClick={closeMenu}>
            Metodologia
          </a>

          <a href="#cursos" onClick={closeMenu}>
            Cursos
          </a>

          <a href="#beneficios" onClick={closeMenu}>
            Resultados
          </a>

          <a href="#depoimentos" onClick={closeMenu}>
            Avaliações
          </a>

          <a href="#diagnostico" className="nav-button" onClick={closeMenu}>
            Agendar diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;