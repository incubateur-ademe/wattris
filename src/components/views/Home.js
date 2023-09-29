import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Timeline from './home/Timeline'
import Score from './home/Score'
import ApplianceModal from './home/ApplianceModal'
import ExportSimulation from './home/ExportSimulation'

const StyledSectionContent = styled(Section.Content)`
  padding-top: 0.5rem;
  border: 0.125rem solid
    ${(props) => props.theme.colors[props.hoverIframe ? 'main' : 'background']};
  border-radius: 1rem;
  transition: border 300ms ease-out;
`
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  padding-top: 6.5rem;

  ${(props) => props.theme.mq.medium} {
    padding-top: 0;
  }
`
export default function Home(props) {
  return (
    <Section id='home'>
      <StyledSectionContent hoverIframe={props.hoverIframe}>
        <Wrapper>
          <Score />
          <ApplianceModal />
          <Timeline />
        </Wrapper>
        <Appliances />
        <ExportSimulation />
      </StyledSectionContent>
    </Section>
  )
}
