import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects.js';

function Projects() {
  return (
    <section id="projects" className="section">
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
              bg-white overflow-hidden
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
                      bg-surface-2 border border-gray-100
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
    </section>
  );
}

export default Projects;
