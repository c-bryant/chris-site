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
      <a className="btn ghost" href={href}>
        View
      </a>
    </article>
  )
}

export default ProjectCard
