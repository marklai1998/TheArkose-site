// @flow

import React, { PureComponent } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollReveal from 'scrollreveal'
import { Button } from '../_share/Button'
import { Container } from '../_share/Container'
import { Title } from '../_share/Title'

import player from './player.png'
import './style.css'

export class About extends PureComponent<{}> {
  componentDidMount () {
    const config = {
      origin: 'top',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    const config_player = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    ScrollReveal().reveal('.player', config_player)
    ScrollReveal().reveal(this.refs.aboutparagrph, config)
    ScrollReveal().reveal('.find_out_what_we_host', config)
  }

  render () {
    return (
      <ScrollableAnchor id={'About'}>
        <Container className='about'>
          <div className='container'>
            <div className='row justify-content-around'>
              <div className='col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4'>
                <img src={player} className='player' alt='player' />
              </div>
              <div className='col-10 col-sm-12 col-md-8 col-lg-6 col-xl-5'>
                <Title text={'About Us'} />
                <br />
                <div ref='aboutparagrph'>
                  <b>The Arkose Network</b> is a tiny group established since
                  2018
                  <br />
                  Run by{' '}
                  <a href='https://www.youtube.com/user/mark1395711'>
                    MrMatches
                  </a>{' '}
                  and couple of partners
                  <br />
                  We aim to provide a stable hosting services platform for our
                  users
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <Button
                  hyperLink='#Services'
                  text='Find out what we are hosting'
                />
              </div>
            </div>
          </div>
        </Container>
      </ScrollableAnchor>
    )
  }
}
