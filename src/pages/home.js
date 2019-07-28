import React, {Component} from 'react'
import Hero from '../components/heroHome'
import Second from '../components/secondSection'
import Third from '../components/thirdSection'
import yellow from '../assets/images/yellowcurve.png'

export default class Home extends Component {
  render(){
    return(
      <div style={{paddingTop: '75px'}}>
        <img style={{position: 'absolute', top: '53px', width: '100%'}} src={yellow} alt=''/>
        <Hero />
        <Second />
        <Third />
      </div>
    )
  }
}
