import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment' // https://momentjs.com/

const ProjectDetails = (props) => {
  
  const { project } = props;
  
  if(project) {
    return (
      <div title = "Details" className="container section project-details">
      <div className="card z-depth-3">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action blue-grey-text text-darken-3">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>{ moment(project.createdAt.toDate()).calendar() }</div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="container center white-text">
        <p>Loading document ...</p>
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