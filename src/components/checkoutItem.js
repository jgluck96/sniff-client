import React, {Component} from 'react'
// import {connect} from 'react-redux'

class CheckoutItem extends Component {
  render(){
    return(
      <div className='checkout-item'>
        <div className='checkout-item-img'>
          sniff.
        </div>
        <div className='checkout-item-content'>
          <div className='checkout-item-content-data'>
            <span style={{fontWeight:'500', fontSize:'14px', textTransform: 'uppercase', marginBottom: '25px'}}>{this.props.checkoutItem.base}</span>
            <span style={{fontWeight:'500', fontSize:'13px'}}>Scents: <span style={{fontSize:'13px', color:'#585858'}}>{this.props.checkoutItem.fragrance3 ? this.props.checkoutItem.fragrance1 + ', '+ this.props.checkoutItem.fragrance2 + ', '+ this.props.checkoutItem.fragrance3 : this.props.checkoutItem.fragrance2 ? this.props.checkoutItem.fragrance1 + ', '+ this.props.checkoutItem.fragrance2 : this.props.checkoutItem.fragrance1}</span></span>
            <span style={{fontWeight:'500', fontSize:'13px'}}>Add-on: <span style={{fontSize:'13px', color:'#585858'}}>{this.props.checkoutItem.addon}</span></span>
          </div>
          <div className='checkout-item-right'>
            <div className='number-input'>
              <button onClick={this.decrement} ></button>
              <input className='quantity' onChange={this.quantity} min='0' type='number' value={this.props.checkoutItem.quantity}/>
              <button onClick={this.increment} type='button' className='plus'></button>
            </div>
            <span style={{fontWeight:'500', fontSize:'13px'}}>${this.props.checkoutItem.price}</span>
          </div>
          <i class="fas fa-times"></i>
        </div>
      </div>
    )
  }
}

export default CheckoutItem
