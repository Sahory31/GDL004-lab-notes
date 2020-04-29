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
        let emailError = '';
        let passwordError = '';

        if (!this.state.email.includes('@')){
            emailError = 'Wrong E-mail';
        }

        if (this.state.password < 6){
            passwordError = 'Password requires at least 6 characters'
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
      <div className="Auth">
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
                      <div>{this.state.emailError}</div>
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
                      <div>{this.state.passwordError}</div>
                  </div>
                  <div className="logIn">
                    <button onClick={this.handleSubmit} className='signInBtn'> Log In </button>
                    <p/>
                    <div className='questionAccount'>Don't have an Account yet?</div> 
                    <div className='forgotPass'>Forgot the password?</div>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default SignIn;
