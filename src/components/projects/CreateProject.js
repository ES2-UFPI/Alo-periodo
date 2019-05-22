import React, { Component } from 'react'
import { post } from 'axios';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
// import { storage } from '../../config/fbConfig'
// import { func } from 'prop-types';
import firebase from 'firebase'
 
class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    file: null,
    //url: '',
    //progress: 0
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

// -----------------------------------------------------------------------
  handleUpFile = () => {
    // Get elements
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // Lista os aquivos para selecionar
    fileButton.addEventListener('change', function(e) {

      // Get file
      var file = e.target.files[0];

      // Referencia ao Storage
      var storageRef = firebase.storage().ref('files/' + file.name);

      // Upload file
      var task = storageRef.put(file);

      // Atualizar o progresso da barra de upload file
      task.on('state_changed',
        function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          uploader.value = percentage;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log("Upload concluido!");
        }
      );
    });
  }
// -----------------------------------------------------------------------

  render() {
    const { auth } = this.props;

    // const isSelectedFile = this.state.selectedFile ? this.state.selectedFile.name : ""; // Exibe o nome do arquivo a ser upado, caso exista

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
          
          <div>
            <progress value="0" max="100" id="uploader">0%</progress>
            <br/>
            <input type="file" id="fileButton" onChange={this.handleUpFile}/>
            <button onClick={this.handleUpFile}>Upload</button>
            <br/>
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