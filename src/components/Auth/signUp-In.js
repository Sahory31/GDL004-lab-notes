import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="Auth">
          <div className="signUp-form">
              <h1>Sign Up</h1>
              <form>
                  <div className="Name">
                      <label htmlFor="name">Name </label>
                      <input 
                      type="text" 
                      className="" 
                      placeholder="Name" 
                      name="Name" 
                      noValidate
                      onChange={this.handlechange}
                      />
                  </div>
                  <div className="Email">
                      <label htmlFor="email">E-mail </label>
                      <input 
                      type="email" 
                      className="" 
                      placeholder="E-mail@" 
                      name="email" 
                      noValidate
                      onChange={this.handlechange}
                      />
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password </label>
                      <input 
                      type="password" 
                      className="" 
                      placeholder="Password" 
                      name="password" 
                      noValidate
                      onChange={this.handlechange}
                      />
                  </div>
                  <div className="createAccount">
                    <button type="submit"> createAccount </button>
                    <p/>
                    <small>Already have an Account?</small>
                    <p/>
                    <small>Forgot the password?</small>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default SignUp;