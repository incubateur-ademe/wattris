import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 0.125rem;
  overflow: hidden;
`
export default function Bloc(props) {
  return (
    <Wrapper color={props.bloc.appliance.color}>
      {props.bloc.appliance.initial || props.bloc.appliance.slug.charAt(0)}
    </Wrapper>
  )
}
