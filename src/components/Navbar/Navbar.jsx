"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef({});

  // ── Move the tubelight indicator under the active item ──
  const updateIndicator = useCallback(() => {
    const el = itemRefs.current[active];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    }
  }, [active]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  // ── Scroll-spy with special handling for the last section (Contact) ──
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If user is near the bottom of the page, activate the last nav item
      if (scrollY + windowHeight >= docHeight - 60) {
        setActive("Contact");
        return;
      }

      // Otherwise, iterate sections bottom-up and pick the first one past the trigger line
      const offset = 150;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset) {
            setActive(navItems[i].name);
            return;
          }
        }
      }

      setActive("Home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (name, href) => {
    setActive(name);
    setMobileOpen(false);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogoClick = () => {
    setActive("Home");
    setMobileOpen(false);
    const home = document.querySelector("#home");
    if (home) home.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ═══════════════════════════════
          DESKTOP NAVBAR — tubelight style
      ════════════════════════════════ */}
      <header className="fixed left-0 top-0 z-[100] w-full pointer-events-none">
        <div className="mx-auto max-w-[900px] px-4 pt-5">
          <nav
            ref={navRef}
            className="
              pointer-events-auto
              hidden md:flex
              h-[56px]
              items-center
              justify-center
              rounded-full
              border border-gray-200
              bg-white/80
              px-2
              backdrop-blur-xl
              shadow-[0_4px_24px_rgba(0,0,0,0.06)]
              relative
            "
          >
            {/* ── TUBELIGHT GLOW (top edge) ── */}
            <span
              className="
                absolute -top-px h-[2px] rounded-full
                bg-purple-500 shadow-[0_0_12px_3px_rgba(124,58,237,0.5)]
                transition-all duration-300 ease-out
              "
              style={{
                left: indicatorStyle.left ?? 0,
                width: indicatorStyle.width ?? 0,
              }}
            />

            {/* ── NAVIGATION ITEMS ── */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.name;
                return (
                  <button
                    key={item.name}
                    ref={(el) => (itemRefs.current[item.name] = el)}
                    type="button"
                    onClick={() => handleNavigation(item.name, item.href)}
                    className={`
                      relative
                      px-4 py-2
                      text-[13px]
                      font-medium
                      rounded-full
                      transition-all duration-200
                      ${
                        isActive
                          ? "text-purple-600 bg-purple-50"
                          : "text-gray-500 hover:text-gray-900"
                      }
                    `}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════
          MOBILE NAVBAR
      ════════════════════════════════ */}
      <header className="fixed left-0 top-0 z-[100] w-full md:hidden">
        <div className="px-4 pt-4">
          <nav
            className="
              flex h-[56px]
              items-center justify-between
              rounded-full
              border border-gray-200
              bg-white/80
              px-5
              shadow-[0_4px_24px_rgba(0,0,0,0.06)]
              backdrop-blur-xl
            "
          >
            {/* MOBILE LOGO */}
            <button
              type="button"
              onClick={handleLogoClick}
              className="text-[15px] font-semibold tracking-[-0.2px] text-gray-900"
            >
              GB<span className="text-purple-500">.</span>
            </button>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                text-gray-700
                transition-colors
                hover:bg-gray-100
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* MOBILE MENU DROPDOWN */}
          <div
            className={`
              mt-2
              overflow-hidden
              rounded-2xl
              border border-gray-200
              bg-white/95
              shadow-[0_16px_48px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
              transition-all duration-300
              ${
                mobileOpen
                  ? "max-h-[500px] opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
              }
            `}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = active === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigation(item.name, item.href)}
                    className={`
                      relative flex items-center
                      rounded-xl px-4 py-3
                      text-left text-sm font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-purple-50 text-purple-600"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute right-4 h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(124,58,237,0.6)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
