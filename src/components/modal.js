import React, {Component} from 'react'
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
      <div className='modal-background' onClick={() => this.props.closeModal()} style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: '100%',
        zIndex: '9999',
        overflow: 'hidden'
      }}>
        <div className='modal' style={{
          padding: 20,
          background: '#fff',
          borderRadius: '3%',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minwidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
          justifySelf: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '40%',
          height: '60%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }}>
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(null, {closeModal})(Modal)
