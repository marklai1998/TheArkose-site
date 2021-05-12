import React from 'react'
import styled from 'styled-components'
import logoImg from '../../assets/logo.svg'

type Props = {
  small: boolean
}

export const Logo = ({ small }: Props) => (
  <Wrapper small={small}>
    <Icon small={small} src={logoImg} alt='logo' />
    <Name small={small}>
      <div>The Arkose</div>
      <div>Network</div>
    </Name>
  </Wrapper>
)

const Name = styled.div<{ small: boolean }>`
  display: inline-block;
  margin-left: 20px;
  vertical-align: top;

  & div:first-child {
    font-size: 45px;
    line-height: 15px;
    margin-right: 30px;
    margin-top: 50px;
  }

  & div:last-child {
    float: right;
    font-size: 25px;
  }

  ${({ small }) =>
    small
      ? `
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
  
  & div:first-child {
    font-size: 20px;
    line-height: 10px;
    margin-right: 20px;
    margin-top: 20px;
  }

  & div:last-child {
    float: right;
    font-size: 15px;
  }
  `
      : ''}
`

const Wrapper = styled.div<{ small: boolean }>`
  background-color: rgba(34, 34, 34, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  padding: 20px 30px;
  min-width: 440px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 30px solid rgba(255, 255, 255, 0.5);
    border-right: 30px solid transparent;
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 30px solid rgba(255, 255, 255, 0.5);
    border-left: 30px solid transparent;
    opacity: 1;
  }

  ${({ small }) =>
    small
      ? `
  background-color: rgba(34, 34, 34, 0);
  top: 50%;
  left: 0;
  margin-left: 100px;
  min-width: 250px;
  
  &:before,
  &:after {
    content: '';
    opacity: 0;
  }
  `
      : ''}
`

const Icon = styled.img<{ small: boolean }>`
  height: 130px;
  vertical-align: bottom;

  ${({ small }) =>
    small
      ? `
  height: 60px;
  vertical-align: bottom;
  `
      : ''}
`
