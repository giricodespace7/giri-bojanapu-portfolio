import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function Text3DFlip({
  children,
  className,
  textClassName,
  flipTextClassName,
  rotateDirection = "top",
  staggerDuration = 0.03,
  staggerFrom = "first",
  transition = { type: "spring", damping: 25, stiffness: 160 },
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const letters = children.split("");

  const getRotationAxis = () => {
    switch (rotateDirection) {
      case "top":
      case "bottom":
        return "rotateX";
      case "left":
      case "right":
        return "rotateY";
      default:
        return "rotateX";
    }
  };

  const getRotationAngles = () => {
    switch (rotateDirection) {
      case "top":
        return [0, 90];
      case "bottom":
        return [0, -90];
      case "left":
        return [0, 90];
      case "right":
        return [0, -90];
      default:
        return [0, 90];
    }
  };

  const axis = getRotationAxis();
  const [initialAngle, targetAngle] = getRotationAngles();

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative flex cursor-pointer overflow-hidden py-1 font-sans font-bold",
        className,
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <span className="sr-only">{children}</span>
      <div className="flex" aria-hidden="true">
        {letters.map((letter, index) => {
          let delay = index * staggerDuration;
          if (staggerFrom === "last") {
            delay = (letters.length - 1 - index) * staggerDuration;
          } else if (staggerFrom === "center") {
            const center = Math.floor(letters.length / 2);
            delay = Math.abs(center - index) * staggerDuration;
          }

          return (
            <span
              key={index}
              className="relative inline-block whitespace-pre"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <motion.span
                className={cn("inline-block", textClassName)}
                animate={{
                  [axis]: isFlipped ? targetAngle : initialAngle,
                  opacity: isFlipped ? 0 : 1,
                }}
                transition={{ ...transition, delay }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>

              {/* Back/Flipped Face */}
              <motion.span
                className={cn(
                  "absolute inset-0 inline-block",
                  flipTextClassName,
                )}
                animate={{
                  [axis]: isFlipped
                    ? 0
                    : rotateDirection === "top" || rotateDirection === "left"
                      ? -90
                      : 90,
                  opacity: isFlipped ? 1 : 0,
                }}
                transition={{ ...transition, delay }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
