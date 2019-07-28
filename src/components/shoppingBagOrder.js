import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {openCheckout} from '../actions/modals'
import {openPaymentPage} from '../actions/checkout'
import {replaceCart} from '../actions/selections'
// import {}
import StripeCheckout from 'react-stripe-checkout';
import logo from "../assets/images/snifflogo.png"
import $ from 'jquery'

class ShoppingBagOrder extends Component {

  state = {
    promoClicked: false
  }

//   componentDidUpdate(prevState) {
//     if (prevState.user !== this.props.user && this.props.user) {
// console.log('maybe');
//       this.props.fetchCart(this.props.user.id)
//     }
//   }

  promoPlusClicked = () => {
    $('.shopping-bag-promo-code').animate({height: '90px'}, 300)
    this.setState({promoClicked: !this.state.promoClicked})
  }
  promoMinusClicked = () => {
    $('.shopping-bag-promo-code').animate({height: '-=50px'}, 300)
    this.setState({promoClicked: !this.state.promoClicked})
  }

  checkingOut = () => {
    if (this.props.user) {
      // either push to the stripe component's route or make a reducer to change status of stripe modal to true
      // this.props.history.push('/checkout/order')
      // this.props.openPaymentPage()
    } else {
      this.props.openCheckout()
    }
  }

  onToken = (token, args) => {

    const soaps = this.props.cart.map(soap => soap.id).join(',')

    console.log(args);
    let charge = {
      email: this.props.user.email,
      amount: this.props.subtotal > 15 ? this.props.subtotal*100 : this.props.total*100,
      description: 'soap purchase',
      currency: 'USD',
      confirmation: Date.now().toString(),
      userId: this.props.user.id,
      soaps: soaps,
      stripeToken: token.id
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
    }).then(resp => resp.json()).then(order => {
      console.log(order);
      // if (order.ok) {
        this.props.history.push('/order-confirmation', {confirmation: order.confirmation, total: order.total})
        this.props.replaceCart([])
      // } else {

      // }
    })
        // this.props.replaceCart()
    // })
    // .then(resp => resp.json()).then(data => {
      // console.log(Response());
      // if(Response().ok) {
        // console.log('ok');
// patch req for each soap and change cart_id to null

        // post to orders db with soaps and random confirmation number, then
        // delete soaps from user's cart if logged in but don't delete soaps or cart_id from soaps in soap db, then
        // redirect to thank you/confirmation page with conf number page
      // } else {
// console.log('not ok');
      // }
    // })

  }

  render(){
    return(
      <div className='shopping-bag-order'>
        <div className='shopping-bag-order-summary'>
          <div className='shopping-bag-order-summary-title'>Order Summary</div>
          <div className='subtotal-shipping'>
            <div className='spread'>
              <span>Subtotal</span>
              <span>${this.props.subtotal}</span>
            </div>
            <div className='spread'>
              <span>Estimated Shipping</span>
              <span>{this.props.subtotal > 0 ? this.props.subtotal > 15 ? 'Free Shipping' : '$4.50' : '$0.00'}</span>
            </div>
          </div>
          <hr style={{color: '#ccc'}}/>
          <div className='order-est-total spread'><span>Estimated Total</span><span>${this.props.subtotal > 0 ? this.props.subtotal > 15 ? this.props.subtotal : this.props.total : '0.00'}</span></div>
        </div>
        <div className='shopping-bag-promo-code'>
          <div style={{padding: '10px'}}>
            <span>Apply Promo Code</span>
            {this.state.promoClicked ? <i onClick={this.promoMinusClicked} className="fas fa-minus promo-minus"></i> : <i onClick={this.promoPlusClicked} className="fas fa-plus promo-plus"></i> }
          </div>
          <div className='promo-input'>
            <input className='promo-apply'/>
            <div>APPLY</div>
          </div>
        </div>
        <div className='shopping-bag-checkout-btn'>
        {
          this.props.user ?
          <StripeCheckout
            stripeKey="pk_test_07Kgp8Tbt6abc5kUxCD1PyHj00aC3prdqq"
            token={this.onToken}
            email={this.props.user.email}
            shippingAddress
            billingAddress={false}
            zipCode={false}
            currency="USD"
            panelLabel="Give Money"
            image={logo}
            description="soap stuff"
            name="sniff. soaps"
            amount={this.props.subtotal > 15 ? this.props.subtotal*100 : this.props.total*100 }
          >
          <div onClick={this.checkingOut} className='main-checkout-btn'>CHECKOUT</div>
          </StripeCheckout>
          :
          <div onClick={this.checkingOut} className='main-checkout-btn'>CHECKOUT</div>
        }
        </div>
        <div className='shopping-bag-third-parties'>
          <div className='third-parties-co-with'>
            <span className='third-parties-border'></span>
            <span className='third-parties-border-co'>OR CHECKOUT WITH</span>
          </div>
          <div style={{textAlign: 'center', border: '1px solid black',margin: '27px 0 18px', position: 'relative'}}>
            <span>Paypal</span>
          </div>
        </div>
      </div>
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
export default withRouter(connect(mapStateToProps, {openCheckout, openPaymentPage, replaceCart})(ShoppingBagOrder))
