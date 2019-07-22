import React, {Component} from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import Modal from '../components/modal'

// <StripeCheckout
//   stripeKey="pk_test_07Kgp8Tbt6abc5kUxCD1PyHj00aC3prdqq"
//   token={this.onToken}
// />
// import {Elements, StripeProvider} from 'react-stripe-elements'
// import PaymentForm from '../components/paymentForm'
// import {addFrag, removeFrag} from '../actions/selections'
// import $ from 'jquery'

class Stripe extends Component {

  onToken = (token, addresses) => {
    console.log(token);
    console.log(addresses);
    let charge = {
      email: this.props.user.email,
      amount: this.props.subtotal > 15 ? this.props.subtotal : this.props.total,
      description: 'soap purchase',
      currency: 'USD',
      token: token
    }
    fetch('http://localhost:3000/charges', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        charge: charge
      })
    }).then(console.log)
  }


  render(){
    return(
      <Modal>
      <StripeCheckout
        stripeKey="pk_test_07Kgp8Tbt6abc5kUxCD1PyHj00aC3prdqq"
        token={this.onToken}
      />
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user,
    total: (() => {
      let subtotal = 0;
      for(let i=0; i<state.cart.length; i++) {
        const floatt = parseFloat(state.cart[i].price);
        subtotal+=floatt
      }
      return (parseFloat(subtotal) + 4.50).toFixed(2)
    })(),
    subtotal: (() => {
      let subtotal = 0;
      for(let i=0; i<state.cart.length; i++) {
        const floatt = parseFloat(state.cart[i].price);
        subtotal+=floatt
      }
      return subtotal.toFixed(2)
    })()
  }
}

export default connect(mapStateToProps, null)(Stripe)
