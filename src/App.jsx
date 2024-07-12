import NavBar from "@/components/NavBar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import NoiseBackground from "@/styles/NoiseBackgrund";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Element } from "react-scroll";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { initGA, logPageView } from "@/utils/analytics";

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <BrowserRouter>
      <NoiseBackground />
      <ScrollToTopButton />
      <ScrollToTop />
      <NavBar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
