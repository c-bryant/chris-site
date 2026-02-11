import demo1 from '../../assets/demo-1.webp'
import logo from '../../assets/logo.svg'
import ProjectCard from './ProjectCard'

const ProjectCards = () => {
  return (
    <div className="projects-grid">
      <ProjectCard
        imgSrc={demo1}
        alt="project 1"
        title="Project One"
        description="A modern web app showcasing performant UI and scalable architecture."
      />

      <ProjectCard
        imgSrc={logo}
        alt="project 2"
        title="Project Two"
        description="Design system and component library used across multiple products."
      />

      <ProjectCard
        imgSrc={logo}
        alt="project 3"
        title="Project Three"
        description="API-driven platform with realtime updates and great DX for teams."
      />
    </div>
  )
}

export default ProjectCards
