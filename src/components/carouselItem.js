import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart, addBase, clearSubtotal, clearFrags, removeFrag, addAddon} from '../actions/selections'
import {openMinibag} from '../actions/modals'
const uuidv1 = require('uuid/v1');

class CarouselItem extends Component {

  state = {
    quantity: 1
  }

  addToCart = () => {
    const scents = this.props.soap.scents.split(', ')
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
          price: (this.props.soap.price).toFixed(2),
          user_id: this.props.user.id,
          cart_id: this.props.user.cart.id,
          image: this.props.soap.image
        })
      }).then(resp => resp.json()).then(soap => {
        const currentSoap = [soap]

        this.props.addToCart(currentSoap)
        this.props.addBase({})
        this.props.clearFrags()
        this.props.addAddon({})
        this.props.clearSubtotal(0.00)

        this.setState(prevState => ({quantity: (prevState.quantity - prevState.quantity) + 1}))
      }).then(this.props.openMinibag())

    } else {
      const oldItems = JSON.parse(localStorage.getItem('recentlyAdded')) || [];
      const newItem = {
        'item': 'Soap',
        'price':(this.props.soap.price).toFixed(2),
        'quantity': this.state.quantity,
        'base': this.props.soap.base,
        'fragrance1': scents.length >= 1 ? scents[0] : '',
        'fragrance2': scents.length >= 2 ? scents[1] : '',
        'fragrance3': scents.length === 3 ? scents[2] : '',
        'addon': this.props.soap.addon,
        'image': this.props.soap.image,
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
      this.setState(prevState => ({quantity: (prevState.quantity - prevState.quantity) + 1}))
    }
  }

  render(){
    return(
      <div className={this.props.class}>
        <div className='carousel-cart-cont'><i onClick={this.addToCart} className='fas fa-plus plus-cart'></i></div>
        <img src={this.props.soap.image} alt=''/>
        <div className='carousel-content'>
          <h4>{this.props.soap.base}</h4>
          <span>{this.props.soap.scents}</span>
          <span>{this.props.soap.addon}</span>
        </div>
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

export default connect(mapStateToProps, {addToCart, addBase, removeFrag, openMinibag, clearFrags, clearSubtotal, addAddon})(CarouselItem)
