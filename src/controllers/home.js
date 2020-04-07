import React, { Component } from 'react';
/*import './App.css';*/
import SignUp from '../components/Auth/signUp';
import SignIn from '../components/Auth/signIn';


class Home extends Component {
  render(){
    return (
      <div className='Home'>
         <SignUp/>
         <SignIn/>
      </div>
    );
  }
}

export default Home;
