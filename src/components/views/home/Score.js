import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'
import { useAllPowerOfPeaks } from 'hooks/useAppliances'
import MagicLink from 'components/base/MagicLink'

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
  top: -1.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 500ms 150ms;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    top: -0.5rem;
    margin-bottom: 2rem;
  }
`
const Gauge = styled.svg`
  width: auto;
  height: 5.5rem;
  animation: ${(props) => (props.percent >= 1 ? warning : '')} 800ms infinite;

  path,
  rect {
    fill: ${(props) =>
      props.theme.colors[
        props.percent < 0.4 ? 'main' : props.percent < 0.8 ? 'warning' : 'error'
      ]};
    ${(props) => props.theme.mq.medium} {
      max-width: none;
    }
  }
  ${(props) => props.theme.mq.medium} {
    height: 4.5rem;
  }
`
const Filling = styled.rect`
  transform: scaleY(${(props) => props.percent});
  transform-origin: bottom;
  fill: ${(props) => props.theme.colors.main};
  transition: transform 300ms ease-out;
`
const Content = styled.div`
  flex: 1;
  color: ${(props) =>
    props.theme.colors[
      props.percent
        ? props.percent < 0.4
          ? 'main'
          : props.percent < 0.8
          ? 'warning'
          : 'error'
        : 'main'
    ]};
`
const Label = styled.p`
  margin: -0.25rem 0 0.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.2;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }

  span {
    display: block;
    font-size: 0.75rem;
    font-weight: 300;

    ${(props) => props.theme.mq.medium} {
      display: inline;
    }

    ${(props) => props.theme.mq.small} {
      display: block;
    }
  }
`
const Description = styled.p`
  max-width: ${(props) => (props.percent < 0.4 ? 20 : 24)}rem;
  margin-bottom: 0;
  font-size: 0.7rem;

  ${(props) => props.theme.mq.medium} {
    max-width: ${(props) => (props.percent < 0.4 ? 14 : 23)}rem;
  }

  ${(props) => props.theme.mq.small} {
    min-height: 3.1875rem;
  }
`
const StyledMagicLink = styled(MagicLink)`
  font-size: 0.75rem;
  color: inherit;

  path {
    fill: ${(props) =>
      props.theme.colors[
        props.percent
          ? props.percent < 0.4
            ? 'main'
            : props.percent < 0.8
            ? 'warning'
            : 'error'
          : 'main'
      ]};
  }
`
export default function Score() {
  const { occurences } = useContext(DataContext)
  const { introduction, profils } = useContext(ModalContext)

  const power = useAllPowerOfPeaks()

  const percent = power / maxPower

  return (
    <Wrapper
      visible={
        (!introduction && !profils) || (profils && occurences.length > 0)
      }
    >
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
          style={{ maskType: 'alpha' }}
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
      {occurences.length === 0 ? (
        <Content>
          <Label>
            Votre foyer ne comporte
            <br />
            aucun appareil
          </Label>
          <Description>
            Ajoutez en un pour commencer la simulation !
          </Description>
        </Content>
      ) : (
        <Content percent={percent}>
          <Label>
            Consommation{' '}
            {percent < 0.4
              ? 'faible'
              : percent < 0.8
              ? 'importante'
              : 'très importante'}
            <span> pendant les périodes de tension</span>
          </Label>
          <Description percent={percent}>
            {percent < 0.4
              ? 'L’énergie nucléaire et les énergies renouvelables suffisent à répondre aux besoins d’électricité sans avoir besoin de faire fonctionner des centrales à gaz émettant du CO₂.'
              : percent < 0.8
              ? 'L’énergie nucléaire et les énergies renouvelables ne suffisent pas toujours à répondre aux besoins d’électricité compensés alors par des centrales à gaz émettant du CO₂. Essayez de décaler l’utilisation de certains appareils en dehors des périodes de tension.'
              : 'Il est nécessaire de faire fonctionner des centrales à gaz émettant du CO₂. Décaler le plus possible l’utilisation de vos appareils en dehors des périodes de tension.'}
          </Description>
          <StyledMagicLink
            onClick={() =>
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Lien ecogestes',
              ])
            }
            to='https://agirpourlatransition.ademe.fr/particuliers/maison/economies-denergie'
            percent={percent}
          >
            Découvrez comment faire des économies d'énergie
          </StyledMagicLink>
        </Content>
      )}
    </Wrapper>
  )
}
