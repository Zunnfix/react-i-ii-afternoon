import React, { Component } from 'react'

class Form extends Component {
  
  render() {
    return (
      <main>
        <div className="signup-form">
          <form>
            <h2>Create User</h2>
            <p className="hint-text">Fill out this form to create a new user.</p>
            <div className="row">
              <input type="text" className="form-control form-name" placeholder="First Name" required="required" />
              <input type="text" className="form-control form-name" placeholder="Last Name" required="required" />	
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Home Town" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Job Title" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Employer" />
            </div>
            <div className="fav-movie-group">
              <input className="form-control" placeholder="Favorite Movie #1" />
              <input className="form-control" placeholder="Favorite Movie #2" />
              <input className="form-control" placeholder="Favorite Movie #3" />
            </div>
            <div className="">
              <button type="submit" className="reg-btn">Register User</button>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default Form