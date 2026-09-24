import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Component as GridBackground } from "@/components/ui/grid-background.jsx";

function Home() {
  return (
    <GridBackground>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </GridBackground>
  );
}

export default Home;
