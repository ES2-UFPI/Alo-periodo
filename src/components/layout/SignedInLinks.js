import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const SignedInLinks = (props) => {  // Links mostrados ao usuario logado

  const { project } = props;

  const user_logo = project.authorFirstName[0] + project.authorLastName[0]  // Praticamente isso que deve ser feito

  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New File</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><button id='btn-user-logo' className="btn btn-floating gray darken-3">{ user_logo }</button></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
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
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection: 'projects' }
    ])
  )(SignedInLinks)