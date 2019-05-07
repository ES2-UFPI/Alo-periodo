import React, { Component } from 'react'
import { post } from 'axios';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

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
    // console.log(this.state);
    this.props.createProject(this.state)
    
    this.props.history.push('/'); // Ao criar o Projeto, direciona o Usuario para a pagina Home
  }

  // New
  state = { selectedFile: null, loaded: 0, }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    post('http://example.com/file-upload', data, {  // Falta definir o endpoint que eh especificado no servidor
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    }).then(res => {
        console.log(res.statusText)
      })
  }
// End New

  render() {
    const { auth } = this.props;

    const isSelectedFile = this.state.selectedFile ? this.state.selectedFile.name : ""; // Exibe o nome do arquivo a ser upado, caso exista

    if (!auth.uid) return <Redirect to='/signin' />
    // não permite acessar a página de criação de projeto se não estiver Logado

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="blue-grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field" >
            <input type="text" id='title' onChange={this.handleChange} required/>
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field" >
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required></textarea>
            <label htmlFor="content">Project Content</label>
          </div>

          <div className="file-field">
            <input type="file" onChange={this.handleselectedFile} />
            <div>
              <button onClick={this.handleUpload}>Upload</button>
              <label htmlFor="content"> { isSelectedFile } </label>
            </div>
            <div> {Math.round(this.state.loaded,2) } %</div>
          </div>
          
          <div className="input-field">
            <button className="btn gray darken-3">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)