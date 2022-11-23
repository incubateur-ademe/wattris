import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Score from './home/Score'
import Timeline from './home/Timeline'

export default function Home() {
  return (
    <>
      <Section>
        <Section.Content flex>
          <Score />
        </Section.Content>
      </Section>
      <Section>
        <Section.Content flex>
          <Appliances />
          <Timeline />
        </Section.Content>
      </Section>
    </>
  )
}
