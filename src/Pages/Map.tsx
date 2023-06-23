import styled from '@emotion/styled'
import { useState } from 'react'

import { Empty } from '../components/Empty'
import { MapHeader } from '../containers/MapHeader'
import { MapSelector } from '../containers/MapSelector'

export const Map = () => {
  const [mapId, setMapId] = useState<string | null>(null)

  return (
    <Container>
      <MapHeader />
      <Content>
        <MapSelector setMapId={setMapId} />
        {mapId ? (
          <Iframe src={`https://dynmap.thearkose.com/${mapId}/`} />
        ) : (
          <Empty />
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
