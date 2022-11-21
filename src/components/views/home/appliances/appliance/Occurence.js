import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import StartSelector from './occurence/StartSelector'
import DurationSelector from './occurence/DurationSelector'

const Wrapper = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.color || props.theme.colors.main};
  border-radius: 1rem;
`
const Text = styled.p`
  display: flex;
  gap: 0.375rem;
  font-size: 0.875rem;
`
export default function Occurence(props) {
  const { editApplianceOccurence } = useContext(DataContext)
  return (
    <Wrapper color={props.appliance.color}>
      <Text>
        À
        <DurationSelector
          slug={props.slug}
          index={props.index}
          value={props.occurence.start}
          onChange={(start) => {
            editApplianceOccurence({
              slug: props.slug,
              occurenceIndex: props.index,
              newOccurence: { ...props.occurence, start },
            })
          }}
        />
        pendant
        <DurationSelector
          slug={props.slug}
          index={props.index}
          value={props.occurence.duration}
          onChange={(duration) => {
            editApplianceOccurence({
              slug: props.slug,
              occurenceIndex: props.index,
              newOccurence: { ...props.occurence, duration },
            })
          }}
        />
      </Text>
      <StartSelector
        start={props.occurence.start}
        onChange={([start]) => {
          editApplianceOccurence({
            slug: props.slug,
            occurenceIndex: props.index,
            newOccurence: { ...props.occurence, start },
          })
        }}
      />
    </Wrapper>
  )
}
