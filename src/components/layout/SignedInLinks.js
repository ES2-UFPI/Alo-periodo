import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {  // Links mostrados ao usuario logado
  console.log("Fon -> " + props.firstName);
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New File</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><button id='btn-user-logo' className="btn btn-floating gray darken-3">HSA</button></li>
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
