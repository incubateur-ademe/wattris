import { useContext, useMemo } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import StartSelector from 'components/views/home/appliances/occurence/StartSelector'
import NameSelector from 'components/views/home/appliances/occurence/NameSelector'
import DurationSelector from 'components/views/home/appliances/occurence/DurationSelector'

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`
const Wrapper = styled.div`
  position: absolute;
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
        <Wrapper color={appliance.color} visible={occurence} peak={peak}>
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
              index={active?.occurence}
              value={occurence.start}
              onChange={(start) => {
                editOccurence({
                  occurenceIndex: active?.occurence,
                  newOccurence: { ...occurence, start },
                })
              }}
            />
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
          <StartSelector
            large
            start={occurence.start}
            onChange={([start]) => {
              editOccurence({
                occurenceIndex: active?.occurence,
                newOccurence: { ...occurence, start },
              })
            }}
          />
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