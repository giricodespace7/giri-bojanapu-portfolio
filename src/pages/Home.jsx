import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Experience from '../components/Experience/Experience.jsx';
import Process from '../components/Process/Process.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Home() {
  return (
    <div className="bg-white bg-grid min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
