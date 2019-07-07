import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addBase} from '../actions/selections'
// import $ from 'jquery'

class Base extends Component {


  addItem = () => {
      const selection = {base: true, name: this.props.id, img: this.props.obj.img}
      this.props.addBase(selection)
  }

  render(){
    return(
      <Fragment>

        <div onClick={this.addItem} id={this.props.id.split(' ')[0]} className={this.props.base.name === this.props.obj.name ? 'custom-select-item base-selection chosen' :'custom-select-item base-selection'}>
          <div className='custom-select-item-image'>
            <img className='custom-select-item-image customm' src={this.props.obj.img} alt=''/>
          </div>

          <p>{this.props.obj.name}</p>
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
