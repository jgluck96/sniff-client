import React, {Component} from 'react'
import {connect} from 'react-redux'

class Confirmation extends Component {

  state = this.props.location.state

  render(){
    console.log(this.state);
    return(
      <div style={{padding: '80px'}}>
        <h1>Thank you for your oder!</h1>
        <div>Your order confirmation number is: #{this.state.confirmation}</div>
        <div>Total: ${(parseFloat(this.state.total)/100).toFixed(2)}</div>
      </div>
    )
  }
}

export default Confirmation
