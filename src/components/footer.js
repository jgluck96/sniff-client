import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openLogin, openSignup} from '../actions/modals'
import {logout} from '../actions/users'

class Footer extends Component {

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

  render(){
    return(
      <footer className="footer">
            <div className="py-3 pt-3 bg-gray-200 text-muted">
              <div className="footer-container">
                <div className="row">
                  <div className="col-lg-4 mb-5">
                    <h4 className="font-weight-bold text-uppercase text-dark mb-3">Directory</h4>
                    <p>The customizable soap platform</p>
                    <ul className="list-inline">
                      <li className="list-inline-item"><div target="_blank" title="twitter" className="text-muted text-hover-primary"><i className="fab fa-twitter"></i></div></li>
                      <li className="list-inline-item"><div target="_blank" title="facebook" className="text-muted text-hover-primary"><i className="fab fa-facebook"></i></div></li>
                      <li className="list-inline-item"><div target="_blank" title="instagram" className="text-muted text-hover-primary"><i className="fab fa-instagram"></i></div></li>
                    </ul>
                  </div>
                  <div className="col-lg-2">
                    <h6 className="text-uppercase text-dark mb-3">Account</h6>
                    {this.props.user ?
                    <ul className="list-unstyled">
                      <li><a href="/account" className="text-muted">My profile</a></li>
                      <li><a href='/checkout/sniffBag' className="text-muted">Cart</a></li>
                      <li onClick={this.logout}><a href='/' className="text-muted">Log out</a></li>
                    </ul>
                    :
                    <ul className="list-unstyled">
                      <li><div style={{cursor: 'pointer'}} onClick={this.openLoginModal} className="text-muted">Log in</div></li>
                      <li><div style={{cursor: 'pointer'}} onClick={this.openSignupModal} className="text-muted">Sign up</div></li>
                      <li><a href='/checkout/sniffBag' className="text-muted">Cart</a></li>
                    </ul>
                    }
                  </div>
                  <div className="col-lg-2">
                    <h6 className="text-uppercase text-dark mb-3">Tid Bits</h6>
                    <ul className="list-unstyled">
                      <li><a href="/customize" className="text-muted">Customize</a></li>
                      <li><a href="/about/who-we-are" className="text-muted">Our story</a></li>
                      <li><a href="/contact" className="text-muted">Contact us</a></li>
                      <li><a href="/" className="text-muted">Home</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="text-uppercase text-dark mb-3">Newsletter</h6>
                    <p className="mb-3"> Sign up for our newsletter to receive weekly offers and discounts</p>
                    <form action="#" id="newsletter-form">
                      <div className="input-group mb-3">
                        <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" className="form-control bg-transparent border-dark" />
                        <div className="input-group-append">
                          <i className="fa fa-paper-plane"></i>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
              <div className="footer-container">
                <div className="row align-items-center space-between">
                  <div className="">
                    <p className="text-sm">© 2019 Robin.  All rights reserved.</p>
                  </div>
                  <div className="">
                    <ul className="list-inline align-right mt-mb-1">
                      <li className="list-inline-item"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/visa.svg" alt="..." className="w-2rem" /></li>
                      <li className="list-inline-item"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/mastercard.svg" alt="..." className="w-2rem" /></li>
                      <li className="list-inline-item"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/paypal.svg" alt="..." className="w-2rem" /></li>
                      <li className="list-inline-item"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/western-union.svg" alt="..." className="w-2rem" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {openLogin, openSignup, logout})(Footer)
