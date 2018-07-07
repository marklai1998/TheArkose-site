// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  backgroundImg?: string,
  backgroundColor: string,
  className: string
}

export class Container extends React.PureComponent<Props> {
  static defaultProps = {
    backgroundColor: '#FFFFFF'
  }

  render() {
    return (
      this.props.backgroundImg ?
        <div style={{ background: `linear-gradient(rgba(34, 34, 34, 0.5), rgba(34, 34, 34, 0.5)),url(${this.props.backgroundImg}) center` }} className={this.props.className}>
          <div className='container'>
            {this.props.children}
          </div>
        </div> :
        <div style={{ backgroundColor: this.props.backgroundColor }} className={this.props.className}>
          <div className='container'>
            {this.props.children}
          </div>
        </div>
    )
  }
}