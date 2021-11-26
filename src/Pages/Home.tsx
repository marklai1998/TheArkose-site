import React from 'react'
import { About } from '../containers/About'
import { Contact } from '../containers/Contact'
import { Footer } from '../containers/Footer'
import { Header } from '../containers/Header'
import { Server } from '../containers/Server'
import { Services } from '../containers/Services'

export const Home = () => (
  <>
    <Header />
    <About />
    <Server />
    <Services />
    <Contact />
    <Footer />
  </>
)
