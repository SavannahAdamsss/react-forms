import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: "",
      password: "",
      comments: ""
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
      comments: this.state.comments
    }
    console.log(formData);
    this.props.getFormData(formData)
    this.setState({
      email: "",
      password: "",
      comments: ""
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" value={this.state.email} placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" className="form-control" id="password" name="password" placeholder="Password" value={this.state.password}/>
        </div>
          <div className="form-group">
            <label htmlFor="comments">Example textarea</label>
            <textarea onChange={this.handleChange} className="form-control" value={this.state.comments}id="comments" name="comments" rows="3"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Create New Link</button>
        </div>
      </form>
    )
  }
}
