import React, {Component} from 'react'
import {injectStripe} from 'react-stripe-elements'
import {connect} from 'react-redux'

class InjectedPaymentForm extends Component {

  // state = {
  //
  // }
  //
   submit = (e) =>{
     e.preventDefault()
    console.log(this.props);
    // let chargeToken =  this.props.createToken({name: 'Name'})
    // let charge = {
    //   amount: this.props.subtotal > 15 ? this.props.subtotal : this.props.total,
    //   description: 'soap purchase',
    //   currency: 'USD',
    //   token: chargeToken.token.id
    // }
    // let response =  fetch('http://localhost:3000/charges', {
    //   method: 'POST',
    //   headers: {
    //     'Accepts': 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     charge: charge
    //   })
    // })

    // if (response.ok) console.log('purchase complete');
  }

  render(){
    return(
      <div style={{position: 'absolute', top: '30%'}}>
        <form onSubmit={this.submit}>
          <div>
            <label>Amount $</label>
            <input readOnly value={this.props.subtotal > 15 ? this.props.subtotal : this.props.total} />
          </div>
          <div>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user,
    total: (() => {
      let subtotal = 0;
      for(let i=0; i<state.cart.length; i++) {
        const floatt = parseFloat(state.cart[i].price);
        subtotal+=floatt
      }
      return (parseFloat(subtotal) + 4.50).toFixed(2)
    })(),
    subtotal: (() => {
      let subtotal = 0;
      for(let i=0; i<state.cart.length; i++) {
        const floatt = parseFloat(state.cart[i].price);
        subtotal+=floatt
      }
      return subtotal.toFixed(2)
    })()
  }
}

export default connect(mapStateToProps, null)(InjectedPaymentForm)
