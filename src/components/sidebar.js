import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

class Sidebar extends Component {

  componentDidMount() {
    if (this.props.base.base) {
        $('.tab').removeClass('tab-open')
    }
  }

  componentDidUpdate(prevState) {
    if (this.props.base.base) {
      $('.tab').removeClass('tab-open')
    }
  }

  render(){
    console.log(this.props.step);
    return(
      <div className='sidebar'>
        <div onClick={this.props.goBase} className={this.props.step === 1 ? 'tab tabbed': 'tab'}><span className='tab-title'>{this.props.base.base ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}base</span></div>
        <div onClick={this.props.goScent} id='other' className={this.props.step === 2 ? 'tab tab-center tabbed tab-open' : 'tab tab-center tab-open'}><span className='tab-title'>{this.props.frag.frag1 ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}scents</span></div>
        <div onClick={this.props.goAddon} id='other' className={this.props.step === 3 ? 'tab tabbed tab-open' : 'tab tab-open'}><span className='tab-title'>{this.props.addon.addon ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}add-ons</span></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    base: state.base,
    frag: state.frag,
    addon: state.addon,
  }
}

export default connect(mapStateToProps, null)(Sidebar)
