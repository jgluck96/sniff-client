import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router'
import fluff from '../assets/images/fluff6.svg'
import fur from '../assets/images/redfur.svg'


class Feedback extends Component {

  state = {
    firstName: '',
    lastName: '',
    message: '',
    email: '',
    emailError: '',
    submitMes: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      emailError: '',
      submitMes: ''
    })
  }

  handleSubmit = () => {
    if (!this.state.email) {
      this.setState({emailError: 'Email address is required.'})
    } else {
      fetch('http://localhost:3000/feedbacks', {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          message: this.state.message,
          email: this.state.email
        })
      }).then(resp => resp.json()).then(data => {
        this.setState({
          submitMes: data.message,
          firstName: '',
          lastName: '',
          message: '',
          email: '',
          emailError: ''
        })
      })
    }
  }

  contactGo = () => this.props.history.push('/contact')


  render(){
    return(
      <Fragment>
      <img style={{width: '100%', position: 'absolute'}} src={fluff} alt=''/>
      <div className='contact-container'>
        <div className='contact-section'>
          <h1>Feedback...</h1>
          <p style={{width: '50%'}}>Let us know how we're doing, what we can improve and how we can make your experience better. All feedback is respected!</p>
        </div>
        <div className='contact-flex'>
          <div className='contact-left'>
            <span>Or if you'd like, you can...</span>
            <span onClick={this.contactGo}>contact us</span>
          </div>
          <div>
            <form>
              <div className='row first-last ptb-3'>
                <div className='first-name'>
                  <label>First name</label>
                  <input className='promo-apply' name='firstName' placeholder='first' value={this.state.firstName} onChange={this.handleChange}/>
                </div>
                <div className='last-name'>
                  <label>Last name</label>
                  <input className='promo-apply'  name='lastName' placeholder='last' value={this.state.lastName} onChange={this.handleChange}/>
                </div>
              </div>
              <div className='email-column ptb-3'>
                <label>Email</label>
                <input value={this.state.email}  name='email' placeholder='email' className='promo-apply' name='email' onChange={this.handleChange}/>
              </div>
              <div className='email-column ptb-3'>
                <label>Message</label>
                <textarea value={this.state.message}  name='message' placeholder='message...' className='promo-apply' onChange={this.handleChange}/>
              </div>
              <div className='row contact-submit ptb-3'>
                <div>
                  <span className={this.state.submitMes ? 'green' : 'red'}>{this.state.submitMes ? this.state.submitMes : this.state.emailError ? this.state.emailError : null}</span>
                </div>
                <span onClick={this.handleSubmit}>submit</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img style={{width: '100%', transform: 'rotate3d(0, 0, 1, 180deg)', marginBottom:'-3px', marginTop: '-76px'}} src={fur} alt=''/>
      </Fragment>
    )
  }
}

export default withRouter(Feedback)
