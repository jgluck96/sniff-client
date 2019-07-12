import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import {openLogin, openSignup} from '../actions/modals'
import {connect} from 'react-redux'
import Coupon from '../components/coupon'
import Cart from '../components/cart'
import logo from '../assets/images/snifflogo.png'

class Nav extends Component {

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
              <ul className='navbar-nav'>
                <li className='nav-item non-cart'>
                  <NavLink className='nav-link' to='/'>
                    HOME
                  </NavLink>
                </li>
                <li className='nav-item non-cart'>
                    <NavLink className='nav-link' to='/customize'>
                      CUSTOMIZE
                    </NavLink>
                </li>
                <li className='nav-item logo'>
                  <NavLink className='nav-link' to='/'>
                    <img style={{height: '80px'}} src={logo} alt=''/>
                  </NavLink>
                </li>
                <li className='nav-item non-cart' onClick={this.openSignupModel}>
                  <div className='nav-link'>
                    SIGNUP
                  </div>
                </li>
                <li className='nav-item' onClick={this.openSignupModel}>
                  <div className='nav-link cart-container'>
                  <Cart />
                  </div>
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
