import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="topbar"><div className="container"><span>Um novo idioma. Infinitas possibilidades.</span><a href="#contato">Presencial e online <span aria-hidden="true">↗</span></a></div></div>
      <div className="container header-content">
        <a href="#inicio" className="logo" aria-label="VivaLíngua — início" onClick={closeMenu}>
          <span className="logo-symbol" aria-hidden="true">v.</span>
          <span className="logo-word">Viva<span>Língua</span><small>ESCOLA DE IDIOMAS</small></span>
        </a>
        <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="main-navigation">
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav id="main-navigation" className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Menu principal"
          onKeyDown={(event) => { if (event.key === "Escape") { closeMenu(); document.querySelector(".menu-button")?.focus(); } }}>
          <a href="#cursos" onClick={closeMenu}>Nossos cursos</a>
          <a href="#sobre" onClick={closeMenu}>A VivaLíngua</a>
          <a href="#beneficios" onClick={closeMenu}>Nosso método</a>
          <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
          <a href="#contato" className="nav-button" onClick={closeMenu}>Comece agora <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
