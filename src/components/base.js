import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addBase, addSubtotal} from '../actions/selections'
import yellow from '../assets/images/yellow.PNG'

import $ from 'jquery'

class Base extends Component {

  componentDidMount() {
    $('.info-select').hover().css('display', 'block !important')
    $('.'+this.props.id.split(' ')[0]).css({display: 'none'})
  }

  addItem = () => {
      const selection = {base: true, name: this.props.id, img: yellow, price: 4}
      this.props.addBase(selection)

      if (!this.props.base.base) {
        this.props.addSubtotal(4.00)
      }
  }

  infoBoxShow = () => {
    console.log($(this.props.id.split(' ')[0]));
    $('.'+this.props.id.split(' ')[0] + this.props.id.split(' ')[1]).stop().animate({opacity: '0'}, 200).delay(200).css('display', 'none')
    $('.'+this.props.id.split(' ')[0]).stop().animate({opacity: '1'}, 200).delay(200).css('display', 'flex')
  }
  infoBoxLeave = () => {
    $('.'+this.props.id.split(' ')[0] + this.props.id.split(' ')[1]).stop().animate({opacity: '1'}, 200).delay(200).css('display', 'block')
    $('.'+this.props.id.split(' ')[0]).stop().animate({opacity: '0'}, 200).delay(200).css('display', 'none')

  }

  render(){
    return(
      <Fragment>

        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.base.name === this.props.obj.name ? 'custom-select-item base-selection chosen base-box' :'custom-select-item base-box base-selection'}>

          <div className='info-container'><span onMouseEnter={this.infoBoxShow} onMouseLeave={this.infoBoxLeave} className='info-select'><span>i</span></span></div>
          <div className={this.props.id.split(' ')[0] + this.props.id.split(' ')[1]}>
            <div className='custom-select-item-image base-height'>
              <img className='custom-select-item-image base-height customm' src={yellow} alt=''/>
            </div>

            <p>{this.props.obj.name}<br/><span className='item-price'>+$4.00</span></p>
          </div>
          <div style={{opacity: 0, display: 'flex', flexDirection: 'column', height: 'inherit', justifyContent: 'space-evenly'}} className={this.props.id.split(' ')[0]}>
            <div style={{fontSize: '12px', textAlign: 'left'}}>Best for individuals with {this.props.title}.</div>
            <div style={{fontSize: '12px', fontWeight: '600', textAlign: 'left'}}>Ingredients: <span style={{fontWeight: '500'}}>{this.props.ingredients}.</span></div>
          </div>
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

export default connect(mapStateToProps, {addBase, addSubtotal})(Base)

// <div className={this.props.id.split(' ')[0]}>
//   <span>
//   divv
//   </span>
// </div>
