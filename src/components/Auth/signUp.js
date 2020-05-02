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
        this.state ={ checked : true }
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

    handleChangeChecked(checked){
        this.setState({checked});
    }
    

    validate = () =>{
        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (!this.state.name){
            nameError = 'Name cannot be empty';
        }

        if (!this.state.email.match(emailRegEx)){
            emailError = 'Invalid E-mail';
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
            email: '',
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
      <div className="Auth" hidden={this.state.checked ? false : true}>
          <div className="signUp-form">
              <h1 className="signUpTitle">Sign Up</h1>
              <form>
                  <div className="name">
                      <label htmlFor="name">Name: </label>
                      <input 
                      value={this.state.name} //valor del estado
                      type="text" 
                      placeholder="name" 
                      className="name"
                      name="name" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='nameError'>{this.state.nameError}</div>
                  </div>
                  <div className="email">
                      <label htmlFor="email">E-mail </label>
                      <input 
                      value={this.state.email}
                      type="email" 
                      placeholder="e-mail@" 
                      className="email"
                      name="email" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='emailError'>{this.state.emailError}</div>
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password </label>
                      <input 
                      value={this.state.password}
                      type="password" 
                      className="password" 
                      placeholder="password" 
                      name="password" 
                      noValidate
                      onChange={this.handleChange}
                      />
                      <div className='passwordError'>{this.state.passwordError}</div>
                  </div>
                  <div className="createAccount">
                    <button onClick={this.handleSubmit} className='signUpBtn'> Create Account </button>
                    <p/>
                    <div onClick={() => this.handleChangeChecked(false)}>Already have an Account?</div> 
                    <div>Forgot the password?</div>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default SignUp;





