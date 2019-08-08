import React, {Component, Fragment} from 'react'
import Base from '../components/base'
import goat from '../assets/images/goat.png'
import oliveo from '../assets/images/oliveo.png'
import {connect} from 'react-redux'

class Step1 extends Component {


  render(){
    return(
      <Fragment>
        <p className='title'>Choose Your Base</p>
        <hr />
        <div className='row base-selections'>
          {
            [{name: 'Oily skin', img: goat}, {name: 'Normal skin', img: goat}, {name: 'Dry skin', img: goat}].map(obj => {
              return <Base id={obj.name} key={Math.random()} obj={obj}/>
            })
          }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    mySelection: state.addSelection
  }
}

export default connect(mapStateToProps, null)(Step1)
