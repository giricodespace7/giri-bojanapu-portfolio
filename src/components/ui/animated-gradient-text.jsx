import { cn } from "../../lib/utils";

export function AnimatedGradientText({ children, className }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-transparent animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
