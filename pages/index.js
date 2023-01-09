import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'
import Web from 'components/layout/Web'
import Home from 'components/views/Home'
import Configurator from 'components/misc/Configurator'

const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.75rem;
  text-align: center;
`
const Text = styled.p`
  max-width: 40rem;
  margin: 0 auto 2rem;
  text-align: center;
`
export default function Index() {
  const [hoverIframe, setHoverIframe] = useState(false)
  return (
    <Web>
      <Section>
        <Section.Content>
          <Title>
            Wattris, le jeu pour éviter les coupures d'électricité cet
            hiver&#8239;!
          </Title>
          <Text>
            Simulez la consommation électrique de votre foyer, découvrez quels
            appareils consomment beaucoup, et apprenez les bons gestes pour
            réduire la charge du réseau électrique lors des périodes de tension
            de 8h à 13h et de 18h à 20h.
          </Text>
        </Section.Content>
      </Section>
      <Home hoverIframe={hoverIframe} />
      <Configurator setHoverIframe={setHoverIframe} />
    </Web>
  )
}
