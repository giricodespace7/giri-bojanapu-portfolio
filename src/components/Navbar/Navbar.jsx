"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (name, href) => {
    setActive(name);
    setMobileOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogoClick = () => {
    setActive("Home");
    setMobileOpen(false);

    const home = document.querySelector("#home");

    if (home) {
      home.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =========================
          DESKTOP NAVBAR
      ========================== */}
      <header className="fixed left-0 top-0 z-[100] w-full">
        <div className="mx-auto max-w-[900px] px-4 pt-5">
          <nav
            className="
              hidden
              h-[68px]
              items-center
              justify-between
              border-b
              border-white/[0.08]
              bg-black/70
              px-6
              backdrop-blur-xl
              md:flex
            "
          >
            {/* LOGO */}
            {/* <button
              type="button"
              onClick={handleLogoClick}
              className="
                shrink-0
                text-[15px]
                font-semibold
                tracking-[-0.2px]
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              Giri Babu
            </button> */}

            {/* NAVIGATION */}
            <div className="flex h-full items-center gap-7">
              {navItems.map((item) => {
                const isActive = active === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigation(item.name, item.href)}
                    className={`
                      relative
                      flex
                      h-full
                      items-center
                      text-[14px]
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {/* ACTIVE UNDERLINE */}
                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-[1px]
                        bg-white
                        transition-all
                        duration-300
                        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex shrink-0 items-center gap-5">
              {/* CONTACT */}
              {/* <button
                type="button"
                onClick={() => handleNavigation("Contact", "#contact")}
                className="
                  text-[14px]
                  font-medium
                  text-white
                  transition-opacity
                  hover:opacity-70
                "
              >
                Contact
              </button> */}

              {/* HIRE ME */}
              {/* <button
                type="button"
                onClick={() => handleNavigation("Contact", "#contact")}
                className="
                  rounded-lg
                  bg-white
                  px-4
                  py-2.5
                  text-[14px]
                  font-semibold
                  text-black
                  transition-all
                  duration-200
                  hover:bg-neutral-200
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                Hire Me
              </button> */}
            </div>
          </nav>
        </div>
      </header>

      {/* =========================
          MOBILE NAVBAR
      ========================== */}
      <header className="fixed left-0 top-0 z-[100] w-full md:hidden">
        <div className="px-4 pt-4">
          <nav
            className="
              flex
              h-[60px]
              items-center
              justify-between
              rounded-xl
              border
              border-white/[0.08]
              bg-black/75
              px-4
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {/* MOBILE LOGO */}
            <button
              type="button"
              onClick={handleLogoClick}
              className="
                text-[15px]
                font-semibold
                tracking-[-0.2px]
                text-white
              "
            >
              Giri Babu
            </button>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-white
                transition-colors
                hover:bg-white/10
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

          {/* MOBILE MENU */}
          <div
            className={`
              mt-2
              overflow-hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-black/90
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-300
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
                      relative
                      flex
                      items-center
                      rounded-lg
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-neutral-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {isActive && (
                      <span className="absolute right-4 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    )}
                  </button>
                );
              })}

              {/* MOBILE CONTACT */}
              {/* <button
                type="button"
                onClick={() => handleNavigation("Contact", "#contact")}
                className="
                  mt-1
                  rounded-lg
                  bg-white
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-black
                  transition-colors
                  hover:bg-neutral-200
                "
              >
                Hire Me
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
