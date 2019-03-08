// @flow

import React, { PureComponent } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollReveal from 'scrollreveal'
import ReactCSSTransistionGroup from 'react-addons-css-transition-group'
import { Container } from '../_share/Container'
import { Title } from '../_share/Title'

import './style.css'
import { allServices } from './servicesMap'

type State = {
  displayItems: Array<Array<string>>,
}

export class Services extends React.PureComponent<{}, State> {
  state = {
    displayItems: allServices
  }

  componentDidMount () {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '0',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    const config_services_selector = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '300px',
      opacity: 0,
      easing: 'ease',
      reset: true
    }
    ScrollReveal().reveal('.services_selector', config_services_selector)
    ScrollReveal().reveal('.services_list', config)
  }

  change_items = (cate: string) => () => {
    if (cate === 'all') {
      this.setState({ displayItems: allServices.slice() })
    } else {
      const displayItems = allServices.reduce(
        (acc, item) => (item[0] === cate ? [...acc, item] : acc),
        []
      )
      this.setState({ displayItems })
    }
  }

  render () {
    return (
      <ScrollableAnchor id={'Services'}>
        <Container className='services'>
          <div className='row'>
            <div className='col-12'>
              <Title text='Services' />
              <br />
            </div>
            <div className='col-12 services_selector'>
              <button onClick={this.change_items('all')}>All</button>
              <button onClick={this.change_items('mc')}>Minecraft</button>
              <button onClick={this.change_items('steam')}>Steam</button>
            </div>
            <ul className='services_list'>
              <ReactCSSTransistionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                {this.state.displayItems.map((item, i) => (
                  <li key={i}>
                    <img src={item[1]} />
                    {item[2]}
                  </li>
                ))}
              </ReactCSSTransistionGroup>
            </ul>
          </div>
        </Container>
      </ScrollableAnchor>
    )
  }
}
