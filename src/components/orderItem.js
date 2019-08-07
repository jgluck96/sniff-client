import React, {Component} from 'react'
// import {connect} from 'react-redux'
import OrderedSoap from '../components/orderedSoap'

class OrderItem extends Component {

  state = {
    soaps: [],
    date: ''
  }

  componentDidMount() {
    const soaps = []
    this.props.soaps.split(',').map(soapId => {
    fetch(`http://localhost:3000/soaps/${soapId}`, {
        method: 'GET',
        headers: {
          "Accepts": "application/json",
          "content-type": "application/json"
        }
      }).then(resp => resp.json()).then(soap => {

         soaps.push(soap)
         console.log(soaps);
        this.setState({soaps: [...this.state.soaps, soap]})
      })
    })
    // this.setState({soaps})
    const date = new Date(parseInt('1564840401749')).toDateString().split('')
    date[date.length - 5] = ', '
    this.setState({date: date.join('')})
  }

  render(){
    return(
      <div className='order-item'>
      <h4>Ordered on {this.state.date}</h4>
      {

        this.state.soaps.map(soap =>  <OrderedSoap soap={soap}/>)
      }

      </div>
    )
  }
}
// <OrderedSoap soap={soap}/>
// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

export default OrderItem
//
// <div className=''>
//   {this.props.order.base}
// </div>
// <div className=''>
//   {this.props.order.fragrance1}
// </div>
// <div className=''>
//   {this.props.order.fragrance2}
// </div>
// <div className=''>
//   {this.props.order.fragrance3}
// </div>
// <div className=''>
//   {this.props.order.addon}
// </div>
// <div className=''>
//   {this.props.order.price}
// </div>
