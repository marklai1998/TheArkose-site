import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Nav } from './Nav'
import { Logo } from './Logo'
import background from '../../assets/main.png'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

export const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const { y: scrollHeight } = useWindowScroll()
  const [headerHeight, setHeaderHeight] = useState(0)

  const updateHeader = useCallback(() => {
    if (!headerRef.current) return
    setHeaderHeight(headerRef.current.clientHeight)
  }, [])

  useEffect(() => {
    updateHeader()
  }, [updateHeader])

  useEffect(() => {
    window.addEventListener('scroll', updateHeader)
    window.addEventListener('resize', updateHeader)

    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [updateHeader])

  const smallLogo = useMemo(() => headerHeight < 300, [headerHeight])
  const opacity = useMemo(
    () => (100 - ((headerHeight - 100) / headerHeight) * 100) / 100,
    [headerHeight]
  )

  return (
    <Wrapper id='header' ref={headerRef} scrollHeight={scrollHeight}>
      <Overlay scrollHeight={scrollHeight} opacity={opacity}>
        <LogoWrapper className='container'>
          <Logo small={smallLogo} />
        </LogoWrapper>
        <Nav />
      </Overlay>
    </Wrapper>
  )
}

const Wrapper = styled.header<{ scrollHeight: number }>`
  background: #222 50% 50%;
  color: white;
  width: 100%;
  background-size: cover;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  min-height: 90px;

  background-image: url(${background});
  height: calc(100vh - ${({ scrollHeight }) => scrollHeight}px);
`

const Overlay = styled.div<{ scrollHeight: number; opacity: number }>`
  position: relative;
  min-height: 90px;
  transition: none;
  border-bottom: #eee8be 10px solid;
  height: calc(100vh - ${({ scrollHeight }) => scrollHeight}px);
  background: rgba(34, 34, 34, ${({ opacity }) => opacity});
`

const LogoWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  pointer-events: none;
`
