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
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-95" />
          <img
            src="https://giribojanapu.sirv.com/Portfolio%20images/Giri-Portfolio-Images/about%20image.png"
            alt="About Giri Babu"
            className="relative rounded-2xl w-full max-w-md object-contain drop-shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
            About Me
          </h2>

          <p className="text-ink-muted leading-relaxed mb-8 text-base">
            Passionate about creating clean, efficient and scalable solutions
            with great user experiences. I love working with technologies that
            push the web forward. I'm an entry-level Full Stack Developer with
            internship experience in MERN stack development, building responsive
            web applications using React.js, JavaScript, Node.js, Express.js
            and MongoDB.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {traits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="
                  flex items-center gap-3 
                  px-4 py-3 rounded-xl
                  bg-surface-2 border border-gray-100
                  hover:border-primary/30 hover:bg-primary-50
                  transition-all duration-200
                  group
                "
              >
                <Icon className="text-primary text-base flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-ink-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
