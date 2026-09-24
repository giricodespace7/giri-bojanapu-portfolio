import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { socialLinks } from '../../data/socialLinks.js'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const hasLinkedin = !socialLinks.linkedin.startsWith('#')
  const hasGithub = !socialLinks.github.startsWith('#')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend/email service is configured yet.
    // Wire this up to your provider of choice (e.g. Formspree, EmailJS, a serverless function).
    console.log('Contact form submitted:', form)
    setStatus('submitted')
  }

  return (
    <section id="contact" className="section">
      <span className="section-tag">// contact</span>
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed">
            I'm open to entry-level Frontend, React.js, or Full Stack Developer
            roles. Feel free to reach out.
          </p>

          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-3 text-slate-200 hover:text-emerald-400 transition font-medium"
          >
            <FaEnvelope /> {socialLinks.email}
          </a>

          {hasLinkedin ? (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-emerald-400 transition font-medium">
              <FaLinkedin /> LinkedIn
            </a>
          ) : (
            <p className="flex items-center gap-3 text-slate-400 font-mono text-sm">
              <FaLinkedin /> # ADD_LINKEDIN_URL
            </p>
          )}

          {hasGithub ? (
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-emerald-400 transition font-medium">
              <FaGithub /> GitHub
            </a>
          ) : (
            <p className="flex items-center gap-3 text-slate-400 font-mono text-sm">
              <FaGithub /> # ADD_GITHUB_URL
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-surface p-6 space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-surface-2 border border-border px-4 py-2.5 text-ink placeholder:text-muted focus:border-gold outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-surface-2 border border-border px-4 py-2.5 text-ink placeholder:text-muted focus:border-gold outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-surface-2 border border-border px-4 py-2.5 text-ink placeholder:text-muted focus:border-gold outline-none resize-none"
              placeholder="Tell me about the opportunity or project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gold text-bg font-medium hover:brightness-110 transition"
          >
            Send Message
          </button>

          {status === 'submitted' && (
            <p role="status" className="text-sm text-muted">
              Form UI captured your message locally — connect an email service in
              Contact.jsx to deliver it.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
