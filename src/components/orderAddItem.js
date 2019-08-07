import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/selections'


// import $ from 'jquery'

class OrderAddItem extends Component {

  render(){
    return(
      <Fragment>
        <div className={this.props.class}>
          <img src={this.props.soap.img} alt=''/>
          <h4>{this.props.soap.base}</h4>
          <span><span style={{fontWeight: 'bold'}}>Scents: </span>{this.props.soap.scents}</span>
          <span><span style={{fontWeight: 'bold'}}>Addon: </span>{this.props.soap.addon}</span>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addToCart})(OrderAddItem)
