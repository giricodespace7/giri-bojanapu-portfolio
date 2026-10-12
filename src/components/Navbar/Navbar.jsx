import { useState, useEffect } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <span className="text-2xl font-bold font-display text-ink">
            GB<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                px-4 py-2 text-sm font-medium rounded-full
                transition-all duration-200
                ${activeSection === link.href.slice(1)
                  ? 'text-primary bg-primary-light'
                  : 'text-ink-secondary hover:text-primary hover:bg-primary-50'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="
            hidden md:inline-flex items-center gap-2
            bg-primary text-white
            px-5 py-2.5 rounded-full
            text-sm font-semibold
            hover:bg-primary-dark
            transition-all duration-200
            shadow-sm hover:shadow-md
          "
        >
          Let's Talk
          <FaArrowRight className="text-xs" />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileOpen ? 'max-h-[400px] border-b border-gray-100' : 'max-h-0'}
          bg-white/95 backdrop-blur-md
        `}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`
                block px-4 py-3 rounded-xl text-sm font-medium
                transition-colors
                ${activeSection === link.href.slice(1)
                  ? 'text-primary bg-primary-light'
                  : 'text-ink-secondary hover:text-primary hover:bg-primary-50'
                }
              `}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="
              block text-center mt-3
              bg-primary text-white
              px-5 py-3 rounded-full
              text-sm font-semibold
              hover:bg-primary-dark transition-colors
            "
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
