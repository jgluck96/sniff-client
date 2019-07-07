import React, {Component} from 'react'
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return(
      <div>
        <header>
          <nav className='navbar fixed-top'>
            <div className='container-fluid'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    HOME
                  </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/customize'>
                      CUSTOMIZE
                    </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/customize'>
                    LOGIN
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/customize'>
                    SIGNUP
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Nav
