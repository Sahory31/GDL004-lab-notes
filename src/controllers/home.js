import React, { Component } from 'react';
import '../Styles/signUp.css';
import SignUp from '../components/Auth/signUp';
import SignIn from '../components/Auth/signIn';


class Home extends Component {
  render(){
    return (
      <div className='Home'>
        <h1 className='geekNotes'>Geek Notes</h1>
         <SignUp/>
         <SignIn/>
      </div>
    );
  }
}

export default Home;
