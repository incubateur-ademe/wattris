import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import StartSelector from 'components/misc/occurence/StartSelector'
import NameSelector from 'components/misc/occurence/NameSelector'
import DurationSelector from 'components/misc/occurence/DurationSelector'
import Checkbox from 'components/base/Checkbox'

const Background = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`
const Wrapper = styled.div`
  position: absolute;
  z-index: 150;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 24rem;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 0.75rem;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;

  ${(props) => props.theme.mq.small} {
    width: 95vw;
    padding: 1rem 1rem 0.75rem;
  }
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
    width: 1rem;
    height: auto;
  }
  path {
    fill: ${(props) => props.theme.colors.background};
  }

  ${(props) => props.theme.mq.small} {
    top: 0.5rem;
    right: 0.5rem;
    width: 0.75rem;
  }
`
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
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledButton = styled(Button)`
  padding: 0.375rem 0.875rem;
  background-color: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};

  &:hover {
    color: ${(props) => props.theme.colors.background};
  }

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`

const StyledButtonLink = styled(ButtonLink)`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.background};
`

export default function Occurence() {
  const {
    active,
    setActive,
    appliances,
    occurences,
    editOccurence,
    deleteOccurence,
  } = useContext(DataContext)

  const occurence = useMemo(
    () => occurences.find((occurence, index) => index === active?.occurence),
    [occurences, active]
  )

  const appliance = useMemo(
    () => appliances.find((appliance) => appliance.slug === occurence?.slug),
    [occurence]
  )

  const peak = useMemo(
    () =>
      (occurence?.start >= 8 && occurence?.start < 13) ||
      (occurence?.start >= 18 && occurence?.start < 20),
    [occurence]
  )

  return (
    appliance &&
    occurence && (
      <>
        <Background
          onClick={() => {
            active.new &&
              deleteOccurence({
                occurenceIndex: active?.occurence,
              })
            setActive(null)
          }}
        />
        <Wrapper visible={occurence} peak={peak}>
          <DeleteButton
            onClick={() => {
              active.new &&
                deleteOccurence({
                  occurenceIndex: active?.occurence,
                })
              setActive(null)
            }}
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
          <NameSelector
            large
            slug={appliance.slug}
            index={active?.occurence}
            value={appliance.slug}
            appliances={appliances}
            onChange={(slug) => {
              const newAppliance = appliances.find(
                (appliance) => appliance.slug === slug
              )
              editOccurence({
                occurenceIndex: active?.occurence,
                newOccurence: {
                  start: newAppliance.defaultOccurence.start,
                  duration: newAppliance.defaultOccurence.duration,
                  allDay: newAppliance.defaultOccurence.allDay,
                  slug,
                },
              })
            }}
          />
          <ControlsWrapper allDay={occurence.allDay}>
            <Text>Je le lance à</Text>
            <StartSelector
              large
              start={occurence.start}
              peak={peak}
              onChange={([start]) => {
                editOccurence({
                  occurenceIndex: active?.occurence,
                  newOccurence: { ...occurence, start },
                })
              }}
            />
            <Text>
              pendant
              <DurationSelector
                large
                slug={appliance.slug}
                index={active?.occurence}
                value={occurence.duration}
                onChange={(duration) => {
                  editOccurence({
                    occurenceIndex: active?.occurence,
                    newOccurence: { ...occurence, duration },
                  })
                }}
              />
            </Text>
          </ControlsWrapper>
          <StyledCheckbox
            small
            name={'allday' + appliance.slug}
            checked={occurence.allDay}
            onChange={(allDay) => {
              editOccurence({
                occurenceIndex: active?.occurence,
                newOccurence: { ...occurence, allDay },
              })
            }}
          >
            Allumé toute la journée
          </StyledCheckbox>
          <Buttons>
            <StyledButtonLink
              onClick={() => {
                deleteOccurence({
                  occurenceIndex: active?.occurence,
                })
                setActive(null)
              }}
            >
              {active.new ? 'Annuler' : 'Supprimer'}
            </StyledButtonLink>
            <StyledButton onClick={() => setActive(null)} peak={peak} small>
              {active.new ? 'Ajouter' : 'Valider'}
            </StyledButton>
          </Buttons>
        </Wrapper>
      </>
    )
  )
}
