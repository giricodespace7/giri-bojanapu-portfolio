import {
  FaLightbulb,
  FaSearchPlus,
  FaCode,
  FaBookOpen,
  FaUsers,
  FaBrain,
} from 'react-icons/fa';

const traits = [
  { icon: FaLightbulb, label: 'Problem Solver' },
  { icon: FaSearchPlus, label: 'Detail Oriented' },
  { icon: FaCode, label: 'Clean Code Advocate' },
  { icon: FaBookOpen, label: 'Always Learning' },
  { icon: FaUsers, label: 'Team Player' },
  { icon: FaBrain, label: 'Curious Mind' },
];

function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      {/* ── About Card ── */}
      <div
        className="
          relative overflow-hidden
          rounded-3xl
          min-h-[85vh]
          flex items-center
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          border border-gray-100
        "
      >
        {/* Card background image — clearly visible */}
        <img
          src="https://giribojanapu.sirv.com/Portfolio%20images/Giri-Portfolio-Images/about%20image.png"
          alt="About Giri Babu"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Content on the right */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 py-16">
          <div className="flex justify-end">
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
                // about me
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-5">
                About Me
              </h2>

              <p className="text-base text-ink-muted leading-relaxed mb-8">
                Passionate about creating clean, efficient and scalable solutions
                with great user experiences. I love working with technologies that
                push the web forward. I'm an entry-level Full Stack Developer with
                internship experience in MERN stack development, building responsive
                web applications using React.js, JavaScript, Node.js, Express.js
                and MongoDB.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {traits.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="
                      flex items-center gap-3 
                      px-4 py-3 rounded-xl
                      bg-white/60 border border-white/50
                      hover:border-primary/30 hover:bg-primary-50/80
                      transition-all duration-200
                      group cursor-default
                    "
                  >
                    <Icon className="text-primary text-base flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-ink-secondary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
