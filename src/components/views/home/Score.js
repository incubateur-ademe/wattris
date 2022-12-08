import React from 'react'
import styled, { keyframes } from 'styled-components'

import { useAllPowerOfPeaks } from 'hooks/useAppliances'
import ButtonLink from 'components/base/ButtonLink'

const maxPower = 5500

const warning = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`
const Wrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`
const Gauge = styled.svg`
  width: auto;
  height: 5rem;
  animation: ${(props) => (props.percent >= 1 ? warning : '')} 800ms infinite;

  path,
  rect {
    fill: ${(props) =>
      props.theme.colors[
        props.percent < 0.4 ? 'main' : props.percent < 0.8 ? 'warning' : 'error'
      ]};
  }
`
const Filling = styled.rect`
  transform: scaleY(${(props) => props.percent});
  transform-origin: bottom;
  fill: ${(props) => props.theme.colors.main};
  transition: transform 300ms ease-out;
`
const Content = styled.div`
  color: ${(props) =>
    props.theme.colors[
      props.percent < 0.4 ? 'main' : props.percent < 0.8 ? 'warning' : 'error'
    ]};
`
const Label = styled.p`
  margin: -0.25rem 0 0.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.2;

  span {
    display: block;
    font-size: 0.75rem;
    font-weight: 300;
  }
`
const Description = styled.p`
  max-width: 17rem;
  margin-bottom: 0;
  font-size: 0.75rem;
`
const StyledButtonLink = styled(ButtonLink)`
  font-size: 0.75rem;
  color: inherit;
`
export default function Score() {
  const power = useAllPowerOfPeaks()

  const percent = power / maxPower

  return (
    <Wrapper>
      <Gauge
        width='80'
        height='120'
        viewBox='0 0 80 120'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        percent={percent}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M40.8071 63.7822L28.3257 113.827L75.5933 40.5174H42.6998L58.8507 4H27.4391L4.22419 63.7822H40.8071ZM62.5384 1.59515C63.1897 2.5903 63.2927 3.84584 62.8118 4.93311L48.8427 36.5174H76.4706C77.7614 36.5174 78.9492 37.2193 79.568 38.3476C80.1868 39.4759 80.1379 40.8507 79.4402 41.9326L30.147 118.384C29.4804 119.418 28.347 120 27.1757 120C26.7072 120 26.2326 119.907 25.7794 119.712C24.1933 119.031 23.3355 117.306 23.7519 115.636L35.6869 67.7822H3.5294C2.3654 67.7822 1.27623 67.2105 0.618111 66.254C-0.0400049 65.2976 -0.182121 64.0795 0.237642 62.9981L23.8286 2.24741C24.3545 0.892965 25.6623 0 27.1204 0H59.5819C60.7746 0 61.8866 0.599998 62.5384 1.59515Z'
          fill='#476C9B'
        />
        <mask
          id='mask0_914_135'
          style={{ 'mask-type': 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='80'
          height='120'
        >
          <path
            d='M27.1757 120C26.7072 120 26.2326 119.907 25.7794 119.712C24.1933 119.031 23.3355 117.306 23.7519 115.636L35.6869 67.7822H3.5294C2.3654 67.7822 1.27623 67.2105 0.618111 66.254C-0.0400048 65.2976 -0.182121 64.0795 0.237642 62.9981L23.8286 2.24741C24.3545 0.892965 25.6623 0 27.1204 0H59.5819C60.7746 0 61.8866 0.599998 62.5384 1.59515C63.1897 2.5903 63.2927 3.84584 62.8118 4.93311L48.8427 36.5174H76.4706C77.7614 36.5174 78.9492 37.2193 79.568 38.3476C80.1868 39.4759 80.1379 40.8507 79.4402 41.9326L30.147 118.384C29.4804 119.418 28.347 120 27.1757 120V120Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask0_914_135)'>
          <Filling
            percent={percent}
            x='-30.8232'
            y='0'
            width='144.706'
            height='120'
            fill='#476C9B'
          />
        </g>
      </Gauge>
      <Content percent={percent}>
        <Label>
          Consommation{' '}
          {percent < 0.4
            ? 'faible'
            : percent < 0.8
            ? 'importante'
            : 'très importante'}
          <span>
            {' '}
            pendant les pics (<strong>{power} kWh</strong>)
          </span>
        </Label>
        <Description>
          {percent < 0.4
            ? 'Votre consommation est raisonnable et ne met pas le réseau en tension.'
            : percent < 0.8
            ? 'Votre consommation risque de mettre le réseau en tension. Essayez de déplacer vos appareils en dehors des pics.'
            : 'Votre consommation met très fortement le réseau en tension. Déplacez vos appareils en dehors des pics pour sauver la France.'}
        </Description>
        <StyledButtonLink onClick={() => alert('soon soon soon')}>
          Découvrir des éco-gestes
        </StyledButtonLink>
      </Content>
    </Wrapper>
  )
}
