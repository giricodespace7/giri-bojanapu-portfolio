import { experience } from '../../data/experience.js'

function Experience() {
  return (
    <section id="experience" className="section">
      <span className="section-tag">// experience</span>
      <h2 className="section-title">Experience</h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="rounded-lg border border-border bg-surface p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-xl text-ink">{job.role}</h3>
              <span className="font-mono text-sm text-gold">{job.date}</span>
            </div>
            <p className="text-muted text-sm mb-5">
              {job.company} · {job.location}
            </p>

            <ul className="space-y-2 mb-5">
              {job.responsibilities.map((item) => (
                <li key={item} className="text-muted text-sm leading-relaxed pl-4 relative">
                  <span className="absolute left-0 text-gold">–</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-surface-2 border border-border text-xs font-mono text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
