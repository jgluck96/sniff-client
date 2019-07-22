import React, {Component} from 'react'
import {connect} from 'react-redux'
import {replaceCart, fetchCart} from '../actions/selections'

class CheckoutItem extends Component {

  state = {
    quantity: this.props.checkoutItem.quantity
  }

  // componentDidUpdate() {
  //   console.log('updates');
  // }

  quantity = (e) => {
    const value = e.target.value
    if (value > 0) {
      this.setState({quantity: value})
    } else {
      this.setState({quantity: 1})
    }
  }


  decrement = () => {
    if (this.props.checkoutItem.quantity > 1) {
      // this.setState(prevState => ({quantity: prevState.quantity-=1}))
      if (this.props.user) {
        const quantity = parseInt(this.props.checkoutItem.quantity)
        const price = ((parseFloat(this.props.checkoutItem.price)/quantity) * (quantity - 1)).toFixed(2)
        fetch(`http://localhost:3000/soaps/${this.props.checkoutItem.id}`, {
          method: 'PATCH',
          headers: {
            'Accepts': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            quantity: quantity - 1,
            price: price
          })
        }).then(resp => resp.json()).then(soaps=> {
          // const foundSoap = this.props.cart.filter(soapObj=> soapObj.id === this.props.checkoutItem.id)
          // const foundSoapIdx = this.props.cart.indexOf(foundSoap[0])
          // const oldCart = this.props.cart
          // oldCart[foundSoapIdx] = soaps[soaps.length-1]


          // soaps.splice(foundSoapIdx, 0, soaps[soaps.length-1])
          // soaps.pop()
          this.props.replaceCart(soaps)

        })
      } else {
          const oldItems = JSON.parse(localStorage.getItem('recentlyAdded'))
          const foundSoap = oldItems.filter(soapObj => soapObj.uuid === this.props.checkoutItem.uuid)
          const foundSoapIdx = oldItems.indexOf(foundSoap[0])
          const oldQty = foundSoap[0].quantity
          foundSoap[0].quantity -=1
          foundSoap[0].price = ((parseFloat(foundSoap[0].price)/parseInt(oldQty)) * parseInt(foundSoap[0].quantity)).toFixed(2)
          oldItems[foundSoapIdx] = foundSoap[0]
          this.props.replaceCart(oldItems)
          localStorage.setItem('recentlyAdded', JSON.stringify(oldItems))
      }
    }
  }
  increment = () => {
    // this.setState(prevState => ({quantity: prevState.quantity+=1}))
    if (this.props.user) {
      const quantity = parseInt(this.props.checkoutItem.quantity)
      const price = ((parseFloat(this.props.checkoutItem.price)/quantity) * (quantity + 1)).toFixed(2)
      fetch(`http://localhost:3000/soaps/${this.props.checkoutItem.id}`, {
        method: 'PATCH',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          quantity: quantity + 1,
          price: price
        })
      })
      .then(resp => resp.json()).then(soaps=> {
        const foundSoap = this.props.cart.filter(soapObj=> soapObj.id === this.props.checkoutItem.id)
        const foundSoapIdx = this.props.cart.indexOf(foundSoap[0])

        const oldCart = this.props.cart
        // oldCart[foundSoapIdx] = soaps[soaps.length-1]

        oldCart[foundSoapIdx] = soaps[soaps.length-1]
        // soaps.pop()
        this.props.replaceCart(oldCart)
      })
    } else {
        const oldItems = JSON.parse(localStorage.getItem('recentlyAdded'))
        const foundSoap = oldItems.filter(soapObj => soapObj.uuid === this.props.checkoutItem.uuid)
        const foundSoapIdx = oldItems.indexOf(foundSoap[0])
        const oldQty = foundSoap[0].quantity
        foundSoap[0].quantity +=1
        foundSoap[0].price = ((parseFloat(foundSoap[0].price)/parseInt(oldQty)) * parseInt(foundSoap[0].quantity)).toFixed(2)
        oldItems[foundSoapIdx] = foundSoap[0]
        this.props.replaceCart(oldItems)
        localStorage.setItem('recentlyAdded', JSON.stringify(oldItems))
    }
  }

  removeItem = () => {
    if (this.props.user) {
      fetch(`http://localhost:3000/soaps/${this.props.checkoutItem.id}`, {
        method: 'DELETE',
        headers: {
          'Accepts': 'application/json',
          'Content-type': 'application/json'
        }
      }).then(resp => resp.json()).then(soaps=> this.props.replaceCart(soaps))


    } else {
        const oldItems = JSON.parse(localStorage.getItem('recentlyAdded'))
        const foundSoap = oldItems.filter(soapObj => soapObj.uuid === this.props.checkoutItem.uuid)
        const foundSoapIdx = oldItems.indexOf(foundSoap[0])
        oldItems.splice(foundSoapIdx, 1)
        this.props.replaceCart(oldItems)
        localStorage.setItem('recentlyAdded', JSON.stringify(oldItems))
    }
  }

  render(){
    return(
      <div className='checkout-item'>
        <div className='checkout-item-img'>
          sniff.
        </div>
        <div className='checkout-item-content'>
          <div className='checkout-item-content-data'>
            <span style={{fontWeight:'500', fontSize:'14px', textTransform: 'uppercase', marginBottom: '25px'}}>{this.props.checkoutItem.base}</span>
            <span style={{fontWeight:'500', fontSize:'13px'}}>Scents: <span style={{fontSize:'13px', color:'#585858'}}>{this.props.checkoutItem.fragrance3 ? this.props.checkoutItem.fragrance1 + ', '+ this.props.checkoutItem.fragrance2 + ', '+ this.props.checkoutItem.fragrance3 : this.props.checkoutItem.fragrance2 ? this.props.checkoutItem.fragrance1 + ', '+ this.props.checkoutItem.fragrance2 : this.props.checkoutItem.fragrance1}</span></span>
            <span style={{fontWeight:'500', fontSize:'13px'}}>Add-on: <span style={{fontSize:'13px', color:'#585858'}}>{this.props.checkoutItem.addon}</span></span>
          </div>
          <div className='checkout-item-right'>
            <div className='number-input'>
              <button onClick={this.decrement} ></button>
              <input className='quantity' readOnly onChange={this.quantity} min='0' type='number' value={this.props.checkoutItem.quantity}/>
              <button onClick={this.increment} type='button' className='plus'></button>
            </div>
            <span style={{fontWeight:'500', fontSize:'13px'}}>${this.props.checkoutItem.price}</span>
          </div>
          <i onClick={this.removeItem} className="fas fa-times remove-item"></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {replaceCart, fetchCart})(CheckoutItem)
