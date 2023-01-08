import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import StartSelector from 'components/misc/StartSelector'
import StartAndEndSelector from 'components/misc/StartAndEndSelector'
import DurationSelector from './occurence/DurationSelector'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${(props) =>
    props.peakIsSameAsAppliance
      ? 'rgba(255, 255, 255, 0.2)'
      : props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 1rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:first-child {
      flex: 1;

      ${(props) => props.theme.mq.small} {
        align-self: normal;
      }
    }
  }

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
`
export default function Occurence(props) {
  const { editOccurence } = useContext(DataContext)

  return (
    <Wrapper
      peak={props.peak}
      peakIsSameAsAppliance={props.allPeaks === props.peak}
    >
      {props.appliance.durationSelector ? (
        <>
          <span>
            <Text>Je le lance</Text>
            <StartSelector
              start={props.occurence.start}
              peak={props.peak}
              onChange={([start]) => {
                editOccurence({
                  occurenceIndex: props.occurence.index,
                  newOccurence: { ...props.occurence, start },
                })
              }}
              large
            />
          </span>
          <span>
            <Text>pendant</Text>
            <DurationSelector
              slug={props.occurence.slug}
              peak={props.peak}
              value={props.occurence.duration}
              onChange={(duration) => {
                editOccurence({
                  occurenceIndex: props.occurence.index,
                  newOccurence: { ...props.occurence, duration },
                })
              }}
            />
          </span>
        </>
      ) : (
        <>
          <Text>Je le lance</Text>
          <StartAndEndSelector
            start={props.occurence.start}
            duration={props.occurence.duration}
            peak={props.peak}
            onChange={([start, end]) => {
              let duration = end - start
              editOccurence({
                occurenceIndex: props.occurence.index,
                newOccurence: {
                  ...props.occurence,
                  start,
                  duration,
                },
              })
            }}
            large
          />
        </>
      )}
    </Wrapper>
  )
}
