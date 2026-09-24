import {
  FaArrowRight,
  FaArrowDown,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks.js";
import Navbar from "../Navbar/Navbar.jsx";

function Hero() {
  const hasLinkedin = !socialLinks.linkedin.startsWith("#");
  const hasGithub = !socialLinks.github.startsWith("#");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent px-4 py-4 sm:px-6 lg:px-8"
    >
      {/* Main Hero Card */}
      <div
        className="
          relative min-h-[calc(100vh-2rem)]
          overflow-hidden rounded-[32px]
          border border-white/10
          bg-[#003d2b]
        "
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://giribojanapu789.sirv.com/Giri%20Bojanapu-Portfolio/Giri%20Green%20Background.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Green atmospheric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_42%,rgba(0,255,170,0.28),transparent_35%)]" />

        {/* Decorative circles */}
        <div className="absolute right-[13%] top-[14%] hidden h-20 w-20 rounded-full border-2 border-cyan-300/80 lg:block" />

        <div className="absolute right-[11.8%] top-[13%] hidden h-8 w-8 rounded-full border-2 border-emerald-300 lg:block" />

        <div className="absolute right-[7%] top-[22%] hidden h-10 w-10 rounded-full bg-cyan-400 lg:block" />

        <div className="absolute left-[-18px] top-[61%] h-11 w-11 rounded-full bg-emerald-300/50 blur-[1px]" />

        {/* Top Navigation */}
        <header className="relative z-20 flex items-center justify-between px-7 py-7 sm:px-10 lg:px-[70px]">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Giri babu
            </h2>
            {/* <Navbar /> */}

            <span className="hidden h-6 w-px bg-white/40 sm:block" />
          </div>
        </header>

        {/* Hero Content */}
        <div
          className="
            relative z-10
            mx-auto grid min-h-[calc(100vh-120px)]
            max-w-[1450px]
            grid-cols-1
            items-center
            px-7 pb-12
            sm:px-10
            lg:grid-cols-[0.95fr_1.1fr_0.9fr]
            lg:px-[70px]
            lg:pb-20
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-30 pt-8 lg:pt-0">
            <p className="mb-3 text-lg font-medium text-white/90">Hi,</p>

            <h1
              className="
                font-display
                font-bold
                leading-[0.95]
                tracking-[-1.5px]
                text-white
                whitespace-nowrap

                text-[30px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[62px]
                xl:text-[72px]
              "
            >
              I'm <span className="text-cyan-300">Giri babu</span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
              Frontend Developer
            </p>

            <a
              href="#contact"
              className="
                mt-10 inline-flex items-center gap-7
                rounded-2xl
                border border-cyan-300
                bg-cyan-400
                px-7 py-4
                text-lg font-semibold
                text-white
                shadow-[0_10px_35px_rgba(0,255,200,0.2)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
              "
            >
              Hire Me
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* CENTER PORTRAIT */}
          <div className="relative flex h-[430px] items-end justify-center sm:h-[560px] lg:h-[700px]">
            {/* Glow behind person */}
            <div
              className="
                absolute
                bottom-[10%]
                left-1/2
                h-[65%]
                w-[65%]
                -translate-x-1/2
                rounded-full
                bg-emerald-300/20
                blur-[90px]
              "
            />

            {/* IMPORTANT:
                Replace this path with your portrait image.
                Keep the image as a transparent PNG/WebP for the
                same effect as the reference.
            */}
            {/* <img
              src="/images/giri-babu.png"
              alt="Giri Babu"
              className="
                relative z-10
                h-full
                w-auto
                max-w-none
                object-contain
                object-bottom
                drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]
              "
            /> */}
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-30 max-w-[430px] pb-4 lg:justify-self-end">
            <p className="mb-4 text-xl font-medium text-cyan-300">Expert on</p>

            <h2 className="text-3xl font-bold leading-[1.18] text-white sm:text-4xl lg:text-[39px]">
              Based in India, I'm a Frontend Developer and Web Designer.
            </h2>

            <p className="mt-7 text-base leading-8 text-white/85 sm:text-lg">
              I build modern, responsive websites that turn ideas into real
              digital experiences. Let's create something great together.
            </p>

            <a
              href="/Giri-Babu-Resume.pdf"
              download
              className="
                mt-7 inline-flex
                items-center gap-3
                border-b-2 border-cyan-300
                pb-2
                text-lg font-medium
                text-cyan-300
                transition
                hover:text-white
                hover:border-white
              "
            >
              Download CV
              <FaArrowDown className="text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom Left Social */}
        <div className="absolute bottom-8 left-7 z-30 hidden items-center gap-4 sm:flex lg:left-[70px]">
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-cyan-300
              text-cyan-300
            "
          >
            <span className="text-lg">✣</span>
          </div>

          <a
            href="https://dribbble.com/giribabu"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/90 transition hover:text-cyan-300"
          >
            www.dribbble.com/giribabu
          </a>
        </div>

        {/* Bottom Right Chat */}
        <a
          href="#contact"
          className="
            absolute bottom-8 right-7 z-30
            hidden items-center gap-4
            text-sm text-white
            sm:flex lg:right-[70px]
          "
        >
          <span>Let's Chat</span>

          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/80">
            <span className="text-lg">•••</span>

            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-lime-400" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
