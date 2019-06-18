import React, { Component } from 'react'

class Monitor extends Component {
    render() {
        
        return (
          <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="blue-grey-text text-darken-3">Monitoria</h5>
              <div className="input-field" >
                <input type="text" id='title' onChange={this.handleChange} required/>
                <label htmlFor="title">Disciplina</label>
              </div>
              <div className="input-field" >
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required></textarea>
                <label htmlFor="content">Observações</label>
              </div>
    
              <div className="input-field">
                <button className="btn gray darken-3">Register</button>
              </div>
            </form>
          </div>
        )
      }
}

export default (Monitor)