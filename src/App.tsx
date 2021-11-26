import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Header } from './containers/Header'
import { About } from './containers/About'
import { Server } from './containers/Server'
import { Services } from './containers/Services'
import { Contact } from './containers/Contact'
import { Footer } from './containers/Footer'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <About />
    <Server />
    <Services />
    <Contact />
    <Footer />
  </>
)

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Rajdhani', Microsoft JhengHei, sans-serif;
  width: 100%;
}

#app {
  width: 100%;
}

a {
  color: #222222;
  text-decoration: none;
  transition: all 0.5s;
}

a:hover {
  color: #bdbdbd;
  text-decoration: none;
}

div {
  transition: all 0.5s;
}

img {
  transition: all 0.5s;
}
`
