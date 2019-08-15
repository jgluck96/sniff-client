import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addFrag, removeFrag, addSubtotal, removeSubtotal} from '../actions/selections'
import $ from 'jquery'

class Frag extends Component {

  addItem = () => {
    const selection = {frag: true, name: this.props.id, img: this.props.obj.img, price: 1.80}

    if (this.props.obj.name === this.props.frag1) {
      this.props.removeFrag('frag1')
      this.props.removeSubtotal(1.80)
    } else if (this.props.obj.name === this.props.frag2) {
      this.props.removeFrag('frag2')
      this.props.removeSubtotal(1.80)
    } else if (this.props.obj.name === this.props.frag3) {
      this.props.removeFrag('frag3')
      this.props.removeSubtotal(1.80)
    } else if (this.props.frag3 && this.props.obj.name !== this.props.frag3) {

        this.props.addFrag(selection, Object.keys(this.props.frags).length + 1)
    } else {
        this.props.addFrag(selection, Object.keys(this.props.frags).length + 1)
        this.props.addSubtotal(1.80)
        $(`#${this.props.id.split(' ')[0]}`).toggleClass('chosen')

    }

  }

  render(){
    return(
      <Fragment>
        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.frag1 === this.props.obj.name || this.props.frag2 === this.props.obj.name || this.props.frag3 === this.props.obj.name ? 'custom-select-item chosen' : 'custom-select-item'}>
          <div className='custom-select-item-image'>
            <img className='custom-select-item-image customm' src={this.props.obj.img} alt=''/>
          </div>
          <p>{this.props.obj.name}<br/><span className='item-price'>+$1.80</span></p>

        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return{
    frags: state.frag,
    frag1: state.frag.frag1 ? state.frag.frag1.name:'',
    frag2: state.frag.frag2 ? state.frag.frag2.name:'',
    frag3: state.frag.frag3 ? state.frag.frag3.name:''
  }
}

export default connect(mapStateToProps, {addFrag, removeFrag, addSubtotal, removeSubtotal})(Frag)
