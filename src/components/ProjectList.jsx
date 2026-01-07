function ProjectList({projects}){
    return(
        <div className="projects">
            {projects && projects.map((project, i) => (
            <img key={i} src={project.img}>
                
            </img> 
            ))}
            </div> 
    )
}

export default ProjectList