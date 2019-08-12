import React, {Component} from 'react'
import Hero from '../components/heroHome'
import Second from '../components/secondSection'
import Third from '../components/thirdSection'
import Fourth from '../components/fourthSection'
import yellow from '../assets/images/yellowcurve.png'

export default class Home extends Component {
  render(){
    return(
      <div style={{paddingTop: '0px'}}>
        <Hero />
        <Second />
        <Third />
        <Fourth />
      </div>
    )
  }
}
