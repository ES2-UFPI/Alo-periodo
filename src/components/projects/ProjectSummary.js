import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-3 project-summary">
      <div className="card-content blue-grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by MTB</p>
        <p className="blue-grey-text">20 September, 20:30hr</p>
      </div>
    </div>
  )
}

export default ProjectSummary

// Pegar a parte implementada em Project Details para poder pegar o autor certo