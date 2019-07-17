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
            <span className=''>The Process</span>
          </h1>
          <div className='process-description'>
            <h2>
              Let's not complicate things, you simply pich your base, scents and add-ons.
            </h2>
          </div>
          <div className='row process-container'>
            <div className='step-process row'>
              <div className='second-section-step'>
                <span>base</span>
                <p>Choose your base of the soap, whether you haver dry skin or oily skin we got it all.</p>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Scent</span>
                <p>Choose your scent of the soap, everyone loves to smell like honey.</p>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Add-on</span>
                <p>Choose your add-on of the soap, holostic approach.</p>
              </div>
              <i className="fas fa-angle-right arrow"></i>
              <div className='second-section-step'>
                <span>Enjoy</span>
                <p>Recieve your item and feel the cleanse.</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Second
