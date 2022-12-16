import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.background};
  background: transparent;
  border: 0.125rem solid ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  cursor: pointer;
`
export default function DisplayDescription(props) {
  return <Wrapper onClick={props.onClick}>?</Wrapper>
}
