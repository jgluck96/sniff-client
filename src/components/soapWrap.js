import React, {Component} from 'react'
import Step1 from '../containers/step1'
import Step2 from '../containers/step2'
import Step3 from '../containers/step3'
import {connect} from 'react-redux'
import {addToCart, addBase, clearSubtotal, clearFrags, removeFrag, addAddon} from '../actions/selections'
import {openMinibag} from '../actions/modals'

class SoapWrap extends Component {

  state = {
    quantity: 1
  }

  componentDidMount() {
    if (localStorage.getItem('recentlyAdded')) {
      this.props.addToCart(JSON.parse(localStorage.getItem('recentlyAdded')));
    }
  }

  quantity = (e) => {
    const value = e.target.value
    if (value > 0) {
      this.setState({quantity: value})
    } else {
      this.setState({quantity: 1})
    }
  }

  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity-=1}))
    }
  }
  increment = () => this.setState(prevState => ({quantity: prevState.quantity+=1}))

  addToCart = () => {
    const oldItems = JSON.parse(localStorage.getItem('recentlyAdded')) || [];
    const newItem = {
      'item': 'Soap',
      'price':(this.props.subtotal*this.state.quantity).toFixed(2),
      'quantity': this.state.quantity,
      'base': this.props.base.name,
      'frag1': this.props.frag1,
      'frag2':this.props.frag2,
      'frag3':this.props.frag3,
      'addon':this.props.addon.name
    }
    oldItems.push(newItem)
    localStorage.setItem('recentlyAdded', JSON.stringify(oldItems));
    this.props.addToCart(JSON.parse(localStorage.getItem('recentlyAdded')));
    this.props.addBase({})
    this.props.clearFrags()
    this.props.addAddon({})
    this.props.clearSubtotal(0.00)
    this.props.goBase()
    this.props.openMinibag()
    this.setState(prevState => ({quantity: (prevState.quantity - prevState.quantity) + 1}))
  }

  render(){
    return(
      <div className='custom-select-wrapper'>
        <div className='order-progress-container'>
          <div className={this.props.base.base ? 'order-progress slide' : 'order-progress'}>
            <div className='order-quantcart'>
              <div className='number-input'>
                <button onClick={this.decrement} ></button>
                <input className='quantity' onChange={this.quantity} min='0' type='number' value={this.state.quantity}/>
                <button onClick={this.increment} type='button' className='plus'></button>
              </div>
              <div className='cart-btn'  onClick={this.addToCart}>ADD TO BAG</div>
            </div>
            <div className='order-price-adjust'>
              <div className='price-adjust'>Base x {this.props.base.base ? '1' : '0'}: ${this.props.base.base ? '4.00' : '0.00'}</div>
              <div className='price-adjust'>Scents x {Object.keys(this.props.frag).length}: ${(Object.keys(this.props.frag).length*1.80).toFixed(2)}</div>
              <div className='price-adjust'>Add-on x {this.props.addon.addon ? '1' : '0'}: ${this.props.addon.addon ? '1.00' : '0.00'}</div>
              <hr />
              <div className='price-adjust'>Subtotal: ${(this.props.subtotal * this.state.quantity).toFixed(2)}</div>
            </div>
          </div>
        </div>
        {
          this.props.step === 1 ?
           <Step1 />
          :
          this.props.step === 2 ?
           <Step2 />
          :
           <Step3 />
        }
        <hr />
        <div className='row next-prev'>
          {this.props.step === 1 ? null :<div onClick={this.props.prevStep} className='secondary-btn prev-step'>previous</div>}
          {this.props.step === 3 ? null : <div onClick={this.props.changeStep} className={this.props.base.base ? 'secondary-btn next-step' : 'secondary-btn next-step inactive'}>{this.props.step === 1 ? 'scents' : 'add-ons'}<i className="fas fa-long-arrow-alt-right"></i></div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base,
    frag: state.frag,
    addon: state.addon,
    subtotal: state.subtotal.toFixed(2),
    frag1: state.frag.frag1 ? state.frag.frag1.name:'',
    frag2: state.frag.frag2 ? state.frag.frag2.name:'',
    frag3: state.frag.frag3 ? state.frag.frag3.name:''
  }
}

export default connect(mapStateToProps, {addToCart, addBase, removeFrag, openMinibag, clearFrags, clearSubtotal, addAddon})(SoapWrap)
