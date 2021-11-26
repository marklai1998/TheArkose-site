import React, { useMemo, useState } from 'react'

import { allServices, servicesType } from './servicesMap'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import styled from 'styled-components'
import { useReveal } from '../../hooks/useReveal'

export const Services = () => {
  const [selectorRef] = useReveal<HTMLDivElement>({
    origin: 'left',
    duration: 1000,
    delay: 150,
    distance: '300px',
    opacity: 0,
    easing: 'ease',
  })
  const [listRef] = useReveal<HTMLUListElement>({
    origin: 'left',
    duration: 1000,
    delay: 150,
    distance: '0',
    opacity: 0,
    easing: 'ease',
  })
  const [type, setType] = useState(servicesType.MC)

  const items = useMemo(
    () =>
      type === servicesType.ALL
        ? allServices
        : allServices.filter(({ type: itemType }) => itemType === type),
    [type]
  )

  return (
    <div id='Services'>
      <Wrapper>
        <div className='row'>
          <div className='col-12'>
            <Title>Services</Title>
            <br />
          </div>
          <Selector className='col-12 ' ref={selectorRef}>
            <button onClick={() => setType(servicesType.ALL)}>All</button>
            <button onClick={() => setType(servicesType.MC)}>Minecraft</button>
            <button onClick={() => setType(servicesType.STEAM)}>Steam</button>
          </Selector>
          <List ref={listRef}>
            {items.map(({ icon, name }, i) => (
              <li key={i}>
                <img src={icon} alt='icon' />
                {name}
              </li>
            ))}
          </List>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled(Section)`
  text-align: center;
`

const Selector = styled.div`
  text-align: left;
  border-bottom: #eee8be 2px solid;
  margin-bottom: 20px;

  & button {
    color: #aca583;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    margin: 0 10px;
  }

  & button:hover {
    color: #948e6f;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    font-size: 20px;
    list-style: none;
    margin: 10px;
    color: #3f3f3f;
    background-color: #eee8be;
    padding: 10px 20px;
    float: left;
  }

  & img {
    width: 30px;
    margin-right: 10px;
  }
`
