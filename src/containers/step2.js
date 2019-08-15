import React, {Component, Fragment} from 'react'
import lavender from '../assets/images/lavv.png'
import peppermint from '../assets/images/peppermint.png'
import vanilla from '../assets/images/vanilla.png'
import grapefruit from '../assets/images/grapefruit.png'
import lime from '../assets/images/lime.png'
import teatree from '../assets/images/teatree.png'
import rose from '../assets/images/rose.png'
import almond from '../assets/images/almond.png'
// import spearmint from '../assets/images/spearmint.png'
import sandalwood from '../assets/images/sandalwood.png'
import Frag from '../components/frag'
// import $ from 'jquery'
import {connect} from 'react-redux'

class Step2 extends Component {



  render(){
    return(
      <Fragment>
        <p className='title'>Choose up to 3 scents</p>
        <hr />
        <div className='row frag-selections'>
        {
          [{name: 'lavender', img: lavender}, {name: 'peppermint', img: peppermint}, {name: 'tea tree', img: teatree}, {name: 'lime', img: lime}, {name: 'vanilla', img: vanilla}, {name: 'grapefruit', img: grapefruit}, {name: 'rose', img: rose}, {name: 'almond', img: almond}, {name: 'sandalwood', img: sandalwood}].map(obj => {
            return <Frag id={obj.name} key={Math.random()} obj={obj}/>
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

export default connect(mapStateToProps, null)(Step2)
