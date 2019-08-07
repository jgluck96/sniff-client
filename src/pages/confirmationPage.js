import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutCar from '../containers/checkoutCar'

class Confirmation extends Component {

  state = this.props.location.state

  render(){
    return(
      <div style={{paddingTop: '90px'}}>
        <div style={{margin: '50px'}}>
          <h1>Thank you for your order!</h1>
          <div style={{fontSize: '20px'}}>Your order confirmation number is: #{this.state.confirmation}</div>
          <div>Total: ${(parseFloat(this.state.total)/100).toFixed(2)}</div>
        </div>
        <CheckoutCar />
      </div>
    )
  }
}

export default Confirmation
