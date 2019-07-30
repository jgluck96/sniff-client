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
      } else {
        $('.navbar').css('height', '80px');
        $('.logo-img').css('height', '80px');
        $('.navbar-nav').css('height', '80px');
        $('.about-dropdown').css('marginTop', '60px')

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

          <Coupon />
          <nav className='navbar fixed-top'>
            <div className='container-fluid'>
            <div className='logo'>
              <a className='' href='/'>
                <img className='logo-img' src={logo} alt=''/>
              </a>

            </div>

              <ul className='navbar-nav'>

                <li className='nav-item'>
                  <a className='nav-link non-cart' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <div className='nav-link about-nav non-cart' name='about-dropdown'>
                    <span>About</span><i style={{fontSize: '14px'}} className="fas fa-caret-down"></i>

                  </div>
                  <div className='about-dropdown'>
                    <div className='about-dropdown-content'>
                      <div onClick={this.scrollTo} className='about-tab'><a href='/how-it-works'><span>How it works</span></a></div>
                      <div className='about-tab about-middle'><a href='/about/who-we-are'><span>Our story</span></a></div>
                      <div className='about-tab'><a href='/contact'><span>Contact us</span></a></div>
                    </div>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link non-cart' href='/customize'>
                    Customize
                  </a>
                </li>
                <li className='nav-item account-container-drop'>
                {localStorage.getItem('token') ?
                  <Fragment>
                    <div className='nav-link account-drop' name='account-dropdown'>
                      <i class="fas fa-user-circle"></i><i style={{fontSize: '14px', height: '0'}} className="fas fa-caret-down"></i>


                    </div>
                    <div className='about-dropdown'>
                      <div  className='about-dropdown-content'>
                        <div className='about-tab'><a><span>Profile</span></a></div>
                        <div className='about-tab about-middle'><a><span>Wishlist</span></a></div>
                        <div className='about-tab'><a href='/'><span onClick={this.logout}>Logout</span></a></div>
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
                <li style={{width: '4%'}} className='nav-item'>
                  <a className='nav-link cart-container' href='/checkout/sniffBag'>
                    <Cart />
                  </a>
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
