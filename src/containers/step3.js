import React, {Component, Fragment} from 'react'
import redclay from '../assets/images/redclay.jpg'
import fennel from '../assets/images/fennel.png'
import chamomile from '../assets/images/chamomile.png'
import beet from '../assets/images/beet.png'
import Addon from '../components/addon'

class Step3 extends Component {
  render(){
    return(
      <Fragment>
        <p className='title'>Choose Your Add-on</p>
        <hr />
        <div className='row addon-selections'>
        {
          [{name: 'red clay', img: redclay}, {name: 'fennel', img: fennel}, {name: 'chamomile', img: chamomile}, {name: 'beet root', img: beet}].map(obj => {
            return <Addon id={obj.name} key={Math.random()} obj={obj}/>
          })
        }
        </div>
      </Fragment>
    )
  }
}

export default Step3
