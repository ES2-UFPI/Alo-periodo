import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {  // Links mostrados ao usuario logado
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New File</NavLink></li>
        <li><a onClick={ props.signOut }>Log Out</a></li>
        <li><button id='btn-logo' className="btn btn-floating green darken-2">
          { props.profile.initials }
        </button></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)