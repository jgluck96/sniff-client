import React, {Component, Fragment} from 'react'
import redclay from '../assets/images/redclay.png'
import comfrey from '../assets/images/comfrey.png'
import alkaline from '../assets/images/alkaline.png'
import cambrian from '../assets/images/cambrian.png'
import alfalfa from '../assets/images/alfalfa.png'
import ultramarine from '../assets/images/ultramarine.png'
import carrot from '../assets/images/carrtot.png'
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
          [{name: 'red clay', img: redclay, top: 'redclay-top', bottom: 'redclay-bottom', benefits: 'blood flow, scar reduction, cell regeneration', color: new THREE.Color("rgb(255,182,193)"), photo: pink}, {name: 'chamomile', top: 'cham-top', benefits: 'digestion, reducing inflammation, stress', bottom: 'cham-bottom', color: new THREE.Color("rgb(255, 255, 179)"), img: chamomile}, {name: 'beet root', img: beet, top: 'beet-top', benefits: 'digestion, blood pressure, blood flow', bottom: 'beet-bottom', color: new THREE.Color("rgb(255, 133, 102)"), photo: red}, {name: 'comfrey', img: comfrey, benefits: 'scar reduction, acne, blood flow', top: 'comfrey-top', bottom: 'comfrey-bottom', color: new THREE.Color("rgb(83, 198, 140)"), photo: green}, {name: 'alkaline', img: alkaline, benefits: 'weight loss, boosts immune system, antioxidant', top: 'alkaline-top', bottom: 'alkaline-bottom', color: new THREE.Color("rgb(221, 153, 255)"), photo: rpurp}, {name: 'carrot', img: carrot, top: 'carrot-top', benefits: 'antioxidant, weight loss', bottom: 'carrot-bottom', color: new THREE.Color("rgb(255, 184, 77)"), photo: orange}, {name: 'cambrian', img: cambrian, top: 'cambrian-top', benefits: 'reducing inflammation, eczema, dermatitis', bottom: 'cambrian-bottom', color: new THREE.Color("rgb(204, 230, 255)"), photo: purp}, {name: 'alfalfa', img: alfalfa, top: 'alfalfa-top', benefits: 'kidney function, skin radiance, lower cholesterol', bottom: 'alfalfa-bottom', color: new THREE.Color("rgb(0, 128, 0)"), photo: green}, {name: 'ultramarine', img: ultramarine, top: 'ultramarine-top', benefits: 'cool color', bottom: 'ultramarine-bottom', color: new THREE.Color("rgb(26, 117, 255)"), photo: purp}].map(obj => {
            return <Addon id={obj.name} top={obj.top} benefits={obj.benefits} bottom={obj.bottom} key={Math.random()} obj={obj}/>
          })
        }
        </div>
      </Fragment>
    )
  }
}

export default Step3
