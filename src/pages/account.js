import React, {Component, Fragment} from 'react'
import Orders from '../containers/orders'
import Settings from '../components/settings'
import {connect} from 'react-redux'
import {logout} from '../actions/users'
import {withRouter} from 'react-router'

class Account extends Component {

  // state = this.props.location.state
  state = {
    tab: false,
    member: ''
  }

  componentDidMount() {
    window.scrollTo(0,0);
    // const member = new Date(this.props.user.created_at).toDateString().split(' ').slice(1,4)
    // member[1] = member[1] + ','
    // this.setstate({member: member.join(' ')})
    // this.setState({member: this.props.user})
    if (this.props.user) {
      const member = new Date(this.props.user.created_at).toDateString().split(' ').slice(1,4)
      member[1] = member[1] + ','
      this.setState({member: member.join(' ')})
    }
  }
  componentDidUpdate(prevState) {

    if (prevState.user !== this.props.user) {
      const member = new Date(this.props.user.created_at).toDateString().split(' ').slice(1,4)
      member[1] = member[1] + ','
      this.setState({member: member.join(' ')})
    }
  }

  tabChange1 = () => {
    // console.log('jj');
    this.setState({tab: true})
  }
  tabChange2 = () => this.setState({tab: false})

  logout = () => {
  localStorage.removeItem("token")
  this.props.logout()
  if (window.FB) {
    const fb = localStorage.getItem('FB_id')
    window.FB.logout(fb)
  }
  localStorage.removeItem("FB_id")
  this.props.history.push('/')

  }

  render(){
    return(

      <Fragment>
        <div className='account-bg'>
          <span>You're the boss of your account.</span>
          <div style={{fontSize: '15px'}}>Member since {this.state.member ? this.state.member : null}</div>
        </div>
        {this.props.user  ?
              <Fragment>
        <ul className='account-tabs'>
          <li className='account-tab' onClick={this.tabChange2}>
            <div className={!this.state.tab ? 'account-active' : null}>
              Settings
            </div>
          </li>
          <li className='account-tab' onClick={this.tabChange1}>
            <div className={this.state.tab ? 'account-active' : null}>
              Orders
            </div>
          </li>
          <li className='account-tab' onClick={this.logout}>
            <div>
              <a style={{color: 'black', textDecoration: 'none'}} href='/'>Logout</a>
            </div>
          </li>
        </ul>

        { this.state.tab ?
        <Orders />
        :
        <Settings />
        }
      </Fragment>
      :
      <div className='account-load loader-bg'>
      <div className='loader-spinner'>
        <div className='loader-top'>
          <div className=''>
          </div>
          <div className=''>
          </div>
          <div className=''>
          </div>
          <div className=''>
          </div>
        </div>
        <div className='loader-bottom'>
          <div className=''>
          </div>
          <div className=''>
          </div>
          <div className=''>
          </div>
          <div className=''>
          </div>
        </div>
      </div>
        
      </div>
    }
    </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps,{logout})(Account))
