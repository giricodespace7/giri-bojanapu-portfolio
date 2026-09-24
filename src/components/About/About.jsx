function About() {
  return (
    <section id="about" className="section">
      <span className="section-tag">// about</span>
      <h2 className="section-title">About Me</h2>

      <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-start">
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            I'm an entry-level Full Stack Developer with internship experience
            in MERN stack development, building responsive web applications
            using React.js, JavaScript, Node.js, Express.js and MongoDB.
          </p>
          <p>
            I'm familiar with developing REST APIs, handling dynamic data, and
            building responsive user interfaces. I'm currently looking for an
            entry-level Frontend, React.js, or Full Stack Developer role to
            apply my skills and keep growing as a developer.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <h3 className="font-display text-lg text-ink mb-4">Education</h3>
          <div className="space-y-1">
            <p className="text-ink text-sm font-medium">
              B.Tech, Electronics and Communication Engineering
            </p>
            <p className="text-muted text-sm">
              Sri Venkateswara College of Engineering & Technology, Chittoor
            </p>
            <p className="text-muted text-sm font-mono">2017 – 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
