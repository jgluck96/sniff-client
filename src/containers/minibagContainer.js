import React, {Component} from 'react'
import {connect} from 'react-redux'
import MinibagItem from '../components/minibagItem'

class MinibagContainer extends Component {
  render(){
    return(
      <div className='mini-bag-content'>
        {
          this.props.cart.map(minibagItem => {
          return <MinibagItem key={minibagItem.uuid} minibagItem={minibagItem}/>
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

export default connect(mapStateToProps, null)(MinibagContainer)
