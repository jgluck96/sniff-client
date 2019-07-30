import React, {Component} from 'react'
// import {connect} from 'react-redux'
import $ from 'jquery'

class Coupon extends Component {

  removeCoupon = () => $('.coupon').remove()

  render(){
    return(
      <div className='coupon'>
        <div className='coupon-slider'>
          <span>Free shipping on all orders over $15!</span>
          <span>Use promo code SNIFF19 for 10% OFF this summer</span>
        </div>
        <i style={{position: 'absolute', right: '5px'}} onClick={this.removeCoupon} className="fas fa-times remove-item"></i>
      </div>
    )
  }
}

export default Coupon
