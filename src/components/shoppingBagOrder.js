import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {openCheckout} from '../actions/modals'
import {openPaymentPage} from '../actions/checkout'
import {updateUser} from '../actions/users'
import {replaceCart} from '../actions/selections'
import { PayPalButton } from "react-paypal-button-v2";

import StripeCheckout from 'react-stripe-checkout';
import logo from "../assets/images/pinwheel.png"
import $ from 'jquery'

class ShoppingBagOrder extends Component {

  state = {
    promoClicked: false,
    promoApproved: true,
    promoInput: '',
    promoValidation: 'SNIFF19',
    promoSubmitted: false
  }

  componentDidMount() {
    if (this.props.cart.length < 1) {
      $('.shopping-bag-order').css('pointer-events', 'none')
    } else {
      $('.shopping-bag-order').css('pointer-events', 'all')
    }
  }

  componentDidUpdate() {
    if (this.props.cart.length < 1) {
      $('.shopping-bag-order').css('pointer-events', 'none')
    } else {
      $('.shopping-bag-order').css('pointer-events', 'all')
    }
  }

  promoPlusClicked = () => {
    $('.shopping-bag-promo-code').animate({height: '100px'}, 300)
    this.setState({promoClicked: !this.state.promoClicked})
  }
  promoMinusClicked = () => {
    $('.shopping-bag-promo-code').animate({height: '-=60px'}, 300)
    this.setState({promoClicked: !this.state.promoClicked})
  }

  checkingOut = () => {
    if (this.props.guestco) {
        this.props.errors('Please fill out required fields')
      // either push to the stripe component's route or make a reducer to change status of stripe modal to true
      // this.props.history.push('/checkout/order')
      // this.props.openPaymentPage()
    } else {
      this.props.openCheckout()
    }
  }

