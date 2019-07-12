import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addBase} from '../actions/selections'
import $ from 'jquery'

class Base extends Component {

  componentDidMount() {
    $('.info-select').hover().css('display', 'block !important')
  }

  addItem = () => {
      const selection = {base: true, name: this.props.id, img: this.props.obj.img}
      this.props.addBase(selection)
  }

  render(){
    console.log('here in render');
    return(
      <Fragment>

        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.base.name === this.props.obj.name ? 'custom-select-item base-selection chosen' :'custom-select-item base-selection'}>
          <div className='info-box'>
            <span>
            divv
            </span>
          </div>
          <div className='info-container'><span className='info-select'><span>i</span></span></div>
          <div className='custom-select-item-image'>
            <img className='custom-select-item-image customm' src={this.props.obj.img} alt=''/>
          </div>

          <p>{this.props.obj.name}<br/><span className='item-price'>+$4.00</span></p>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  }
}

export default connect(mapStateToProps, {addBase})(Base)
