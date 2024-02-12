import React from "react";
import "../styles/projects.css";
import { FaGithub } from "react-icons/fa";
import { Projects } from "../data/constants.jsx";
function ProjectsSection() {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-section-title">
        <h1>Projects</h1>
        <p>These are some of the projects I am currently working on.</p>
      </div>
      <div className="projects-section-list">
      {Projects.map((project) => (
          <div className="project" key={project.name} style={{boxShadow: `0px 0px 20px 0px ${project.backgroundColor}`,}}>
            <div className="project-image">
              <img src={require(`../images/project-${project.image}.jpeg`)}  alt={project.name} />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </div>
              <div className="project-links">
                {project.github !== "" ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                ) : (
                  <></>
                )}
                {project.link !== "" ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProjectsSection;