import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import {openLogin, openSignup} from '../actions/modals'
import {connect} from 'react-redux'
import Coupon from '../components/coupon'
import Cart from '../components/cart'
import logo from '../assets/images/snifflogo.png'
import $ from 'jquery'

class Nav extends Component {

  componentDidMount() {
    $(document).scroll(function() {
      if ($(this).scrollTop() > 50) { //Adjust 150
        $('.navbar').css('height', '55px');
        $('.logo-img').css('height', '55px');
      } else {
        $('.navbar').css('height', '80px');
        $('.logo-img').css('height', '80px');
      }
    });
  }

  openLoginModel = () => {
    this.props.openLogin()
    document.getElementById('root').setAttribute('class', 'modal-overflow')
  }

  openSignupModel = () => {
    this.props.openSignup()
    document.getElementById('root').setAttribute('class', 'modal-overflow')
  }

  render() {
    return(
      <div>
        <header>
        <Coupon />
          <nav className='navbar fixed-top'>
            <div className='container-fluid'>
            <div className='logo'>
                <NavLink className='' to='/'>
                  <img className='logo-img' src={logo} alt=''/>
                </NavLink>
                <div className='nav-log'>
                  <div className='nav-link login-signup' onClick={this.openLoginModel}>
                    login
                  </div>
                  <span style={{marginRight: '8px', marginLeft: '8px'}}>or</span>
                  <div className='nav-link login-signup' onClick={this.openSignupModel}>
                    sign up
                  </div>
                </div>
            </div>

              <ul className='navbar-nav'>

                <li className='nav-item'>
                  <NavLink className='nav-link non-cart' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <div className='nav-link non-cart'>
                    <span>About</span><i style={{fontSize: '14px'}} className="fas fa-caret-down"></i>
                  </div>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link non-cart' to='/customize'>
                    Customize
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link cart-container' to='/checkout/sniffBag'>
                    <Cart />
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default connect(null, {openLogin, openSignup})(Nav);
