import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
import fluff from '../assets/images/fluff4.svg'
import HomeCar from '../containers/homeCar'

import $ from 'jquery'

class Third extends Component {
  render(){
    return(
      <Fragment>
        <img style={{position: 'relative', width: '100%'}} src={fluff} alt=''/>
        <section className='third-section'>
          <div className='homecar'>
            <HomeCar />
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Third
