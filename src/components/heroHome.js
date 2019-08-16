import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import soap from '../assets/images/soap.png'
import {withRouter} from 'react-router'
import purp from '../assets/images/purpsoap.PNG'
import rpurp from '../assets/images/rpurp.PNG'
import yellow from '../assets/images/yellow.PNG'
import green from '../assets/images/green.PNG'
import third from '../assets/thirdSectionOtters.svg'
import orange from '../assets/images/orange.PNG'
import red from '../assets/images/red.PNG'
import pink from '../assets/images/pink.PNG'
import $ from 'jquery'
const colors = [purp, rpurp, green, red, pink, orange]

class Hero extends Component {

  componentDidMount() {

    $('.soap-hover').click(() => {
        this.props.history.push('/customize')
      })
    $('.blur-content').click(() => {
      this.props.history.push('/customize')
    })
// ORIGINAL //
  //   setInterval(() => {
  //   $('.color1').attr('src', colors[0])
  //   $('.color2').attr('src', colors[1])
  //   $('.color3').attr('src', colors[2])
  //   $('.color4').attr('src', colors[3])
  //   $('.color5').attr('src', colors[4])
  //   let color = colors.splice(4, 1)
  //   colors.splice(0, 0, color[0])
  // }, 700)

  // setTimeout(() => this.random(0), 1200)
  // this.opacity(0)
  }

  random = (i) =>{
    const soaps = $('.soap')

     setTimeout(() => {
       const random = Math.floor(Math.random() * colors.length)

       if ($(soaps[i]).attr('src') === colors[random]) {
         const copy = [...colors.slice(0,random), ...colors.slice(random+1,colors.length-1)]
         const randy = Math.floor(Math.random() * copy.length)
         $(soaps[i]).attr('src', copy[randy])
       } else {
         $(soaps[i]).attr('src', colors[random])
       }
       if(++i) this.random(i)
     }, 380)
     if (i===25) this.random(0)
  }

  opacity = (i) => {
    const rows = $('.customize-hero')
    // const random = Math.floor(Math.random() * colors.length)
    setTimeout(() => {
        $(rows[i]).animate({opacity: 1}, 400).delay(600).animate({opacity: 0}, 400)
      if(++i) this.opacity(i)
    }, 1900)
    if (i===5) this.opacity(0)
  }


  render(){


    return(
      <section className='hero-home'>
        <div className='hero-content'>
          <img src={third} alt=''/>
          <div className='hero-build-content column'>
            <h1>Soap for you</h1>
            <p>Introducing our new cambrian clay to promote reduced blood pressure and help with acne treatment. Customize your soap with cambrian, you wont regret it!</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', fontSize: '20px'}} onClick={() =>this.props.history.push('/customize')} className="email-signup">Build your soap</div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Hero)

// <section className='hero-home'>
  // <div className='hero-content'>
  //   <h1 className='hero-title'>
  //     <span>
  //     </span>
  //   </h1>
  //
  // </div>
  // <div className='customize-hero'>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color2' alt='' src={red}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color3' alt='' src={green}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color4' alt='' src={rpurp}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color5' alt='' src={rpurp}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color1' alt='' src={purp}/>
  //   </div>
  // </div>
  // <div className='customize-hero'>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color3' alt='' src={orange}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img  className='color4' alt='' src={purp}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color5' alt='' src={purp}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
  //     <img className='color1' alt='' src={red}/>
  //   </div>
  //   <div>
  //     <span className='blur-content'>customize</span>
  //     <div className='soap-hover'></div>
//       <img className='color2' alt='' src={pink}/>
//     </div>
//   </div>
//   <div className='customize-hero'>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color4' alt='' src={orange}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color5' alt='' src={purp}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color1' alt='' src={purp}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color2' alt='' src={pink}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color3' alt='' src={red}/>
//     </div>
//   </div>
//   <div className='customize-hero'>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color5' alt='' src={orange}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color1' alt='' src={purp}/>
//     </div>
//     <div> <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color2' alt='' src={pink}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color3' alt='' src={red}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color4' alt='' src={green}/>
//     </div>
//   </div>
//   <div className='customize-hero'>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color1' alt='' src={orange}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color2' alt='' src={purp}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color3' alt='' src={pink}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color4' alt='' src={yellow}/>
//     </div>
//     <div>
//       <span className='blur-content'>customize</span>
//       <div className='soap-hover'></div>
//       <img className='color5' alt='' src={green}/>
//     </div>
//   </div>
// </section>
