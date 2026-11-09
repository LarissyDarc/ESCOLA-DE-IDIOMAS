import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DiagnosticoPage from "./pages/DiagnosticoPage";
import PremiumCorporatePage from "./pages/PremiumCorporatePage";

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace("#", "") || "home");
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 240);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (route === "diagnostico") {
    return <DiagnosticoPage />;
  }

  if (route === "premium" || route === "corporate") {
    return <PremiumCorporatePage />;
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Process />
        <Courses />
        <Benefits />
        <Testimonials />

        <section className="conversion-banner">
          <div className="container conversion-banner-inner">
            <div className="conversion-copy">
              <span className="section-label conversion-label">Próximo ciclo</span>
              <h2>Seu próximo passo para falar com autoridade no mercado global começa aqui.</h2>
            </div>

            <div className="conversion-cta">
              <div className="conversion-proof">
                <span>+1.500 profissionais</span>
                <span>Resposta em até 24h</span>
                <span>Vagas limitadas</span>
              </div>

              <a href="#diagnostico" className="btn btn-primary">
                Agendar diagnóstico agora
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <button
        type="button"
        className={`scroll-top-button ${showScrollTop ? "visible" : ""}`}
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

      <div className="floating-cta" aria-label="Chamada para ação final">
        <span>Diagnóstico estratégico</span>
        <a href="#diagnostico" className="btn btn-primary btn-small">
          Agendar agora
        </a>
      </div>

      <Footer />
    </>
  );
}

export default App;