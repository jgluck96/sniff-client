import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../actions/users'
import $ from 'jquery'

class Settings extends Component {

  state = {
    nameClicked: false,
    emailClicked: false,
    phoneClicked: false,
    email: '',
    mobile: '',
    first_name: '',
    last_name: ''
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        email: this.props.user.email,
        mobile: this.props.user.mobile,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name
      })
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.props.user) {
      this.setState({
        email: this.props.user.email,
        mobile: this.props.user.mobile,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name
      })
    }

  }

  // scroll = (e) => {
  //   switch (e.target.id) {
  //     case 'name-edit':
  //     $('html, body').animate({
  //           scrollTop: $("#edit-name").offset().top + 110
  //         }, 800)
  //         break
  //     case 'email-edit':
  //     $('html, body').animate({
  //           scrollTop: $("#edit-email").offset().top + 110
  //         }, 800)
  //         break
  //     case 'number-edit':
  //     $('html, body').animate({
  //           scrollTop: $("#edit-number").offset().top + 110
  //         }, 800)
  //       break;
  //     default:
  //   }
  // }

  expand = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'edit-name-change':
        if (this.state.nameClicked) {
          $('.edit-name-container').animate({height: '-=70px'}, 400)
          $('#name-edit').css('border-left', '5px solid transparent')
        } else {
          $('#name-edit').css('border-left', '5px solid cornflowerblue')
          $('.edit-name-container').animate({height: '90px'}, 400)
        }
        this.setState({nameClicked: !this.state.nameClicked})
      break
      case 'edit-email-change':
        if (this.state.emailClicked) {
          $('.edit-email-container').animate({height: '-=70px'}, 400)
          $('#email-edit').css('border-left', '5px solid transparent')
        } else {
          $('#email-edit').css('border-left', '5px solid cornflowerblue')
          $('.edit-email-container').animate({height: '90px'}, 400)
        }
        this.setState({emailClicked: !this.state.emailClicked})
      break
      case 'edit-phone-change':
        if (this.state.phoneClicked) {
          $('#number-edit').css('border-left', '5px solid transparent')
          $('.edit-phone-container').animate({height: '-=70px'}, 400)
        } else {
          $('#number-edit').css('border-left', '5px solid cornflowerblue')

          $('.edit-phone-container').animate({height: '90px'}, 400)
        }
        this.setState({phoneClicked: !this.state.phoneClicked})
      break
      default:

    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    $('.checkmark').css('display', 'none')
  }

  submitHandler = (e) => {
    let name;
    let value;
    let check;
    switch (e.target.id) {
      case 'first_name': value=this.state.first_name; name=e.target.id; check='name-check'; break;
      case 'last_name': value=this.state.last_name; name=e.target.id; check='name-check'; break;
      case 'email': value=this.state.email; name=e.target.id; check='email-check'; break;
      case 'mobile': value=this.state.mobile; name=e.target.id; check='mobile-check'; break;
      default:
    }
    const objUpdate = {}
    objUpdate[name] = value
    // console.log(objUpdate);
    // console.log(value);
    // console.log(e.target.id);
    if (value) {
      fetch(`http://localhost:3000/users/${this.props.user.id}`, {
        method: 'PATCH',
        headers: {
          "Accepts": "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify(objUpdate)
      }).then(resp=>resp.json()).then(user => {
        this.props.updateUser(user)
        $('#'+check).css('display', 'block')
        setTimeout(() => $('#'+check).css('display', 'none'), 1500)
      })
    }
  }

  render(){
    return(
      <div className='account-orders'>
        <div className='settings-left'>
          <span onClick={this.scroll} id='name-edit'>Edit my full name</span>
          <span onClick={this.scroll} id='email-edit'>Edit my email address</span>
          <span onClick={this.scroll} id='number-edit'>Edit my phone number</span>
        </div>
        <div className='settings-right'>
          <div id='edit-name'>
            <h2 style={{marginBottom: '10px'}}>Full Name</h2>
            <div className='edit-name-container'>
              <div className='edit-name-section'>
                <div style={{color: 'rgba(0,0,0,0.7)'}}>Edit the name on your account</div>
                <span onClick={this.expand}  id='edit-name-change' className='edit-btn'>{!this.state.nameClicked ? 'Change' : 'Close'}</span>
              </div>
              <div className='edit-input'>
                <div>
                  <input placeholder={this.state.first_name ? '' : 'first name'} name='first_name' onChange={this.changeHandler} style={{width: '80%', height: '20px', padding: '5px 10px'}} className='form-control' value={this.state.first_name}/>
                  <span onClick={this.submitHandler} id='first_name'>save</span>
                </div>
                <div>
                  <input placeholder={this.state.last_name ? '' : 'last name'}  name='last_name' onChange={this.changeHandler} style={{width: '80%', height: '20px', padding: '5px 10px'}} className='form-control' value={this.state.last_name}/>
                  <span onClick={this.submitHandler} id='last_name'>save</span>
                </div>
                <div className='check-container'>
                  <svg id='name-check' class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div id='edit-email'>
            <h2 style={{marginBottom: '10px'}}>Email Address</h2>
            <div className='edit-email-container'>
              <div className='edit-email-section'>
                <div style={{color: 'rgba(0,0,0,0.7)'}}>Change the email address on your account</div>
                <span onClick={this.expand} id='edit-email-change' className='edit-btn'>{!this.state.emailClicked ? 'Change' : 'Close'}</span>
              </div>
              <div className='edit-input'>
                <div>
                  <input placeholder={this.state.email ? '' : 'email'} name='email' onChange={this.changeHandler} style={{width: '80%', height: '20px', padding: '5px 10px'}} className='form-control' value={this.state.email}/>
                  <span onClick={this.submitHandler} id='email'>save</span>
                </div>
                <div className='check-container'>
                  <svg id='email-check' class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div id='edit-number'>
            <h2 style={{marginBottom: '10px'}}>Phone Number</h2>
            <div className='edit-phone-container'>
              <div className='edit-phone-section'>
                <div style={{color: 'rgba(0,0,0,0.7)'}}>Add or remove a phone number on your account</div>
                <span onClick={this.expand} id='edit-phone-change' className='edit-btn'>{!this.state.phoneClicked ? 'Change' : 'Close'}</span>
              </div>
              <div className='edit-input'>
                <div>
                  <input placeholder={this.state.mobile ? '' : 'phone number'} name='mobile' onChange={this.changeHandler} style={{width: '80%', height: '20px', padding: '5px 10px'}} className='form-control' value={this.state.mobile}/>
                  <span onClick={this.submitHandler} id='mobile'>save</span>
                </div>
                <div className='check-container'>
                  <svg id='mobile-check' class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, {updateUser})(Settings)
