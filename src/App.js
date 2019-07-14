import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Customize from './pages/customize'
import Login from './pages/login'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import MiniBag from './components/miniBag'
import Nav from './components/nav'
import Footer from './components/footer'
import {connect} from 'react-redux'
import $ from 'jquery'

class App extends Component {

  componentDidUpdate(prevState) {
    if (prevState.login !== this.props.login) {
      setTimeout(() => $('.modal').addClass('drop'),0)
    }
  }

  render(){
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/customize' component={Customize} />
          <Route path='/checkout/sniffBag' component={Checkout} />
        </Switch>
        {
          this.props.login ?
          <Login />
          :
          this.props.signup ?
          <Signup />
          :
          this.props.miniBag ?
          <MiniBag />
          :
          null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.modals.login,
    signup: state.modals.signup,
    miniBag: state.modals.miniBag
  }
}

export default connect(mapStateToProps, null)(App);
