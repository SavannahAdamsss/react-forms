import React, { Component } from 'react';
import './App.css';
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }

  getFormData = (formData) => {
    console.log(formData);
    const newFormData = this.state.users;
    newFormData.push(formData)
    this.setState({
      users: newFormData,
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Forms in React</h1>
            <p className="lead">Let's create a Form the "React way"</p>
          </div>
        </div>
        <Form getFormData={this.getFormData} />
        {this.state.users.map(user => {
          return (
            <div className="container">
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
            <p>{user.comments}</p>
            </div> 
          )
        })}
      </div>
    );
  }
}

export default App;
