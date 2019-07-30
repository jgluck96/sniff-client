import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import CarouselItem from '../components/carouselItem'


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

class HomeCar extends Component {

  state = {
    expert: [{
      img: '',
      price: 8.60,
      base: 'Actor',
      scents: 'Peppermint, Almond',
      addon: 'Chamomile'
    }, {
      img: '',
      price: 8.60,
      base: 'Model',
      scents: 'Lavender, Grapefruit',
      addon: 'Red clay'
    }, {
      img: '',
      price: 10.40,
      base: 'Singer',
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