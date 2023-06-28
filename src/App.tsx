import { Global, css } from '@emotion/react'

import { About } from './containers/About'
import { Contact } from './containers/Contact'
import { Footer } from './containers/Footer'
import { Header } from './containers/Header'
import { Server } from './containers/Server'
import { Services } from './containers/Services'

export const App = () => (
  <>
    <Global
      styles={css`
        body {
          font-family: 'Rajdhani', Microsoft JhengHei, sans-serif;
          width: 100%;
          height: 100%;
        }

        html {
          width: 100%;
          height: 100%;
        }

        #app {
          width: 100%;
          height: 100%;
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
      `}
    />
    <Header />
    <About />
    <Server />
    <Services />
    <Contact />
    <Footer />
  </>
)
