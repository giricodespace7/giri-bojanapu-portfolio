import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { experience } from '../../data/experience.js';

const iconMap = {
  0: FaLaptopCode,
  1: FaCode,
  2: FaBriefcase,
};

function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      {/* ── Experience Card ── */}
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {experience.map((job, idx) => {
              const Icon = iconMap[idx] || FaBriefcase;
              return (
                <div key={job.company} className="relative group">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="
                        w-14 h-14 rounded-2xl
                        bg-primary/20 border-2 border-primary/40
                        flex items-center justify-center
                        group-hover:bg-primary group-hover:border-primary
                        transition-all duration-300
                      "
                    >
                      <Icon className="text-primary group-hover:text-white transition-colors text-lg" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="
                      mt-0 md:mt-12 p-6 rounded-2xl
                      bg-white/10 border border-white/10
                      hover:shadow-[0_4px_20px_rgba(124,58,237,0.2)] hover:border-primary/30
                      transition-all duration-300
                      text-center
                    "
                  >
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full mb-3">
                      {job.date}
                    </span>

                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {job.role}
                    </h3>

                    <p className="text-sm font-medium text-primary-light mb-3">
                      {job.company}
                    </p>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {job.responsibilities[0]}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Placeholder for more experience if only 1 entry */}
            {experience.length < 3 &&
              Array.from({ length: 3 - experience.length }).map((_, i) => (
                <div key={`placeholder-${i}`} className="relative group">
                  <div className="hidden md:flex absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border-2 border-white/10 flex items-center justify-center">
                      <FaBriefcase className="text-gray-500 text-lg" />
                    </div>
                  </div>

                  <div className="mt-0 md:mt-12 p-6 rounded-2xl bg-white/5 border border-dashed border-white/15 text-center">
                    <span className="text-sm text-gray-500 italic">
                      More to come...
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
