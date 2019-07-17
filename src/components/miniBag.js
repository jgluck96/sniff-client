import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {closeModal} from '../actions/modals'
import MinibagContainer from '../containers/minibagContainer'
import $ from 'jquery'

class MiniCart extends Component {

  componentDidMount() {
    setTimeout(() => $('.mini-bag').addClass('open-minibag'), 0)
  }

  miniBack = () => {
    $('.mini-bag').removeClass('open-minibag').delay(500).queue((next) => {
          this.props.closeModal()
          next()
        })
  }

  render(){
    return(
      <Fragment>
        <div className='modal-background' onClick={() => this.props.closeModal()}>
        </div>
        <div className='mini-bag'>
          <span className='mini-bag-back' onClick={this.miniBack}>
          </span>
          <div className='mini-bag-top'>
            <div className='mini-bag-title'>
              Shopping Bag ({this.props.cart.length})
            </div>
            <div className='mini-bag-estimate'>
              <span>Estimated Total:</span> <span>${this.props.total}</span>
            </div>
            <div className='mini-bag-checkout'>
              <a className='mini-bag-checkout-btn' href='/checkout/sniffBag'><span>Checkout</span></a>
            </div>
          </div>
          <MinibagContainer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: (() => {
      let subtotal = 0;
      for(let i=0; i<state.cart.length; i++) {
        const floatt = parseFloat(state.cart[i].price);
        subtotal+=floatt
      }
      return subtotal.toFixed(2)
    })()
  }
}

export default connect(mapStateToProps, {closeModal})(MiniCart)
