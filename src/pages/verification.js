import React, {Component} from 'react'
import {updateUser} from '../actions/users'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class Verify extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  state = {
    email: '',
    temp: '',
    password: '',
    wrongEmail: '',
    wrongTemp: '',
    emptyError: '',
    passtest: ''
  }

  submitHandler = () => {
    const passtest = this.state.password.length >= 6
    if (!this.state.email || !this.state.password || !this.state.temp) {
      this.setState({emptyError: 'This field is required.'})
    }
    if (!passtest) {
      this.setState({passtest: 'Enter a valid password.'})
    }

    if (passtest && !this.state.emptyError && !this.state.wrongTemp) {
      fetch(`http://localhost:3000/verify`, {
        method: 'POST',
        headers: {
          "Accepts": "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({password: this.state.password, email: this.state.email, temp: this.state.temp, verified: true})
      }).then(resp => resp.json()).then(user => {
        if (user.error) {
          this.setState({wrongTemp: user.error})
        } else {
          console.log(user);
          this.props.updateUser(user)
          this.props.history.push('/')
        }
      })
    }

  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      wrongEmail: '',
      emptyError: '',
      passtest: '',
      wrongTemp: ''
    })
  }

  render(){
    return(
      <div style={{paddingTop: '75px'}}>
        <div>
          <h1>Account Verification</h1>
          <div className='signup-error'>{this.state.email && this.state.password && this.state.wrongTemp ? this.state.wrongTemp : ''}</div>
          <div className='column verification'>
            <label>Email</label>
            <input name='email' onChange={this.changeHandler} value={this.state.email}/>
            <span>{!this.state.email && this.state.emptyError ? this.state.emptyError : ''}</span>
          </div>
          <div className='column verification'>
            <label>Temporary Password</label>
            <input name='temp' type='password' onChange={this.changeHandler} value={this.state.temp}/>
            <span>{!this.state.temp && this.state.emptyError ? this.state.emptyError : ''}</span>
          </div>
          <div className='column verification'>
            <label>New Password (min. 6 characters)</label>
            <input name='password' type='password' onChange={this.changeHandler} value={this.state.password}/>
            <span>{!this.state.password && this.state.emptyError ? this.state.emptyError : this.state.passtest ? this.state.passtest : ''}</span>
          </div>
          <div onClick={this.submitHandler} className='nav-login'>submit</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, {updateUser})(Verify))
