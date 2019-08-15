import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addAddon, removeAddon, removeSubtotal, addSubtotal} from '../actions/selections'
import $ from 'jquery'

class Addon extends Component {

  componentDidMount() {
    $('.'+this.props.bottom).css({display: 'none'})
  }

  addItem = () => {
    const selection = {addon: true, name: this.props.id, img: this.props.obj.img, photo: this.props.obj.photo, color: this.props.obj.color, price: 1}

    if (this.props.addon.name === this.props.id) {
      this.props.removeAddon(selection)
      this.props.removeSubtotal(1.00)
    } else if (this.props.addon.name !== this.props.id && this.props.addon.name){
        this.props.addAddon(selection)
    } else {
        this.props.addAddon(selection)
        this.props.addSubtotal(1.00)
    }
    // $(`#${this.props.id.split(' ')[0]}`).toggleClass('chosen')

  }

  infoBoxShow = () => {
    console.log($(this.props.id.split(' ')[0]));
    $('.'+this.props.top).stop().animate({opacity: '0'}, 200).delay(200).css('display', 'none')
    $('.'+this.props.bottom).stop().animate({opacity: '1'}, 200).delay(200).css('display', 'flex')
  }
  infoBoxLeave = () => {
    $('.'+this.props.top).stop().animate({opacity: '1'}, 200).delay(200).css('display', 'block')
    $('.'+this.props.bottom).stop().animate({opacity: '0'}, 200).delay(200).css('display', 'none')

  }

  render(){
    return(
      <Fragment>
        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.addon.name === this.props.obj.name ? 'custom-select-item mw-2 chosen' :'custom-select-item mw-2'}>
          <div className='info-container'><span onMouseEnter={this.infoBoxShow} onMouseLeave={this.infoBoxLeave} className='info-select'><span>i</span></span></div>
          <div className={this.props.top}>
            <div className='custom-select-item-image'>
              <img className='custom-select-item-image customm' src={this.props.obj.img} alt=''/>
            </div>
            <p>{this.props.obj.name}<br/><span className='item-price'>+$1.00</span></p>
          </div>
          <div style={{opacity: 0, display: 'flex', flexDirection: 'column', height: 'inherit', justifyContent: 'center'}} className={this.props.bottom}>
            <span style={{fontSize: '12px', fontWeight: '600', textAlign: 'left'}}>Benefits: <span style={{fontWeight: '500'}}>{this.props.benefits}.</span></span>
          </div>
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

export default connect(mapStateToProps, {addAddon, removeAddon, removeSubtotal, addSubtotal})(Addon)
