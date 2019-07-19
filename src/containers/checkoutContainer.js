import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutItem from '../components/checkoutItem'

class CheckoutContainer extends Component {
  render(){
    return(
      <div className='checkout-content'>
        <div className='title' style={{fontWeight: '500'}}>Sniff. Bag ({this.props.cart.length})</div>
        {
          this.props.cart.map(checkoutItem => {
          return <CheckoutItem checkoutItem={checkoutItem}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CheckoutContainer)
