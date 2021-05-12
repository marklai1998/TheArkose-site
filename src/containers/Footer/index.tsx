import React from 'react'
import styled from 'styled-components'
import reactLogo from '../../assets/react.svg'

export const Footer = () => (
  <Wrapper>
    <div className='container'>
      Built by Mr.Matches. All right reserved
      <br />
      Built with react.js
      <img src={reactLogo} alt='react' />
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: #222222;
  color: #fff;
  padding: 10px 20px;

  & img {
    display: inline-block;
    width: 25px;
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`
