// @flow

import React, { PureComponent } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollReveal from 'scrollreveal'
import { Container } from '../_share/Container'
import { Title } from '../_share/Title'

import background from './background.png'
import serverImg from './server.svg'
import processor from './processor.svg'
import ram from './ram.svg'
import './style.css'

export class Server extends PureComponent<{}> {
  componentDidMount() {
    const config = {
      duration: 1000,
      delay: 150,
      distance: '0',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    const config_server = {
      duration: 1000,
      delay: 150,
      scale: 0.9,
      distance: '0',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    const config_component = {
      duration: 700,
      delay: 150,
      distance: '200px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    ScrollReveal().reveal(this.refs.servertitle, config)
    ScrollReveal().reveal('.server_img', config_server)
    ScrollReveal().reveal('.component', config_component)
  }

  render() {
    return (
      <ScrollableAnchor id={'Server'}>
        <Container backgroundImg={background} className='server'>
          <div className='row'>
            <div className='col-12'>
              <Title ref='servertitle' text='Meet our server' />
              <img src={serverImg} className='server_img' alt='server' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className='component'>
                <img src={processor} alt='processor' />
                <a>E5 1650 v2</a>
              </div>
            </div>
            <div className='col-12 col-sm-6'>
              <div className='component'>
                <img src={ram} alt='ram' />
                <a>32GB ECC</a>
              </div>
            </div>
          </div>
        </Container>
      </ScrollableAnchor>
    )
  }
}