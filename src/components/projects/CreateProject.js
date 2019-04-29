import React, { Component } from 'react'
import axios, { post } from 'axios';
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
  }

// New

constructor(props) {
  super(props);
  this.state ={
    file:null
  }
  this.onFormSubmit = this.onFormSubmit.bind(this)
  this.onChange = this.onChange.bind(this)
  this.fileUpload = this.fileUpload.bind(this)
}
onFormSubmit(e){
  e.preventDefault() // Stop form submit
  this.fileUpload(this.state.file).then((response)=>{
    console.log(response.data);
  })
}
onChange(e) {
  this.setState({file:e.target.files[0]})
}
fileUpload(file){
  const url = 'http://example.com/file-upload';
  const formData = new FormData();
  formData.append('file',file)
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  return  post(url, formData,config)
}

// End New

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />
    // não permite acessar a página de criação de projeto se não estiver Logado

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="blue-grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>

          <div className="file-field">
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
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