import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openCheckout} from '../actions/modals'
import $ from 'jquery'

class ShoppingBagOrder extends Component {

  state = {
    promoClicked: false
  }

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
    } else {
      this.props.openCheckout()
    }
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
          <div onClick={this.checkingOut} className='main-checkout-btn'>CHECKOUT</div>
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
export default connect(mapStateToProps, {openCheckout})(ShoppingBagOrder)
