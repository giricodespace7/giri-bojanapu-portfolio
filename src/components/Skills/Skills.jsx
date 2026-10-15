import { useState, useEffect } from 'react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
  SiExpress,
  SiBootstrap,
} from 'react-icons/si';
import { FaEllipsisH, FaCode } from 'react-icons/fa';
import { OrbitingSkills } from '../ui/OrbitingSkills';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Git & GitHub', icon: SiGit, color: '#F05032' },
  { name: 'More', icon: FaEllipsisH, color: '#7C3AED' },
];

// Convert to orbit-compatible format with colored icons
const orbitItems = skills.map(({ name, icon: Icon, color }) => ({
  label: name,
  icon: <Icon size={18} style={{ color }} />,
}));

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setMobile(mq.matches);
    const handler = (e) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

function Skills() {
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      {/* ── Skills Card ── */}
      <div
        className="
          rounded-3xl
          bg-ink
          shadow-[0_8px_50px_rgba(124,58,237,0.18),0_2px_20px_rgba(124,58,237,0.10)]
          border border-primary/20
          animate-float-card
          hover:shadow-[0_12px_60px_rgba(124,58,237,0.25),0_4px_24px_rgba(124,58,237,0.15)]
          transition-shadow duration-500
          px-6 sm:px-10 md:px-14 lg:px-16
          py-16 md:py-20
        "
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Skills & Technologies
        </h2>

        {/* ── Mobile: Orbiting animation ── */}
        {isMobile && (
          <OrbitingSkills
            items={orbitItems}
            radius={120}
            duration={22}
            showPath
            className="mx-auto"
          >
            {/* Center avatar */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-lg border-2 border-white">
              <FaCode className="text-white text-xl" />
            </div>
          </OrbitingSkills>
        )}

        {/* ── Desktop: Grid layout centered ── */}
        {!isMobile && (
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="
                  flex flex-col items-center gap-3
                  w-[100px]
                  group cursor-default
                "
              >
                <div
                  className="
                    w-16 h-16 rounded-2xl
                    flex items-center justify-center
                    bg-white/10 border border-white/10
                    group-hover:border-primary/50
                    group-hover:shadow-[0_4px_20px_rgba(124,58,237,0.3)]
                    transition-all duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <Icon
                    size={28}
                    style={{ color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-gray-300 text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
