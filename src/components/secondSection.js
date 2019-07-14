import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
// import yellowcurve from '../assets/images/yellowcurve.png'
import fluff from '../assets/images/fluff-03.svg'

// import $ from 'jquery'

class Second extends Component {
  render(){
    return(
      <Fragment>
        <img style={{position: 'absolute', width: '100%'}} src={fluff} alt=''/>
        <section className='second-section'>
          <h1 className='process-title'>
            <span className='title'>The Process</span>
          </h1>
          <div className='process-description'>
            <h3>
              Let's not complicate things, you simply pich your base, scents and add-ons.
            </h3>
          </div>
          <div className='row process-container'>
            <div className='step-process row'>
              <div className='second-section-step'>
                <span>base</span>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Scent</span>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Add-on</span>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Enjoy</span>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Second
