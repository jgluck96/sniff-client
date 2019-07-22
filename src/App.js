import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Customize from './pages/customize'
import Login from './pages/login'
import Stripe from './pages/stripe'
import CheckoutLogin from './pages/checkoutLogin'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import MiniBag from './components/miniBag'
import Nav from './components/nav'
import Footer from './components/footer'
import {connect} from 'react-redux'
import {autoLogin} from './actions/users'
import {closeModal} from './actions/modals'
import {fetchCart} from './actions/selections'
import $ from 'jquery'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.autoLogin()
      this.props.closeModal()
      setTimeout(() => this.props.fetchCart(this.props.user.id), 3000)
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.props.user && localStorage.getItem('token')) {
      this.props.closeModal()
      localStorage.removeItem('recentlyAdded')
    }
    if (prevState.user !== this.props.user && this.props.user && prevState.cart !== this.props.cart) {
      this.props.fetchCart(this.props.user.id)
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
          <Route path='/checkout/order' component={Stripe} />
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
          this.props.checkout ?
          <CheckoutLogin />
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
    signup: state.modals.signup,
    miniBag: state.modals.miniBag,
    checkout: state.modals.checkout,
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {autoLogin, fetchCart, closeModal})(App);
