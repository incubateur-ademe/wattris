import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { usePeak } from 'hooks/useAppliances'
import DataContext from 'components/providers/DataProvider'
import StartSelector from 'components/misc/StartSelector'
import StartAndEndSelector from 'components/misc/StartAndEndSelector'
import DeleteButton from 'components/misc/DeleteButton'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.75rem;
  padding-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 0.75rem;
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const Title = styled.p`
  position: relative;
  align-self: center;
  margin: 0 1.5rem 0.75rem;
  font-size: 0.875rem;
  text-align: center;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }

  svg {
    position: absolute;
    top: 0;
    left: calc(100% + 0.5rem);
    width: 1rem;
    height: auto;

    path {
      fill: ${(props) => props.theme.colors.background};
    }
  }
`
export default function Occurence(props) {
  const {
    appliances,
    hover,
    setHover,
    active,
    setActive,
    editOccurence,
    deleteOccurence,
  } = useContext(DataContext)

  const appliance = useMemo(
    () =>
      appliances.find((appliance) => appliance.slug === props.occurence.slug),
    [props.occurence, appliances]
  )

  const peak = usePeak(props.occurence)

  return (
    <Wrapper
      discret={
        active
          ? active?.occurence !== props.index
          : hover && hover.occurence !== props.index
      }
      peak={peak}
      allDay={props.occurence.duration === 24}
      onClick={() => setActive({ appliance: appliance.slug })}
      onMouseEnter={() => setHover({ occurence: props.index })}
      onMouseLeave={() => setHover(null)}
    >
      <Title>
        {appliance.name}
        <svg x='0px' y='0px' viewBox='0 0 512.009 512.009'>
          <path
            d='M397.96,330.099c-13.755,0-24.872,11.118-24.872,24.872v78.125c0,13.73-11.143,24.872-24.872,24.872H74.617
			c-13.73,0-24.872-11.143-24.872-24.872V109.754c0-13.73,11.143-24.872,24.872-24.872h144.509
			c13.754,0,24.872-11.118,24.872-24.872c0-13.754-11.118-24.872-24.872-24.872H74.617C33.478,35.136,0,68.615,0,109.754v323.342
			c0,41.139,33.478,74.617,74.617,74.617h273.597c41.139,0,74.617-33.453,74.617-74.617v-78.124
			C422.832,341.217,411.714,330.099,397.96,330.099z'
          />

          <path
            d='M484.193,31.977c-18.057-18.057-41.637-27.161-65.39-27.658c-24.997-0.547-50.143,8.506-69.046,27.434L181.37,200.14
			c-24.574,24.674-38.105,57.406-38.105,92.177v55.714c0,13.754,11.118,24.872,24.872,24.872h55.714
			c34.772,0,67.504-13.531,92.202-38.13l168.163-168.163C521.277,129.527,521.277,69.087,484.193,31.977z M280.91,299.581
			c-15.247,15.197-35.543,23.579-57.057,23.579H193.01v-30.842c0-21.515,8.382-41.811,23.554-57.033l111.006-111.006l64.32,64.32
			L280.91,299.581z M449.023,131.467L427.06,153.43l-64.32-64.32l21.962-21.962c17.759-17.759,46.611-17.709,64.32,0
			C466.732,84.881,466.732,113.733,449.023,131.467z'
          />
        </svg>
      </Title>
      <StartSelector
        start={props.occurence.start}
        peak={peak}
        onChange={([start]) => {
          editOccurence({
            occurenceIndex: props.index,
            newOccurence: { ...props.occurence, start },
          })
        }}
      />
    </Wrapper>
  )
}
