// @flow

import React, { PureComponent } from 'react'
import './style.css'

type State = {
  showMobileNav: boolean
}

export class Nav extends PureComponent<{}, State> {
  state = {
    showMobileNav: false
  }

  toggle_mobile_nav = () => {
    this.setState(prevStaate => ({ showMobileNav: !prevStaate.showMobileNav }))
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='d-none d-sm-none d-md-block'>
            <ul className='nav'>
              <li><a href='#About'>About Us</a></li>
              <li><a href='#Server'>Server</a></li>
              <li><a href='#Services'>Services</a></li>
              <li><a href='#Contact'>Contact Us</a></li>
              <li><a href='https://map.thearkose.com'>Online Map</a></li>
            </ul>
          </div>
        </div>
        <div className='d-block d-sm-block d-md-none'>
          <i className='fas fa-bars nav-mobile-icon' onClick={this.toggle_mobile_nav} />
          <ul className={'nav-mobile ' + (this.state.showMobileNav ? 'show' : '')}>
            <li><a href='#About'>About Us</a></li>
            <li><a href='#Server'>Server</a></li>
            <li><a href='#Services'>Services</a></li>
            <li><a href='#Contact'>Contact Us</a></li>
            <li><a href='https://map.thearkose.com'>Online Map</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
