import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignUp from './SignIn/signup'
import Login from './SignIn/login'
import Coupon from './FrontPage/Coupons'

ReactDOM.render(
  <div className="index">
    <Router>
      <Switch>
          <Route  path="/" exact component={App} />
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/coupons" exact component={Coupon}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

