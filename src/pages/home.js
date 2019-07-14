import React, {Component} from 'react'
import Hero from '../components/heroHome'
import Second from '../components/secondSection'
import Third from '../components/thirdSection'

export default class Home extends Component {
  render(){
    return(
      <div style={{paddingTop: '75px'}}>
        <Hero />
        <Second />
        <Third />
      </div>
    )
  }
}
