import React, {Component} from 'react'
import Step1 from '../containers/step1'
import Step2 from '../containers/step2'
import Step3 from '../containers/step3'
// import $ from 'jquery'
import {connect} from 'react-redux'

class Customize extends Component {

  state = {
    step: 1,
    layer: 'base'
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

  render(){
    return(
      <div className='container'>
        <div className='custom-flex'>
          <div className='col-md-10'>
          </div>
          <div className='col-md-10'>
            <div className='custom-select-wrapper'>
              <p>STEP {this.state.step}</p>
              {
                this.state.step === 1 ?
                 <Step1 />
                :
                this.state.step === 2 ?
                 <Step2 />
                :
                 <Step3 />
              }
              <div className='row selections'>
                <div className='your-selection'>{this.props.base.base ? <img className='selection-image' src={this.props.base.img} alt=''/> : null}</div>
                <div className='your-selection'>{this.props.frag.frag1 ? <img className='selection-image' src={this.props.frag.frag1.img} alt=''/> : null}</div>
                <div className='your-selection'>{this.props.frag.frag2 ? <img className='selection-image' src={this.props.frag.frag2.img} alt=''/> : null}</div>
                <div className='your-selection'>{this.props.frag.frag3 ? <img className='selection-image' src={this.props.frag.frag3.img} alt=''/> : null}</div>
                <div className='your-selection'>{this.props.addon.addon ? <img className='selection-image' src={this.props.addon.img} alt=''/> : null}</div>
              </div>
              <hr />
              <div className='row'>
                {this.state.step === 1 ? null :<div onClick={this.prevStep} className='secondary-btn prev-step'>Back</div>}
                {this.state.step === 3 ? <div className='secondary-btn prev-step'>Done</div> : <div onClick={this.changeStep} className={this.props.base.base ? 'secondary-btn next-step' : 'secondary-btn next-step inactive'}>{this.state.step === 1 ? 'fragrances' : 'Add-ons'}<i className="fas fa-long-arrow-alt-right"></i></div>}
              </div>
              <hr />
            </div>
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
// BOX STYLE
// <div className='custom-wrapper'>
// <div className='soap-view'>
// </div>
//   <div className='custom-container'>
//     <div className='custom-tab'>
//       <span>base</span>
//     </div>
//     <i className="fas fa-arrow-right"></i>
//     <div className='custom-tab'>
//       <span>fragrances</span>
//     </div>
//     <i className="fas fa-arrow-right"></i>
//     <div className='custom-tab'>
//       <span>add-ons</span>
//     </div>
//   </div>
// </div>
