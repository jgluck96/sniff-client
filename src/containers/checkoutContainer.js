import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {replaceCart} from '../actions/selections'
import {guestinfo} from '../actions/users'
import {guestCo} from '../actions/checkout'
import CheckoutItem from '../components/checkoutItem'
import {StripeProvider} from 'react-stripe-elements';
import PaymentForm from '../components/paymentForm';
import Stripe from '../pages/stripe'
// import {withRouter} from 'react-router'

class CheckoutContainer extends Component {

  state = {
    first_name: '',
    last_name: '',
    street_address: '',
    city: '',
    state: '',
    zipcode: '',
    apt: '',
    email: '',
    phone: '',
    feedback: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.props.guestinfo(this.state))

  }

  render(){
    return(
      <div className='checkout-content'>
      {this.props.guestco ?
        <Fragment>
        <span className='back-to-cart' onClick={() => this.props.guestCo(false)}>Back to cart</span>
        <form style={{marginTop: '12px'}}>
          <div className='row first-last'>
            <div className='first-name'>
              <label>First Name</label >
              <input className='promo-apply' name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
            </div>
            <div className='last-name'>
              <label>Last Name</label >
              <input className='promo-apply' name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
            </div>
          </div>
          <div className='email-column'>
            <label>Email</label >
            <input className='promo-apply' name="email" id='email-column' value={this.state.email} onChange={this.handleChange}/>
          </div>
          <h4>Shipping Address</h4>
          <div className='row first-last'>
            <div style={{width: '70%'}} className='pass-column'>
              <label>Street address</label >
              <input className='promo-apply' name="street_address" value={this.state.street_address} onChange={this.handleChange}/>
            </div>
            <div style={{width: '20%'}} className='pass-column'>
              <label>apt</label >
              <input className='promo-apply' name="apt" value={this.state.apt} onChange={this.handleChange}/>
            </div>
          </div>
          <div className='row first-last'>
            <div className='pass-column'>
              <label>City</label >
              <input className='promo-apply' name="city" value={this.state.city} onChange={this.handleChange}/>
            </div>
            <div className='pass-column'>
              <label>State</label >
              <input className='promo-apply' name="state" value={this.state.state} onChange={this.handleChange}/>
            </div>
            <div className='pass-column'>
              <label>Zipcode</label >
              <input className='promo-apply' name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
            </div>
          </div>
          <div className='pass-column'>
            <label>Phone number</label >
            <input className='promo-apply' name="phone" value={this.state.phone} onChange={this.handleChange}/>
          </div>
          <div className='feedback-column'>
            <label>How did you hear about us?</label >
            <select className='feedback-select' name="feedback" value={this.state.feedback} onChange={this.handleChange}>
              <option hidden selected> -- select an option -- </option>
              <option>from a friend</option>
              <option>google</option>
              <option>on a flyer</option>
              <option>someone I follow on social media</option>
              <option>other</option>
            </select>
          </div>
        </form>
        </Fragment>
        :
        <Fragment>
        <div className='title' style={{fontWeight: '500'}}>Sniff. Bag ({this.props.cart.length})</div>
          {
            this.props.cart.length > 0 ?
            <Fragment>
            {
              this.props.cart.map(checkoutItem => {
              return <CheckoutItem  key={Math.random()} checkoutItem={checkoutItem}/>
              })
            }
            </Fragment>
            :
            <div className='checkout-item'>
              Your shopping bag is empty.
            </div>
          }
          </Fragment>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    paymentPage: state.checkout,
    guestco: state.guestco
  }
}

export default connect(mapStateToProps, {replaceCart, guestinfo, guestCo})(CheckoutContainer)
