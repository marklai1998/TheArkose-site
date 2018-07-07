// @flow

import React, { PureComponent } from 'react'
import { Nav } from './Nav'
import Logo from './logo.svg'
import background from './main.png'
import './style.css'

type State = {
  scrollHeight: number,
  opacity: number,
  small_logo: boolean
}

export class Header extends PureComponent<{}, State> {
  state = {
    scrollHeight: 0,
    opacity: 0,
    small_logo: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.update_header)
    window.addEventListener('resize', this.update_header)
    this.update_header()
  }

  update_header = () => {
    const header = document.getElementById('header')
    const headerHeight = header ? header.clientHeight : 0
    const opacity = (100 - ((headerHeight - 100) / headerHeight) * 100) / 100
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    this.setState({
      opacity,
      scrollHeight,
      small_logo: headerHeight < 300,
    })
  }

  render() {
    return (
      <header id='header'
        style={{ height: `calc( 100vh - ${this.state.scrollHeight}px)`, backgroundImage: `url(${background})` }}>
        <div className='header-overlay' style={{
          height: `calc( 100vh - ${this.state.scrollHeight}px)`,
          background: `rgba(34, 34, 34, ${this.state.opacity})`
        }}>
          <div className='container header-inner'>
            <div className={'logo ' + (this.state.small_logo ? 'small' : '')}>
              <img src={Logo} alt='logo' />
              <div className={'name'}>
                <div>The Arkose</div>
                <div>Network</div>
              </div>
            </div>
          </div>
          <Nav />
        </div>
      </header>
    )
  }
}
