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


  componentDidMount() {
    $(document).scroll(function() {
      if ($(this).scrollTop() > 50) { //Adjust 150
        $('.navbar').css('height', '55px');
        // $('.navbar::after').css('height', '55px');
        $('.logo-img').css('height', '55px');
        $('.navbar-nav').css('height', '55px')
        $('.about-dropdown').css('marginTop', '35px')
        $('.spinner-tab').css({'width': '10px', 'height': '6px'})
        $('.logo-bottom').css('transform-origin', '3px 3px')
        $('.logo-top').css('transform-origin', '3px 3px')
        $('.logo-spinner').css({'left': '72px', 'height': '20px'})
      } else {
        $('.navbar').css('height', '80px');
        $('.logo-img').css('height', '80px');
        $('.navbar-nav').css('height', '80px');
        $('.about-dropdown').css('marginTop', '60px')
        $('.spinner-tab').css({'width': '15px', 'height': '9px'})
        $('.logo-bottom').css('transform-origin', '3.5px 4.3px')
        $('.logo-top').css('transform-origin', '3.5px 4.3px')
        $('.logo-spinner').css({'left': '102px', 'height': '25px'})
      }
    });
  }


  openLoginModal = () => {
    this.props.openLogin()
    document.getElementById('root').setAttribute('class', 'modal-overflow')
  }

  openSignupModal = () => {
    this.props.openSignup()
    document.getElementById('root').setAttribute('class', 'modal-overflow')
  }

  logout = () => {
  localStorage.removeItem("token")
  this.props.logout()
    if (window.FB) {
      const fb = localStorage.getItem('FB_id')
      window.FB.logout(fb)
    }
    localStorage.removeItem("FB_id")

  }
  //
  // scrollTo = () => {
  //   $('html, body').animate({
  //     scrollTop: $(".second-section").offset().top
  //   }, 600)
  // }


  render() {
    return(
      <div>
        <header>


          <nav className='navbar fixed-top'>
            <div className='container-fluid'>
            <div className='logo'>
              <div className='logo-spinner'>
                <div className='logo-top'>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                </div>
                <div className='logo-bottom'>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                  <div className='spinner-tab'>
                  </div>
                </div>
              </div>
              <NavLink className='' to='/'>
                <img className='logo-img' src={logo} alt=''/>
              </NavLink>

            </div>

              <ul className='navbar-nav'>

                <li className='nav-item'>
                  <NavLink className='nav-link non-cart' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <div className='nav-link about-nav non-cart' name='about-dropdown'>
                    <span>About</span><i style={{fontSize: '14px'}} className="fas fa-caret-down"></i>

                  </div>
                  <div className='about-dropdown'>
                    <div className='about-dropdown-content'>
                      <div onClick={this.scrollTo} className='about-tab'><NavLink className='account-dropdown-link' to='/how-it-works'><span>How it works</span></NavLink></div>
                      <div className='about-tab about-middle'><NavLink className='account-dropdown-link' to='/about/who-we-are'><span>Our story</span></NavLink></div>
                      <div className='about-tab'><NavLink className='account-dropdown-link' to='/contact'><span>Contact us</span></NavLink></div>
                    </div>
                  </div>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link non-cart' to='/customize'>
                    Customize
                  </NavLink>
                </li>
                <li className='nav-item account-container-drop'>
                {localStorage.getItem('token') ?
                  <Fragment>
                    <div className='nav-link account-drop' name='account-dropdown'>
                      <i className="fas fa-user-circle"></i><i style={{fontSize: '14px', height: '0'}} className="fas fa-caret-down"></i>


                    </div>
                    <div className='about-dropdown'>
                      <div  className='about-dropdown-content'>
                        <div className='about-tab' style={{borderBottom: '1px solid #ccc'}}><NavLink className='account-dropdown-link' to='/account'><span>Account</span></NavLink></div>
                        <div className='about-tab'><a className='account-dropdown-link' href='/'><span onClick={this.logout}>Logout</span></a></div>
                      </div>
                    </div>

                  </Fragment>
                  :
                  <Fragment>
                    <div className='nav-login-signup'>
                      <div className='nav-link nav-login' onClick={this.openLoginModal}>
                        login
                      </div>
                      <div className='nav-link nav-signup' onClick={this.openSignupModal}>
                        sign up
                      </div>
                    </div>
                  </Fragment>
                }
                </li>
                <li style={{width: '40px'}} className='nav-item'>
                  <NavLink className='nav-link cart-container' to='/checkout/sniffBag'>
                    <Cart />
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
          {this.props.user && !this.props.user.verified ?
            <div className='verify'>Please verify your account!</div>
            :
            ''
          }
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
