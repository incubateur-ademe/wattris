import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'
import Marianne from 'components/base/Marianne'
import Ademe from 'components/base/Ademe'
import Incubateur from 'components/base/Incubateur'

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`
const Logos = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 0.75rem;
  text-decoration: none;

  ${(props) => props.theme.mq.small} {
    padding: 0 0.25rem;
    font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  }
`
const Accessibility = styled.div`
  padding-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
`
export default function Footer(props) {
  return (
    <>
      <LogosWrapper>
        <Logos
          to='https://beta.gouv.fr/startups/?incubateur=ademe'
          aria-label='beta.gouv.incubateur-ademe'
          noIcon
        >
          <Marianne />
          <Ademe />
          <Incubateur />
        </Logos>
      </LogosWrapper>
      <Accessibility>Accessibilité : non conforme</Accessibility>
    </>
  )
}
