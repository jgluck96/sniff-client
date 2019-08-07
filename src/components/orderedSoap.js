import React, {Component} from 'react'
import {connect} from 'react-redux'
// import $ from 'jquery'
import {addToCart, addBase, clearSubtotal, clearFrags, removeFrag, addAddon} from '../actions/selections'
import {openMinibag} from '../actions/modals'
const uuidv1 = require('uuid/v1');

class OrderedSoap extends Component {

  state = {
    quantity: 1
  }

  addToCart = () => {
    const scents = (this.props.soap.fragrance3 ? this.props.soap.fragrance1 + ', '+ this.props.soap.fragrance2 + ', '+ this.props.soap.fragrance3 : this.props.soap.fragrance2 ? this.props.soap.fragrance1 + ', '+ this.props.soap.fragrance2 : this.props.soap.fragrance1).split(', ')
    if (this.props.user) {
      fetch('http://localhost:3000/soaps', {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          base: this.props.soap.base,
          fragrance1: scents.length >= 1 ? scents[0] : '',
          fragrance2: scents.length >= 2 ? scents[1] : '',
          fragrance3: scents.length === 3 ? scents[2] : '',
          addon: this.props.soap.addon,
          quantity: this.state.quantity,
          price: this.props.soap.price,
          user_id: this.props.user.id,
          cart_id: this.props.user.cart.id
        })
      }).then(resp => resp.json()).then(soap => {
        const currentSoap = [soap]

        this.props.addToCart(currentSoap)
        this.props.addBase({})
        this.props.clearFrags()
        this.props.addAddon({})
        this.props.clearSubtotal(0.00)

      }).then(this.props.openMinibag())

    } else {
      const oldItems = JSON.parse(localStorage.getItem('recentlyAdded')) || [];
      const newItem = {
        'item': 'Soap',
        'price':this.props.soap.price,
        'quantity': this.state.quantity,
        'base': this.props.soap.base,
        'fragrance1': scents.length >= 1 ? scents[0] : '',
        'fragrance2': scents.length >= 2 ? scents[1] : '',
        'fragrance3': scents.length === 3 ? scents[2] : '',
        'addon': this.props.soap.addon,
        'uuid': uuidv1()
      }
      oldItems.push(newItem)
      localStorage.setItem('recentlyAdded', JSON.stringify(oldItems));
      this.props.addToCart(newItem);
      this.props.addBase({})
      this.props.clearFrags()
      this.props.addAddon({})
      this.props.clearSubtotal(0.00)
      this.props.openMinibag()
    }
  }

  render(){
    return(
      <div className='ordered-soap'>
        <div className='order-soap-details'>
          <div className='order-base'><span style={{fontWeight: 'bold'}}>Base: </span>{this.props.soap.base}</div>
          <div className='order-scents'><span style={{fontWeight: 'bold'}}>Scents: </span>{this.props.soap.fragrance3 ? this.props.soap.fragrance1 + ', '+ this.props.soap.fragrance2 + ', '+ this.props.soap.fragrance3 : this.props.soap.fragrance2 ? this.props.soap.fragrance1 + ', '+ this.props.soap.fragrance2 : this.props.soap.fragrance1}</div>
          <div className='order-addon'><span style={{fontWeight: 'bold'}}>Addon: </span>{this.props.soap.addon}</div>
        </div>
        <span className='' style={{padding: '5px', color: 'red', fontSize: '12px'}}>${this.props.soap.price}</span>
        <span className='ordered-buy' onClick={this.addToCart}>Buy again</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    base: state.base,
    frag: state.frag,
    addon: state.addon,
    subtotal: state.subtotal.toFixed(2),
    frag1: state.frag.frag1 ? state.frag.frag1.name:'',
    frag2: state.frag.frag2 ? state.frag.frag2.name:'',
    frag3: state.frag.frag3 ? state.frag.frag3.name:'',
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addToCart, addBase, removeFrag, openMinibag, clearFrags, clearSubtotal, addAddon})(OrderedSoap)
