import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/modal'
import { login } from '../actions/users'
import { fetchCart } from '../actions/selections'
import { guestCo } from '../actions/checkout'
import {closeModal, openSignup} from '../actions/modals'
import GoogleLogin from 'react-google-login';
import pinwheel from '../assets/images/pinwheel.png'
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery'





class Login extends Component {

  state = {
    email: '',
    password: '',
    emptyError: '',
    error: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: '',
      emptyError: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const emailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    const passtest = this.state.password.length >= 6

    if (!this.state.email || !this.state.password) {
      this.setState({emptyError: 'This field is required.'})
    } else {


    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          console.log(data);
          this.setState({error: data.errors})
        } else {
          this.props.guestCo(false)
          // localStorage.setItem('token', data.token)
          // this.props.login(data.user)
          console.log(this.props.cart.length);
          if (this.props.cart.length > 0) {
            // const localSoap = JSON.parse(localStorage.getItem('recentlyAdded'))
            this.props.cart.map(localsoap => {
              fetch('http://localhost:3000/soaps', {
                method: 'POST',
                headers: {
                  'Accepts': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  base: localsoap.base,
                  fragrance1: localsoap.fragrance1,
                  fragrance2: localsoap.fragrance2,
                  fragrance3: localsoap.fragrance3,
                  addon: localsoap.addon,
                  image: localsoap.image,
                  quantity: localsoap.quantity,
                  price: localsoap.price,
                  user_id: data.user.id,
                  cart_id: data.user.cart.id
                  // order_id: null
                })
              }).then(resp => {
                localStorage.setItem('token', data.token)
                this.props.login(data.user)
                // this.props.closeModal()
                $('#root').removeClass('modal-overflow')

              })
            })
          } else {
            localStorage.setItem('token', data.token)
            this.props.login(data.user)
            // this.props.closeModal()
            $('#root').removeClass('modal-overflow')

          }
          // this.props.closeModal()
          // document.getElementById('root').setAttribute('class', '')
          // this.props.history.push('/')
        }
      })
    }
  }

  getRand = () => {
    const dateRand = new Date().getTime().toString() + Math.floor(Math.random()*1000000);
    return dateRand
  }

  responseGoogle = (response) => {
    console.log(response);
    if (!response.error) {
      // localStorage.setItem('FB_id', response.accessToken)
      const firstName = response.profileObj.givenName
      const lastName = response.profileObj.familyName
      fetch('http://localhost:3000/oauth', {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email: response.profileObj.email,
            first_name: firstName,
            last_name: lastName,
            password: this.getRand()
          }
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            // this.setState({error: data.errors})
            console.log(data.errors);
          } else {
            this.props.guestCo(false)
            // localStorage.setItem('token', data.token)
            // this.props.login(data.user)
            console.log(this.props.cart.length);
            if (this.props.cart.length > 0) {
              // const localSoap = JSON.parse(localStorage.getItem('recentlyAdded'))
              this.props.cart.map(localsoap => {
                fetch('http://localhost:3000/soaps', {
                  method: 'POST',
                  headers: {
                    'Accepts': 'application/json',
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                    base: localsoap.base,
                    fragrance1: localsoap.fragrance1,
                    fragrance2: localsoap.fragrance2,
                    fragrance3: localsoap.fragrance3,
                    addon: localsoap.addon,
                    image: localsoap.image,
                    quantity: localsoap.quantity,
                    price: localsoap.price,
                    user_id: data.user.id,
                    cart_id: data.user.cart.id
                    // order_id: null
                  })
                }).then(resp => {
                  localStorage.setItem('token', data.token)
                  this.props.login(data.user)
                  // this.props.closeModal()
                  $('#root').removeClass('modal-overflow')

                })
              })
            } else {
              localStorage.setItem('token', data.token)
              this.props.login(data.user)
              // this.props.closeModal()
              $('#root').removeClass('modal-overflow')

            }
            // this.props.closeModal()
            // document.getElementById('root').setAttribute('class', '')
            // this.props.history.push('/')
          }
        })
      }
  }

  responseFacebook = (response) => {
    console.log(response);
    if (!response.status) {
      localStorage.setItem('FB_id', response.accessToken)
      const fullName = response.name.split(' ')
      const firstName = fullName[0]
      const lastName = fullName[1]
      fetch('http://localhost:3000/oauth', {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email: response.email,
            first_name: firstName,
            last_name: lastName,
            password: this.getRand()
          }
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            // this.setState({error: data.errors})
            console.log(data.errors);
          } else {
            this.props.guestCo(false)
            // localStorage.setItem('token', data.token)
            // this.props.login(data.user)
            console.log(this.props.cart.length);
            if (this.props.cart.length > 0) {
              // const localSoap = JSON.parse(localStorage.getItem('recentlyAdded'))
              this.props.cart.map(localsoap => {
                fetch('http://localhost:3000/soaps', {
                  method: 'POST',
                  headers: {
                    'Accepts': 'application/json',
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                    base: localsoap.base,
                    fragrance1: localsoap.fragrance1,
                    fragrance2: localsoap.fragrance2,
                    fragrance3: localsoap.fragrance3,
                    addon: localsoap.addon,
                    image: localsoap.image,
                    quantity: localsoap.quantity,
                    price: localsoap.price,
                    user_id: data.user.id,
                    cart_id: data.user.cart.id
                    // order_id: null
                  })
                }).then(resp => {
                  localStorage.setItem('token', data.token)
                  this.props.login(data.user)
                  // this.props.closeModal()
                  $('#root').removeClass('modal-overflow')

                })
              })
            } else {
              localStorage.setItem('token', data.token)
              this.props.login(data.user)
              // this.props.closeModal()
              $('#root').removeClass('modal-overflow')

            }
            // this.props.closeModal()
            // document.getElementById('root').setAttribute('class', '')
            // this.props.history.push('/')
          }
        })
      }
    }

  render(){
    return(
      <Modal>
        <div className='modal-top-container'>
          <div className='modal-content-container'>
            <h1 style={{fontSize: '40px', marginBottom: '8px'}}>Login...</h1>
            <div className="OAuth-login">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE}
                buttonText="Continue with Google"
                className='google-btn'
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle.bind(this)}
                cookiePolicy={'single_host_origin'}
              />
              <FacebookLogin
              appId={process.env.REACT_APP_FB}
              autoLoad={false}
              fields="name,email"
              textButton='Continue with Facebook'
              icon="fab fa-facebook-square signin-fb"
              cssClass='facebook-btn'
              callback={this.responseFacebook}
              />
            </div>
          </div>
        </div>

        <div className='modal-content-container login-form'>
          <h3 style={{marginBottom: '10px'}} className="or-signup">Or you can always...</h3>
          <div className='login-errors'>{this.state.error}</div>
          <div className='email-column'>
            <label>Email</label >
            <input value={this.state.email} className='promo-apply' name='email' onChange={this.handleChange}/>
            <span>{this.state.emptyError && !this.state.email ? this.state.emptyError : ''}</span>
          </div>
          <div className='email-column'>
            <label>Password  <span style={{color: '#2ccbbb', fontWeight: '600', borderLeft: '1.5px solid black', paddingLeft: '9px', marginLeft: '3px'}}>  forgot password?</span></label>
            <input value={this.state.password} type='password' className='promo-apply' name='password' onChange={this.handleChange}/>
            <span>{this.state.emptyError && !this.state.password ? this.state.emptyError : ''}</span>
          </div>
          <button style={{marginTop: '3px', marginBottom: '0'}} className='email-signup' onClick={this.handleSubmit}>Log in</button>
        </div>
        <div className='modal-content-container sign-log'>
          <p>Don't have an account?</p>
          <div className='login-signup' onClick={() => this.props.openSignup()}>Sign up</div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {login, openSignup, guestCo, fetchCart})(Login)
