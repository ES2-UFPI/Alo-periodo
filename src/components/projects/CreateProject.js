import React, { Component } from 'react'

// para controle com o banco de dados... connect e projectAction.js
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

// Responsável pela criação do Documento, ou seja, um Projeto que irá conter:
// Titulo (title) e Conteúdo (content)

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state) // dispara com os dados do Projeto (state)
    }

    render() {
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create File</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn gray lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    // disparada pelo handleSubmit() acima
    // realizar um dispatcher com a função de criação de projeto
    return {
        createProject: (project) => dispatch(createProject(project))
        // dispara para o projectActions.js
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)

