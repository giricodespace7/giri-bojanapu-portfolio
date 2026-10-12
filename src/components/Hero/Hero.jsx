import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />

      <div className="max-w-content mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 animate-slide-up">
            <p className="text-lg text-ink-secondary mb-2 font-medium">
              Hi, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
              <span className="font-display text-ink">Giri </span>
              <span className="font-serif italic text-ink">Babu</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary font-medium mb-6">
              Software Engineer & Full-Stack Developer
            </p>

            <p className="text-base text-ink-muted leading-relaxed max-w-lg mb-8">
              I build digital products that solve real problems and create
              meaningful impact. From idea to deployment, I turn complex
              challenges into simple, beautiful solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  inline-flex items-center gap-3
                  bg-primary text-white
                  px-7 py-3.5 rounded-full
                  font-semibold text-base
                  hover:bg-primary-dark
                  transition-all duration-300
                  hover:-translate-y-0.5
                  shadow-md hover:shadow-lg
                "
              >
                View My Work
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="/Giri-Babu-Resume.pdf"
                className="
                  inline-flex items-center gap-3
                  bg-white text-ink
                  px-7 py-3.5 rounded-full
                  font-semibold text-base
                  border-2 border-gray-200
                  hover:border-primary hover:text-primary
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                Download CV
                <FaArrowDown className="text-sm" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-primary/20 rounded-full hidden lg:block" />
            <div className="absolute top-10 right-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-float hidden lg:block" />
            <div className="absolute -bottom-4 left-10 w-8 h-8 border-2 border-primary/30 rounded-full hidden lg:block" />

            <div className="relative max-w-md lg:max-w-lg w-full">
              <img
                src="https://giribojanapu.sirv.com/Portfolio%20images/Giri-Portfolio-Images/hero%20page.png"
                alt="Giri Babu - Full Stack Developer"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
