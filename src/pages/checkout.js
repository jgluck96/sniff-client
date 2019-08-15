import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
import CheckoutContainer from '../containers/checkoutContainer'
import ShoppingBagOrder from '../components/shoppingBagOrder'
import CheckoutCar from '../containers/checkoutCar'
// import {addFrag, removeFrag} from '../actions/selections'
// import $ from 'jquery'
let guestinfo = ''
class Checkout extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  state = {
    errors: ''
  }

  setErrors = (error) => this.setState({errors: error});

  render(){
    return(
      <Fragment>
      <div className='shopping-bag-container'>
        <div className='shopping-bag-content-order'>
          <CheckoutContainer clear={this.setErrors} errors={this.state.errors}/>
          <ShoppingBagOrder errors={this.setErrors}/>
        </div>
      </div>
      <CheckoutCar />
      </Fragment>
    )
  }
}

export default Checkout
