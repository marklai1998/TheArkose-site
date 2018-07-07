// @flow

import React, { PureComponent } from 'react'
import { Container } from '../_share/Container'
import reactLogo from './react.svg'
import './style.css'

export const Footer = () => (
  <Container backgroundColor='#222222' className='footer'>
    Built by Mr.Matches. All right reserved<br />
    Built with react.js
    <img src={reactLogo} alt='react' />
  </Container>
)