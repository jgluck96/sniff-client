import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
import soap from '../assets/images/soap.png'

// import $ from 'jquery'

class Cart extends Component {

  componentDidUpdate() {

  }

  render(){
    return(
      <Fragment>
        <i class="fas fa-shopping-bag"></i>
        <span className='count-cart'>0</span>
      </Fragment>
    )
  }
}

export default Cart
