import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-6">
      {/* ── Hero Card ── */}
      <div
        className="
          relative overflow-hidden
          rounded-3xl
          min-h-[85vh]
          flex items-center
          shadow-[0_8px_50px_rgba(124,58,237,0.18),0_2px_20px_rgba(124,58,237,0.10)]
          border border-primary/20
          animate-float-card
          hover:shadow-[0_12px_60px_rgba(124,58,237,0.25),0_4px_24px_rgba(124,58,237,0.15)]
          transition-shadow duration-500
        "
      >
        {/* Card background image — clearly visible */}
        <img
          src="https://giribojanapu.sirv.com/Portfolio%20images/Giri-Portfolio-Images/hero%20page.png"
          alt="Giri Babu - Full Stack Developer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Content on the left */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 py-16">
          <div className="flex justify-start">
            <div
              className="
                max-w-lg w-full
                bg-white/70 backdrop-blur-xl
                border border-white/40
                rounded-2xl
                px-7 py-8 sm:px-9 sm:py-10
                shadow-[0_4px_30px_rgba(0,0,0,0.06)]
              "
            >
              <p className="font-mono text-sm text-primary mb-3 tracking-wide">
                // hello world
              </p>

              <p className="text-lg text-ink-secondary mb-1 font-medium">
                Hi, I'm
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-3">
                <span className="font-display text-ink">Giri </span>
                <span className="font-serif italic text-ink">Babu</span>
              </h1>

              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold">
                  Software Engineer & Full-Stack Developer
                </span>
              </div>

              <p className="text-base text-ink-muted leading-relaxed mb-8">
                I build digital products that solve real problems and create
                meaningful impact. From idea to deployment, I turn complex
                challenges into simple, beautiful solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="
                    inline-flex items-center gap-2.5
                    bg-primary text-white
                    px-6 py-3 rounded-full
                    font-semibold text-sm
                    hover:bg-primary-dark
                    transition-all duration-300
                    hover:-translate-y-0.5
                    shadow-md hover:shadow-lg
                  "
                >
                  View My Work
                  <FaArrowRight className="text-xs" />
                </a>

                <a
                  href="/Giri-Babu-Resume.pdf"
                  className="
                    inline-flex items-center gap-2.5
                    bg-white text-ink
                    px-6 py-3 rounded-full
                    font-semibold text-sm
                    border border-gray-200
                    hover:border-primary hover:text-primary
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Download CV
                  <FaArrowDown className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
