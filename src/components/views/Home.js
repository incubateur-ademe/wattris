import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Timeline from './home/Timeline'
import Score from './home/Score'
import NewOccurence from './home/NewOccurence'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  padding-top: 6.5rem;

  ${(props) => props.theme.mq.medium} {
    padding-top: 0;
  }
`
export default function Home() {
  return (
    <Section>
      <Section.Content>
        <Wrapper>
          <Score />
          <NewOccurence />
          <Timeline />
        </Wrapper>
        <Appliances />
      </Section.Content>
    </Section>
  )
}
