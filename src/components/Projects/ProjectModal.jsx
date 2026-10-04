import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Check } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { hsl } from '@/data/projects'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 28, stiffness: 350 },
  },
  exit: { opacity: 0, scale: 0.92, y: 30, transition: { duration: 0.2 } },
}

function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!project) return null

  const hasGithub = !project.github.startsWith('#')
  const hasLive = !project.liveDemo.startsWith('#')

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border
                       bg-surface shadow-2xl"
            style={{
              boxShadow: `0 0 80px -20px ${hsl(project, 0.3)}`,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Hero Image */}
            <div className="relative w-full overflow-hidden rounded-t-2xl" style={{ aspectRatio: '16/9' }}>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${hsl(project, 0.85)}, transparent 60%)`,
                }}
              />
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10
                           text-white/80 hover:text-white hover:bg-black/60 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2
                  id="project-modal-title"
                  className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight"
                >
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div>
                <h3 className="font-display text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium
                                 border border-border bg-surface-2 text-muted
                                 hover:border-gold/40 hover:text-ink transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-display text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: hsl(project, 0.15),
                          color: hsl(project, 1),
                        }}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border
                               text-sm font-medium text-ink
                               hover:border-white/30 hover:bg-surface-2 transition-all duration-200"
                  >
                    <FaGithub className="h-4 w-4" />
                    View Source
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50
                               text-sm font-medium text-muted cursor-default opacity-60"
                    title="GitHub URL coming soon"
                  >
                    <FaGithub className="h-4 w-4" />
                    Source Coming Soon
                  </span>
                )}

                {hasLive ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                               text-sm font-medium text-bg
                               transition-all duration-200 hover:brightness-110"
                    style={{
                      background: `linear-gradient(135deg, ${hsl(project, 1)}, ${hsl(project, 0.8)})`,
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50
                               text-sm font-medium text-muted cursor-default opacity-60"
                    title="Live demo coming soon"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
