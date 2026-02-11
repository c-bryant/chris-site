import { Link } from 'react-router-dom'

type Props = {
  imgSrc: string
  alt?: string
  title: string
  description: string
  href?: string
}

const ProjectCard = ({
  imgSrc,
  alt = '',
  title,
  description,
  href = '#',
}: Props) => {
  return (
    <article className="project-card">
      <img src={imgSrc} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="btn ghost" to={href}>
        View
      </Link>
    </article>
  )
}

export default ProjectCard
