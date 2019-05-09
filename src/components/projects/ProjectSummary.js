import React from 'react'
import moment from 'moment' // biblioteca para trabalhar com datas no JS: https://momentjs.com/

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-3 project-summary">
      <div className="card-content blue-grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by { project.authorFirstName } { project.authorLastName }</p>
        <p className="blue-grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
      </div>
    </div>
  )
}

export default ProjectSummary