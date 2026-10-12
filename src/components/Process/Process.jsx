import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaSyncAlt,
} from 'react-icons/fa';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the problem deeply.',
    icon: FaSearch,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Plan and craft simple solutions.',
    icon: FaPencilRuler,
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Write clean code and build features.',
    icon: FaCode,
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'Test thoroughly and launch.',
    icon: FaRocket,
  },
  {
    num: '05',
    title: 'Improve',
    desc: 'Monitor, iterate and improve.',
    icon: FaSyncAlt,
  },
];

function Process() {
  return (
    <section className="section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12">
        My Process
      </h2>

      <div className="relative">
        {/* Connecting dashed line */}
        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-gray-200" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map(({ num, title, desc, icon: Icon }) => (
            <div key={num} className="relative flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div
                className="
                  relative z-10
                  w-16 h-16 rounded-full
                  bg-primary-light border-2 border-primary/20
                  flex items-center justify-center
                  mb-4
                  group-hover:bg-primary group-hover:border-primary
                  transition-all duration-300
                "
              >
                <Icon className="text-primary text-lg group-hover:text-white transition-colors" />
              </div>

              <span className="text-xs font-bold text-primary mb-1">{num}</span>
              <h3 className="text-sm font-bold text-ink mb-1">{title}</h3>
              <p className="text-xs text-ink-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
