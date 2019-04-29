import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  // se o user logar (autenticado pelo uid) tem acesso ao New File (SignedInLinks)
  // se nao tiver logado, soh aparece SignedOutLinks
  
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <Link to='/' className="brand-logo"><i class="material-icons">work_outline</i>Alô, Período!</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
