import { cn } from "@/lib/utils";

export const Component = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen w-full bg-[#00140e] text-ink relative", className)}>
      {/* Emerald Orb Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#00120d",
          backgroundImage: `
            linear-gradient(to right, rgba(52, 211, 153, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 211, 153, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 18% 22%, rgba(0, 245, 145, 0.5) 0%, rgba(16, 185, 129, 0.28) 28%, transparent 60%),
            radial-gradient(circle at 45% 28%, rgba(5, 150, 105, 0.35) 0%, rgba(4, 120, 87, 0.15) 35%, transparent 65%),
            radial-gradient(ellipse at 35% 25%, #024734 0%, #013124 38%, #001f16 68%, #00100c 100%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export const GridBackground = Component;
export default Component;
