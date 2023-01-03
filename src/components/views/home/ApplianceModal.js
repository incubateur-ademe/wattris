import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { usePeaks } from 'hooks/useAppliances'
import DataContext from 'components/providers/DataProvider'
import Appliance from './applianceModal/Appliance'
import List from './applianceModal/List'

const Background = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.2);
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
  min-height: ${(props) => (props.appliancesListOpen ? '47rem' : 0)};
  transition: all 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    width: 95vw;
    padding: 1rem 1rem 0.75rem;
  }
`
export default function ApplianceModal() {
  const {
    appliancesListOpen,
    setAppliancesListOpen,
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

  const peaks = usePeaks(occurencesOfAppliance)

  const allPeaks = useMemo(() => !peaks.includes(false), [peaks])

  return (appliance && occurencesOfAppliance?.length) || appliancesListOpen ? (
    <>
      <Background
        onClick={() => {
          if (appliancesListOpen) {
            setAppliancesListOpen(false)
          } else {
            active.new &&
              deleteAllOccurencesOfAppliance({
                appliance,
              })
            setActive(null)
          }
        }}
      />
      <Wrapper
        peak={!appliancesListOpen && allPeaks}
        appliancesListOpen={appliancesListOpen}
      >
        {appliancesListOpen ? (
          <List />
        ) : (
          <Appliance
            active={active}
            setActive={setActive}
            occurencesOfAppliance={occurencesOfAppliance}
            appliance={appliance}
            peaks={peaks}
            allPeaks={allPeaks}
            addOccurence={addOccurence}
            deleteOccurence={deleteOccurence}
            deleteAllOccurencesOfAppliance={deleteAllOccurencesOfAppliance}
          />
        )}
      </Wrapper>
    </>
  ) : null
}
