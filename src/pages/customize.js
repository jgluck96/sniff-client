import React, {Component} from 'react'
import Step1 from '../containers/step1'
import Step2 from '../containers/step2'
import Step3 from '../containers/step3'
import $ from 'jquery'

import {connect} from 'react-redux'

class Customize extends Component {

  state = {
    step: 1,
    layer: 'base'
  }

  componentDidMount() {
    console.log('hi');
    setTimeout(() => $('.custom-select-container').addClass('slide'), 0)
    setTimeout(() => $('.sidebar').addClass('slide'), 1500)
    setTimeout(() => $('.sidebar').css('z-index', '10'), 2000)
  }

  prevStep = () => {
    if (this.state.step > 1) {
      this.setState({step: this.state.step - 1})
    }
  }

  changeStep = () => {
    if (this.state.step < 3) {
      this.setState({step: this.state.step + 1})
    } else {
      this.setState({step: 1})
    }
  }

  goBase = () => this.setState({step: 1})
  goScent = () => this.setState({step: 2})
  goAddon = () => this.setState({step: 3})

  render(){
    return(
      <div className='container'>
        <div className='custom-flex'>
          <div className='col-md-10 model'>
          </div>
          <div className='col-md-8 custom-select-container'>

              <div className='sidebar'>
                <div onClick={this.goBase} className={this.state.step === 1 ? 'tab tabbed': 'tab'}><span className='tab-title'>{this.props.base.base ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}base</span></div>
                <div onClick={this.goScent} className={this.state.step === 2 ? 'tab tab-center tabbed' : 'tab tab-center'}><span className='tab-title'>{this.props.frag.frag1 ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}scents</span></div>
                <div onClick={this.goAddon} className={this.state.step === 3 ? 'tab tabbed' : 'tab'}><span className='tab-title'>{this.props.addon.addon ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}add-ons</span></div>
              </div>
              <div className='custom-select-wrapper'>
                <div className='order-progress'>
                  subtotal
                </div>
                <hr />
                {
                  this.state.step === 1 ?
                   <Step1 />
                  :
                  this.state.step === 2 ?
                   <Step2 />
                  :
                   <Step3 />
                }
                <hr />
                <div className='row next-prev'>
                  {this.state.step === 1 ? null :<div onClick={this.prevStep} className='secondary-btn prev-step'>previous</div>}
                  {this.state.step === 3 ? <div className='secondary-btn next-step'>Add to cart</div> : <div onClick={this.changeStep} className={this.props.base.base ? 'secondary-btn next-step' : 'secondary-btn next-step inactive'}>{this.state.step === 1 ? 'scents' : 'add-ons'}<i className="fas fa-long-arrow-alt-right"></i></div>}
                </div>
              </div>
          </div>
          <div className='row selections'>
            <div className='your-selection'>{this.props.base.base ? <img className='selection-image' src={this.props.base.img} alt=''/> : null}</div>
            <div className='your-selection'>{this.props.frag.frag1 ? <img className='selection-image' src={this.props.frag.frag1.img} alt=''/> : null}</div>
            <div className='your-selection'>{this.props.frag.frag2 ? <img className='selection-image' src={this.props.frag.frag2.img} alt=''/> : null}</div>
            <div className='your-selection'>{this.props.frag.frag3 ? <img className='selection-image' src={this.props.frag.frag3.img} alt=''/> : null}</div>
            <div className='your-selection'>{this.props.addon.addon ? <img className='selection-image' src={this.props.addon.img} alt=''/> : null}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base,
    frag: state.frag,
    addon: state.addon
  }
}

export default connect(mapStateToProps, null)(Customize)

// <div className='progress-container'>
//   <div className='order-progress'>
//   </div>
// </div>
