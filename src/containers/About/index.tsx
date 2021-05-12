import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import ScrollReveal from 'scrollreveal'

import player from '../../assets/player.png'

export const About = () => {
  const playerRef = useRef<HTMLImageElement>(null)
  const aboutParagraphRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!playerRef.current) return
    ScrollReveal().reveal(playerRef.current, {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true,
    })
  }, [playerRef])

  useEffect(() => {
    if (!aboutParagraphRef.current) return
    ScrollReveal().reveal(aboutParagraphRef.current, {
      origin: 'top',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true,
    })
  }, [aboutParagraphRef])

  return (
    <div id='About'>
      <Wrapper>
        <div className='row justify-content-around'>
          <div className='col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4'>
            <Player src={player} alt='player' ref={playerRef} />
          </div>
          <div className='col-10 col-sm-12 col-md-8 col-lg-6 col-xl-5'>
            <Title>About Us</Title>
            <br />
            <div ref={aboutParagraphRef}>
              <b>The Arkose Network</b> is a tiny group established since 2018
              <br />
              Run by{' '}
              <a href='https://www.youtube.com/user/mark1395711'>
                MrMatches
              </a>{' '}
              and couple of partners
              <br />
              We aim to provide a stable hosting services platform for our users
              <br />
              <br />
              <br />
              <br />
              <Button href='#Services' text='Find out what we are hosting' />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled(Section)`
  margin-top: 100vh;
  z-index: 10;
`

const Player = styled.img`
  width: 100%;
  -webkit-filter: drop-shadow(-30px 10px 0px rgba(194, 207, 91, 0.7));
  filter: drop-shadow(-30px 0px 0px rgba(194, 207, 91, 0.7));
`
