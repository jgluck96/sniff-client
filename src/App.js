import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Customize from './pages/customize'
import Login from './pages/login'
import Confirmation from './pages/confirmationPage'
import CheckoutLogin from './pages/checkoutLogin'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import OurStory from './pages/ourStory'
import Verify from './pages/verification'
import HowItWorks from './pages/howItWorks'
import Account from './pages/account'
import MiniBag from './components/miniBag'
import Feedback from './components/feedback'
import Nav from './components/nav'
import Footer from './components/footer'
import {connect} from 'react-redux'
import {autoLogin} from './actions/users'
import {closeModal} from './actions/modals'
import {fetchCart, fetchingCart} from './actions/selections'
import $ from 'jquery'
import {withRouter} from 'react-router'


class App extends Component {

  componentDidMount() {
    $(document).keydown(function(objEvent) {
      if (objEvent.keyCode == 9) {  //tab pressed
          objEvent.preventDefault(); // stops its action
      }
    })
    if (localStorage.getItem('token')) {
      console.log('checkit cdm');
      this.props.autoLogin()
      this.props.closeModal()

      // setTimeout(() => this.props.fetchCart(this.props.user.id), 3000)
    }
  }
  //
  // componentWillMount(prevState) {
  //   if (localStorage.getItem('token')) {
  //     console.log('cwm');
  //     this.props.autoLogin()
  //     this.props.closeModal()
  //     // setTimeout(() => this.props.fetchCart(this.props.user.id), 3000)
  //   }
  // }

  componentDidUpdate(prevState) {

    if (prevState.user !== this.props.user && localStorage.getItem('token')) {
console.log('cdu logged in');
      this.props.closeModal()
      localStorage.removeItem('recentlyAdded')
    }
    if (prevState.user !== this.props.user && this.props.user) {
console.log('maybe');

      this.props.fetchCart(this.props.user.id)
    }
  }

  render(){
    return (
      <React.Fragment>
        <Nav />
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
          <Route exact path='/' component={Home} />
          <Route path='/customize' component={Customize} />
          <Route path='/checkout/sniffBag' component={Checkout} />
          <Route path='/order-confirmation' component={Confirmation} />
          <Route path='/about/who-we-are' component={OurStory} />
          <Route path='/contact' component={Contact} />
          <Route path='/how-it-works' component={OurStory} />
          <Route path='/account' component={Account} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/verify' component={Verify} />
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
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.modals.login,
    signup: state.modals.signup,
    miniBag: state.modals.miniBag,
    checkout: state.modals.checkout,
    user: state.user,
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps, {autoLogin, fetchCart, fetchingCart, closeModal})(App));
