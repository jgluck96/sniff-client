import React, {Component} from 'react'
import {connect} from 'react-redux'
import {replaceCart} from '../actions/selections'
import CheckoutItem from '../components/checkoutItem'

class CheckoutContainer extends Component {

  // componentDidUpdate(prevState) {
  //   if (prevState.) {
  //
  //   }
  // }

  render(){
    return(
      <div className='checkout-content'>
        <div className='title' style={{fontWeight: '500'}}>Sniff. Bag ({this.props.cart.length})</div>
        {
          this.props.cart.map(checkoutItem => {
          return <CheckoutItem  key={Math.random()} checkoutItem={checkoutItem}/>
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

export default connect(mapStateToProps, {replaceCart})(CheckoutContainer)
