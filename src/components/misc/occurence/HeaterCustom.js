import React from 'react'
import styled from 'styled-components'

import StartAndEndSelector from './StartAndEndSelector'
import Checkbox from 'components/base/Checkbox'

const Wrapper = styled.div``

const ControlsWrapper = styled.div`
  opacity: ${(props) => (props.allDay ? 0.1 : 1)};
  pointer-events: ${(props) => (props.allDay ? 'none' : 'inherit')};
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
  }
`
const StyledCheckbox = styled(Checkbox)`
  margin: 0.5rem auto;
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
export default function HeaterCustom(props) {
  return (
    <Wrapper>
      <ControlsWrapper allDay={props.occurence.allDay}>
        <Text>Je chauffe davantage entre : </Text>
        <StartAndEndSelector
          large
          start={props.occurence.start}
          duration={props.occurence.duration}
          peak={props.peak}
          onChange={([start, end]) => {
            props.editOccurence({
              occurenceIndex: props.active?.occurence,
              newOccurence: {
                ...props.occurence,
                start,
                duration: end - start,
              },
            })
          }}
        />
      </ControlsWrapper>
      <StyledCheckbox
        small
        name={'allday' + props.appliance.slug}
        checked={props.occurence.allDay}
        onChange={(allDay) => {
          props.editOccurence({
            occurenceIndex: props.active?.occurence,
            newOccurence: { ...props.occurence, allDay },
          })
        }}
      >
        Allumé toute la journée
      </StyledCheckbox>
    </Wrapper>
  )
}
