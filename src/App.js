import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Customize from './pages/customize'
import Login from './pages/login'
import Signup from './pages/signup'
import Nav from './components/nav'
import Footer from './components/footer'
import {connect} from 'react-redux'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/customize' component={Customize} />
        </Switch>
        {
          this.props.login ?
          <Login />
          :
          this.props.signup ?
          <Signup />
          :
          null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    login: state.modals.login,
    signup: state.modals.signup
  }
}

export default connect(mapStateToProps, null)(App);
