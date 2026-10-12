import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { experience } from '../../data/experience.js';

const iconMap = {
  0: FaLaptopCode,
  1: FaCode,
  2: FaBriefcase,
};

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline connector line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

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
                      bg-primary-light border-2 border-primary/30
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
                    bg-white border border-gray-100
                    hover:shadow-card-hover hover:border-primary/20
                    transition-all duration-300
                    text-center
                  "
                >
                  <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                    {job.date}
                  </span>

                  <h3 className="font-display text-lg font-bold text-ink mb-1">
                    {job.role}
                  </h3>

                  <p className="text-sm font-medium text-primary mb-3">
                    {job.company}
                  </p>

                  <p className="text-sm text-ink-muted leading-relaxed">
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
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border-2 border-gray-200 flex items-center justify-center">
                    <FaBriefcase className="text-ink-light text-lg" />
                  </div>
                </div>

                <div className="mt-0 md:mt-12 p-6 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-center">
                  <span className="text-sm text-ink-light italic">
                    More to come...
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
