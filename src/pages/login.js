import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/modal'
import { login } from '../actions/users'
import { fetchCart } from '../actions/selections'
import {closeModal, openSignup} from '../actions/modals'
import $ from 'jquery'

class Login extends Component {

  state = {
    email: '',
    password: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          this.setState({userErrors: data.errors})
        } else {
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

  render(){
    return(
      <Modal>
        <div className='modal-content-container'>
          <div className='email-column'>
            <label>Email</label >
            <input value={this.state.email} className='promo-apply' name='email' onChange={this.handleChange}/>
          </div>
          <div className='email-column'>
            <label>Password</label >
            <input value={this.state.password} className='promo-apply' name='password' onChange={this.handleChange}/>
          </div>
          <button className='email-signup' onClick={this.handleSubmit}>Log in</button>
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

export default connect(mapStateToProps, {login, openSignup, fetchCart})(Login)
