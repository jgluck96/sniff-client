import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import OrderItem from '../components/orderItem'
import OrderAddItem from '../components/orderAddItem'
import green from '../assets/images/green.PNG'
import orange from '../assets/images/orange.PNG'
import red from '../assets/images/red.PNG'

class Orders extends Component {

  state = {
    expert: [{
      img: green,
      price: 8.60,
      base: 'Actor',
      scents: 'Peppermint, Almond',
      addon: 'Chamomile',
      class: 'soap-add-content'
    }, {
      img: orange,
      price: 8.60,
      base: 'Model',
      scents: 'Lavender, Grapefruit',
      addon: 'Red clay',
      class: 'soap-add-content-middle'
    }, {
      img: red,
      price: 10.40,
      base: 'Singer',
      scents: 'Rose, Almond, Vanilla',
      addon: 'Fennel',
      class: 'soap-add-content'
    }]
  }

  soaps = (soapIds) => {
    const soaps = []
    soapIds.split(',').map(soapId => {
    fetch(`http://localhost:3000/soaps/${soapId}`, {
        method: 'GET',
        headers: {
          "Accepts": "application/json",
          "content-type": "application/json"
        }
      }).then(resp => resp.json()).then(soap => {

         soaps.push(soap)
        // this.setState({soaps: [...this.state.soaps, soap]})
      })
    })
    return soaps
  }

  render(){
    return(
      <div className='account-orders'>
        <div className='order-item-container '>
        {this.props.user.orders.length < 1 ?
          'You have no prior orders.'
          :
          <Fragment>
          {
            this.props.user.orders.map(order => {
              return <OrderItem key={order.id} soaps={order.soaps} order={order}/>
            })
          }
          </Fragment>
        }
        </div>
        <div className='orders-other-soaps'>
          {this.state.expert.map(soap => {
            return <OrderAddItem key={Math.random()} class={soap.class} soap={soap}/>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Orders)
