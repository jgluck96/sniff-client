import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import CarouselItem from '../components/carouselItem'

class CheckoutCar extends Component {

  state = {
    slide: 595,
    others: [{
      img: '',
      price: 8.60,
      base: 'Model',
      scents: 'Vanilla, Rose',
      addon: 'Chamomile'
    }, {
      img: '',
      price: 8.60,
      base: 'Singer',
      scents: 'Grapefruit, Sandalwood',
      addon: 'Fennel'
    }, {
      img: '',
      price: 8.60,
      base: 'Actor',
      scents: 'Lime, Sandalwood',
      addon: 'Beet root'
    }, {
      img: '',
      price: 8.60,
      base: 'Actor',
      scents: 'Grapefruit, Rose',
      addon: 'Fennel'
    }, {
      img: '',
      price: 8.60,
      base: 'Model',
      scents: 'Almond, Peppermint',
      addon: 'Chamomile'
    }, {
      img: '',
      price: 8.60,
      base: 'Singer',
      scents: 'Sandalwood, Rose',
      addon: 'Red clay'
    }, {
      img: '',
      price: 6.80,
      base: 'Actor',
      scents: 'Lavender',
      addon: 'Chamomile'
    }, {
      img: '',
      price: 8.60,
      base: 'Singer',
      scents: 'Sandalwood, Rose',
      addon: 'Beet root'
    }, {
      img: '',
      price: 8.60,
      base: 'Model',
      scents: 'Vanilla, Almond',
      addon: 'Red clay'
    }, {
      img: '',
      price: 6.80,
      base: 'Model',
      scents: 'Vanilla',
      addon: 'Fennel'
    }]
  }

  next = () => {
    this.setState(prevState => ({
    slide: prevState.slide -220}))
  }
  prev = () => this.setState(prevState => ({
    slide: prevState.slide +220}))

  render(){
    return(
      <div className='carousel-container carousel-checkout'>
        <h2>Others Also Loved</h2>
        {this.state.slide < 594 ? <i onClick={this.prev} class="fas fa-arrow-circle-left slider-prev"></i> : null}

        {this.state.slide > -603 ? <i onClick={this.next} class="fas fa-arrow-circle-right slider-next"></i> : null}

        <div style={{transform: `translate3d(${this.state.slide}px, 0px, 0px)`}} className='carousel-slide'>
        {
          this.state.others.map(soap => {
            return <CarouselItem key={Math.random()} class={'carousel-item-co'} soap={soap}/>
          })
        }
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
