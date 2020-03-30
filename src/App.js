import React, { Component } from 'react';
import './App.css';
import SignUp from './components/Auth/signUp-In';

class Home extends Component {
  render(){
    return (
      <div className='Home'>
         <SignUp/>
      </div>
    );
  }
}

export default Home;
