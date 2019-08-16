import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutCar from '../containers/checkoutCar'

class Confirmation extends Component {

  state = this.props.location.state

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div style={{paddingTop: '90px'}}>
      { this.state ?
        <div style={{paddingLeft: '85px', paddingRight: '85px', maxWidth: '1025px'}}>
          <h1>Thank you for your order!</h1>
          <div style={{fontSize: '20px'}}>Your order confirmation number is: #{this.state.confirmation}</div>
          <div>Total: ${(parseFloat(this.state.total)/100).toFixed(2)}</div>
          <h3>Shipping Address</h3>
          <div>{this.state.address}</div>
        </div>
        :
        <div style={{padding: '80px'}}>404, go buy soap
        </div>
      }
        <CheckoutCar />
      </div>
    )
  }
}

export default Confirmation
