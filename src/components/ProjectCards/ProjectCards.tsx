import logo from '../../assets/logo.svg'
import sharkExperienceHomeUI from '../../assets/shark-experience-home-ui.jpg'
import ProjectCard from './ProjectCard'

const ProjectCards = () => {
  return (
    <div className="projects-grid">
      <ProjectCard
        imgSrc={sharkExperienceHomeUI}
        alt="Shark Experience"
        title="Shark Experience"
        description="Premium media platform that delivers connectivity and content to a golfer via a touchscreen device incorporated into a golf cart."
        href="/shark-experience"
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
