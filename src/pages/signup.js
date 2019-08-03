import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Modal from '../components/modal'
import {signmeUp, clearErrors} from '../actions/users'
import {openLogin} from '../actions/modals'
// import $ from 'jquery'

const responseGoogle = (response) => {
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}

class Signup extends Component {

  state = {
    clicked: false,
    emailSignup: false,
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    feedback: '',
    // signupErrors: '',
    emptyError: '',
    emailTest: '',
    passTest: ''
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.signupErrors !== this.props.signupErrors && !this.props.signupErrors) {
  //     this.setState({signupErrors: this.props.signupErrors})
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      emptyError: '',
      emailTest: '',
      passTest: ''
      // signupErrors: ''
    })
    this.props.clearErrors()
  }


  handleSubmit = () => {
    const emailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    const passtest = this.state.password.length >= 6
    if (!passtest){
      this.setState({passTest: 'Enter a valid password!'})
    }
    if (!emailtest){
      this.setState({emailTest: 'Enter a valid email!'})
    }
    if (!passtest || !emailtest || !this.state.email || !this.state.password || !this.state.first_name || !this.state.last_name || !this.state.feedback) {
      this.setState({emptyError: 'This field is required!'})
    } else {
      this.props.signmeUp({
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      feedback: this.state.feedback,
      guest: false
    }, this.props.cart, this.state.emailSignup)
    if (!this.props.signupErrors) {
      this.setState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        feedback: ''
      })
    }
    }
  }

  click = () => {
    this.setState({clicked: !this.state.clicked})
  }

  emailSignupBtn = () => {
    this.setState({emailSignup: !this.state.emailSignup})
  }

  // submitHandler = () => {
  //   this.props.signmeUp(this.state)
  // }

  render(){
    return(
      <Modal>
        <div style={{borderRadius: '4px'}}>
        {this.state.emailSignup ?
          <Fragment>
            <div className='modal-email-signup modal-content-container'>
              <h1>Sign up...</h1>
              <p>Create an account to start building your soap today. It should take less than a minute.</p>
              <div className='signuperror'>{this.props.signupErrors}</div>
              <form className='signup-form'>
                <div className='row first-last'>
                  <div className='first-name'>
                    <label>First Name</label>
                    <input className='promo-apply' name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                    <span>{this.state.emptyError && !this.state.first_name ? this.state.emptyError : ''}</span>
                  </div>
                  <div className='last-name'>
                    <label>Last Name</label>
                    <input className='promo-apply' name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                    <span>{this.state.emptyError && !this.state.last_name ? this.state.emptyError : ''}</span>
                  </div>
                </div>
                <div className='email-column'>
                  <label>Email</label>
                  <input className='promo-apply' name="email" id='email-column' value={this.state.email} onChange={this.handleChange}/>
                  <span>{this.state.emptyError && !this.state.email ? this.state.emptyError : this.state.emailTest ? this.state.emailTest : ''}</span>
                </div>
                <div className='pass-column'>
                  <label>Password (min. 6 characters)</label>
                  <input className='promo-apply' name="password" value={this.state.password} onChange={this.handleChange}/>
                  <span>{this.state.emptyError && !this.state.password ? this.state.emptyError : this.state.passTest ? this.state.passTest : ''}</span>
                </div>
                <div className='feedback-column'>
                  <label>How did you hear about us?</label>
                  <select className='feedback-select' name="feedback" value={this.state.feedback} onChange={this.handleChange}>
                    <option hidden selected> -- select an option -- </option>
                    <option>from a friend</option>
                    <option>google</option>
                    <option>on a flyer</option>
                    <option>someone I follow on social media</option>
                    <option>other</option>
                  </select>
                  <span>{this.state.emptyError && !this.state.feedback ? this.state.emptyError : ''}</span>
                </div>
              </form>
              <button className='email-signup' onClick={this.handleSubmit}>Sign up</button>
            </div>
          </Fragment>
          :
          <Fragment>
            <div className='modal-top-container'>
              <div className='modal-content-container'>
                <h1>Sign up...</h1>
                <div className="OAuth-login">
                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                  <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={false}
                  fields="name,email,picture"

                  callback={responseFacebook} />
                </div>
              </div>
            </div>
            <div style={{height: '70px'}}></div>
            <div className='modal-content-container'>
              <div>
                <h3>Or you can always...</h3>
                <button className='email-signup' onClick={this.emailSignupBtn}>Sign up with email</button>
                <div className='signup-news' onClick={this.click}>
                  <p>Be the first to receive exclusive offers and hear the latest news.</p>
                  <div className='checkbox-container'>
                    <input className='signup-news-checkbox-hidden' type='checkbox'/>
                    <div className='signup-news-checkbox-visible'>
                      {this.state.clicked ? <i class="fas fa-check"></i> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        }
        </div>
        <div className='modal-content-container sign-log'>
          <p>Already have an account?</p>
          <div className='login-signup' onClick={() => this.props.openLogin()}>Login</div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return{
    cart: state.cart,
    signupErrors: state.signupErrors
  }
}

export default connect(mapStateToProps, {openLogin, signmeUp, clearErrors})(Signup)
