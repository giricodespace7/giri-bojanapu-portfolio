import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { hsl } from '@/data/projects'

const ProjectCard = forwardRef(
  ({ className, project, onClick, ...props }, ref) => {
    const { imageUrl, name, technologies, description } = project

    return (
      <div
        ref={ref}
        className={cn('group w-full h-full', className)}
        {...props}
      >
        <button
          type="button"
          onClick={onClick}
          className="relative block w-full h-full rounded-2xl overflow-hidden text-left
                     transition-all duration-500 ease-in-out cursor-pointer
                     group-hover:scale-[1.03]"
          style={{
            boxShadow: `0 0 40px -15px ${hsl(project, 0.5)}`,
          }}
          aria-label={`View details for ${name}`}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center
                       transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${hsl(project, 0.95)}, ${hsl(project, 0.65)} 35%, transparent 65%)`,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              {name}
            </h3>
            <p className="text-sm text-white/70 mt-1.5 leading-relaxed"
               style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium
                             bg-white/10 backdrop-blur-sm text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Explore Button */}
            <div
              className="mt-6 flex items-center justify-between rounded-lg px-4 py-3
                         backdrop-blur-md border transition-all duration-300"
              style={{
                backgroundColor: hsl(project, 0.2),
                borderColor: hsl(project, 0.3),
              }}
            >
              <span className="text-sm font-semibold tracking-wide">
                View Project
              </span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </button>
      </div>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
