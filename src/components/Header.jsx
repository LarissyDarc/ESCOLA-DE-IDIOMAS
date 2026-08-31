import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="logo" aria-label="VivaLíngua - Início">
          Viva<span>Língua</span>
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
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#cursos" onClick={closeMenu}>
            Cursos
          </a>

          <a href="#beneficios" onClick={closeMenu}>
            Benefícios
          </a>

          <a href="#depoimentos" onClick={closeMenu}>
            Depoimentos
          </a>

          <a href="#contato" className="nav-button" onClick={closeMenu}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;