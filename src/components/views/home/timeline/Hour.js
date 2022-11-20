import React from 'react'
import styled from 'styled-components'

import Bloc from './hour/Bloc'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.25rem;
  width: 1.25rem;
  background-color: ${(props) => props.theme.colors.second};
`
export default function Hour(props) {
  return (
    <Wrapper>
      {props.hour.map((bloc) => (
        <Bloc bloc={bloc} />
      ))}
    </Wrapper>
  )
}
