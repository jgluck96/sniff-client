import React, {Component} from 'react'
import Model from '../components/customizeModel'
import Soap from '../components/customizeSoap'
import $ from 'jquery'

import {connect} from 'react-redux'

class Customize extends Component {

  // state = {
  //   step: 1,
  //   layer: 'base'
  // }


  //
  // prevStep = () => {
  //   if (this.state.step > 1) {
  //     this.setState({step: this.state.step - 1})
  //   }
  // }
  //
  // changeStep = () => {
  //   if (this.state.step < 3) {
  //     this.setState({step: this.state.step + 1})
  //   } else {
  //     this.setState({step: 1})
  //   }
  // }
  //
  // goBase = () => this.setState({step: 1})
  // goScent = () => this.setState({step: 2})
  // goAddon = () => this.setState({step: 3})

  render(){
    return(
      <div className='container'>
        <div className='custom-flex'>
          <Model />
          <Soap />
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
    addon: state.addon,
    subtotal: state.subtotal.toFixed(2)
  }
}

export default connect(mapStateToProps, null)(Customize)
