import React from 'react'
import { Router } from './Router'
import { Global, css } from '@emotion/react'

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
    <Router />
  </>
)
