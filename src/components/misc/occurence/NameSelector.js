import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: 0.375rem ${(props) => (props.large ? 2 : 1)}rem 0.375rem;
  font-size: ${(props) => (props.large ? 1.25 : 0.75)}rem;
  text-align: center;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: ${(props) => (props.large ? 0.125 : 0.0625)}rem solid
    ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  appearance: none;
  background-repeat: no-repeat;
  background-position: calc(100% - ${(props) => (props.large ? 0.5 : 0.125)}rem)
    50%;
  background-size: ${(props) =>
    props.large ? '2rem 2rem' : '1.25rem 1.25rem'};
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
        <option key={appliance.slug} value={appliance.slug}>
          {appliance.name}
        </option>
      ))}
    </StyledSelect>
  )
}
