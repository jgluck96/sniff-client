import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import soap from '../assets/images/soap.png'
import {withRouter} from 'react-router'
import purp from '../assets/images/purpsoap.PNG'
import rpurp from '../assets/images/rpurp.PNG'
import yellow from '../assets/images/yellow.PNG'
import green from '../assets/images/green.PNG'
import orange from '../assets/images/orange.PNG'
import red from '../assets/images/red.PNG'
import pink from '../assets/images/pink.PNG'
import $ from 'jquery'
const colors = [purp, rpurp, green, red, pink]

class Hero extends Component {

  componentDidMount() {
    // this.randomize()

    $('.soap-hover').click(() => {
      this.props.history.push('/customize')
    })
    $('.blur-content').click(() => {
      this.props.history.push('/customize')
    })
// ORIGINAL //
  //   setInterval(() => {
  //
  //
  //   $('.color1').attr('src', colors[0])
  //   $('.color2').attr('src', colors[1])
  //   $('.color3').attr('src', colors[2])
  //   $('.color4').attr('src', colors[3])
  //   $('.color5').attr('src', colors[4])
  //   let color = colors.splice(4, 1)
  //   colors.splice(0, 0, color[0])
  // }, 700)

//  ORIGINAL //

  const soaps = $('.soap')
  let idx = 0
  // while (true) {
    setInterval(() => {
      const random = Math.floor(Math.random() * colors.length)
    const change = $(soaps[idx]).attr('src', colors[random])

    // idx+=1
  }, 500)
  // }

//     $(function () {
//     var parent = $(".customize-hero");
//     var divs = parent.children();
//     parent.empty()
//     console.log(parent.children());
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
//
// })

  }


  render(){
    return(
      <section className='hero-home'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            <span>
            </span>
          </h1>

        </div>
        <div className='customize-hero'>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color2 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color3 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color4 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color5 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color1 soap' alt='' src={yellow}/>
          </div>
        </div>
        <div className='customize-hero'>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color3 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img  className='color4 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color5 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color1 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color2 soap' alt='' src={yellow}/>
          </div>
        </div>
        <div className='customize-hero'>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color4 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color5 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color1 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color2 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color3 soap' alt='' src={yellow}/>
          </div>
        </div>
        <div className='customize-hero'>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color5 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color1 soap' alt='' src={yellow}/>
          </div>
          <div> <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color2 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color3 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color4 soap' alt='' src={yellow}/>
          </div>
        </div>
        <div className='customize-hero'>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color1 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color2 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color3 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color4 soap' alt='' src={yellow}/>
          </div>
          <div>
            <span className='blur-content'>customize</span>
            <div className='soap-hover'></div>
            <img className='color5 soap' alt='' src={yellow}/>
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
