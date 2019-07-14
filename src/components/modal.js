import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {closeModal} from '../actions/modals'
// import {addFrag, removeFrag} from '../actions/selections'
// import $ from 'jquery'

// const portalRoot = document.getElementById('portal')
class Modal extends Component {

  // constructor() {
  //   super()
  //   this.el = document.createElement('div')
  // }
  //
  // componentDidMount() {
  //   portalRoot.appendChild(this.el)
  // }
  // componentWillUnmount() {
  //   portalRoot.removeChild(this.el)
  // }

  render() {
    return (
      <Fragment>
      <div className='modal-background' onClick={() => this.props.closeModal()}>
      </div>
      <div className='modal'>
      {this.props.children}
      </div>
      </Fragment>
    )
  }
}

export default connect(null, {closeModal})(Modal)
