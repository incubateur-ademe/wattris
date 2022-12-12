import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  margin: 0 auto 0.75rem;
  padding: 0.375rem 2rem 0.375rem;
  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: 0.125rem solid ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  appearance: none;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem) 50%;
  background-size: 2rem 2rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' ><path fill='%23${(
    props
  ) =>
    props.theme.colors.background.replace(
      '#',
      ''
    )}' d='M12,13.1l5-4.9l1.4,1.4L12,15.9L5.6,9.5l1.4-1.4L12,13.1z'/></svg>");
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function NameSelector(props) {
  return (
    <StyledSelect
      id={props.slug + props.index}
      name={props.slug + props.index}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
      large={props.large}
    >
      {props.appliances.map((appliance) => (
        <option value={appliance.slug}>{appliance.name}</option>
      ))}
    </StyledSelect>
  )
}
