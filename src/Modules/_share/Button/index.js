// @flow

import React from 'react'
import './style.css'

type Props = {
  hyperLink: string,
  icon?: string,
  text: string
}

export const Button = (props: Props) => (
  <a href={props.hyperLink} className={'button'}>
    {props.icon && <i className={'fab ' + props.icon} />}
    {props.text}
  </a>
)