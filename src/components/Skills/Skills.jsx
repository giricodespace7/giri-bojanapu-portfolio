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
import { FaEllipsisH } from 'react-icons/fa';

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

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
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
                bg-surface-2 border border-gray-100
                group-hover:border-primary/30
                group-hover:shadow-card-hover
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
            <span className="text-xs font-medium text-ink-secondary text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
