import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import CarouselItem from '../components/carouselItem'
import purp from '../assets/images/purpsoap.PNG'
import rpurp from '../assets/images/rpurp.PNG'
import yellow from '../assets/images/yellow.PNG'
import green from '../assets/images/green.PNG'
import orange from '../assets/images/orange.PNG'
import red from '../assets/images/red.PNG'
import pink from '../assets/images/pink.PNG'

class CheckoutCar extends Component {

  state = {
    slide: 540,
    others: [{
      image: yellow,
      price: 8.60,
      base: 'Normal Skin',
      scents: 'Vanilla, Rose',
      addon: 'Chamomile'
    }, {
      image: orange,
      price: 8.60,
      base: 'Dry Skin',
      scents: 'Grapefruit, Sandalwood',
      addon: 'carrot'
    }, {
      image: red,
      price: 8.60,
      base: 'Oily Skin',
      scents: 'Lime, Sandalwood',
      addon: 'Beet root'
    }, {
      image: purp,
      price: 8.60,
      base: 'Dry Skin',
      scents: 'Grapefruit, Rose',
      addon: 'cambrian'
    }, {
      image: green,
      price: 8.60,
      base: 'Oily Skin',
      scents: 'Almond, Peppermint',
      addon: 'alfalfa'
    }, {
      image: orange,
      price: 8.60,
      base: 'Normal Skin',
      scents: 'Sandalwood, Rose',
      addon: 'carrot'
    }, {
      image: purp,
      price: 6.80,
      base: 'Oily Skin',
      scents: 'Lavender',
      addon: 'ultramarine'
    }, {
      image: green,
      price: 8.60,
      base: 'Normal Skin',
      scents: 'Sandalwood, Rose',
      addon: 'comfrey'
    }, {
      image: pink,
      price: 8.60,
      base: 'Dry Skin',
      scents: 'Vanilla, Almond',
      addon: 'Red clay'
    }, {
      image: red,
      price: 6.80,
      base: 'Oily Skin',
      scents: 'Vanilla',
      addon: 'beet root'
    }]
  }

  next = () => {
    this.setState(prevState => ({
    slide: prevState.slide -215}))
  }
  prev = () => this.setState(prevState => ({
    slide: prevState.slide +215}))

  render(){
    return(
      <div className='carousel-wrapper'>
        <div className='carousel-container carousel-checkout'>
          <h2>Others Also Loved</h2>
          {this.state.slide < 379 ? <i onClick={this.prev} class="fas fa-arrow-circle-left slider-prev"></i> : null}

          {this.state.slide > -371 ? <i onClick={this.next} class="fas fa-arrow-circle-right slider-next"></i> : null}

          <div style={{transform: `translate3d(${this.state.slide}px, 0px, 0px)`}} className='carousel-slide'>
          {
            this.state.others.map(soap => {
              return <CarouselItem key={Math.random()} class={'carousel-item-co'} soap={soap}/>
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CheckoutCar)
