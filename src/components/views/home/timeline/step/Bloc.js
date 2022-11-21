import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  overflow: hidden;
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
  cursor: pointer;
`
export default function Bloc(props) {
  const { hover, setHover } = useContext(DataContext)

  const { setAdvice } = useContext(ModalContext)

  return (
    <Wrapper
      color={props.bloc.appliance.color}
      peak={props.peak}
      discret={
        hover &&
        (hover.slug !== props.bloc.appliance.slug ||
          hover.occurence !== props.bloc.index)
      }
      onMouseEnter={() =>
        setHover({
          slug: props.bloc.appliance.slug,
          occurence: props.bloc.index,
        })
      }
      onMouseLeave={() => setHover(null)}
      onClick={() => setAdvice(props.bloc.appliance.slug)}
    ></Wrapper>
  )
}
