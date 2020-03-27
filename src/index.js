import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Auth/signUp-In';
import MainPage from './components/Auth/mainPage';
import Trash from './components/Auth/trash';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/home" component={Home}></Route>
    <Route path="/mainPage" component={MainPage}></Route>
    <Route path="/trash" component={Trash}></Route>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
