import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { usePeak } from 'hooks/useAppliances'
import DataContext from 'components/providers/DataProvider'
import StartSelector from 'components/misc/StartSelector'
import StartAndEndSelector from 'components/misc/StartAndEndSelector'
import DeleteButton from 'components/misc/DeleteButton'

const Wrapper = styled.div`
  position: relative;
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
  margin-bottom: 0.5rem;
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
      onMouseEnter={() => setHover({ occurence: props.index })}
      onMouseLeave={() => setHover(null)}
    >
      <Title onClick={() => setActive({ appliance: appliance.slug })}>
        {appliance.name}
      </Title>
      <DeleteButton
        small
        visible={hover && hover.occurence === props.index}
        onClick={() =>
          deleteOccurence({
            occurenceIndex: props.index,
          })
        }
      />
      {appliance.durationSelector ? (
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
      ) : (
        <StartAndEndSelector
          start={props.occurence.start}
          duration={props.occurence.duration}
          peak={peak}
          onChange={([start, end]) => {
            let duration = end - start
            if (duration >= 0.5) {
              editOccurence({
                occurenceIndex: props.index,
                newOccurence: {
                  ...props.occurence,
                  start,
                  duration,
                },
              })
            }
          }}
        />
      )}
    </Wrapper>
  )
}
