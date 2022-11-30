import React from 'react'

import Section from 'components/base/Section'
import Appliances from './home/Appliances'
import Timeline from './home/Timeline'

export default function Home() {
  return (
    <>
      <Section>
        <Section.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim viverra magna porta vulputate. Nulla porta sollicitudin
            felis, et semper tortor blandit vitae. Cras accumsan vulputate
            neque, non egestas ligula pellentesque quis. Vivamus id nibh dui.
          </p>
          <p>
            Morbi eu nisi at massa mattis ultricies. Sed molestie suscipit eros
            vitae condimentum. Suspendisse sollicitudin imperdiet erat, nec
            condimentum justo tempus eu. Vivamus iaculis nisl vitae erat feugiat
            laoreet et a erat. Pellentesque sagittis lacus eleifend, mattis
            tortor ac, tincidunt elit. Nulla facilisi.
          </p>
        </Section.Content>
      </Section>
      <Section>
        <Section.Content>
          <Timeline />
          <Appliances />
        </Section.Content>
      </Section>
      <Section>
        <Section.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim viverra magna porta vulputate. Nulla porta sollicitudin
            felis, et semper tortor blandit vitae. Cras accumsan vulputate
            neque, non egestas ligula pellentesque quis. Vivamus id nibh dui.
          </p>
          <p>
            Morbi eu nisi at massa mattis ultricies. Sed molestie suscipit eros
            vitae condimentum. Suspendisse sollicitudin imperdiet erat, nec
            condimentum justo tempus eu. Vivamus iaculis nisl vitae erat feugiat
            laoreet et a erat. Pellentesque sagittis lacus eleifend, mattis
            tortor ac, tincidunt elit. Nulla facilisi.
          </p>
        </Section.Content>
      </Section>
    </>
  )
}
