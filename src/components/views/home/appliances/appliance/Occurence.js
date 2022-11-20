import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import StartSelector from './occurence/StartSelector'
import DurationSelector from './occurence/DurationSelector'

const Wrapper = styled.div``
export default function Occurence(props) {
  const { editApplianceOccurence } = useContext(DataContext)
  return (
    <Wrapper>
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
      <DurationSelector
        slug={props.slug}
        duration={props.occurence.duration}
        onChange={(duration) => {
          editApplianceOccurence({
            slug: props.slug,
            occurenceIndex: props.index,
            newOccurence: { ...props.occurence, duration },
          })
        }}
      />
    </Wrapper>
  )
}
