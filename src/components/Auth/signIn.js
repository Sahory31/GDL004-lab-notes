import React, { Component } from 'react';

/*------------------> SIGN IN <--------------------*/
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
        this.state = { checked : false}

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
        let emailError = '';
        let passwordError = '';
        let emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (!this.state.email.match(emailRegEx)){
            emailError = 'Invalid E-mail';
        }

        if (this.state.password.length < 6) {
            passwordError = 'Password required at least 6 characters';
        }

        if (!this.state.password) {
            passwordError = 'Password cannot be empty';
        }

        if (this.state.password.includes(' ')) {
            passwordError = 'Password cannot have spaces';
        }

        if (emailError || passwordError){
            this.setState({emailError, passwordError});
            return false; 
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const resetState ={
            email: '', //esta mandando este email! D:
            password: '',
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
          <link rel="stylesheet" href='Styles/Images/fonts/style.css'></link>
          <div className="signIn-form">
              <h1 className='signInTitle'>Sign In</h1>
              <form>
                  <div className="email">
                      <label htmlFor="email">E-mail</label>
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
                  <div className="logIn">
                    <button onClick={this.handleSubmit} className='signInBtn'> Log In </button>
                    <p/>
                    <div onClick={() => this.handleChangeChecked(true)}>Don't have an Account yet?</div> 
                    <div>Forgot the password?</div>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default SignIn;
