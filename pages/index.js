import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Web from 'components/layout/Web'
import Home from 'components/views/Home'

const Title = styled.h1`
  max-width: 50rem;
  margin: 2rem auto 4rem;
  text-align: center;
`
export default function Index() {
  return (
    <Web>
      <Section>
        <Section.Content>
          <Title>
            Bienvenue sur Wattris, le jeu pour apprendre à éviter les coupures
            d'électricité&#8239;!
          </Title>
        </Section.Content>
      </Section>
      <Home />
    </Web>
  )
}
