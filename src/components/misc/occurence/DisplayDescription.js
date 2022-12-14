import React from 'react'
import styled from 'styled-components'

const More = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
`
export default function DisplayDescription(props) {
  return (
    <More onClick={props.onClick}>
      <svg viewBox='0 0 72 72' width='1.2rem' height='1.2rem'>
        <path
          fill='#ffffff'
          stroke-miterlimit='10'
          d='M 48.72,20.15 C 49.0251,29.448 40.699,32.9 37.9,39.36 v 7.565 c 0,1.39 -1.11,2.5 -2.5,2.5 -1.38,0 -2.5,-1.11 -2.5,-2.5 V 37.06 C 36.393,30.918 43.28,29.591 43.57,20 c 0,-5.66 -6.543,-6.151 -7.988,-6.175 h -0.05 c -5.767,1.187 -6.135,4.99 -7.289,9.549 -0.6671,1.521 -1.564,2.045 -2.9,2.03 -1.36,-0.2401 -2.26,-1.54 -2.02,-2.9 0.5877,-2.752 0.758,-6.639 2.35,-8.502 2.71,-3.14 4.819,-4.957 9.179,-5.167 0.24,0 0.49,-0.01 0.73,-0.01 0.09,0 0.18,0 0.27,0.01 8.27,0.2401 12.6,2.992 12.87,11.32 z'
          id='path198'
        />
        <circle
          cx='34.950001'
          cy='55'
          r='3'
          fill='#ffffff'
          stroke-miterlimit='10'
          id='circle200'
        />
        <circle
          cx='35'
          cy='35'
          r='33'
          stroke='#fff'
          stroke-width='4'
          fill='none'
          id='circle206'
        />
      </svg>
    </More>
  )
}
