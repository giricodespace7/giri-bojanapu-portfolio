import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects.js';

function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      {/* ── Projects Card ── */}
      <div
        className="
          rounded-3xl
          bg-white
          shadow-[0_8px_50px_rgba(124,58,237,0.18),0_2px_20px_rgba(124,58,237,0.10)]
          border border-primary/20
          animate-float-card
          hover:shadow-[0_12px_60px_rgba(124,58,237,0.25),0_4px_24px_rgba(124,58,237,0.15)]
          transition-shadow duration-500
          px-6 sm:px-10 md:px-14 lg:px-16
          py-16 md:py-20
        "
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Selected Work
          </h2>
          <a
            href="#projects"
            className="
              hidden sm:inline-flex items-center gap-2
              text-sm font-semibold text-primary
              hover:text-primary-dark transition-colors
            "
          >
            View All Projects
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="
                group rounded-2xl border border-gray-100
                bg-surface-2 overflow-hidden
                hover:shadow-card-hover hover:border-primary/20
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-light to-purple-50 overflow-hidden">
                {project.imageUrl && !project.imageUrl.includes('placeholder') ? (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-30">📱</div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {project.liveDemo && !project.liveDemo.startsWith('#') && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-light hover:text-primary transition-colors mt-1"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-ink-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-xs font-medium text-ink-secondary
                        px-2.5 py-1 rounded-full
                        bg-white border border-gray-100
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
