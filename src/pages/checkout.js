import React, {Component} from 'react'
// import {connect} from 'react-redux'
import CheckoutContainer from '../containers/checkoutContainer'
import ShoppingBagOrder from '../components/shoppingBagOrder'
// import {addFrag, removeFrag} from '../actions/selections'
// import $ from 'jquery'

class Checkout extends Component {
  render(){
    return(
      <div className='shopping-bag-container'>
        <div className='shopping-bag-content-order'>
          <CheckoutContainer />
          <ShoppingBagOrder />
        </div>
      </div>
    )
  }
}

export default Checkout
