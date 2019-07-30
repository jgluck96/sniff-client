import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
import CheckoutContainer from '../containers/checkoutContainer'
import ShoppingBagOrder from '../components/shoppingBagOrder'
import CheckoutCar from '../containers/checkoutCar'
// import {addFrag, removeFrag} from '../actions/selections'
// import $ from 'jquery'
let guestinfo = ''
class Checkout extends Component {

  // state = {
  //
  // }


  render(){
    return(
      <Fragment>
      <div className='shopping-bag-container'>
        <div className='shopping-bag-content-order'>
          <CheckoutContainer/>
          <ShoppingBagOrder/>
        </div>
      </div>

          <CheckoutCar />

      </Fragment>
    )
  }
}

export default Checkout
