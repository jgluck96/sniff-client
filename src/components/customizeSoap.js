import React, {Component} from 'react'
import Sidebar from '../components/sidebar'
import SoapWrap from '../components/soapWrap'
import {connect} from 'react-redux'
import $ from 'jquery'

class Soap extends Component {

  state = {
    step: 1,
    layer: 'base'
  }

  componentDidMount() {
    // DO A QUE FOR THESE TWO AND FIND A WAY TO WORK IT W/O SETTIMEOUT
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
      <div className='col-md-8 custom-select-container'>
        <Sidebar goBase={this.goBase} goScent={this.goScent} goAddon={this.goAddon} step={this.state.step}/>
        <SoapWrap goBase={this.goBase} changeStep={this.changeStep} prevStep={this.prevStep} step={this.state.step}/>
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

export default connect(mapStateToProps, null)(Soap)
