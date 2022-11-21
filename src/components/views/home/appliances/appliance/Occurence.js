import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import StartSelector from './occurence/StartSelector'
import DurationSelector from './occurence/DurationSelector'

const Wrapper = styled.div`
  position: relative;
  padding: 0.875rem 1rem 0.625rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 1rem;
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
`
const Text = styled.p`
  display: flex;
  gap: 0.375rem;
  font-size: 0.875rem;
`
const DeleteButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: auto;
  }
  path {
    fill: ${(props) => props.theme.colors.background};
  }
`
export default function Occurence(props) {
  const { hover, setHover, editApplianceOccurence, deleteApplianceOccurence } =
    useContext(DataContext)

  const peak = useMemo(
    () =>
      (props.occurence.start >= 8 && props.occurence.start < 13) ||
      (props.occurence.start >= 18 && props.occurence.start < 20),
    [props.occurence]
  )
  return (
    <Wrapper
      color={props.appliance.color}
      discret={
        hover && (hover.slug !== props.slug || hover.occurence !== props.index)
      }
      peak={peak}
      onMouseEnter={() =>
        setHover({
          slug: props.slug,
          occurence: props.index,
        })
      }
      onMouseLeave={() => setHover(null)}
    >
      <DeleteButton
        onClick={() =>
          deleteApplianceOccurence({
            slug: props.slug,
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
