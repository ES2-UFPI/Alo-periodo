import React, { Component } from 'react'
import { post } from 'axios';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import { storage } from '../../config/fbConfig'
 
class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    file: null,
    url: '',
    progress: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleUpChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
    
    this.props.history.push('/'); // Ao criar o Projeto, direciona o Usuario para a pagina Home
  }

  // ****************************************************************
  // New
  state = { selectedFile: null, loaded: 0, }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`files/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('files').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });
}
// End New
// *********************************************************************

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
            <progress value={this.state.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleUpChange}/>
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
            <img src={ this.state.url } alt="..."/>
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