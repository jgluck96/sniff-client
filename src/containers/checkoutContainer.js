import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {replaceCart} from '../actions/selections'
import CheckoutItem from '../components/checkoutItem'
import {StripeProvider} from 'react-stripe-elements';
import PaymentForm from '../components/paymentForm';
import Stripe from '../pages/stripe'

class CheckoutContainer extends Component {

  // componentDidUpdate(prevState) {
  //   if (prevState.) {
  //
  //   }
  // }

  render(){
    return(
      <div className='checkout-content'>
      {this.props.paymentPage ?

        <Stripe />

        :

        <Fragment>
        <div className='title' style={{fontWeight: '500'}}>Sniff. Bag ({this.props.cart.length})</div>
        {
          this.props.cart.map(checkoutItem => {
          return <CheckoutItem  key={Math.random()} checkoutItem={checkoutItem}/>
          })
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
    paymentPage: state.checkout
  }
}

export default connect(mapStateToProps, {replaceCart})(CheckoutContainer)
