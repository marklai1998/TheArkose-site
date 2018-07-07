// @flow

import React, { PureComponent } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'

import { Header } from './Modules/Header'
import { About } from './Modules/About'
import { Server } from './Modules/Server'
import { Services } from './Modules/Services'
import { Contact } from './Modules/Contact'
import { Footer } from './Modules/Footer'
import './style.css'

export const App = () => {
  configureAnchors({ offset: -100 })
  return (
    <React.Fragment>
      <Header />
      <About />
      <Server />
      <Services />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

