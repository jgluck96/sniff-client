import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
// import yellowcurve from '../assets/images/yellowcurve.png'
import fluff from '../assets/images/fluff5.svg'

// import $ from 'jquery'

class Fourth extends Component {
  render(){
    return(
      <Fragment>
        <img style={{width: '100%', background: '#FDDFDF'}} src={fluff} alt=''/>
        <section className='fourth-section'>
          <h1>Recent Reviews</h1>
          <div className='review-container'>
            <div className='review-container-top'>
              <div className='review-box'>
                <div className='review-top'>
                  <div className='review-top-content'>
                    <span>Sarah H.</span>
                    <span>New York, NY</span>
                  </div>
                  <i class="fas fa-quote-right"></i>
                </div>
                <p className='review-bottom'>I am fairly new to sniff, but once again, I am not disappointed! Thanks for making your soap with bare minimal ingredients.</p>
              </div>
              <div className='review-box'>
                <div className='review-top'>
                  <div className='review-top-content'>
                    <span>William M.</span>
                    <span>Denver, CO</span>
                  </div>
                  <i class="fas fa-quote-right"></i>
                </div>
                <p className='review-bottom'>This soap is the very best. Does not stick to you like a body wash does. And the smell afterwards is heavenly.</p>
              </div>
            </div>
            <div className='review-container-bottom'>
              <div className='review-box'>
                <div className='review-top'>
                  <div className='review-top-content'>
                    <span>Michael D.</span>
                    <span>Pheonix, AZ</span>
                  </div>
                  <i class="fas fa-quote-right"></i>
                </div>
                <p className='review-bottom'>My Grapefruit Vanilla smells soo good!! Lathers with a soft delicious moisturizing foam that leaves your skin smelling wonderful and soft.</p>
              </div>
              <div className='review-box'>
                <div className='review-top'>
                  <div className='review-top-content'>
                    <span>Debra S.</span>
                    <span>Chicago, IL</span>
                  </div>
                  <i class="fas fa-quote-right"></i>
                </div>
                <p className='review-bottom'>I do not typically use bar soap only body wash. After trying it as a gift I fell in love. Rinses clean.</p>
              </div>
            </div>
          </div>
          <div className='customize-btn'>
            <span><a href='/customize'>Customize</a></span>
          </div>
        </section>

      </Fragment>
    )
  }
}

export default Fourth
