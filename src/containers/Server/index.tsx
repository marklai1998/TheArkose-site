import React from 'react'

import background from '../../assets/serverBackground.png'
import serverImg from '../../assets/server.svg'
import processor from '../../assets/processor.svg'
import ram from '../../assets/ram.svg'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import styled from '@emotion/styled'
import { useReveal } from '../../hooks/useReveal'

export const Server = () => {
  const [serverImageRef] = useReveal<HTMLImageElement>({
    duration: 1000,
    delay: 150,
    scale: 0.9,
    distance: '0',
    opacity: 0,
    easing: 'ease',
  })
  const [cpuRef] = useReveal<HTMLDivElement>({
    duration: 700,
    delay: 150,
    distance: '200px',
    opacity: 0,
    easing: 'ease',
  })
  const [ramRef] = useReveal<HTMLDivElement>({
    duration: 700,
    delay: 150,
    distance: '200px',
    opacity: 0,
    easing: 'ease',
  })

  return (
    <div id='Server'>
      <Wrapper backgroundImg={background}>
        <div className='row'>
          <div className='col-12'>
            <Title>Meet our server</Title>
            <Image src={serverImg} alt='server' ref={serverImageRef} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <Component ref={cpuRef}>
              <img src={processor} alt='processor' />
              <span>E5 2690 v2</span>
            </Component>
          </div>
          <div className='col-12 col-sm-6'>
            <Component ref={ramRef}>
              <img src={ram} alt='ram' />
              <span>32GB ECC</span>
            </Component>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled(Section)`
  color: #fff;
  text-align: center;
`

const Image = styled.img`
  margin-top: 50px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
`

const Component = styled.div`
  position: relative;
  margin-top: 50px;
  font-size: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 7px;
    height: 100%;
    border-width: 3px 0 3px 3px;
    border-style: solid;
    border-radius: 5px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 7px;
    height: 100%;
    border-width: 3px 3px 3px 0;
    border-style: solid;
    border-radius: 5px;
  }

  & img {
    display: inline-block;
    width: 30px;
    margin-right: 20px;
    margin-left: 20px;
    vertical-align: top;
  }

  & span {
    padding-top: 10px;
    margin-right: 15px;
  }
`
