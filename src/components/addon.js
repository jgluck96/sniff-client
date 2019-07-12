import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addAddon} from '../actions/selections'
import $ from 'jquery'

class Addon extends Component {

  addItem = () => {
    const selection = {addon: true, name: this.props.id, img: this.props.obj.img}
    this.props.addAddon(selection)
    $(`#${this.props.id.split(' ')[0]}`).toggleClass('chosen')

  }

  render(){
    return(
      <Fragment>
        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.addon.name === this.props.obj.name ? 'custom-select-item chosen' :'custom-select-item'}>
          <div className='info-container'><span className='info-select'><span>i</span></span></div>
          <div className='custom-select-item-image'>
            <img className='custom-select-item-image customm' src={this.props.obj.img} alt=''/>
          </div>

          <p>{this.props.obj.name}<br/><span className='item-price'>+$1.00</span></p>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return{
    addon: state.addon
  }
}

export default connect(mapStateToProps, {addAddon})(Addon)
