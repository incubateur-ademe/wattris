import React from 'react'
import styled from 'styled-components'
import ButtonLink from 'components/base/ButtonLink'

const StyledButtonLink = styled(ButtonLink)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.background};
`
export default function DisplayDescription(props) {
  return (
    <StyledButtonLink onClick={props.onClick}>
      {props.fullDescription ? 'Voir moins' : 'Voir plus'}
    </StyledButtonLink>
  )
}
