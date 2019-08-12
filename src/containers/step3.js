import React, {Component, Fragment} from 'react'
import redclay from '../assets/images/redclay.jpg'
import fennel from '../assets/images/fennel.png'
import chamomile from '../assets/images/chamomile.png'
import beet from '../assets/images/beet.png'
import purp from '../assets/images/purpsoap.PNG'
import rpurp from '../assets/images/rpurp.PNG'
import yellow from '../assets/images/yellow.PNG'
import green from '../assets/images/green.PNG'
import orange from '../assets/images/orange.PNG'
import red from '../assets/images/red.PNG'
import pink from '../assets/images/pink.PNG'
import Addon from '../components/addon'
import * as THREE from "three";


class Step3 extends Component {
  render(){
    return(
      <Fragment>
        <p className='title'>Choose Your Add-on</p>
        <hr />
        <div className='row addon-selections'>
        {
          [{name: 'red clay', img: redclay, color: new THREE.Color("rgb(255,182,193)"), photo: pink}, {name: 'fennel', img: fennel}, {name: 'chamomile', img: chamomile}, {name: 'beet root', img: beet, color: new THREE.Color("rgb(255, 133, 102)"), photo: red}].map(obj => {
            return <Addon id={obj.name} key={Math.random()} obj={obj}/>
          })
        }
        </div>
      </Fragment>
    )
  }
}

export default Step3
