import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import CarouselItem from '../components/carouselItem'
import rpurp from '../assets/images/rpurp.PNG'
import green from '../assets/images/green.PNG'
import pink from '../assets/images/pink.PNG'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

class HomeCar extends Component {

  state = {
    expert: [{
      image: green,
      price: 8.60,
      base: 'Dry Skin',
      scents: 'Peppermint, Almond',
      addon: 'Chamomile'
    }, {
      image: rpurp,
      price: 8.60,
      base: 'Normal Skin',
      scents: 'Lavender, Grapefruit',
      addon: 'Red clay'
    }, {
      image: pink,
      price: 10.40,
      base: 'Oily Skin',
      scents: 'Rose, Almond, Vanilla',
      addon: 'Fennel'
    }]
  }

  render(){
    return(
      <Fragment>
      <h1 style={{textAlign: 'center'}}>Expert Picks of the Month</h1>
      <div className='carousel-container'>
        <div className='carousel-container-month'>{monthNames[d.getMonth()]}</div>
        <div className='carousel-month'>
        {
          this.state.expert.map(soap => {
            return <CarouselItem key={Math.random()} class={'carousel-item'} soap={soap}/>
          })
        }
        </div>
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

export default connect(mapStateToProps, null)(HomeCar)
// , {
//   img: '',
//   base: 'Actor',
//   scents: 'Lavender',
//   addon: 'Chamomile'
// }, {
//   img: '',
//   base: 'Singer',
//   scents: 'Sandalwood, Rose',
//   addon: 'Beet root'
// }, {
//   img: '',
//   base: 'Model',
//   scents: 'Vanilla, Almond',
//   addon: 'Red clay'
// }, {
//   img: '',
//   base: 'Model',
//   scents: 'Vanilla',
//   addon: 'Fennel'
// }
