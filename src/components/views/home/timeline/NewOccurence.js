import { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import StartSelector from 'components/views/home/appliances/occurence/StartSelector'
import NameSelector from 'components/views/home/appliances/occurence/NameSelector'
import DurationSelector from 'components/views/home/appliances/occurence/DurationSelector'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24rem;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) =>
    props.theme.colors[props.peak ? 'error' : 'main']};
  border-radius: 0.75rem;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.discret ? 0.4 : 1)};
  transition: opacity ${(props) => props.discret && '200ms'} ease-out;
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
`
const StyledButton = styled(Button)`
  padding: 0.375rem 0.875rem;
  background-color: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors[props.peak ? 'error' : 'main']};

  &:hover {
    color: ${(props) => props.theme.colors.background};
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
    () => occurences.find((occurence, index) => index === active),
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
      <Wrapper color={appliance.color} visible={occurence} peak={peak}>
        <NameSelector
          large
          slug={appliance.slug}
          index={active}
          value={appliance.slug}
          appliances={appliances}
          onChange={(slug) => {
            const newAppliance = appliances.find(
              (appliance) => appliance.slug === slug
            )
            editOccurence({
              occurenceIndex: active,
              newOccurence: {
                start: newAppliance.defaultOccurence.start,
                duration: newAppliance.defaultOccurence.duration,
                slug,
              },
            })
          }}
        />
        <Text>
          À
          <DurationSelector
            large
            slug={appliance.slug}
            index={active}
            value={occurence.start}
            onChange={(start) => {
              editOccurence({
                occurenceIndex: active,
                newOccurence: { ...occurence, start },
              })
            }}
          />
          pendant
          <DurationSelector
            large
            slug={appliance.slug}
            index={active}
            value={occurence.duration}
            onChange={(duration) => {
              editOccurence({
                occurenceIndex: active,
                newOccurence: { ...occurence, duration },
              })
            }}
          />
        </Text>
        <StartSelector
          large
          start={occurence.start}
          onChange={([start]) => {
            editOccurence({
              occurenceIndex: active,
              newOccurence: { ...occurence, start },
            })
          }}
        />
        <Buttons>
          <StyledButtonLink
            onClick={() => {
              deleteOccurence({
                occurenceIndex: active,
              })
              setActive(null)
            }}
          >
            Supprimer
          </StyledButtonLink>
          <StyledButton onClick={() => setActive(null)} peak={peak} small>
            Valider
          </StyledButton>
        </Buttons>
      </Wrapper>
    )
  )
}
