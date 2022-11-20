import React from 'react'
import styled from 'styled-components'

import { getApplianceFromSlug } from 'utils/appliances'

const Wrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 0.125rem;
  overflow: hidden;
`
export default function Bloc(props) {
  return (
    <Wrapper color={props.bloc.appliance.color}>
      {props.bloc.appliance.initial || props.bloc.appliance.slug}
    </Wrapper>
  )
}
