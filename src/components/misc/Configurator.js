import React from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import Section from 'components/base/Section'
import Code from './configurator/Code'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
`
const Title = styled.h1`
  font-size: 2rem;
`
export default function Configurator(props) {
  const iframe = useIframe()
  return (
    !iframe && (
      <Section>
        <Section.Content>
          <Wrapper
            onMouseEnter={() => props.setHoverIframe(true)}
            onMouseLeave={() => props.setHoverIframe(false)}
          >
            <Title>Intégrez Wattris sur votre site</Title>
            <Code />
          </Wrapper>
        </Section.Content>
      </Section>
    )
  )
}
