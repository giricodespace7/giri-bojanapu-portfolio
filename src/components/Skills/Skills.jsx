import { skillGroups } from '../../data/skills.js'

function Skills() {
  return (
    <section id="skills" className="section">
      <span className="section-tag">// skills</span>
      <h2 className="section-title">Tech Stack</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-6 hover:border-gold/50 transition-colors"
          >
            <h3 className="font-mono text-sm text-gold mb-4">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-surface-2 border border-border text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
