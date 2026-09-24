import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects.js'

function ProjectCard({ project }) {
  const hasGithub = !project.github.startsWith('#')
  const hasLive = !project.liveDemo.startsWith('#')

  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden flex flex-col hover:border-gold/50 transition-colors">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-muted truncate">
          {project.name.toLowerCase().replace(/\s+/g, '-')}.jsx
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg text-ink mb-2">{project.name}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-5">
          {project.features.map((feature) => (
            <li key={feature} className="text-muted text-sm pl-4 relative leading-relaxed">
              <span className="absolute left-0 text-gold">–</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-surface-2 border border-border text-xs font-mono text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-ink hover:border-gold transition"
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <span className="font-mono text-xs text-muted self-center" title="Add GitHub URL in src/data/projects.js">
              # Add GitHub URL
            </span>
          )}
          {hasLive && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gold text-bg text-sm font-medium hover:brightness-110 transition"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <span className="section-tag">// projects</span>
      <h2 className="section-title">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
