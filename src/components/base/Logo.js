import React from 'react'
import styled, { keyframes } from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const drop1 = keyframes`
  from,
  20%,
  to {
    fill: #FA1E43;
  }
  1%,
  19% {
    fill: #476C9B;
  }
`
const drop2 = keyframes`
  from,
  20%,
  to {
    fill: #476C9B;
  }
  1%,
  19% {
    fill: #FA1E43;
  }
`
const Wrapper = styled(MagicLink)`
  &:hover {
    path {
      animation-duration: 1500ms !important;
    }
  }
`
const Path = styled.path`
  fill: ${(props) => props.color};

  animation: ${(props) => (props.color === '#FA1E43' ? drop1 : drop2)} infinite
    0ms ${(props) => Number(props.delay) * 300}ms;
`
export default function Logo(props) {
  return (
    <Wrapper to='/' className={props.className}>
      <svg
        width='138'
        height='18'
        viewBox='0 0 138 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Path
          d='M14.0771 14.8594V17.2031H19.9365V14.8594H14.0771Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M2.3584 14.8594V17.2031H8.21777V14.8594H2.3584Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M22.2803 13.6875V11.3438H17.5928V13.6875H22.2803Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M16.4209 13.6875V11.3438H11.7334V13.6875H16.4209Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M10.5615 13.6875V11.3438H5.87402V13.6875H10.5615Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M4.70215 13.6875V11.3438H0.0146484V13.6875H4.70215Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M14.0771 10.1719V7.82812H8.21777V10.1719H14.0771Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M22.2803 10.1719V7.82812H17.5928V10.1719H22.2803Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M4.70215 10.1719V7.82812H0.0146484V10.1719H4.70215Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M14.0771 6.65625V4.3125H8.21777V6.65625H14.0771Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M22.2803 6.65625V4.3125H17.5928V6.65625H22.2803Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M4.70215 6.65625V4.3125H0.0146484V6.65625H4.70215Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M4.70215 0.796875V3.14062H0.0146484V0.796875H4.70215ZM22.2803 0.796875V3.14062H17.5928V0.796875H22.2803Z'
          color='#FA1E43'
          delay='0'
        />
        <Path
          d='M38.6865 14.8594V17.2031H43.374V14.8594H38.6865Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M26.9678 14.8594V17.2031H31.6553V14.8594H26.9678Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M43.374 13.6875V11.3438H26.9678V13.6875H43.374Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M26.9678 7.82812V10.1719H31.6553V7.82812H26.9678Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M38.6865 7.82812V10.1719H43.374V7.82812H38.6865Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M26.9678 4.3125V6.65625H31.6553V4.3125H26.9678Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M38.6865 4.3125V6.65625H43.374V4.3125H38.6865Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M41.0303 0.796875V3.14062H29.3115V0.796875H41.0303Z'
          color='#FA1E43'
          delay='0'
        />
        <Path
          d='M48.0615 0.796875V3.14062H64.4678V0.796875H48.0615Z'
          color='#FA1E43'
          delay='0'
        />
        <Path
          d='M53.9209 4.3125V6.65625H58.6084V4.3125H53.9209Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M53.9209 7.82812V10.1719H58.6084V7.82812H53.9209Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M53.9209 11.3438V13.6875H58.6084V11.3438H53.9209Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M53.9209 17.2031V14.8594H58.6084V17.2031H53.9209Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M69.1553 0.796875V3.14062H85.5615V0.796875H69.1553Z'
          color='#FA1E43'
          delay='0'
        />
        <Path
          d='M75.0146 4.3125V6.65625H79.7021V4.3125H75.0146Z'
          color='#FA1E43'
          delay='1'
        />
        <Path
          d='M75.0146 7.82812V10.1719H79.7021V7.82812H75.0146Z'
          color='#FA1E43'
          delay='2'
        />
        <Path
          d='M75.0146 11.3438V13.6875H79.7021V11.3438H75.0146Z'
          color='#FA1E43'
          delay='3'
        />
        <Path
          d='M75.0146 17.2031V14.8594H79.7021V17.2031H75.0146Z'
          color='#FA1E43'
          delay='4'
        />
        <Path
          d='M104.312 3.14062V0.796875H90.249V3.14062H104.312Z'
          color='#476C9B'
          delay='0'
        />
        <Path
          d='M90.249 4.3125V6.65625H94.9365V4.3125H90.249Z'
          color='#476C9B'
          delay='1'
        />
        <Path
          d='M101.968 4.3125V6.65625H106.655V4.3125H101.968Z'
          color='#476C9B'
          delay='1'
        />
        <Path
          d='M90.249 7.82812V10.1719H104.312V7.82812H90.249Z'
          color='#476C9B'
          delay='2'
        />
        <Path
          d='M90.249 11.3438V13.6875H94.9365V11.3438H90.249Z'
          color='#476C9B'
          delay='3'
        />
        <Path
          d='M101.968 11.3438V13.6875H106.655V11.3438H101.968Z'
          color='#476C9B'
          delay='3'
        />
        <Path
          d='M101.968 17.2031V14.8594H106.655V17.2031H101.968ZM90.249 17.2031V14.8594H94.9365V17.2031H90.249Z'
          color='#476C9B'
          delay='4'
        />
        <Path
          d='M111.343 0.796875V3.14062H116.03V0.796875H111.343Z'
          color='#476C9B'
          delay='0'
        />
        <Path
          d='M111.343 4.3125V6.65625H116.03V4.3125H111.343Z'
          color='#476C9B'
          delay='1'
        />
        <Path
          d='M111.343 7.82812V10.1719H116.03V7.82812H111.343Z'
          color='#476C9B'
          delay='2'
        />
        <Path
          d='M111.343 11.3438V13.6875H116.03V11.3438H111.343Z'
          color='#476C9B'
          delay='3'
        />
        <Path
          d='M111.343 17.2031V14.8594H116.03V17.2031H111.343Z'
          color='#476C9B'
          delay='4'
        />
        <Path
          d='M123.062 0.796875V3.14062H137.124V0.796875H123.062Z'
          color='#476C9B'
          delay='0'
        />
        <Path
          d='M120.718 4.3125V6.65625H125.405V4.3125H120.718Z'
          color='#476C9B'
          delay='1'
        />
        <Path
          d='M123.062 7.82812V10.1719H134.78V7.82812H123.062Z'
          color='#476C9B'
          delay='2'
        />
        <Path
          d='M132.437 11.3438V13.6875H137.124V11.3438H132.437Z'
          color='#476C9B'
          delay='3'
        />
        <Path
          d='M120.718 17.2031V14.8594H134.78V17.2031H120.718Z'
          color='#476C9B'
          delay='4'
        />
      </svg>
    </Wrapper>
  )
}
