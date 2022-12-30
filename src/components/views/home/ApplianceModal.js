import React, { useState, useEffect, useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import DescriptionButton from './applianceModal/DescriptionButton'
import Occurence from './applianceModal/Occurence'
import OccurenceButtons from './applianceModal/OccurenceButtons'
import DeleteButton from 'components/misc/DeleteButton'

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
  width: 28.5rem;
  padding: 1rem 1.25rem;
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
const Occurences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0 -0.675rem;
`
const Title = styled.p`
  margin-bottom: 0.75rem;
  font-weight: bold;
  text-align: center;
`
const Description = styled.div`
  margin-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  text-align: center;
  border-bottom: 0.125rem solid ${(props) => props.theme.colors.background};
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledButton = styled(Button)`
  padding: 0.25rem 0.875rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};
  background-color: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.background};

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

export default function ApplianceModal() {
  const {
    active,
    setActive,
    appliances,
    occurences,
    addOccurence,
    deleteOccurence,
    deleteAllOccurencesOfAppliance,
  } = useContext(DataContext)

  const appliance = useMemo(
    () => appliances.find((appliance) => appliance.slug === active?.appliance),
    [active, appliances]
  )

  const occurencesOfAppliance = useMemo(
    () =>
      occurences
        .map((occurence, index) => ({ ...occurence, index }))
        .filter((occurence) => occurence.slug === appliance?.slug),
    [appliance, occurences]
  )

  const peaks = useMemo(
    () =>
      occurencesOfAppliance.map(
        (occurence) =>
          (occurence?.start >= 8 && occurence?.start < 13) ||
          (occurence?.start >= 18 && occurence?.start < 20)
      ),
    [occurencesOfAppliance]
  )

  const allPeaks = useMemo(() => !peaks.includes(false), [peaks])

  const [description, setDescription] = useState(false)

  return (
    appliance &&
    occurencesOfAppliance?.length && (
      <>
        <Background
          onClick={() => {
            active.new &&
              deleteAllOccurencesOfAppliance({
                appliance,
              })
            setActive(null)
          }}
        />
        <Wrapper peak={allPeaks}>
          <DeleteButton
            onClick={() => {
              active.new &&
                deleteAllOccurencesOfAppliance({
                  appliance,
                })
              setActive(null)
            }}
          />
          <DescriptionButton
            onClick={() =>
              setDescription((prevDescription) => !prevDescription)
            }
          />
          <Title>{appliance.name}</Title>
          {description && <Description>{appliance.description}</Description>}
          <Occurences>
            {occurencesOfAppliance.map((occurence, index) => (
              <Occurence
                key={appliance.slug + index}
                appliance={appliance}
                occurence={occurence}
                peak={peaks[index]}
                allPeaks={allPeaks}
              />
            ))}
          </Occurences>
          <OccurenceButtons
            appliance={appliance}
            lastIndex={
              occurencesOfAppliance[occurencesOfAppliance.length - 1].index
            }
            addOccurence={addOccurence}
            deleteOccurence={deleteOccurence}
          />
          <Buttons>
            <StyledButtonLink
              onClick={() => {
                deleteAllOccurencesOfAppliance({
                  appliance,
                })
                setActive(null)
              }}
            >
              {active.new ? 'Annuler' : 'Supprimer'}
            </StyledButtonLink>
            <StyledButton onClick={() => setActive(null)} peak={allPeaks} small>
              {active.new ? 'Ajouter' : 'Valider'}
            </StyledButton>
          </Buttons>
        </Wrapper>
      </>
    )
  )
}
