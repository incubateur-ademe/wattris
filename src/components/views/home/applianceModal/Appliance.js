import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import DescriptionButton from './appliance/DescriptionButton'
import Occurence from './appliance/Occurence'
import OccurenceButtons from './appliance/OccurenceButtons'
import DeleteButton from 'components/misc/DeleteButton'

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
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  text-align: center;
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

export default function Appliance(props) {
  const { setActive, setAppliancesListOpen } = useContext(DataContext)

  const [description, setDescription] = useState(false)

  const lastIndex =
    props.occurencesOfAppliance[props.occurencesOfAppliance.length - 1].index
  return (
    <>
      <DeleteButton
        onClick={() => {
          props.active.new &&
            props.deleteOccurence({
              occurenceIndex: lastIndex,
            })
          setActive(null)
          setAppliancesListOpen(true)
        }}
      />
      <DescriptionButton
        onClick={() => {
          setDescription((prevDescription) => !prevDescription)
          window?._paq?.push([
            'trackEvent',
            'Interaction',
            'Voir description',
            props.appliance.slug,
          ])
        }}
      />
      <Title>{props.appliance.name}</Title>
      {description && <Description>{props.appliance.description}</Description>}
      <Occurences>
        {props.occurencesOfAppliance.map((occurence, index) => (
          <Occurence
            key={props.appliance.slug + index}
            appliance={props.appliance}
            occurence={occurence}
            peak={props.peaks[index]}
            allPeaks={props.allPeaks}
            multiple={props.occurencesOfAppliance.length > 1}
          />
        ))}
      </Occurences>
      <OccurenceButtons
        appliance={props.appliance}
        lastIndex={lastIndex}
        addOccurence={props.addOccurence}
        deleteOccurence={props.deleteOccurence}
      />
      <Buttons>
        <StyledButtonLink
          onClick={() => {
            props.deleteAllOccurencesOfAppliance({
              appliance: props.appliance,
            })
            props.setActive(null)
          }}
        >
          Supprimer{props.occurencesOfAppliance.length > 1 ? ' tous' : ''}
        </StyledButtonLink>
        <StyledButton
          onClick={() => props.setActive(null)}
          peak={props.allPeaks}
          small
        >
          {props.active.new ? 'Ajouter' : 'Valider'}
        </StyledButton>
      </Buttons>
    </>
  )
}
