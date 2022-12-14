import React, { useContext, useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import StartSelector from 'components/misc/occurence/StartSelector'
import NameSelector from 'components/misc/occurence/NameSelector'
import DurationSelector from 'components/misc/occurence/DurationSelector'
import DisplayDescription from 'components/misc/occurence/DisplayDescription'
import Checkbox from 'components/base/Checkbox'
import DeleteButton from 'components/misc/occurence/DeleteButton'

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
  width: 26.5rem;
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

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
const Description = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-style: italic;
  border-left: 0.25rem double ${(props) => props.theme.colors.background};
  border-bottom: 0.075rem solid ${(props) => props.theme.colors.background};
`

const ControlsWrapper = styled.div`
  opacity: ${(props) => (props.allDay ? 0.1 : 1)};
  pointer-events: ${(props) => (props.allDay ? 'none' : 'inherit')};
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  margin-top: 0.75rem;
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

  const [description, setDescription] = useState(false)

  useEffect(() => {
    setDescription(false)
  }, [occurence?.slug])

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
          />
          <HeadWrapper>
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
            <DisplayDescription
              onClick={() => setDescription(description ? false : true)}
            />
          </HeadWrapper>
          {description && <Description>{appliance.description}</Description>}
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
