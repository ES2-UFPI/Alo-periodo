import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { redefinePassword } from '../../store/actions/authActions'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { white } from 'material-ui/styles/colors';

class SignedInLinks extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {  // Abre o menu quando clicado
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => { // Fecha o menu apos alguma opcao ter sido selecionada
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const props = this.props; // Pega as propriedades da pag

    return(
      <div>
        <ul className="right">
          <li><NavLink to='/create'>New File</NavLink></li>
          <li>
            <div className="btn btn-floating green darken-3">{ props.profile.initials }</div>
          </li>
          <li>
          <div>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
              <i class="material-icons" style={{ fontSize: 22, color: white }}>settings</i>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={ this.handleClose }>Profile</MenuItem>
                <MenuItem onClick={ props.redefinePassword }>Change Password</MenuItem>
                <MenuItem onClick={ props.signOut }>Logout</MenuItem>
              </Menu>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut()),
      redefinePassword: () => dispatch(redefinePassword())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)