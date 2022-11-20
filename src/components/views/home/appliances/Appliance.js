import React from 'react'
import styled from 'styled-components'

import Occurence from './appliance/Occurence'

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 1rem;
`
const Title = styled.p`
  margin: 0;
`
const Occurences = styled.div``
export default function Appliance(props) {
  return (
    <Wrapper color={props.appliance.color}>
      <Title>{props.appliance.name}</Title>
      <Occurences>
        {props.appliance.occurences.map((occurence, index) => (
          <Occurence
            key={index}
            index={index}
            occurence={occurence}
            slug={props.appliance.slug}
          />
        ))}
      </Occurences>
    </Wrapper>
  )
}
