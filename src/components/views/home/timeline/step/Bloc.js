import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: ${(props) => props.power * props.powerMultiplier}rem;
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  opacity: ${(props) => (props.discret ? 0.3 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out,
    min-height 400ms ease-out;
  cursor: pointer;
`
export default function Bloc(props) {
  const { hover, setHover, active, setActive } = useContext(DataContext)

  const powerMultiplier = useMemo(
    () => 25 / props.visiblePowerOnGraph,
    [props.visiblePowerOnGraph]
  )

  return (
    <Wrapper
      power={props.bloc.power}
      powerMultiplier={powerMultiplier}
      peak={props.peak}
      discret={
        active
          ? active?.appliance !== props.bloc.appliance.slug
          : hover && hover.occurence !== props.bloc.index
      }
      onMouseEnter={() => setHover({ occurence: props.bloc.index })}
      onMouseLeave={() => setHover(null)}
      onClick={() => {
        setActive({ appliance: props.bloc.appliance.slug })
        window?._paq?.push([
          'trackEvent',
          'Interaction',
          'Click graphique',
          `${props.bloc.appliance.slug} (${props.bloc.index})`,
        ])
      }}
    ></Wrapper>
  )
}
