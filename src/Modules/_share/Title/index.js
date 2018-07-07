// @flow

import React from 'react'
import './style.css'

type Props = {
  text: string,
  ref?: string
}

export const Title = (props: Props) => (
  <h1 ref={props.ref}>{props.text}</h1>
)