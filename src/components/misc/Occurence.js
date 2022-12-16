import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import StartSelector from './occurence/StartSelector'
import DurationSelector from './occurence/DurationSelector'
import Checkbox from 'components/base/Checkbox'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.75rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 0.75rem;
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
`
const Title = styled.p`
  position: relative;
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
  text-align: center;
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
const ControlsWrapper = styled.div`
  opacity: ${(props) => (props.allDay ? 0.1 : 1)};
  pointer-events: ${(props) => (props.allDay ? 'none' : 'inherit')};
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.375rem;
  font-size: 0.75rem;

  ${(props) => props.theme.mq.small} {
    font-size: 0.625rem;
  }
`
const StyledCheckbox = styled(Checkbox)`
  margin: 0 auto;
  font-size: 0.75rem;

  &:before {
    border-color: ${(props) => props.theme.colors.background};
  }
  &:after {
    color: ${(props) => props.theme.colors.background};
  }

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
`
const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => props.visible && '200ms'} ease-out;
  svg {
    width: 0.625rem;
    height: auto;
  }
  path {
    fill: ${(props) => props.theme.colors.background};
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
    [props.occurence]
  )

  const peak = useMemo(
    () =>
      (props.occurence.start >= 8 && props.occurence.start < 13) ||
      (props.occurence.start >= 18 && props.occurence.start < 20),
    [props.occurence]
  )
  return (
    <Wrapper
      discret={
        active
          ? active?.occurence !== props.index
          : hover && hover.occurence !== props.index
      }
      peak={peak}
      allDay={props.occurence.duration === 24}
      onMouseEnter={() => setHover({ occurence: props.index })}
      onMouseLeave={() => setHover(null)}
    >
      <Title onClick={() => setActive({ occurence: props.index })}>
        {appliance.name}
      </Title>
      <DeleteButton
        visible={hover && hover.occurence === props.index}
        onClick={() =>
          deleteOccurence({
            occurenceIndex: props.index,
          })
        }
      >
        <svg
          x='0px'
          y='0px'
          width='41.756px'
          height='41.756px'
          viewBox='0 0 41.756 41.756'
        >
          <path
            d='M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
		c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
		C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
		c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z'
          />
        </svg>
      </DeleteButton>

      <ControlsWrapper allDay={props.occurence.allDay}>
        <Text>Je le lance à</Text>
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
        <Text>
          pendant
          <DurationSelector
            slug={appliance.slug}
            index={props.index}
            value={props.occurence.duration}
            onChange={(duration) => {
              editOccurence({
                occurenceIndex: props.index,
                newOccurence: { ...props.occurence, duration },
              })
            }}
          />
        </Text>
      </ControlsWrapper>
      <StyledCheckbox
        small
        name={'allday' + appliance.slug}
        checked={props.occurence.allDay}
        onChange={(allDay) => {
          editOccurence({
            occurenceIndex: props.index,
            newOccurence: { ...props.occurence, allDay },
          })
        }}
      >
        Allumé toute la journée
      </StyledCheckbox>
    </Wrapper>
  )
}
