import { useState } from 'react'
import { projects } from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Small delay so the exit animation finishes before clearing data
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="section">
        <span className="section-tag">// projects</span>
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <div key={project.name} className="h-[420px] md:h-[460px]">
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Projects
