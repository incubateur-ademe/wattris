import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto 0.75rem;
`
const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.next ? 'auto' : 0)};
  right: ${(props) => (props.next ? 0 : 'auto')};
  transform: translateY(-50%);
  pointer-events: none;
  path {
    fill: ${(props) => props.theme.colors.background};
  }
`
const Select = styled.select`
  display: block;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
`
export default function DurationSelector(props) {
  return (
    <Wrapper>
      <Arrow
        width='16'
        height='20'
        viewBox='0 0 16 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1.10662 11.8572L12.2158 19.4625C12.7289 19.814 13.2458 20 13.6755 20C14.5062 20 15.02 19.3333 15.02 18.2174L15.02 1.78003C15.02 0.665388 14.5068 4.30656e-09 13.6781 -6.81441e-08C13.2478 -1.05764e-07 12.7391 0.186179 12.2249 0.538624L1.1105 8.14379C0.395738 8.63369 -9.46843e-05 9.29292 -9.47462e-05 10.0009C-0.000256703 10.7084 0.391043 11.3674 1.10662 11.8572Z' />
      </Arrow>
      <Select
        id={props.slug + props.index}
        name={props.slug + props.index}
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        large={props.large}
      >
        {props.appliances.map((appliance) => (
          <option value={appliance.slug}>{appliance.name}</option>
        ))}
      </Select>
      <Arrow
        next
        width='16'
        height='20'
        viewBox='0 0 16 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M14.4334 8.14282L3.3242 0.537491C2.81115 0.186017 2.29422 0 1.86456 0C1.03387 0 0.52002 0.666683 0.52002 1.78262V18.22C0.52002 19.3346 1.03323 20 1.86197 20C2.29228 20 2.80096 19.8138 3.31513 19.4614L14.4295 11.8562C15.1443 11.3663 15.5401 10.7071 15.5401 9.99911C15.5403 9.29163 15.149 8.63256 14.4334 8.14282Z' />
      </Arrow>
    </Wrapper>
  )
}
