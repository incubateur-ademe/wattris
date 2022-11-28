import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.select`
  display: block;
  padding: 0;
  margin: 0 auto 0.75rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => (props.large ? 0.125 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  appearance: none;
  cursor: pointer;
`
export default function DurationSelector(props) {
  return (
    <Wrapper
      id={props.slug + props.index}
      name={props.slug + props.index}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
      large={props.large}
    >
      {props.appliances.map((appliance) => (
        <option value={appliance.slug}>{appliance.name}</option>
      ))}
    </Wrapper>
  )
}
