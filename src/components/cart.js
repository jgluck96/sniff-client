import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import soap from '../assets/images/soap.png'

// import $ from 'jquery'

class Cart extends Component {

  render(){
    return(
      <Fragment>
        <span className='count-cart'>{this.props.cart.length}</span>
        <i className="fas fa-shopping-bag"></i>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart)
