// Adapted from Unlumen UI Orbiting Skills by Léo Wicki. MIT license.
// Source: https://ui.unlumen.com/docs/ui/unlumen/orbiting-skills

import * as React from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A single orbiting badge that rotates around the center.
 */
function OrbitBadge({ item, index, total, radius, duration, size = "md" }) {
  const startAngle = (360 / total) * index;
  const isSm = size === "sm";

  return (
    <motion.div
      className="absolute"
      style={{ width: 0, height: 0 }}
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + 360 }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      <motion.div
        className="absolute"
        style={{ y: -radius }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          type: "spring",
          bounce: 0.45,
        }}
      >
        {/* Counter-rotate so the badge stays upright */}
        <motion.div
          className={cn(
            "flex flex-col items-center gap-1 whitespace-nowrap rounded-xl border bg-white shadow-sm",
            isSm ? "px-2.5 py-1.5 border-gray-100" : "px-3 py-2 border-gray-200"
          )}
          style={{ x: "-50%", y: "-50%" }}
          initial={{ rotate: -startAngle }}
          animate={{ rotate: -startAngle - 360 }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {item.icon && (
            <span className={cn("leading-none flex items-center justify-center", isSm ? "text-sm" : "text-base")}>
              {item.icon}
            </span>
          )}
          <span
            className={cn(
              "font-medium leading-none text-ink-secondary",
              isSm ? "text-[9px]" : "text-[11px]"
            )}
          >
            {item.label}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/**
 * SVG ring that shows the orbit path.
 */
function OrbitRing({ radius }) {
  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: -radius,
        top: -radius,
      }}
    >
      <circle
        className="stroke-primary/10"
        strokeWidth={1}
        cx={radius}
        cy={radius}
        r={radius - 0.5}
        fill="none"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

/**
 * OrbitingSkills – renders skill badges orbiting around a center element.
 *
 * @param {object[]} items - Array of { label, icon } objects
 * @param {number} radius - Orbit radius in px (default 110)
 * @param {number} duration - Seconds per full rotation (default 20)
 * @param {boolean} showPath - Show the orbit ring (default true)
 * @param {React.ReactNode} children - Center content
 * @param {string} className - Additional wrapper class
 */
export function OrbitingSkills({
  items,
  radius = 110,
  duration = 20,
  showPath = true,
  children,
  className,
}) {
  const wrapperRef = React.useRef(null);
  const isInView = useInView(wrapperRef, {
    once: true,
    margin: "0px 0px -60px 0px",
  });

  return (
    <div
      ref={wrapperRef}
      className={cn("relative", className)}
      style={{ minHeight: radius * 2 + 80 }}
    >
      {/* Center content — placed at exact center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {children}
      </div>

      {/* Orbit ring + badges — also anchored at exact center */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute"
          style={{ left: "50%", top: "50%" }}
        >
          {/* Animated ring */}
          {showPath && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <OrbitRing radius={radius} />
            </motion.div>
          )}

          {/* Badges */}
          {isInView &&
            items.map((item, i) => (
              <OrbitBadge
                key={item.label}
                item={item}
                index={i}
                total={items.length}
                radius={radius}
                duration={duration}
                size="sm"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OrbitingSkills;
