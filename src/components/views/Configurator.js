import React from 'react'
import styled from 'styled-components'

import Select from 'components/base/Select'
import Code from './configurator/Code'

import useIframe from 'hooks/useIframe'
import MagicLink from 'components/base/MagicLink'
import Section from 'components/base/Section'

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

const Text = styled.small``

export default function Configurator(props) {
  const iframe = useIframe()
  return (
    !iframe && (
      <Section>
        <Section.Content>
          <Wrapper>
            <Title>Intégrer Wattris en iframe</Title>
            <Code />
            <Text>
              Testez l'affichage sur{' '}
              <MagicLink to='/integration'>
                notre page de démonstration
              </MagicLink>{' '}
              (à noter que ce bloc d'informations disparaitra en iframe).
            </Text>
          </Wrapper>
        </Section.Content>
      </Section>
    )
  )
}
