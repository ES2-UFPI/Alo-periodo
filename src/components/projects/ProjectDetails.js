import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  
  const { project } = props;
  
  if(project) {
    return (
      <div className="container section project-details">
      <div className="card z-depth-3">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action blue-grey-text text-darken-3">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>20 September, 20:30hr</div>
        </div>
      </div>
    </div>
    )
  
  } else {
    return (
      <div className="container center">
        <p>Loading project ...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
