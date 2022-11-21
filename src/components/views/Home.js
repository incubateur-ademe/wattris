import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Score from './home/Score'
import Timeline from './home/Timeline'

const Wrapper = styled.div`
  flex: 1;
`
export default function Home() {
  return (
    <Section>
      <Section.Content flex>
        <Appliances />
        <Wrapper>
          <Score />
          <Timeline />
        </Wrapper>
      </Section.Content>
    </Section>
  )
}
