import { Home as HomeIcon, User, Briefcase, FileText, Code, Mail } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar.jsx"
import Hero from "../components/Hero/Hero.jsx"
import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Experience from "../components/Experience/Experience.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Contact from "../components/Contact/Contact.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { Component as GridBackground } from "@/components/ui/grid-background.jsx"

const navItems = [
  { name: "Home",       url: "#home",       icon: HomeIcon },
  { name: "Skills",     url: "#skills",     icon: Code },
  { name: "Experience", url: "#experience", icon: Briefcase },
  { name: "Projects",   url: "#projects",   icon: FileText },
  { name: "About",      url: "#about",      icon: User },
  { name: "Contact",    url: "#contact",    icon: Mail },
]

function Home() {
  return (
    <GridBackground>
      <NavBar items={navItems} />
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
  )
}

export default Home
