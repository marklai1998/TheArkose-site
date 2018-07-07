// @flow

import React, { PureComponent } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollReveal from 'scrollreveal'
import { Button } from '../_share/Button'
import { Container } from '../_share/Container'
import { Title } from '../_share/Title'

import background from './background.png'
import chest from './chest.png'
import './style.css'

export class Contact extends React.PureComponent<{}> {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    const configChest = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    ScrollReveal().reveal(this.refs.contacttitle, config)
    ScrollReveal().reveal(this.refs.contactparagraph, config)
    ScrollReveal().reveal('.contact-list', config)
    ScrollReveal().reveal('.chest', configChest)
  }

  render() {
    return (
      <ScrollableAnchor id={'Contact'}>
        <Container backgroundImg={background} className='contact'>
          <div className='row justify-content-around'>
            <div className='col-10 col-sm-12 col-md-8 col-lg-6 col-xl-5'>
              <Title ref='contacttitle' text='Contact Us' /><br />
              <b ref='contactparagraph'>If you interested in our services, feel free to contact us</b>
              <br /><br />
              <ul className='contact-list'>
                <li>
                  <Button hyperLink='https://discord.gg/qcTv6nQ' icon='fa-discord' text='The Arkose Network' />
                </li>
                <li>
                  <Button hyperLink='https://t.me/MrMatchesExMark' icon='fa-telegram' text='@MrMatchesExMark' />
                </li>
                <li>
                  <Button hyperLink='https://www.facebook.com/MrMatchesExMark/Q' icon='fa-facebook' text='火柴人Ex改' />
                </li>
              </ul>
            </div>
            <div className='col-8 col-md-4'>
              <img src={chest} className='chest' alt='chest' />
            </div>
          </div>
        </Container>
      </ScrollableAnchor>
    )
  }
}