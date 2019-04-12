import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

// conector do Redux
import { connect } from 'react-redux'

// integração com o Firebase
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

// Obter o estado atual da Store-Redux
// retornar um objeto de dados que esse componente precisa
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
    // os dados dos projetos serão retornados
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects' } // sincronização com os dados do banco
    ])
  )(Dashboard)