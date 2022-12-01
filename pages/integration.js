import React from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

import Web from 'components/layout/Web'
import Section from 'components/base/Section'

const StyledIframeResizer = styled(IframeResizer)`
  flex: 1;
  width: 100%;
  border: none;
  border-radius: 1rem;
`
export default function integration() {
  return (
    <Web>
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
          <StyledIframeResizer
            src={`/iframe`}
            allowfullscreen='true'
            webkitallowfullscreen='true'
            mozallowfullscreen='true'
          />
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
    </Web>
  )
}
