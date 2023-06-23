import styled from '@emotion/styled'
import { useState } from 'react'

import { Item } from './Item'

type Props = {
  setMapId: (id: string) => void
}

export const MapSelector = ({ setMapId }: Props) => {
  const [visible, setVisible] = useState(false)

  const toggleNav = () => {
    setVisible(prev => !prev)
  }

  const onChangeMap = (mapId: string) => {
    setMapId(mapId)
    setVisible(false)
  }

  return (
    <Wrapper>
      <Btn visible={visible} onClick={toggleNav}>
        <i className="fas fa-caret-right" />
      </Btn>
      <Nav visible={visible}>
        <CateTitle>Project TheArkose</CateTitle>
        <Cate>
          <Item name="1.16" changeMap={onChangeMap} mapId="94" />
          <Item name="1.14" changeMap={onChangeMap} mapId="93" hasDownload />
          <Item name="1.13" changeMap={onChangeMap} mapId="92" hasDownload />
          <Item name="1.12" changeMap={onChangeMap} mapId="91" hasDownload />
        </Cate>
        <CateTitle>火柴人小品休閒伺服器</CateTitle>
        <Cate>
          <Item name="1.12" changeMap={onChangeMap} mapId="90" hasDownload />
        </Cate>
      </Nav>
    </Wrapper>
  )
}

const Btn = styled.div<{ visible: boolean }>`
  position: absolute;
  right: 0;
  height: 50px;
  border-radius: 0 5px 5px 0;
  background-color: #dbd5af;
  display: table;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);

  & i {
    display: table-cell;
    vertical-align: middle;
    color: #222222;
    padding: 10px;
    transition: all 1s;

    ${({ visible }) => (visible ? 'transform: rotate(180deg);' : '')}
  }
`

const Nav = styled.div<{ visible: boolean }>`
  color: #fff;
  background-color: #222222;
  overflow: auto;
  margin-right: 26px;
  height: inherit;

  width: ${({ visible }) => (visible ? '300px' : '0')};
`

const CateTitle = styled.div`
  background-color: white;
  color: #222222;
  border-left: #f5d168 0px solid;
  transition: all 0.5s;
  overflow: hidden;
  white-space: nowrap;
  padding: 8px 16px;
  border-left: #f5d168 5px solid;
`

const Cate = styled.ul`
  list-style: none;
  padding-left: 0;
  overflow: hidden;
`

const Wrapper = styled.div`
  position: absolute;
  height: inherit;
  left: 0;
  z-index: 10;
`
