import React, { useEffect, useState, useCallback, useRef } from "react"
import { motion, LayoutGroup } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * @typedef {Object} NavItem
 * @property {string} name
 * @property {string} url   – href anchor, e.g. "#home"
 * @property {import("lucide-react").LucideIcon} icon
 */

/**
 * Tubelight-style floating navbar with animated glow indicator.
 *
 * Adapted for a Vite + React SPA:
 *   • uses smooth-scroll anchor navigation (no Next.js Link)
 *   • uses IntersectionObserver to highlight the section in view
 *   • scroll-lock prevents observer jitter during click-initiated scrolls
 */
export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0]?.name)
  const [isMobile, setIsMobile] = useState(false)

  // When true, the IntersectionObserver is silenced so the glow
  // doesn't bounce through intermediate sections during a click-scroll.
  const isScrollingRef = useRef(false)
  const scrollTimerRef = useRef(null)

  // ── Responsive check ────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ── Scroll-spy via IntersectionObserver ──────────────────────
  useEffect(() => {
    const sectionIds = items.map((i) => i.url.replace("#", ""))
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Skip updates while a click-scroll is in progress
          if (isScrollingRef.current) return

          if (entry.isIntersecting) {
            const match = items.find((i) => i.url === `#${id}`)
            if (match) setActiveTab(match.name)
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  // ── Smooth-scroll handler ───────────────────────────────────
  const handleClick = useCallback(
    (e, item) => {
      e.preventDefault()

      // Lock scroll-spy so the observer doesn't fight with us
      isScrollingRef.current = true
      clearTimeout(scrollTimerRef.current)

      // Set the target tab immediately — single jump, no bouncing
      setActiveTab(item.name)

      const el = document.querySelector(item.url)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }

      // Unlock scroll-spy after the smooth scroll is likely finished.
      // 800ms covers most smooth-scroll durations.
      scrollTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 800)
    },
    [],
  )

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearTimeout(scrollTimerRef.current)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:mb-0 sm:pt-6",
        className,
      )}
    >
      <div
        className="
          flex items-center gap-1 sm:gap-2
          border border-white/[0.08]
          bg-black/60
          backdrop-blur-xl
          py-1 px-1
          rounded-full
          shadow-[0_8px_32px_rgba(0,0,0,0.45)]
        "
      >
        <LayoutGroup>
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleClick(e, item)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200",
                  "text-neutral-400 hover:text-white",
                  isActive && "text-white",
                )}
              >
                {/* Label on desktop, icon on mobile */}
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                {/* Animated tubelight glow */}
                {isActive && (
                  <motion.div
                    layoutId="tubelight"
                    className="absolute inset-0 w-full rounded-full -z-10 bg-white/[0.06]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 0.8,
                    }}
                  >
                    {/* Top glow bar */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-400 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-emerald-400/25 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8  h-6 bg-emerald-400/25 rounded-full blur-md -top-1" />
                      <div className="absolute w-4  h-4 bg-emerald-400/30 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </LayoutGroup>
      </div>
    </div>
  )
}
