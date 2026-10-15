import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks.js';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const hasLinkedin = !socialLinks.linkedin.startsWith('#');
  const hasGithub = !socialLinks.github.startsWith('#');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setStatus('submitted');
  };

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      {/* ── Contact Card ── */}
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
          overflow-hidden
        "
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something
              <br />
              meaningful{' '}
              <span className="font-serif italic text-primary-light">
                together.
              </span>
            </h2>

            <div className="space-y-4 mt-8">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-primary" />
                <span className="text-sm">{socialLinks.email}</span>
              </a>

              {socialLinks.phone && (
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-primary" />
                  <span className="text-sm">{socialLinks.phone}</span>
                </div>
              )}

              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          {/* Right - Let's Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Let's Connect
            </h3>

            <div className="flex gap-3">
              {hasGithub && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 rounded-full
                    bg-white/10 border border-white/10
                    flex items-center justify-center
                    text-gray-300 hover:bg-primary hover:text-white hover:border-primary
                    transition-all duration-200
                  "
                >
                  <FaGithub size={18} />
                </a>
              )}

              {hasLinkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 rounded-full
                    bg-white/10 border border-white/10
                    flex items-center justify-center
                    text-gray-300 hover:bg-primary hover:text-white hover:border-primary
                    transition-all duration-200
                  "
                >
                  <FaLinkedin size={18} />
                </a>
              )}

              <a
                href={`mailto:${socialLinks.email}`}
                className="
                  w-11 h-11 rounded-full
                  bg-white/10 border border-white/10
                  flex items-center justify-center
                  text-gray-300 hover:bg-primary hover:text-white hover:border-primary
                  transition-all duration-200
                "
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