  onToken = (token, args) => {
    if (this.props.guestco) {

      if (this.props.cart.length > 0) {
        // const localSoap = JSON.parse(localStorage.getItem('recentlyAdded'))

          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              "Accepts": "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              first_name: this.props.guestinfo.first_name,
              last_name: this.props.guestinfo.last_name,
              email: this.props.guestinfo.email,
              phone: this.props.guestinfo.phone,
              verified: false,
              feedback: this.props.guestinfo.feedback,
              guest: true
            })
          }).then(resp=>resp.json()).then(user => {
            console.log(user);
            this.props.cart.map(localsoap => {
              fetch('http://localhost:3000/soaps', {
                method: 'POST',
                headers: {
                  'Accepts': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  base: localsoap.base,
                  fragrance1: localsoap.fragrance1,
                  fragrance2: localsoap.fragrance2,
                  fragrance3: localsoap.fragrance3,
                  addon: localsoap.addon,
                  quantity: localsoap.quantity,
                  price: localsoap.price,
                  cart_id: user.cart.id
                })
              })
            })
            fetch('http://localhost:3000/soaps', {
              method: 'GET',
              headers: {
                'Accepts': 'application/json',
                'Content-type': 'application/json'
              }}).then(resp => resp.json()).then(soaps => {
                const cartlen = this.props.cart.length
                const returnSoaps = soaps.slice(-cartlen).map(soap => soap.id).join(',')
                let charge = {
                  email: this.props.guestinfo.email,
                  amount: this.state.promoSubmitted ? this.props.subtotal > 15 ? ((this.props.subtotal*.9)*100).toFixed(0) : ((this.props.total*.9)*100).toFixed(0) : this.props.subtotal > 15 ? (this.props.subtotal*100).toFixed(0) : (this.props.total*100).toFixed(0),
                  description: 'soap purchase',
                  currency: 'USD',
                  confirmation: Date.now().toString(),
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
                    fetch('http://localhost:3000/guestorders', {
                      method: 'POST',
                      headers: {
                        'Accepts': 'application/json',
                        'Content-type': 'application/json'
                      },
                      body: JSON.stringify(
                        Object.assign({}, this.props.guestinfo,{confirmation: Date.now().toString(), soaps: returnSoaps, price: this.state.promoSubmitted ? this.props.subtotal > 0 ? this.props.subtotal > 15 ? (this.props.subtotal*.9).toFixed(2) : (this.props.total*.9).toFixed(2) : 0.00 : this.props.subtotal > 0 ? this.props.subtotal > 15 ? this.props.subtotal : this.props.total : 0.00})
                      )
                    }).then(resp => resp.json()).then(order2 =>{
                      console.log(order2);
                      this.props.history.push('/order-confirmation', {confirmation: order2.confirmation, address: `${order2.street_address} ${order2.apt}, ${order2.city}, ${order2.state} ${order2.zipcode}`, total: order2.price*100})
                      localStorage.removeItem('recentlyAdded')
                      this.props.replaceCart([])
                    })
                    // } else {

                      // }
                    })
                  })
          })



      }


    } else {
      const soaps = this.props.cart.map(soap => soap.id).join(',')

      let charge = {
        email: this.props.user.email,
        amount: this.state.promoSubmitted ? this.props.subtotal > 15 ? ((this.props.subtotal*.9)*100).toFixed(0) : ((this.props.total*.9)*100).toFixed(0) : this.props.subtotal > 15 ? (this.props.subtotal*100).toFixed(0) : (this.props.total*100).toFixed(0),
        description: 'soap purchase',
        currency: 'USD',
        confirmation: Date.now().toString(),
        userId: this.props.user.id,
        soaps: soaps,
        address: this.address(args),
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
        this.props.updateUser(order.user)
          this.props.history.push('/order-confirmation', {confirmation: order.order.confirmation, address: order.order.address, total: parseFloat(order.order.total)*100})
          this.props.replaceCart([])
        // } else {

        // }
      })
    }

  }

  address = (metadata) => {
    return `${metadata.shipping_address_line1}, ${metadata.shipping_address_city}, ${metadata.shipping_address_state} ${metadata.shipping_address_zip} ${metadata.shipping_address_country}`
  }

  promoInput = (e) => {
    const input = e.target.value
    this.setState({promoInput: input.toUpperCase(), promoApproved: true})
  }

  promoSubmit = () => {
    if (this.state.promoInput === this.state.promoValidation) {
      this.setState({promoApproved: true, promoSubmitted: true})
    } else {
      this.setState({promoApproved: false})
    }
  }

  errorCheck = () => {
    if (this.props.guestinfo.first_name && this.props.guestinfo.last_name && this.props.guestinfo.street_address && this.props.guestinfo.city && this.props.guestinfo.state && this.props.guestinfo.zipcode && this.props.guestinfo.email && this.props.guestinfo.feedback) {
      console.log(this.props.guestinfo.street_address);
      return true
    }
    return false
  }

  render(){
    console.log(this.errorCheck())
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
          {this.state.promoSubmitted ? <div className='order-est-total spread' style={{color: 'green', fontSize: '13px'}}><span>Promo Applied:</span><span>-${this.props.subtotal > 15 ? (this.props.subtotal*.1).toFixed(2) : (this.props.total*.1).toFixed(2)}</span></div> : null}
          <div className='order-est-total spread'><span>Estimated Total</span><span>${this.state.promoSubmitted ? this.props.subtotal > 0 ? this.props.subtotal > 15 ? (this.props.subtotal*.9).toFixed(2) : (this.props.total*.9).toFixed(2) : '0.00' : this.props.subtotal > 0 ? this.props.subtotal > 15 ? this.props.subtotal : this.props.total : '0.00'}</span></div>
        </div>
        <div className='shopping-bag-promo-code'>
          <div style={{padding: '10px'}}>
            <span>Apply Promo Code</span>
            {this.state.promoClicked ? <i onClick={this.promoMinusClicked} className="fas fa-minus promo-minus"></i> : <i onClick={this.promoPlusClicked} className="fas fa-plus promo-plus"></i> }
          </div>
          <div className='promo-input'>
            <input style={{width: '55%'}} className='promo-apply' onChange={this.promoInput} value={this.state.promoInput} placeholder='PROMO CODE'/>
            <div onClick={this.promoSubmit} style={{cursor: 'pointer'}}>APPLY</div>
          </div>
          {this.state.promoApproved ? '' : <span className='promo-error'>Promo code {this.state.promoInput} doesn't exist</span>}
        </div>
        <div className='shopping-bag-checkout-btn'>
        {
          this.props.user &&  this.props.subtotal > 0?
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE}
            token={this.onToken}
            email={this.props.user.email}
            shippingAddress={true}
            billingAddress={true}
            zipCode={true}
            currency="USD"
            panelLabel="Pay"
            image={logo}
            description="Custom soap"
            name="sniff. soaps"
            amount={this.state.promoSubmitted ? this.props.subtotal > 15 ? ((this.props.subtotal*.9)*100).toFixed(2) : ((this.props.total*.9)*100).toFixed(2) :  this.props.subtotal > 15 ? (this.props.subtotal*100).toFixed(2) : (this.props.total*100).toFixed(2) }
          >
          <div className='main-checkout-btn'>CHECKOUT</div>
          </StripeCheckout>
          :

          this.props.guestco && this.errorCheck() ?
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE}
            token={this.onToken}
            shippingAddress={false}
            billingAddress={false}
            zipCode={false}
            currency="USD"
            panelLabel="Pay"
            image={logo}
            description="Custom soap"
            name="sniff. soaps"
            amount={this.state.promoSubmitted ? this.props.subtotal > 15 ? ((this.props.subtotal*.9)*100).toFixed(2) : ((this.props.total*.9)*100).toFixed(2) :  this.props.subtotal > 15 ? (this.props.subtotal*100).toFixed(2) : (this.props.total*100).toFixed(2) }
          >
          <div className='main-checkout-btn'>CHECKOUT</div>
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
          <div style={{height: '40px', overflow: 'hidden', pointerEvents: 'none'}}>
          <PayPalButton
            amount="0.01"
            onSuccess={(details, data) => data}
          />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    guestco: state.guestco,
    guestinfo: state.guestinfo,
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
export default withRouter(connect(mapStateToProps, {openCheckout, openPaymentPage, updateUser, replaceCart})(ShoppingBagOrder))
