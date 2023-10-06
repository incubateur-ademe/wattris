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
            Wattris, le simulateur qui vous aide à consommer de l'électricité au
            bon moment&#8239;!
          </Title>
          <Text>
            Simulez les besoins électriques de votre foyer. Découvrez quels
            appareils consomment le plus. Faites le point sur les bons gestes
            pour réduire la demande en électricité lors des heures de pointes
            (de 7h à 11h et de 18h à 20h).
          </Text>
        </Section.Content>
      </Section>
      <Home hoverIframe={hoverIframe} />
      <Configurator setHoverIframe={setHoverIframe} />
    </Web>
  )
}
