import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  overflow: hidden;
  opacity: ${(props) => (props.discret ? 0.3 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
  cursor: pointer;
`
export default function Bloc(props) {
  const { hover, setHover, active, setActive } = useContext(DataContext)

  return (
    <Wrapper
      color={props.bloc.appliance.color}
      peak={props.peak}
      discret={
        active
          ? active?.occurence !== props.bloc.index
          : hover && hover.occurence !== props.bloc.index
      }
      onMouseEnter={() => setHover({ occurence: props.bloc.index })}
      onMouseLeave={() => setHover(null)}
      onClick={() => setActive({ occurence: props.bloc.index })}
    ></Wrapper>
  )
}
