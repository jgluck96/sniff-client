import React, {Component, Fragment} from 'react'
import { NavLink } from "react-router-dom";
import {openLogin, openSignup} from '../actions/modals'
import {logout} from '../actions/users'
import {connect} from 'react-redux'
import Coupon from '../components/coupon'
import Cart from '../components/cart'
import logo from '../assets/images/snifflogo.png'
import $ from 'jquery'

class Nav extends Component {

  state = {
    dropAccount: false
  }

  componentDidMount() {
    $(document).scroll(function() {
      if ($(this).scrollTop() > 50) { //Adjust 150
        $('.navbar').css('height', '55px');
        $('.logo-img').css('height', '55px');
        $('.nav-item').css('margin-top', '5px')
      } else {
        $('.navbar').css('height', '80px');
        $('.logo-img').css('height', '80px');
        $('.nav-item').css('margin-top', '8px')
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

  logout = () => {
  localStorage.removeItem("token")
  this.props.logout()
  }

  dropdown = (e) => {
    this.setState({dropAccount: !this.state.dropAccount})
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
              {this.props.user ?
                <Fragment>
                  <div className='nav-link login-signup' name='account-dropdown' onMouseEnter={this.dropdown} onMouseLeave={this.dropdown}>
                    <span>Account</span><i style={{fontSize: '14px', height: '0'}} className="fas fa-caret-down"></i>
                    { this.state.dropAccount ?
                      <div className='account-dropdown'>
                        <div>
                          <div><a><span>Profile</span></a></div>
                          <div><a><span>Wishlist</span></a></div>
                          <div><a href='/'><span onClick={this.logout}>Logout</span></a></div>
                        </div>
                      </div>
                      :
                      null
                    }
                  </div>

                </Fragment>
                :
                <Fragment>
                  <div className='nav-link login-signup' onClick={this.openLoginModel}>
                    login
                  </div>
                  <span style={{marginRight: '8px', marginLeft: '8px'}}>or</span>
                  <div className='nav-link login-signup' onClick={this.openSignupModel}>
                    sign up
                  </div>
                </Fragment>
              }
              </div>
            </div>

              <ul className='navbar-nav'>

                <li className='nav-item'>
                  <NavLink className='nav-link non-cart' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <div className='nav-link non-cart' name='about-dropdown'>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, {openLogin, logout, openSignup})(Nav);
