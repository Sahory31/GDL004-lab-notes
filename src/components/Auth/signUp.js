import React, { Component } from 'react';

/*------------------> SIGN UP <--------------------*/
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    }

 //Controlador de cambios, lee el nombre del campo y actualiza el estado con él
    handleChange = event => {
        const checkbox = event.target.type === 'checkbox';
        this.setState({    //establecer el estado
            [event.target.name]: checkbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () =>{
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.name){
            nameError = 'Name cannot be empty';
        }

        if (!this.state.email.includes('@')){
            emailError = 'Wrong E-mail';

        }
        if (!this.state.password) {
            passwordError = 'Password cannot be empty';
        }
        if (this.state.password.includes(' ')) {
            passwordError = 'Password cannot have spaces';
        }
        if (this.state.password.length < 6) {
            passwordError = 'Password required at least 6 characters';
        }

        if (emailError || nameError || passwordError){
            this.setState({emailError, nameError, passwordError});
            return false; 
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const resetState ={
            name: '',
            email: '', //esta mandando este email! D:
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
        };

        const valid = this.validate();
        if (valid) {
            console.log(this.state);
            //clear Form/
             this.setState(resetState);
            
        }
       

    };

  render() {
    return (
      <div className="Auth">
          <div className="signUp-form">
              <h1>Sign Up</h1>
              <form>
                  <div className="name">
                      <label htmlFor="name">Name </label>
                      <input 
                      value={this.state.name} //valor del estado
                      type="text" 
                      placeholder="name" 
                      name="name" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div>{this.state.nameError}</div>
                  </div>
                  <div className="email">
                      <label htmlFor="email">E-mail </label>
                      <input 
                      value={this.state.email}
                      type="email" 
                      placeholder="e-mail@" 
                      name="email" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div>{this.state.emailError}</div>
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password </label>
                      <input 
                      value={this.state.password}
                      type="password"  
                      placeholder="password" 
                      name="password" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div>{this.state.passwordError}</div>
                  </div>
                  <div className="createAccount">
                    <button onClick={this.handleSubmit}> Create Account </button>
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





