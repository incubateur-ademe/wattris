import React from 'react'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Timeline from './home/Timeline'

export default function Home() {
  return (
    <Section>
      <Section.Content>
        <Timeline />
        <Appliances />
      </Section.Content>
    </Section>
  )
}
