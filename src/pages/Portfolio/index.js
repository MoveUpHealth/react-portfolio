import React from "react"
import Project from "../../components/Project"
import projects from "../../project.json"
import "./style.css"

function Portfolio() {
    const projectState = projects

    return (
        <main className="wrapper" id="portfolio">

        <h2>My Portfolio</h2>
        <hr className="line" />
    
    <div className="container" style={{minWidth: "95%"}}>
        {/* <!-- Row One --> */}
        <div className="row">
        {projectState.map((project) => (
          <Project
          key={project.id}
          id={project.id}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          githubLink={project.githubLink}
          githubUrl={project.githubUrl}
          deployedLink={project.deployedLink}
          deployedUrl={project.deployedUrl}
          alt={project.alt}
          description={project.description}
          />
          ))}
        </div>
    </div>
    
    </main>
    )
}

export default Portfolio