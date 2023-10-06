import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import DeleteButton from 'components/misc/DeleteButton'
import ButtonLink from 'components/base/ButtonLink'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const Title = styled.p`
  margin-bottom: 0.75rem;
  font-weight: bold;
  text-align: center;
`
const AppliancesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${(props) => props.theme.mq.small} {
    gap: 0.75rem;
  }
`
const Appliance = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 4.5rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors[props.hollow ? 'background' : 'main']};
  background-color: ${(props) =>
    props.theme.colors[props.hollow ? 'main' : 'background']};
  border: 0.125rem solid ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  transition: all 200ms ease-out;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.main};
    border: 0.125rem solid ${(props) => props.theme.colors.background};
  }
`
const SortWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.5rem;
`

const SortButton = styled(ButtonLink)`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.background};
`
export default function List() {
  const {
    setAppliancesListOpen,
    occurences,
    addOccurence,
    sortAppliancesByPower,
    setSortAppliancesByPower,
    sortedAppliances,
  } = useContext(DataContext)

  return (
    <>
      <DeleteButton onClick={() => setAppliancesListOpen(false)} />
      <Title>Choisissez l'appareil à ajouter</Title>
      <SortWrapper>
        Trier par&nbsp;
        <SortButton
          onClick={() => {
            setSortAppliancesByPower(!sortAppliancesByPower)
            window?._paq?.push([
              'trackEvent',
              'Interaction',
              'Ordonner la liste des appareils',
            ])
          }}
        >
          {sortAppliancesByPower ? 'ordre alphabétique' : 'puissance maximale'}
        </SortButton>
      </SortWrapper>
      <AppliancesList>
        {sortedAppliances.map((appliance) => (
          <Appliance
            key={appliance.slug}
            hollow={occurences.find(
              (occurence) => occurence.slug === appliance.slug
            )}
            onClick={() => {
              addOccurence({
                slug: appliance.slug,
                start: appliance.defaultOccurence.start,
                duration: appliance.defaultOccurence.duration,
              })
              setAppliancesListOpen(false)
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Ajouter appareil',
                appliance.slug,
              ])
            }}
          >
            {appliance.name}
          </Appliance>
        ))}
      </AppliancesList>
    </>
  )
}
