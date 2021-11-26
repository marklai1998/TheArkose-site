import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  backgroundImg?: string
}

export const Section = ({ backgroundImg, children, ...rest }: Props) =>
  backgroundImg ? (
    <Wrapper
      style={{
        background: `linear-gradient(rgba(34, 34, 34, 0.5), rgba(34, 34, 34, 0.5)),url(${backgroundImg}) center`,
      }}
      {...rest}
    >
      <div className='container'>{children}</div>
    </Wrapper>
  ) : (
    <Wrapper {...rest}>
      <div className='container'>{children}</div>
    </Wrapper>
  )

const Wrapper = styled.div`
  padding: 70px 0;
  background-color: #fff;
  border-bottom: #eee8be 10px solid;
`
