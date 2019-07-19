import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/modal'
import { login } from '../actions/users'
import {closeModal, openSignup} from '../actions/modals'
import $ from 'jquery'

class CheckoutLogin extends Component {

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
          alert(data.errors)
        } else {
          localStorage.setItem('token', data.token)
          this.props.login(data.user)
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
            <input className='promo-apply' value={this.state.email} name='email' onChange={this.handleChange}/>
          </div>
          <div className='email-column'>
            <label>Password</label >
            <input className='promo-apply' value={this.state.password} name='password' onChange={this.handleChange}/>
          </div>
          <button className='email-signup' onClick={this.handleSubmit}>Login</button>
          <div className='third-parties-co-with'>
            <span style={{paddingLeft: '10px', paddingRight: '10px'}} className='third-parties-border'></span>
            <span className='third-parties-border-co'>OR</span>
          </div>
          <button className='email-signup' style={{marginBottom: '50px'}} onClick={this.handleSubmit}>Checkout As Guest</button>
        </div>
        <div className='modal-content-container sign-log'>
          <p>Don't have an account?</p>
          <div className='login-signup' onClick={() => this.props.openSignup()}>Sign up</div>
        </div>
      </Modal>
    )
  }
}

export default connect(null, {login, openSignup})(CheckoutLogin)
