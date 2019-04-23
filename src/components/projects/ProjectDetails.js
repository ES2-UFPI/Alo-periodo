import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Document - { id }</span>
          <p>Tarefa tal tal tal... Professor tal tal tal</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by MTB</div>
          <div>20 September, 20:30hr</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
