import React, {Component} from 'react'
// import {connect} from 'react-redux'

class MinibagItem extends Component {
  render(){
    console.log(this.props.minibagItem);
    return(
      <div className='mini-bag-item'>
        <div className='mini-bag-item-img'>
          sniff.
        </div>
        <div className='mini-bag-item-content'>
          <span style={{fontWeight:'500', fontSize:'15px', textTransform: 'uppercase'}}>{this.props.minibagItem.base}</span>
          <span style={{fontWeight:'500', fontSize:'14px'}}>Quantity: {this.props.minibagItem.quantity}</span>
          <span style={{fontWeight:'500', fontSize:'14px'}}>${this.props.minibagItem.price}</span>
          <div className='mini-bag-item-content-bottom'>
            <span style={{fontWeight:'500', fontSize:'14px'}}>Scents: <span style={{fontSize:'15px', color:'#585858'}}>{this.props.minibagItem.fragrance3 ? this.props.minibagItem.fragrance1 + ', '+ this.props.minibagItem.fragrance2 + ', '+ this.props.minibagItem.fragrance3 : this.props.minibagItem.fragrance2 ? this.props.minibagItem.fragrance1 + ', '+ this.props.minibagItem.fragrance2 : this.props.minibagItem.fragrance1}</span></span>
            <span style={{fontWeight:'500', fontSize:'14px'}}>Add-on: <span style={{fontSize:'15px', color:'#585858'}}>{this.props.minibagItem.addon}</span></span>

          </div>
        </div>
      </div>
    )
  }
}

export default MinibagItem
