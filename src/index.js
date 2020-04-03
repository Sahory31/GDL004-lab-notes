import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';
import Home from './App';
import MainPage from './components/Auth/mainPage';
import Trash from './components/Auth/delete';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}> 
    <Route path="/" component={Home}/>
    <Route path="/mainPage" component={MainPage}/>
    <Route path="/delete" component={Trash}/>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();