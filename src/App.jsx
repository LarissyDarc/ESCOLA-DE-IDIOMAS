import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState("");
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Courses onSelectCourse={setLanguage} />
        <About />
        <Benefits />
        <Testimonials />
        <Contact language={language} onLanguageChange={setLanguage} />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
